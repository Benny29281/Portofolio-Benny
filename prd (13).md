# PRD: Website Portofolio Benny Dwiyanto

| | |
|---|---|
| **Pemilik** | Benny Dwiyanto |
| **Versi** | 2.0 |
| **Tanggal** | 24 November 2026 |
| **Sumber data** | CV, profil GitHub `Benny29281`, README dari 17 repo |
| **Prototipe** | https://claude.ai/artifact/WUowtUFmL19nJsHM3D8Lmz |

---

## 1. Ringkasan

Website portofolio pribadi yang memperlihatkan Benny sebagai **Software Engineer (Backend, Web, dan Machine Learning)**. Pengunjung (recruiter dan engineer) harus bisa memahami profil, melihat bukti proyek nyata, dan menghubungi Benny dalam waktu kurang dari 2 menit.

**Pembeda utama:** hampir semua repo dimulai dari dokumen PRD yang ditulis sendiri (terlihat dari README berbunyi "berdasarkan PRD"). Portofolio ini menonjolkan pola kerja itu: spesifikasi dulu, lalu implementasi, pengujian, dan keamanan.

## 2. Masalah

- CV PDF tidak bisa menampilkan demo, arsitektur, atau tautan kode.
- Profil GitHub berisi 17 repo yang namanya sulit dipahami (`Project-WEB`, `web-kerjaan`, `Produk-IPT`), dan beberapa repo adalah versi lain dari proyek yang sama.
- Recruiter tidak punya waktu membuka satu per satu.

## 3. Tujuan dan Metrik

| Tujuan | Metrik |
|---|---|
| Pelengkap CV saat melamar | Link portofolio ada di CV, LinkedIn, dan README profil GitHub |
| Profil terbaca cepat | Hero dan CTA terlihat tanpa scroll di desktop dan mobile |
| Semua proyek mudah dijelajahi | 17 proyek tampil, bisa difilter, tiap proyek menautkan ke repo |
| Mendorong kontak | Tombol Email, LinkedIn, GitHub di hero dan footer |
| Performa | Lighthouse Performance, Accessibility, SEO masing-masing ≥ 90 |
| Mudah dirawat | Menambah proyek cukup dengan menambah satu objek data |

**Bukan tujuan:** blog, login, CMS, e-commerce.

## 4. Target Pengguna

1. **Recruiter / HR**: scan cepat, butuh ringkasan, stack, dan kontak.
2. **Hiring manager / engineer**: ingin melihat kedalaman teknis dan kode.
3. **Klien freelance (sekunder)**: ingin tahu jenis proyek web yang bisa dikerjakan.

## 5. Inventaris Proyek (dari 17 repo)

Pengelompokan: repo yang merupakan versi lain dari proyek yang sama digabung jadi satu entri.

| # | Entri portofolio | Kategori | Repo | Stack inti |
|---|---|---|---|---|
| 1 | **AsthmaScreen** (unggulan) | ML + Mobile | *(belum ada di daftar repo)* | React Native, Flask, MySQL, LightGBM |
| 2 | **BenzMart** | Backend | `benzmart_go-golang-` | Go, MySQL, Kafka, Redis, Docker |
| 3 | **HelpDeskKu** | Backend | `project-tiket` | ASP.NET Core 8, Angular, SQL Server |
| 4 | **Hossler Studios Store** | Web | `Hossler-Studios` | Next.js, React, PostgreSQL |
| 5 | **Steizen Store** | Web | `Steizen-top-up` | Laravel 13, Digiflazz, Tripay |
| 6 | **Worklog** | Web | `web-kerjaan` | PHP Native, MySQL |
| 7 | **Monitor Stok dan Harga** | Web | `Project-Web-Scraping`, `Project-WEB` | Flask, Bootstrap |
| 8 | **Website PT Indonesia Pacific Trade** | Web | `Project-Website-IPT-` | Next.js, next-intl, Payload CMS |
| 9 | **IPT Katalog** | Web | `project-katalog` | JavaScript, Google Drive API |
| 10 | **IPT Store** | Mobile | `Aplikasi-IPT` | React Native (Expo), PHP API, MySQL |
| 11 | **Tobapia Storefront** | Web | `Project_Penjualan_IPT` | PHP 8, SQLite |
| 12 | **Katalog Pemesanan Statis** | Web | `IPT-Produk`, `Produk-IPT` | HTML/CSS/JS, Sveltia CMS |
| 13 | **Branding Request (Sorex.id)** | Web | `BrandingRequest`, `SorexBrandingLaravel`, `Sorex_branding`, `branding_status` | Laravel, Tailwind, Alpine.js |
| 14 | **Dashboard K-Means** | ML | *(bagian dari proyek Sorex)* | Python, Scikit-learn |
| 15 | **Atlantis Nako** | Mobile | `Atlantis-Nako` | Android, Java |
| 16 | **Klasifikasi Kupu-kupu** | ML | *(belum ada di daftar repo)* | Python, SVD |
| 17 | **Sewa Kos** | Web | *(belum ada di daftar repo)* | Laravel, MySQL |

