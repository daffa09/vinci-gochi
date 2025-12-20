<!-- portfolio -->
<!-- slug: vincigochi -->
<!-- title: VinciGochi -->
<!-- description: Game VinciGochi -->
<!-- image: https://github.com/user-attachments/assets/ff7ae80a-6f5a-46dc-981a-3e255a77d3bd -->
<!-- tags: html, css, javascript, game -->

# VinciGochi

<img width="1550" height="823" alt="image" src="https://github.com/user-attachments/assets/ff7ae80a-6f5a-46dc-981a-3e255a77d3bd" />

Ini adalah Proyek VinciGochi, dibuat oleh mahasiswa Universitas Pancasila sebagai bagian dari persyaratan mata kuliah Desain Web.

Anggota proyek ini adalah sebagai berikut:
- [Daffa Fathan](https://github.com/daffa09) (4522210082)
- [Fathan Rachel](https://github.com/Fathanrachel) (4522210071)
- [Antonius Valentino](https://github.com/AtroxMedaTic) (4522210109)
- [Firja Rakha](https://github.com/FirjaRakha) (4522210072)

## Tentang Proyek Ini

Nama proyek ini adalah VinciGochi, sebuah gabungan dari **DaVinci** dan **Tamagotchi**.
DaVinci diambil dari Leonardo da Vinci — seniman, penemu, dan ilmuwan ternama dunia — sedangkan Tamagotchi merujuk pada mainan hewan peliharaan virtual ikonik yang sangat populer di tahun 90-an.

## 🚀 Memulai

- **Clone repositori ini**:
  ```bash
  git clone https://github.com/daffa09/vinci-gochi.git
  ```

- **Jalankan proyek**:
  Cukup buka `index.html` di browser Anda.

- **Opsional**:
  Jika Anda menggunakan server lokal atau berencana untuk mempublikasikannya di hosting, pastikan folder `src/` dan file manifest dikonfigurasi dengan benar agar game dapat berjalan lancar sebagai PWA.

## 🛠️ Teknologi & Struktur Proyek

### Teknologi Utama:
- HTML
- CSS
- JavaScript

### Struktur Folder:
- `/src`: Aset dan logika game.
- `index.html`: Halaman utama.
- `manifest.json`: Konfigurasi PWA.
- `serviceworker.js`: Dukungan offline.

Proyek ini dikemas sebagai **Progressive Web App (PWA)** — lihat rilis terbaru: PWA VinchiGochi.

## 🎮 Fitur Utama

- Hewan peliharaan virtual yang sepenuhnya interaktif (memberi makan, bermain, istirahat).
- Indikator status hewan peliharaan secara real-time.
- Antarmuka pengguna (UI) yang responsif dan ramah seluler.
- Dukungan offline melalui Service Worker + Manifest.

## 📦 Build & Deployment

Karena ini adalah proyek HTML/JS statis, game ini dapat dipasang dengan mudah di layanan hosting statis apa pun (GitHub Pages, Vercel, Netlify, dll.). Untuk memastikan fungsionalitas PWA berfungsi dengan benar:
- Simpan `manifest.json` dan `serviceworker.js` di root proyek.
- Pastikan `fallback.json` dikonfigurasi untuk menangani kondisi offline.

---

**VinciGochi - Petualangan Hewan Peliharaan Virtual** 🐾✨  
Gabungan seni DaVinci dan keseruan Tamagotchi!
