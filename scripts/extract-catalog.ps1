$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Runtime.WindowsRuntime
Add-Type -AssemblyName System.Drawing
$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]
$null = [Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType=WindowsRuntime]
$null = [Windows.Data.Pdf.PdfPageRenderOptions, Windows.Data.Pdf, ContentType=WindowsRuntime]
$null = [Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType=WindowsRuntime]
$null = [Windows.Storage.Streams.Buffer, Windows.Storage.Streams, ContentType=WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime]
$null = [Windows.Graphics.Imaging.SoftwareBitmap, Windows.Graphics.Imaging, ContentType=WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapPixelFormat, Windows.Graphics.Imaging, ContentType=WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapAlphaMode, Windows.Graphics.Imaging, ContentType=WindowsRuntime]

function Await-AsyncOperation($async, [Type]$resultType) {
  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and $_.IsGenericMethodDefinition -and $_.GetParameters().Count -eq 1
  } | Select-Object -First 1
  $generic = $method.MakeGenericMethod($resultType)
  return $generic.Invoke($null, @($async)).Result
}

function Await-AsyncAction($async) {
  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and -not $_.IsGenericMethodDefinition -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction'
  } | Select-Object -First 1
  $task = $method.Invoke($null, @($async))
  $task.Wait()
}

function Save-PdfPagePng($pdf, $pageIndex, $outPath, $width) {
  $page = $pdf.GetPage($pageIndex)
  $stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
  $renderOptions = New-Object Windows.Data.Pdf.PdfPageRenderOptions
  $renderOptions.DestinationWidth = $width
  $renderOptions.DestinationHeight = [uint32]($width * $page.Size.Height / $page.Size.Width)
  $renderTask = $page.RenderToStreamAsync($stream, $renderOptions)
  Await-AsyncAction $renderTask
  $stream.Seek(0)

  $decoderAsync = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
  $decoder = Await-AsyncOperation $decoderAsync ([Windows.Graphics.Imaging.BitmapDecoder])
  $bitmapAsync = $decoder.GetSoftwareBitmapAsync()
  $softwareBitmap = Await-AsyncOperation $bitmapAsync ([Windows.Graphics.Imaging.SoftwareBitmap])
  $softwareBitmap = [Windows.Graphics.Imaging.SoftwareBitmap]::Convert(
    $softwareBitmap,
    [Windows.Graphics.Imaging.BitmapPixelFormat]::Bgra8,
    [Windows.Graphics.Imaging.BitmapAlphaMode]::Premultiplied
  )

  $w = $softwareBitmap.PixelWidth
  $h = $softwareBitmap.PixelHeight
  $buffer = New-Object Windows.Storage.Streams.Buffer ($w * $h * 4)
  $softwareBitmap.CopyToBuffer($buffer)
  $bytes = [System.Runtime.InteropServices.WindowsRuntime.WindowsRuntimeBufferExtensions]::ToArray($buffer)

  $bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppPArgb)
  $rect = New-Object System.Drawing.Rectangle(0,0,$w,$h)
  $bmpData = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::WriteOnly, $bmp.PixelFormat)
  [System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $bmpData.Scan0, $bytes.Length)
  $bmp.UnlockBits($bmpData)
  $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
}

$outDir = Join-Path $PSScriptRoot '..\public\arquivos\catalogo-2025'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$pdfFile = Get-ChildItem -LiteralPath (Join-Path $PSScriptRoot '..\arquivos') | Where-Object { $_.Name -match '\.pdf' } | Select-Object -First 1
$asyncFile = [Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfFile.FullName)
$storageFile = Await-AsyncOperation $asyncFile ([Windows.Storage.StorageFile])
$asyncPdf = [Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($storageFile)
$pdf = Await-AsyncOperation $asyncPdf ([Windows.Data.Pdf.PdfDocument])

$pages = @(
  @{ i = 0; name = 'p00-capa.png' },
  @{ i = 1; name = 'p01-hero.png' },
  @{ i = 3; name = 'p03-sobre.png' },
  @{ i = 4; name = 'p04-compromisso.png' },
  @{ i = 5; name = 'p05-sobre-pvc.png' },
  @{ i = 6; name = 'p06-perfis-pvc.png' },
  @{ i = 7; name = 'p07-beneficios.png' },
  @{ i = 8; name = 'p08-sustentabilidade.png' },
  @{ i = 9; name = 'p09-umidade.png' },
  @{ i = 11; name = 'p11-certificacoes.png' },
  @{ i = 13; name = 'p13-edelweiss-35.png' },
  @{ i = 15; name = 'p15-edelweiss-55-slide.png' },
  @{ i = 19; name = 'p19-edelweiss-60.png' },
  @{ i = 23; name = 'p23-edelweiss-62-slide.png' },
  @{ i = 27; name = 'p27-lotos-70-slide.png' },
  @{ i = 31; name = 'p31-protea.png' },
  @{ i = 35; name = 'p35-centaurea-195-slide.png' },
  @{ i = 39; name = 'p39-persianas.png' },
  @{ i = 45; name = 'p45-laminados.png' },
  @{ i = 52; name = 'p52-componentes.png' },
  @{ i = 61; name = 'p61-baguetes.png' },
  @{ i = 65; name = 'p65-protea-tecnico.png' }
)

$width = 1200
foreach ($p in $pages) {
  $outPath = Join-Path $outDir $p.name
  Save-PdfPagePng $pdf $p.i $outPath $width
  Write-Output "Saved $($p.name)"
}
