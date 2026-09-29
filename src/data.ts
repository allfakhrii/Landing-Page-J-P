export const NAV_LINKS = [
  { name: "Layanan", href: "#services" },
  { name: "Cara Kerja", href: "#how-we-work" },
  { name: "Tim Spesialis", href: "#team" },
  { name: "Paket Investasi", href: "#pricing" },
];

export const SERVICES_DATA = [
  {
    id: "strategy",
    title: "Business Strategy",
    category: "Arah & Pertumbuhan",
    desc: "Strategi bisnis, perencanaan korporat, transformasi, serta pengembangan arah pertumbuhan perusahaan yang terukur dan berdaya saing.",
    iconPath: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    details: ["Business Model Review", "Market & Competitor Analysis", "Positioning & Value Proposition", "1-3 Year Strategic Roadmap"]
  },
  {
    id: "operations",
    title: "Operations & Process",
    category: "Efisiensi & Produktivitas",
    desc: "Manajemen operasional, standard operating procedure (SOP), efisiensi alur kerja, produktivitas, serta peningkatan kinerja operasional harian.",
    iconPath: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75",
    details: ["Penyusunan & Redesain SOP", "Workflow & Bottleneck Analysis", "Pengendalian Operasional", "Manpower & Productivity Audit"]
  },
  {
    id: "people",
    title: "People & Organization",
    category: "Pengembangan SDM",
    desc: "Human resources management, analisis jabatan, perancangan struktur organisasi, performance management, serta akselerasi kapabilitas tim.",
    iconPath: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    details: ["Job Analysis & Job Description", "Sistem Evaluasi Kinerja (KPI)", "Struktur & Skala Upah", "Sistem Rekrutmen & Pengembangan"]
  },
  {
    id: "marketing",
    title: "Marketing & Growth",
    category: "Pasar & Pertumbuhan",
    desc: "Pengembangan brand, positioning strategis, perencanaan pemasaran terintegrasi, ekspansi pasar, serta strategi akuisisi pelanggan berkelanjutan.",
    iconPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
    details: ["STP & Customer Persona", "Channel & Content Strategy", "Marketing Funnel Optimization", "Campaign Framework & KPI"]
  },
  {
    id: "finance",
    title: "Finance & Performance",
    category: "Kesehatan Keuangan",
    desc: "Accounting, financial diagnostic, pengelolaan manajemen keuangan, budgeting, efisiensi biaya, serta peningkatan profitabilitas bisnis.",
    iconPath: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    details: ["Review & Audit Laporan Keuangan", "Cash Flow & Working Capital", "Identifikasi Financial Leakage", "Setup Chart of Account & SOP"]
  },
  {
    id: "tech",
    title: "Technology & Digital",
    category: "Sistem & Analitik",
    desc: "Sistem informasi manajemen, adopsi teknologi tepat guna, transformasi digital, data analytics untuk pengambilan keputusan yang berbasis fakta.",
    iconPath: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    details: ["Executive Dashboard Development", "Data Diagnostic & Business Metrics", "Integrasi POS, CRM, & Inventory", "Data-Driven Decision Framework"]
  },
  {
    id: "leadership",
    title: "Strategic Leadership",
    category: "Penyatuan Lintas Fungsi",
    desc: "Kemampuan lintas fungsi untuk menyatukan berbagai perspektif, menerjemahkan strategi menjadi tindakan, dan memastikan organisasi bergerak selaras.",
    iconPath: "M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.982-3.172M12 3a4.5 4.5 0 00-4.5 4.5c0 1.258.517 2.395 1.349 3.208a7.458 7.458 0 016.302 0A4.48 4.48 0 0016.5 7.5 4.5 4.5 0 0012 3z",
    details: ["Penyelarasan Visi & Eksekusi", "Konsensus Pemangku Kepentingan", "Change Management Terarah", "Monitoring Pencapaian Sasaran"]
  }
];

