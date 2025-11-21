# 🔐 Şifre Sistemi Kurulum Rehberi

## ⚠️ ÖNEMLİ NOT

Şifre sistemi eklemek için Firebase Console'da birkaç manuel adım daha yapmanız gerekiyor.

## 📋 Yapılması Gerekenler:

### 1️⃣ Firebase Console'da İlk Kullanıcıyı Oluşturun

1. Firebase Console'a gidin: https://console.firebase.google.com/
2. Projenizi seçin (karinca-dashboard)
3. Sol menüden **"Authentication"** → **"Users"** sekmesine gidin
4. **"Add user"** butonuna tıklayın
5. Email ve şifre girin:
   - **Email**: huseyin.kilic@karincalogistics.com
   - **Şifre**: Güçlü bir şifre belirleyin (en az 6 karakter)
6. **"Add user"** butonuna tıklayın

### 2️⃣ Diğer Kullanıcıları Ekleyin

Aynı şekilde yetkili diğer kullanıcıları da ekleyin.

### 3️⃣ Kod Güncellemeleri

Kod güncellemeleri yapılıyor... Lütfen bekleyin.

## 🎯 Sistem Nasıl Çalışacak?

1. **Giriş Ekranı**: Email + Şifre isteyecek
2. **Firebase Authentication**: Şifre kontrolü yapacak
3. **Yetki Kontrolü**: Mevcut sistem devam edecek (email listesi)
4. **Şifre Yönetimi**: Ayarlar menüsünden şifre değiştirme

## ✅ Avantajlar:

- Güvenli şifre saklama (Firebase)
- Şifre sıfırlama (email ile)
- Şifre değiştirme
- Mevcut yetki sistemi korunuyor

