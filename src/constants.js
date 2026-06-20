// ==========================================
// EDIT KONTEN DI SINI
// ==========================================

// Nomor WhatsApp marketing (Julita)
export const WA_NUMBER = "6282391380999";
export const WA_DEFAULT_MSG = "Halo WIC, saya tertarik dan ingin penawaran terbaik. Mohon info lebih lanjut.";

export const buildWaLink = (msg = WA_DEFAULT_MSG) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const COMPANY = {
  name: "PT Warni Indah Cemerlang",
  shortName: "WIC",
  tagline: "15 Tahun Distributor Resmi",
  phone: "+62 823 9138 0999",
  phoneDisplay: "+62 823 9138 0999",
  email: "info@wic.co.id",
  marketing: "Julita",
  address: "Jalan Datuk Setia Maharaja, Perkantoran Grand Sudirman, Blok C3, Tengkerang Selatan, Kec. Bukit Raya, Kota Pekanbaru, Riau 28288",
  city: "Pekanbaru, Riau",
  mapsQuery: "Perkantoran+Grand+Sudirman+Blok+C3+Pekanbaru",
};

// Stats di hero
export const STATS = [
  { value: "15+", label: "Tahun Pengalaman", suffix: "" },
  { value: "500+", label: "Proyek Terselesaikan", suffix: "" },
  { value: "3", label: "Principal Resmi", suffix: "" },
  { value: "34", label: "Provinsi Terjangkau", suffix: "" },
];

// 3 Principal brand — copy persis dari poster
export const PRINCIPALS = [
  {
    id: "hisense",
    brand: "Hisense",
    category: "Air Conditioning",
    title: "Spesialis AC Proyek & Hunian",
    subtitle: "AC VRF, Central AC, Multi System & Residential",
    description: "Solusi pendingin udara skala proyek dan hunian — dari single split inverter low watt untuk rumah, sampai sistem VRF Hi-FLEXI untuk gedung perkantoran, hotel, pabrik, dan mall.",
    products: [
      "AC VRF Hisense (Gedung, Hotel, Pabrik, Mall)",
      "AC Proyek (Central AC & Multi System)",
      "AC Rumah: Single Split, Inverter, Low Watt",
      "Penjualan Unit + Instalasi",
      "Servis Rutin & Maintenance",
    ],
    color: "#0066CC",
    accentBg: "from-sky-100 to-blue-50",
  },
  {
    id: "philips",
    brand: "Philips",
    category: "Lighting Solutions",
    title: "Penyedia Lampu Philips Resmi",
    subtitle: "15 Tahun Distributor Resmi",
    description: "Pencahayaan untuk setiap skala — proyek gedung & konstruksi, lampu lapangan olahraga, rumah & kantor, sampai gudang, pabrik, dan retail. Original, garansi resmi, siap kirim seluruh Indonesia.",
    products: [
      "Proyek Gedung & Konstruksi",
      "Lampu Lapangan Olahraga",
      "Rumah & Kantor",
      "Gudang, Pabrik, Retail",
      "Smart Lighting Philips WiZ",
    ],
    color: "#0d6efd",
    accentBg: "from-blue-50 to-indigo-50",
  },
  {
    id: "siemens",
    brand: "Siemens",
    category: "Electrical Panel",
    title: "MCB & Panel Listrik Siemens",
    subtitle: "Instalasi Rumah & Proyek",
    description: "Komponen kelistrikan industrial-grade untuk panel listrik rumah, kantor, ruko, pabrik, dan gedung. Termasuk upgrade panel dan penanganan beban tinggi.",
    products: [
      "MCB / MCB Box / MCCB Siemens",
      "Panel Listrik Rumah & Kantor",
      "Panel Proyek — Pabrik, Ruko, Gedung",
      "Instalasi Listrik Lengkap",
      "Upgrade Panel & Penanganan Beban",
    ],
    color: "#0099CC",
    accentBg: "from-cyan-50 to-sky-50",
  },
];

// "Kenapa Pilih WIC" — sama persis dari poster
export const WHY_WIC = [
  {
    icon: "ShieldCheck",
    title: "Resmi & Bergaransi",
    description: "Produk original distributor resmi dengan garansi penuh dari principal Hisense, Philips, dan Siemens.",
  },
  {
    icon: "TrendingDown",
    title: "Harga Proyek / Contractor",
    description: "Harga khusus kontraktor, konsultan, dan project owner — kompetitif untuk skala proyek.",
  },
  {
    icon: "Wrench",
    title: "Instalasi oleh Teknisi Berpengalaman",
    description: "Tim teknisi bersertifikat dengan pengalaman puluhan tahun di lapangan.",
  },
  {
    icon: "Calculator",
    title: "Support Perhitungan BTU & Desain",
    description: "Bantuan teknis sebelum penawaran — load calculation, layout, dan desain sistem.",
  },
  {
    icon: "Zap",
    title: "After Sales Cepat",
    description: "Respon servis cepat, maintenance terjadwal, dan dukungan teknis jangka panjang.",
  },
  {
    icon: "Truck",
    title: "Siap Kirim Seluruh Indonesia",
    description: "Jaringan logistik nasional — dari Pekanbaru ke seluruh provinsi Indonesia.",
  },
];

// 6 langkah workflow
export const PROCESS = [
  { step: "01", title: "Konsultasi", description: "Diskusi kebutuhan proyek, scope pekerjaan, dan timeline bersama tim teknis kami." },
  { step: "02", title: "Survey & Desain", description: "Survey lokasi, perhitungan BTU / load, dan desain sistem yang efisien." },
  { step: "03", title: "Penawaran RAB", description: "Quotation detail dengan breakdown unit, instalasi, dan timeline — transparan." },
  { step: "04", title: "Instalasi", description: "Eksekusi oleh teknisi bersertifikat dengan progress report berkala." },
  { step: "05", title: "Commissioning", description: "Testing menyeluruh, training operator, dan serah terima dokumentasi as-built." },
  { step: "06", title: "After-Sales", description: "Maintenance terjadwal, garansi resmi, dan dukungan teknis berkelanjutan." },
];

// Tipe proyek + jumlah
export const PROJECT_TYPES = [
  { label: "Gedung Perkantoran", count: "120+ proyek", icon: "Building2" },
  { label: "Hotel & Hospitality", count: "45+ proyek", icon: "Hotel" },
  { label: "Pabrik & Industri", count: "80+ proyek", icon: "Factory" },
  { label: "Mall & Retail", count: "60+ proyek", icon: "ShoppingBag" },
  { label: "Hunian & Residensial", count: "200+ proyek", icon: "Home" },
  { label: "Lapangan Olahraga", count: "35+ proyek", icon: "Trophy" },
];

// Segmen klien
export const CLIENT_SEGMENTS = [
  "Kontraktor MEP & Sipil",
  "Developer Properti",
  "Konsultan Engineering",
  "Project Owner Industri",
  "Pemerintah & BUMN",
  "Hotel & Resort Group",
];

// Navigation
export const NAV_LINKS = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Produk", href: "#products" },
  { label: "Kenapa WIC", href: "#why" },
  { label: "Proyek", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];
