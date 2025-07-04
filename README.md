# 🎮 FiveM Sunucu Bağlayıcısı

Modern, duyarlı tasarımlı web uygulaması ile FiveM sunucularına otomatik bağlantı sağlayın. Şık geri sayım arayüzü ile kullanıcı dostu deneyim.

![Lisans](https://img.shields.io/badge/lisans-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node.js-v14+-green.svg)
![Express](https://img.shields.io/badge/express-4.18+-red.svg)

## ✨ Özellikler

- **🚀 Otomatik Bağlantı** - Geri sayım ile sorunsuz FiveM sunucu bağlantısı
- **📱 Duyarlı Tasarım** - Masaüstü, tablet ve mobil cihazlarda mükemmel çalışır
- **🎬 Video Arka Plan** - Özel arka plan videoları desteği
- **⌨️ Klavye Kısayolları** - ESC ve Enter tuşları ile hızlı kontrol
- **📱 Dokunma Desteği** - Mobil dostu dokunma etkileşimleri
- **🎨 Modern Arayüz** - Temiz, parlayan arayüz ve akıcı animasyonlar
- **🔧 Kolay Yapılandırma** - Basit URL parametreleri ile sunucu kurulumu
- **🌐 Çoklu Dil Hazır** - Metin ve mesajları kolayca özelleştirin

## 🚀 Hızlı Başlangıç

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn

### Kurulum

1. **Depoyu klonlayın**
   ```bash
   git clone https://github.com/kullaniciadi/fivem-connector.git
   cd fivem-connector
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Sunucuyu başlatın**
   ```bash
   npm start
   ```

4. **Tarayıcıda açın**
   ```
   http://localhost:3000
   ```

## 📖 Kullanım

### Temel Bağlantı URL'si
```
http://localhost:3000/connect?ip=SUNUCU_IP&port=30120&server=SUNUCU_ADI
```

### URL Parametreleri

| Parametre | Açıklama | Varsayılan | Gerekli |
|-----------|----------|------------|---------|
| `ip` | Sunucu IP adresi | `46.203.182.30` | ✅ |
| `port` | Sunucu portu | `30120` | ❌ |
| `server` | Sunucu görünen adı | `FiveM Server` | ❌ |

### Örnek URL'ler

```bash
# Temel sunucu bağlantısı
http://localhost:3000/connect?ip=46.203.182.30&port=30120&server=GUID

# Yerel sunucu
http://localhost:3000/connect?ip=46.203.182.30&port=30120&server=Yerel%20Sunucu

# Özel port
http://localhost:3000/connect?ip=192.168.1.100&port=30121&server=Özel%20Sunucu
```


## 📁 Proje Yapısı

```
fivem-connector/
├── 📄 package.json          # Proje bağımlılıkları ve betikler
├── 🚀 server.js             # Express sunucu yapılandırması
├── 📖 README.md             # Proje dokümantasyonu
├── 📁 public/               # Statik dosyalar
│   ├── 🎨 css/
│   │   └── style.css        # Ana stil dosyası
│   ├── ⚡ js/
│   │   └── main.js          # İstemci tarafı JavaScript
│   └── 🎬 media/
│       └── fivem.mp4        # Arka plan videosu (opsiyonel)
└── 📁 views/
    └── connect.ejs          # Ana şablon
```

## 🛠️ Geliştirme

### Geliştirme Modu
```bash
npm run dev
```
Bu komut, dosya değişikliklerinde otomatik yeniden başlatma için nodemon ile sunucuyu başlatır.

### Özelleştirme

#### Arka Plan Videosu
Özel video dosyanızı `public/media/fivem.mp4` konumuna yerleştirin. Desteklenen formatlar:
- MP4 (önerilen)
- WebM
- OGV

Video bulunamazsa, uygulama gradyan arka plan gösterecektir.

#### Stil Düzenleme
`public/css/style.css` dosyasını düzenleyerek özelleştirin:
- Renkler ve temalar
- Animasyonlar
- Tipografi
- Düzen

#### Sunucu Yapılandırması
`server.js` dosyasını düzenleyerek:
- Varsayılan sunucu ayarlarını değiştirin
- Yeni rotalar ekleyin
- Port yapılandırmasını değiştirin

## 🌐 Dağıtım

### Üretim Derlemesi
```bash
npm start
```

### Ortam Değişkenleri
```bash
PORT=3000  # Sunucu portu (opsiyonel)
```

### Docker Desteği
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```



## 🆘 Destek

Herhangi bir sorunla karşılaşırsanız veya sorularınız varsa:

Discord:@alsiaw


- [Express.js](https://expressjs.com/) ile geliştirildi
- [EJS](https://ejs.co/) ile şablonlama
- FiveM topluluğundan ilham alındı


---

**Made By ❤️ alsiaw**