export const HOW_WE_WORK_STEPS = [
  {
    step: "01",
    title: "DISCOVER",
    action: "Pahami Bisnis & Kondisi",
    desc: "Mendalami kondisi bisnis secara utuh, kebutuhan aktual, serta tantangan operasional dan struktural yang sedang dihadapi perusahaan."
  },
  {
    step: "02",
    title: "DIAGNOSE",
    action: "Identifikasi Akar Masalah",
    desc: "Menganalisis data, proses, dan performa untuk menemukan akar persoalan utama serta peluang perbaikan yang berdampak tinggi."
  },
  {
    step: "03",
    title: "DESIGN",
    action: "Susun Solusi Terintegrasi",
    desc: "Merumuskan strategi, rekomendasi, dan cetak biru solusi komprehensif yang dirancang spesifik sesuai kapasitas dan kapabilitas perusahaan."
  },
  {
    step: "04",
    title: "DELIVER",
    action: "Dampingi Penerapan Solusi",
    desc: "Mendampingi implementasi di lapangan bersama tim internal manajemen guna memastikan eksekusi berjalan tepat sasaran."
  },
  {
    step: "05",
    title: "DEVELOP",
    action: "Evaluasi & Keberlanjutan",
    desc: "Melakukan peninjauan hasil secara berkala dan membangun kapabilitas mandiri agar perbaikan kinerja bertumbuh secara berkesinambungan."
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Joko Purwadi, S.S., M.M., CHRO",
    role: "Operations Management and Strategic Leadership Specialist",
    initials: "JP",
    photo: "assets/team/joko.png",
    bio: "Spesialis dalam perbaikan tata kelola operasional, penyelarasan kepemimpinan strategis, dan transformasi organisasi."
  },
  {
    name: "Mandon Febriyanto, S.Ak., S.M., M.M., ACPA",
    role: "Finance Management Specialist",
    initials: "MF",
    photo: "assets/team/mandon.png",
    bio: "Ahli tata kelola akuntansi, mitigasi kebocoran keuangan, perencanaan anggaran, dan kesehatan arus kas bisnis."
  },
  {
    name: "Sageri Fikri Ramadhan, S.Kom., M.M",
    role: "Business Strategy Specialist",
    initials: "SR",
    photo: "assets/team/sageri.png",
    bio: "Berfokus pada formulasi model bisnis, diferensiasi posisi pasar, serta perancangan peta jalan strategis jangka panjang."
  },
  {
    name: "Azmi Rasyid, S.T., M.M",
    role: "Marketing Management Specialist",
    initials: "AR",
    photo: "assets/team/azmi.png",
    bio: "Berpengalaman dalam pengembangan strategi brand, akuisisi pelanggan, penetrasi pasar, dan optimasi marketing funnel."
  },
  {
    name: "Seira Latanssa, S.Psi., M.M., QRMO",
    role: "Human Resources Management Specialist",
    initials: "SL",
    photo: "assets/team/seira.png",
    bio: "Fokus pada arsitektur organisasi, penilaian kompetensi, manajemen risiko sumber daya manusia, dan budaya kerja."
  },
  {
    name: "Fatih Al-Fakhri Muhammad",
    role: "Data Analyst & IT Specialist",
    initials: "FA",
    photo: "assets/team/fatih.png",
    bio: "Mengembangkan dashboard analitik bisnis, pemodelan data terstruktur, serta digitalisasi proses pengambilan keputusan."
  }
];