Catatan: `asma-app` di GitHub masih berisi template kosong Streamlit, jadi tidak ditampilkan.

### Proyek yang ditonjolkan di beranda (3-4 teratas)

1. **AsthmaScreen**: satu-satunya proyek dengan hasil terukur (akurasi 88,94%, F1 90,12%, SUS 77,88).
2. **BenzMart**: menunjukkan kemampuan backend (Go, Kafka, Redis, rotasi token).
3. **HelpDeskKu**: stack berbeda (.NET + Angular), dengan RBAC, SLA, dan keamanan autentikasi.
4. **Website PT Indonesia Pacific Trade**: proyek klien nyata, empat bahasa.

## 6. Ruang Lingkup Fitur

### MVP

| # | Fitur | Deskripsi |
|---|---|---|
| F1 | Hero | Nama, jabatan, satu kalimat value proposition, CTA: Lihat proyek, Email, GitHub, LinkedIn |
| F2 | Daftar proyek | Baris yang bisa dibuka (accordion) berisi deskripsi, poin teknis, angka hasil, link repo |
| F3 | Filter kategori | Semua, Web, Backend, Machine learning, Mobile |
| F4 | Halaman detail proyek *(fase 2 bila perlu)* | Masalah, solusi, arsitektur, screenshot, lesson learned |
| F5 | Pengalaman | IPT (2026-sekarang), Sorex.id (2025-2026) |
| F6 | Keahlian | Dikelompokkan: bahasa, backend dan API, frontend dan mobile, ML, database dan tools |
| F7 | Pendidikan | Universitas Tarumanagara, IPK 3,39 |
| F8 | Kontak | Email, WhatsApp, LinkedIn, GitHub |
| F9 | Unduh CV | PDF di `/public` |
| F10 | Dark/light mode | Mengikuti preferensi sistem |
| F11 | SEO dasar | Meta, Open Graph, sitemap, structured data `Person` |

### Setelah MVP

- Versi Inggris (next-intl) dan pengalih bahasa.
- Bagian "Cara saya bekerja" (PRD, lalu implementasi, tes, dan keamanan) dengan contoh dokumen PRD.
- Screenshot atau GIF per proyek.
- Analytics privasi-ramah (Plausible atau Umami).

## 7. Model Data Proyek

Satu objek per proyek; komponen tidak perlu diubah saat menambah proyek.

```ts
type Project = {
  slug: string;
  name: string;
  year?: string;
  category: "web" | "backend" | "ml" | "mobile";
  featured?: boolean;
  summary: string;
  stack: string;
  highlights?: string[];
  results?: { value: string; label: string }[];
  repos?: { name: string; url: string }[];
  demo?: string;
  images?: { src: string; alt: string }[];
};
```

## 8. Persyaratan Non-Fungsional

