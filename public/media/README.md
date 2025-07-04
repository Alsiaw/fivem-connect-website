# Media Dosyaları

Bu klasör, FiveM Connector uygulamasının medya dosyalarını içerir.

## 🎬 Video Dosyası
- **fivem.mp4** - Arka plan videosu (mevcut)
- Desteklenen formatlar: MP4, WebM, OGV
- Önerilen çözünürlük: 1920x1080 veya üzeri
- Video yoksa otomatik olarak gradient arka plan gösterilir

## 🎵 Ses Dosyası
- **background-music.mp3** - Arka plan müziği (eklenecek)
- **background-music.wav** - Alternatif ses formatı (opsiyonel)
- Desteklenen formatlar: MP3, WAV, OGG
- Ses seviyesi otomatik olarak %30'a ayarlanır
- Tarayıcı autoplay kısıtlamaları nedeniyle kullanıcı etkileşimi sonrası başlar

## 📁 Dosya Ekleme
1. MP3 dosyanızı bu klasöre `background-music.mp3` adıyla kaydedin
2. Alternatif olarak WAV formatında `background-music.wav` ekleyebilirsiniz
3. Uygulama otomatik olarak mevcut dosyaları algılayacaktır

## 🔧 Teknik Notlar
- Ses dosyası boyutu 5MB'dan küçük olması önerilir
- Döngü (loop) özelliği aktif - müzik sürekli çalar
- Mobil cihazlarda ses oynatma için kullanıcı etkileşimi gereklidir
- Ses yüklenemezse konsola uyarı mesajı yazılır, site normal çalışmaya devam eder
