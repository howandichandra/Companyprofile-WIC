# WIC Landing Page

Landing page resmi **PT Warni Indah Cemerlang** — spesialis proyek MEP dengan brand principal Hisense, Philips, dan Siemens.

Visual identity mengikuti material marketing asli WIC: **biru cerah `#0066CC`** dengan accent merah `#E11D48` (warna checkbox di poster).

Built with: **Vite + React + Tailwind CSS + Framer Motion + Lucide Icons**.

---

## 🚀 Cara Menjalankan Lokal

```bash
npm install
npm run dev
# → http://localhost:5173

# Build production
npm run build
# → output ke folder dist/
```

---

## 🌐 Deploy

### Vercel (paling cepat — direkomendasikan)
1. Push project ke GitHub
2. [vercel.com](https://vercel.com) → New Project → Import repo
3. Vercel auto-detect Vite → Deploy
4. URL gratis `xxx.vercel.app`, custom domain bisa di Settings → Domains

### Netlify
1. Push ke GitHub → [netlify.com](https://netlify.com) → New site from Git
2. Build command: `npm run build` · Publish directory: `dist`

### cPanel / Shared Hosting
1. `npm run build` di lokal
2. Upload isi folder `dist/` ke `public_html/`

---

## ✏️ Edit Konten — SEMUA DI SATU FILE

Buka **`src/constants.js`** — semua yang perlu di-edit ada di sini:

| Field | Apa yang bisa diubah |
|---|---|
| `WA_NUMBER` | Nomor WhatsApp marketing |
| `COMPANY` | Nama, alamat, telepon, email, kota |
| `STATS` | Angka di hero (15+, 500+, dll) |
| `PRINCIPALS` | Detail 3 brand (Hisense, Philips, Siemens) |
| `WHY_WIC` | 6 alasan "Kenapa Pilih WIC" |
| `PROCESS` | 6 langkah workflow |
| `PROJECT_TYPES` | Tipe proyek + jumlah |
| `CLIENT_SEGMENTS` | Tipe klien |

---

## 🎨 Brand Colors (`tailwind.config.js`)

| Token | Hex | Pakai untuk |
|---|---|---|
| `wic-500` | `#0066CC` | Primary blue — sama dengan poster |
| `wic-700` | `#003D7A` | Deep blue untuk text/hover |
| `wic-900` | `#001B3D` | Background dark sections |
| `ruby-500` | `#E11D48` | Checkbox accent, highlight kecil |
| `sky-tint` | `#E8F2FB` | Background section soft |

---

## 📁 Struktur

```
src/
├── App.jsx              → Composition
├── main.jsx             → Entry
├── constants.js         → ⭐ SEMUA KONTEN DI SINI
├── index.css            → Tailwind + custom utilities
└── components/
    ├── Nav.jsx          → Top bar info + sticky navigation
    ├── Hero.jsx         → Headline + stats card + 2 floating badges
    ├── About.jsx        → Visi/Misi/Nilai + founder quote
    ├── Products.jsx     → 3 brand cards (Hisense, Philips, Siemens)
    ├── WhyWIC.jsx       → 6 keunggulan + CTA banner
    ├── Process.jsx      → 6 langkah workflow (dark section)
    ├── Projects.jsx     → Tipe proyek + segmen klien
    ├── CTA.jsx          → 2 CTA cards + contact info kantor
    ├── Footer.jsx       → Kontak lengkap + sosmed
    ├── FloatingWA.jsx   → Sticky WhatsApp button
    └── Logo.jsx         → Logo WIC (W merah, IC biru)
```

---

## 📞 Roadmap Saran

Yang bisa ditambahkan ke depan:
- Halaman katalog produk detail dengan datasheet PDF download
- Testimoni klien (paling powerful untuk B2B)
- Galeri foto proyek aktual (logo dinding klien, before-after)
- Form quote builder (input BTU/quantity → auto-calc estimasi)
- Blog/Insight section untuk SEO long-term ("cara hitung BTU AC kantor", dll)