- **Performa:** LCP < 2,5 detik, satu file tanpa dependensi berat pada MVP.
- **Responsif:** mobile-first; diuji di 360px, 768px, 1280px.
- **Aksesibilitas:** kontras WCAG AA, navigasi keyboard, `prefers-reduced-motion` dihormati.
- **Privasi:** tanpa cookie pelacak.
- **Kerahasiaan klien:** tidak menampilkan data, kredensial, atau tangkapan layar internal PT IPT dan Sorex tanpa izin.

## 9. Rekomendasi Teknis

| Aspek | Pilihan | Alasan |
|---|---|---|
| Fase 1 | Satu halaman HTML statis (prototipe saat ini) | Cepat, hosting gratis, mudah diedit |
| Fase 2 | Next.js + TypeScript + Tailwind + next-intl | Sudah dikuasai dari proyek IPT; mendukung dwibahasa dan halaman detail |
| Konten | Array/file data lokal | Tanpa CMS, lebih sederhana |
| Hosting | Vercel atau GitHub Pages | Gratis, deploy otomatis |
| Domain | `.dev` atau `.my.id` | Profesional, mudah diingat |

## 10. Arah Desain

- Bersih, teknis, satu warna aksen (teal), tema terang dan gelap.
- Daftar proyek berbentuk indeks yang bisa dibuka, bukan grid kartu generik, agar 17 proyek tetap ringkas.
- Setiap proyek menampilkan fakta teknis konkret, bukan klaim umum.
- Hindari bar persentase keahlian dan kalimat generik seperti "passionate developer".

## 11. Rencana Pengerjaan

| Fase | Isi | Estimasi |
|---|---|---|
| 0 | Prototipe satu halaman dengan 17 proyek (**sudah selesai**) | Selesai |
| 1 | Lengkapi data: tahun tiap proyek, link demo, tautan repo AsthmaScreen | 1 hari |
| 2 | Screenshot proyek (non-rahasia) dan foto profil | 1-2 hari |
| 3 | Migrasi ke Next.js, i18n ID/EN, halaman detail proyek unggulan | 3-4 hari |
| 4 | SEO, OG image, Lighthouse, domain, tautkan ke CV dan LinkedIn | 1-2 hari |

## 12. Pertanyaan Terbuka

1. Repo AsthmaScreen yang sebenarnya (React Native + Flask), Sewa Kos, dan Klasifikasi Kupu-kupu belum ada di daftar. Apakah repo-nya private atau perlu diunggah ke GitHub?
2. Tahun pengerjaan 10 dari 17 proyek belum diketahui (kolom tahun masih bertanda "–").
3. Apakah proyek untuk PT IPT dan Sorex (termasuk Tobapia dan FORM & CO.) boleh ditampilkan publik, dan dengan nama klien aslinya?
4. Repo-nya publik atau private? Link ke repo private akan menampilkan 404 bagi pengunjung.
5. **Konsistensi data:** README GitHub menulis Sorex Januari sampai Juni 2025 sebagai "IT Support & Software Development" dan lulusan "Teknologi Informasi", sedangkan CV menulis Januari 2025 sampai Maret 2026 sebagai "Software Engineer" dan "Teknik Informatika". Mana yang benar?
6. Nama repo kurang deskriptif dan banyak yang belum punya deskripsi. Sebaiknya diberi deskripsi singkat dan topik (topics) di GitHub.
7. Apakah ada link demo live (website IPT, IPT Katalog, Steizen)?
8. Bahasa default: Indonesia atau Inggris?

## 13. Kriteria Penerimaan

- [ ] Semua 17 proyek tampil dengan deskripsi akurat dan link repo yang valid.
- [ ] Filter kategori berfungsi dan hasilnya benar.
- [ ] Tidak ada klaim yang tidak didukung CV atau README (angka, tanggal, hasil).
- [ ] Tidak ada data sensitif klien di halaman maupun screenshot.
- [ ] Lighthouse mobile ≥ 90 pada Performance, Accessibility, Best Practices, SEO.
- [ ] Link portofolio sudah dipasang di CV, LinkedIn, dan README profil GitHub.
