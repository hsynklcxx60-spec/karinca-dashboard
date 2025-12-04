# 📤 GitHub'a Excel Yükleme Kılavuzu

## 🎯 2 Kolay Yöntem

---

## Yöntem 1: Web Üzerinden (En Kolay)

### Adım 1: GitHub'a Git
```
https://github.com/karincalogistics-com/karinca-dashboard
```

### Adım 2: Dosya Yükle

1. **"Add file"** butonuna tıkla (yeşil buton, sağ üstte)
2. **"Upload files"** seç
3. Excel dosyanı sürükle veya **"choose your files"** tıkla
4. Dosyayı seç
5. **"Commit changes"** butonuna tıkla (yeşil buton, altta)

### Adım 3: Raw URL'i Al

1. Yüklediğin dosyaya tıkla
2. **"Raw"** butonuna tıkla (sağ üstte)
3. Tarayıcı adres çubuğundaki URL'i kopyala

**Örnek URL:**
```
https://raw.githubusercontent.com/karincalogistics-com/karinca-dashboard/main/gunluk.xlsx
```

### Adım 4: Dashboard'da Kullan

1. Dashboard'u aç
2. "URL'den Otomatik Veri Çekme" → "Ayarlar"
3. Kopyaladığın URL'i yapıştır
4. "Şimdi Çek"

✅ **Tamamlandı!**

---

## Yöntem 2: Otomatik Script (Hızlı)

### Kullanım

**1. quick_upload.bat dosyasına çift tıkla**

**2. Excel dosyanı sürükle**
```
Açılan pencereye Excel dosyanı sürükle
Enter'a bas
```

**3. Bekle**
```
Script otomatik olarak:
- Excel'i kopyalar
- Git'e ekler
- GitHub'a yükler
- URL'i gösterir
```

**4. URL'i Kopyala**
```
Ekranda gösterilen URL'i kopyala
Dashboard'a yapıştır
```

✅ **Tamamlandı!**

---

## 🔄 Excel'i Güncelleme

### Web Üzerinden

1. GitHub'da dosyaya tıkla
2. **"Edit"** (kalem ikonu) tıkla
3. **"Upload files"** seç
4. Yeni Excel'i yükle
5. **"Commit changes"**

### Script ile

```
quick_upload.bat dosyasına çift tıkla
Güncel Excel'i sürükle
Enter'a bas
```

✅ **Otomatik güncellenir!**

---

## 📋 Örnek Kullanım

### Senaryo: Günlük Excel Yükleme

**Sabah:**
```
1. Excel'i güncelle: C:\Excel\gunluk.xlsx
2. quick_upload.bat çalıştır
3. Excel'i sürükle
4. URL'i kopyala (ilk seferinde)
5. Dashboard otomatik çeker
```

**Öğlen:**
```
1. Excel'i güncelle
2. quick_upload.bat çalıştır
3. Excel'i sürükle
4. Dashboard otomatik yeniler
```

**Akşam:**
```
1. Excel'i güncelle
2. quick_upload.bat çalıştır
3. Excel'i sürükle
4. Bitti!
```

---

## 💡 İpuçları

### Dosya İsimlendirme

✅ **İyi:**
```
gunluk.xlsx
haftalik.xlsx
2024_aralik.xlsx
```

❌ **Kötü:**
```
Günlük Rapor (1).xlsx  (Türkçe karakter ve boşluk)
rapor final son.xlsx   (Boşluklar)
```

### Çoklu Dosya

Farklı dosyalar için farklı URL'ler:

```
gunluk.xlsx   → https://raw.githubusercontent.com/.../gunluk.xlsx
haftalik.xlsx → https://raw.githubusercontent.com/.../haftalik.xlsx
aylik.xlsx    → https://raw.githubusercontent.com/.../aylik.xlsx
```

Dashboard'da URL'i değiştirerek farklı dosyaları çekebilirsin!

---

## 🚨 Sorun Giderme

### "Git bulunamadı" Hatası

**Çözüm:**
Git yüklü mü kontrol et:
```cmd
git --version
```

Yüklü değilse: https://git-scm.com/download/win

### "Permission denied" Hatası

**Çözüm:**
Git kimlik bilgilerini kontrol et:
```cmd
git config user.name
git config user.email
```

Ayarla:
```cmd
git config --global user.name "Adın"
git config --global user.email "email@example.com"
```

### "Dosya çok büyük" Hatası

**Çözüm:**
GitHub dosya limiti: 100MB

Eğer Excel 100MB'dan büyükse:
- Veriyi böl
- Gereksiz kolonları sil
- Başka kaynak kullan (OneDrive, Dropbox)

---

## 🎯 Hızlı Başlangıç

### İlk Kez Yükleme

```
1. quick_upload.bat çift tıkla
2. Excel'i sürükle
3. URL'i kopyala
4. Dashboard'a yapıştır
5. "Otomatik yenileme" aktif et
```

### Sonraki Güncellemeler

```
1. Excel'i güncelle
2. quick_upload.bat çift tıkla
3. Excel'i sürükle
4. Bitti! (Dashboard otomatik çeker)
```

---

## 📊 Karşılaştırma

| Yöntem | Hız | Kolay | Otomatik |
|--------|-----|-------|----------|
| **Web** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ❌ |
| **Script** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ |

**Öneri:** İlk seferinde web kullan, sonra script'e geç.

---

## 🎉 Başarı!

Artık Excel'lerini GitHub'a yükleyebilir ve Dashboard'da otomatik çekebilirsin!

**Sorular?**
- Web yöntemi: Basit ve görsel
- Script yöntemi: Hızlı ve otomatik

İkisini de dene, hangisi rahatsa onu kullan! 😊
