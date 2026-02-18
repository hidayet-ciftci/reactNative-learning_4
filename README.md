# React Native Auth Project

Bu proje, **React Native** ve **Expo** kullanılarak geliştirilmiş; kullanıcı kaydı, girişi ve profil yönetimi işlemlerini simüle eden bir mobil uygulama örneğidir. Modern mobil geliştirme standartlarına uygun olarak **TypeScript** ve **Dosya Bazlı Yönlendirme (Expo Router)** kullanılmıştır.

## Özellikler

Proje temel olarak şu işlevleri içerir:

- **Kullanıcı Kaydı (Register):** İsim, soyisim, yaş, kullanıcı adı ve şifre ile validasyonlu (doğrulamalı) kayıt formu.
- **Kullanıcı Girişi (Login):** API üzerinden Fake Token ile kullanıcı doğrulama ve güvenli oturum açma.
- **Token Yönetimi:** `AsyncStorage` kullanılarak oturumun (JWT Token) cihazda saklanması.
- **Profil Görüntüleme:** Giriş yapan kullanıcının bilgilerini (rol, şirket, puan vb.) görsel bir arayüzde listeleme.
- **Güvenli Çıkış (Logout):** Token silerek oturumu sonlandırma.

## 🛠 Kullanılan Teknolojiler

Bu projede aşağıdaki kütüphane ve teknolojiler kullanılmıştır:

| Teknoloji               | Amaç                                          |
| :---------------------- | :-------------------------------------------- |
| **React Native (Expo)** | Mobil uygulama geliştirme framework'ü         |
| **TypeScript**          | Tip güvenliği ve kod kalitesi                 |
| **Expo Router**         | Sayfalar arası geçiş ve yönlendirme           |
| **React Hook Form**     | Form yönetimi ve validasyon işlemleri         |
| **Axios**               | API istekleri (HTTP Client)                   |
| **Async Storage**       | Verilerin (Token) cihazda kalıcı saklanması   |
| **Toast Message**       | Kullanıcıya hata/başarı bildirimleri gösterme |

## 📂 Proje Yapısı

Proje, sürdürülebilirliği artırmak için modüler bir yapıda tasarlanmıştır:

```text
📦 proje-dizini
 ┣ 📂 app              # Sayfalar ve Yönlendirme (Expo Router)
 ┃ ┣ 📂 (auth)        # Giriş ve Kayıt sayfaları
 ┃ ┣ 📜 home.tsx      # Ana sayfa (Profil ekranı)
 ┃ ┗ 📜 _layout.tsx   # Genel düzen ayarları
 ┣ 📂 components       # Tekrar kullanılabilir UI bileşenleri (Input, Button vb.)
 ┣ 📂 services         # API ile konuşan servis dosyaları (login, register vb.)
 ┣ 📂 types            # TypeScript veri tipleri ve arayüzler
 ┗ 📜 package.json     # Proje bağımlılıkları
```