export const PRICING_DATA = [
  {
    areaKey: "flagship",
    areaName: "Paket Transformasi Utama",
    badge: "Solusi Komprehensif Terpadu",
    title: "Business Transformation Package",
    price: "Rp50 - 100 Juta",
    scope: "Untuk perusahaan yang sudah berjalan tetapi sistem bisnis dan operasionalnya belum tertata rapi.",
    features: [
      "Strategy: Business Diagnostic & Strategic Direction",
      "Finance: Financial Health, Budgeting, & Cashflow",
      "HR: Organization Structure, Job Descriptions, KPI, & HR System",
      "Marketing: Market Analysis, Positioning, & Marketing Strategy",
      "Operations: Penyusunan SOP, Workflow, & Operational Improvement",
      "IT & Data: Executive Management Dashboard & Business Reporting",
      "Output Akhir: Business Transformation Blueprint plus Implementation Roadmap"
    ],
    highlight: true
  },
  {
    areaKey: "finance",
    areaName: "Practice Area 01: Finance",
    badge: "Kesehatan Finansial",
    title: "Financial Check-up",
    price: "Rp3 - 7,5 Juta",
    scope: "Audit mendalam kesehatan finansial untuk menemukan efisiensi dan potensi kebocoran.",
    features: [
      "Review menyeluruh Laporan Keuangan",
      "Analisis Revenue, Margin, dan Struktur Biaya",
      "Evaluasi Cash Flow, Break-Even, dan Modal Kerja (Working Capital)",
      "Identifikasi Titik Kebocoran Finansial (Financial Leakage)",
      "Output: Laporan Kesehatan Keuangan Lengkap + Rekomendasi Manajemen"
    ],
    highlight: false
  },
  {
    areaKey: "finance",
    areaName: "Practice Area 01: Finance",
    badge: "Pondasi Akuntansi",
    title: "Financial System Setup",
    price: "Rp7,5 - 15 Juta",
    scope: "Pembangunan standarisasi sistem pencatatan dan tata kelola transaksi keuangan perusahaan.",
    features: [
      "Perancangan Chart of Accounts (CoA) terstandarisasi",
      "Struktur Pencatatan dan Sistem Pengarsipan Transaksi",
      "SOP Transaksi Keuangan, Petty Cash, dan Otorisasi Approval",
      "Alur Pembayaran dan Pengadaan (Purchasing/Payment Flow)",
      "Setup Cash Management, Budgeting, dan Format Pelaporan Rutin"
    ],
    highlight: false
  },
  {
    areaKey: "strategy",
    areaName: "Practice Area 02: Business Strategy",
    badge: "Diagnosis Strategis",
    title: "Business Health Check",
    price: "Rp5 - 10 Juta",
    scope: "Evaluasi komprehensif kesehatan bisnis, kesiapan pasar, dan keunggulan kompetitif.",
    features: [
      "Analisis Business Model dan Struktur Operasional Saat Ini",
      "Analisis Pasar, Pesaing Utama, dan Positioning Brand",
      "Evaluasi Arus Pendapatan (Revenue Streams) dan Biaya",
      "Analisis SWOT Mendalam dan Isu-Isu Strategis Perusahaan",
      "Output: Laporan Diagnostik Bisnis Terstruktur untuk Pengambilan Keputusan"
    ],
    highlight: false
  },
  {
    areaKey: "strategy",
    areaName: "Practice Area 02: Business Strategy",
    badge: "Peta Jalan Bisnis",
    title: "Business Strategy Development",
    price: "Rp15 - 30 Juta",
    scope: "Formulasi strategi pertumbuhan terarah untuk memenangkan persaingan pasar.",
    features: [
      "Review & Rekonfigurasi Model Bisnis Perusahaan",
      "Penyusunan Value Proposition dan Positioning Terinci",
      "Perumusan Strategic Objectives dan Rencana Inisiatif Kunci",
      "Penetapan Key Performance Indicators (KPI) Korporat",
      "Penyusunan Roadmap Eksekusi Strategis 1-3 Tahun"
    ],
    highlight: false
  },
  {
    areaKey: "hr",
    areaName: "Practice Area 03: Human Resources",
    badge: "Audit Organisasi",
    title: "HR Audit",
    price: "Rp5 - 10 Juta",
    scope: "Peninjauan efektivitas struktur organisasi, kejelasan tugas, dan kepatuhan kebijakan SDM.",
    features: [
      "Evaluasi Struktur Organisasi dan Beban Kerja",
      "Review Uraian Tugas (Job Description) Karyawan",
      "Peninjauan Proses Rekrutmen, Kompensasi, dan Kehadiran",
      "Evaluasi Manajemen Kinerja dan Administrasi Personalia",
      "Audit Kebijakan Perusahaan dan Rencana Pengembangan Karyawan"
    ],
    highlight: false
  },
  {
    areaKey: "hr",
    areaName: "Practice Area 03: Human Resources",
    badge: "Sistem Manajemen SDM",
    title: "HR System Development",
    price: "Rp15 - 30 Juta",
    scope: "Penyusunan fondasi sistem pengelolaan sumber daya manusia yang teratur dan terukur.",
    features: [
      "Penyusunan Struktur Organisasi, Job Analysis, dan Spesifikasi Jabatan",
      "Penyusunan SOP Human Resources Terintegrasi",
      "Perancangan Alur Rekrutmen dan Standar Penilaian",
      "Penyusunan Sistem Performance Management dan KPI Karyawan",
      "Penyusunan Framework Pelatihan dan Kerangka Administrasi SDM"
    ],
    highlight: false
  },
  {
    areaKey: "marketing",
    areaName: "Practice Area 04: Marketing Management",
    badge: "Audit Pemasaran",
    title: "Marketing Audit",
    price: "Rp5 - 10 Juta",
    scope: "Peninjauan performa branding, saluran pemasaran, dan efektivitas konversi pasar.",
    features: [
      "Review Persepsi Brand dan Target Pasar Saat Ini",
      "Analisis Perilaku Konsumen dan Pemetaan Kompetitor",
      "Audit Saluran Media Sosial dan Efektivitas Marketing Funnel",
      "Evaluasi Penetapan Harga (Pricing) dan Customer Journey",
      "Rekomendasi Optimalisasi Penetrasi Pasar"
    ],
    highlight: false
  },
  {
    areaKey: "marketing",
    areaName: "Practice Area 04: Marketing Management",
    badge: "Strategi Pertumbuhan",
    title: "Marketing Strategy",
    price: "Rp10 - 25 Juta",
    scope: "Perancangan strategi pemasaran komprehensif untuk ekspansi dan pertumbuhan omset.",
    features: [
      "Formulasi STP (Segmenting, Targeting, Positioning)",
      "Penyusunan Profil Persona Pelanggan Ideal",
      "Rencana Strategi Konten dan Pemilihan Saluran Pemasaran Tepat",
      "Penyusunan Kerangka Kampanye Pemasaran (Campaign Framework)",
      "Penetapan Metrik dan KPI Keberhasilan Pemasaran"
    ],
    highlight: false
  },
  {
    areaKey: "data",
    areaName: "Practice Area 05: Data Analytics & IT",
    badge: "Diagnostik Data",
    title: "Data & Business Diagnostic",
    price: "Rp5 - 10 Juta",
    scope: "Penilaian kesiapan data perusahaan untuk menghasilkan wawasan bisnis yang akurat.",
    features: [
      "Pemeriksaan Kualitas dan Kerapian Data Bisnis",
      "Proses Pembersihan dan Standarisasi Struktur Data",
      "Perumusan Metrik Kunci dan Key Performance Indicators (KPI)",
      "Pembangunan Purwarupa Dashboard Bisnis Sederhana",
      "Analisis Dasar dan Rekomendasi Wawasan Berbasis Data"
    ],
    highlight: false
  },
  {
    areaKey: "data",
    areaName: "Practice Area 05: Data Analytics & IT",
    badge: "Visualisasi Metrik",
    title: "Dashboard Development",
    price: "Rp7,5 - 20 Juta",
    scope: "Pembuatan dasbor visual interaktif untuk memantau performa bisnis secara waktu-nyata.",
    features: [
      "Pilihan Dasbor: Penjualan, Keuangan, SDM, atau Inventori",
      "Dasbor Eksekutif Terpadu untuk Manajemen Puncak",
      "Visualisasi Tren dan Metrik Penting Perusahaan",
      "Pelatihan Singkat Pengoperasian dan Pembaruan Data",
      "Investasi disesuaikan dengan tingkat kompleksitas dan platform pilihan"
    ],
    highlight: false
  },
  {
    areaKey: "operations",
    areaName: "Practice Area 06: Operations & Leadership",
    badge: "Audit Alur Operasi",
    title: "Operational Audit",
    price: "Rp5 - 10 Juta",
    scope: "Pemeriksaan efisiensi alur operasional untuk memangkas pemborosan waktu dan biaya.",
    features: [
      "Pemetaan Alur Proses Bisnis Saat Ini",
      "Identifikasi Titik Hambatan (Bottleneck) dan Pemborosan",
      "Evaluasi Beban Kerja Tenaga Kerja (Manpower)",
      "Peninjauan Kelengkapan SOP Operasional",
      "Rekomendasi Peningkatan Produktivitas dan Sistem Kontrol"
    ],
    highlight: false
  },
  {
    areaKey: "operations",
    areaName: "Practice Area 06: Operations & Leadership",
    badge: "Standarisasi SOP",
    title: "SOP & Business Process Development",
    price: "Rp10 - 25 Juta",
    scope: "Dokumentasi dan standardisasi alur kerja perusahaan agar operasional berjalan konsisten.",
    features: [
      "Paket 5 SOP Operasional Inti: Rp10 Juta",
      "Paket 10 SOP Operasional Lengkap: Rp15 Juta",
      "Paket 20 SOP Operasional Korporat: Rp25 Juta",
      "Dilengkapi Formulir Kerja dan Alur Otorisasi",
      "Panduan Sosialisasi dan Implementasi kepada Tim Terkait"
    ],
    highlight: false
  }
];
