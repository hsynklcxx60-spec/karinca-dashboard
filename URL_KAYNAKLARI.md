# 🌐 Desteklenen URL Kaynakları

Dashboard artık sadece GitHub değil, **herhangi bir HTTPS kaynağından** veri çekebilir!

---

## ✅ Desteklenen Kaynaklar

### 1️⃣ GitHub

**Normal Link:**
```
https://github.com/user/repo/blob/main/data.xlsx
```

**Raw Link (Otomatik çevrilir):**
```
https://raw.githubusercontent.com/user/repo/main/data.xlsx
```

✅ Sistem otomatik olarak raw linke çevirir

---

### 2️⃣ Dropbox

**Public Link:**
```
https://www.dropbox.com/s/xxxxx/data.xlsx?dl=0
```

**Direkt İndirme (Otomatik çevrilir):**
```
https://www.dropbox.com/s/xxxxx/data.xlsx?dl=1
```

✅ Sistem otomatik olarak `?dl=1` ekler

**Nasıl Alınır:**
1. Dropbox'ta dosyaya sağ tıkla
2. "Share" → "Create link"
3. Linki kopyala
4. Dashboard'a yapıştır

---

### 3️⃣ Google Drive

**Normal Link:**
```
https://drive.google.com/file/d/FILE_ID/view
```

**Export Link (Otomatik çevrilir):**
```
https://drive.google.com/uc?export=download&id=FILE_ID
```

✅ Sistem otomatik olarak export linkine çevirir

**Nasıl Alınır:**
1. Google Drive'da dosyaya sağ tıkla
2. "Get link" → "Anyone with the link"
3. Linki kopyala
4. Dashboard'a yapıştır

---

### 4️⃣ OneDrive

**View Link:**
```
https://onedrive.live.com/view.aspx?cid=XXX&resid=YYY
```

**Download Link (Otomatik çevrilir):**
```
https://onedrive.live.com/download.aspx?cid=XXX&resid=YYY
```

✅ Sistem otomatik olarak download linkine çevirir

**Nasıl Alınır:**
1. OneDrive'da dosyaya sağ tıkla
2. "Share" → "Copy link"
3. Linki kopyala
4. Dashboard'a yapıştır

---

### 5️⃣ Firebase Storage

**Public URL:**
```
https://firebasestorage.googleapis.com/v0/b/bucket/o/file.xlsx?alt=media&token=xxx
```

✅ Direkt kullanılabilir

**Nasıl Alınır:**
1. Firebase Console → Storage
2. Dosyaya tıkla
3. "Get download URL"
4. Dashboard'a yapıştır

---

### 6️⃣ Kendi Web Sunucun

**Direkt Link:**
```
https://yourwebsite.com/data/shift_schedule.xlsx
```

✅ Direkt kullanılabilir

**Gereksinimler:**
- HTTPS olmalı
- CORS açık olmalı
- Public erişilebilir olmalı

---

## 🔧 CORS Sorunu Çözümü

Bazı sunucular CORS (Cross-Origin Resource Sharing) engelleyebilir.

### Çözüm 1: Sunucu Ayarları

**.htaccess (Apache):**
```apache
Header set Access-Control-Allow-Origin "*"
Header set Access-Control-Allow-Methods "GET, OPTIONS"
```

**nginx.conf:**
```nginx
add_header Access-Control-Allow-Origin *;
add_header Access-Control-Allow-Methods "GET, OPTIONS";
```

### Çözüm 2: CORS Proxy

Eğer sunucu ayarlarına erişemiyorsan:

```
https://cors-anywhere.herokuapp.com/https://yoururl.com/data.xlsx
```

⚠️ Production için önerilmez

---

## 📊 Desteklenen Dosya Formatları

| Format | Uzantı | Durum |
|--------|--------|-------|
| Excel 2007+ | .xlsx | ✅ Destekleniyor |
| Excel 97-2003 | .xls | ✅ Destekleniyor |
| CSV | .csv | ✅ Destekleniyor |
| TSV | .tsv | ⚠️ CSV olarak işlenir |

---

## 🎯 Kullanım Örnekleri

### Örnek 1: GitHub

```
1. Excel'i GitHub'a yükle
2. Dosyaya tıkla → "Raw" butonuna bas
3. URL'i kopyala:
   https://raw.githubusercontent.com/user/repo/main/data.xlsx
4. Dashboard'a yapıştır
```

### Örnek 2: Dropbox

```
1. Dropbox'ta dosyayı paylaş
2. Link al:
   https://www.dropbox.com/s/xxxxx/data.xlsx?dl=0
3. Dashboard'a yapıştır (otomatik ?dl=1 olur)
```

### Örnek 3: Google Drive

```
1. Google Drive'da dosyayı paylaş
2. "Anyone with the link" seç
3. Link al:
   https://drive.google.com/file/d/FILE_ID/view
4. Dashboard'a yapıştır (otomatik export linkine çevrilir)
```

### Örnek 4: Kendi Sunucun

```
1. Excel'i sunucuna yükle
2. Public URL'i al:
   https://yourwebsite.com/data/data.xlsx
3. CORS ayarlarını yap
4. Dashboard'a yapıştır
```

---

## ⚠️ Dikkat Edilmesi Gerekenler

### Güvenlik

- ❌ Hassas veri içeren dosyaları public yapma
- ✅ Sadece gerekli kişilerin erişebileceği linkler kullan
- ✅ Token veya şifre korumalı linkler tercih et

### Performans

- 📁 **Küçük dosyalar (<10MB):** Hızlı
- 📂 **Orta dosyalar (10-50MB):** Normal
- 📦 **Büyük dosyalar (50-100MB):** Yavaş olabilir

### CORS

- ✅ GitHub, Dropbox, Google Drive: CORS destekler
- ⚠️ Kendi sunucun: CORS ayarı gerekebilir
- ❌ Bazı sunucular: CORS engelleyebilir

---

## 🧪 Test Etme

Test sayfasını kullan:
```
test_github_fetch.html
```

1. Tarayıcıda aç
2. URL'ini yapıştır
3. "Test Et" butonuna tıkla
4. Sonuçları gör

---

## 💡 İpuçları

### En İyi Uygulamalar

1. **GitHub kullan** - En güvenilir ve hızlı
2. **Dropbox kullan** - Kolay paylaşım
3. **Google Drive kullan** - Büyük dosyalar için
4. **Firebase kullan** - Gerçek zamanlı güncellemeler için

### Sorun Giderme

**"CORS policy" hatası:**
- Sunucu CORS ayarlarını kontrol et
- Farklı kaynak dene (GitHub, Dropbox)

**"404 Not Found" hatası:**
- URL doğru mu kontrol et
- Dosya public mi kontrol et

**"Dosya boş" hatası:**
- Dosya gerçekten var mı kontrol et
- İndirme linki mi kontrol et (view değil)

---

## 🚀 Gelecek Özellikler

- 🔐 Token/şifre korumalı linkler
- 📊 Çoklu dosya desteği
- 🔄 WebSocket ile gerçek zamanlı güncelleme
- 📱 FTP/SFTP desteği

---

**🎉 Artık herhangi bir HTTPS kaynağından veri çekebilirsin!**
