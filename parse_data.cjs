const fs = require('fs');

const raw = `1. Strategic Management,,
,,
"Berfokus pada penetapan arah, model bisnis, pertumbuhan, dan penerjemahan strategi menjadi program implementasi.",,
,,
Scope,Aktivitas Utama,Output
Strategic Direction,"Merumuskan visi, misi, tujuan, sasaran, dan prioritas strategis organisasi",Strategic direction dan strategic objectives
Business Model Development,"Mengkaji dan merumuskan model bisnis, value proposition, sumber pendapatan, serta struktur biaya",Business Model Canvas dan value proposition
Strategic Environment Analysis,"Menganalisis industri, pasar, ekosistem, pesaing, regulasi, tren, peluang, dan risiko",Market and ecosystem assessment
Customer & Stakeholder Analysis,"Memetakan karakteristik, kebutuhan, ekspektasi, dan pengaruh pelanggan maupun stakeholder",Customer and stakeholder map
Value Chain Analysis,"Memetakan aktivitas penciptaan nilai, alur pendapatan, serta keterkaitan antarproses bisnis",Value chain dan revenue flow
Organizational Health Review,"Menilai kondisi keuangan, operasional, organisasi, kapabilitas, dan kesiapan implementasi strategi",Organizational health assessment
Growth & Expansion Strategy,"Menilai peluang ekspansi, diversifikasi, kemitraan strategis, dan pengembangan bisnis",Growth strategy dan business opportunity portfolio
Strategic Partnership,"Mengidentifikasi, mengevaluasi, dan merancang model kerja sama dengan mitra bisnis",Partnership strategy dan governance model
Strategic Roadmap,"Menyusun tahapan implementasi, program strategis, milestone, PIC, kebutuhan sumber daya, dan dependensi",Strategic roadmap
Organizational KPI,Menetapkan sasaran dan KPI organisasi yang diturunkan dari strategi,Corporate KPI framework
Gap Analysis,Mengidentifikasi kesenjangan antara kondisi saat ini dan kondisi yang dituju,Gap analysis dan prioritas perbaikan
Strategy Monitoring,"Memantau pencapaian strategi, mengevaluasi deviasi, dan merumuskan tindakan korektif",Strategy performance review
Implementation Assistance,Mendampingi pelaksanaan inisiatif dan penyelesaian kendala strategis,Implementation progress report dan action plan
2. Marketing Management,,
,,
"Berfokus pada pemahaman pasar dan pelanggan, penguatan merek, akuisisi pelanggan, serta peningkatan efektivitas kegiatan pemasaran.",,
,,
Scope,Aktivitas Utama,Output
Market Research,"Menganalisis ukuran pasar, tren, perilaku pelanggan, pesaing, dan potensi permintaan",Market research report
Customer Analysis,"Menyusun segmentasi pelanggan, customer persona, kebutuhan, preferensi, dan customer journey",Customer segmentation dan persona
Marketing Strategy,"Menetapkan target pasar, positioning, marketing objectives, channel, dan program pemasaran",Marketing strategy dan marketing plan
Brand Strategy,"Merumuskan identitas merek, brand positioning, key message, dan value proposition pelanggan",Brand strategy dan messaging framework
Go-to-Market Strategy,"Menyusun strategi peluncuran produk atau layanan, channel, pricing, promotion, dan sales activation",Go-to-market plan
Digital Marketing,"Mengelola kampanye digital melalui website, search engine, marketplace, dan digital advertising",Digital campaign plan
Social Media Marketing,"Menyusun strategi kanal, kalender konten, aktivasi, community engagement, dan evaluasi media sosial",Social media plan dan content calendar
Marketing Copywriting,"Menyusun konten promosi, website, media sosial, iklan, proposal, dan materi komunikasi pemasaran",Marketing copy dan communication materials
Campaign Management,"Merencanakan, menjalankan, dan mengevaluasi efektivitas kampanye pemasaran",Campaign performance report
Marketing Analytics,"Memantau traffic, reach, engagement, conversion, acquisition cost, dan campaign ROI",Marketing dashboard dan insights
Customer Retention,"Mengembangkan program loyalitas, engagement, dan peningkatan customer lifetime value",Customer retention program
3. Human Capital Management,,
,,
"Berfokus pada penyelarasan organisasi, pekerjaan, kompetensi, kinerja, budaya, dan sistem pengelolaan SDM.",,
,,
Scope,Aktivitas Utama,Output
HR Audit,"Menilai kepatuhan, efektivitas kebijakan, proses, sistem, dokumentasi, dan tata kelola HR",HR audit report dan improvement plan
HR Strategy,"Menyusun arah, prioritas, program, dan roadmap pengelolaan Human Capital",HR strategy dan HC roadmap
Organization Design,"Mengkaji dan menyusun struktur organisasi, fungsi, span of control, serta hubungan pelaporan",Struktur organisasi dan organization design recommendation
Business Process Framework,Menyusun arsitektur dan hierarki proses bisnis organisasi,Value Chain & Business process list
Role & Accountability,"Memetakan pembagian tanggung jawab, akuntabilitas, konsultasi, dan dukungan antarunit",RASCI matrix
Job Analysis,"Menganalisis tujuan, tanggung jawab, kewenangan, output, dan persyaratan jabatan",Job description
Job Family Modeling,Mengelompokkan jabatan berdasarkan kesamaan karakteristik pekerjaan dan jalur karier,Job family dan sub-job family model
Competency Management,"Menyusun kamus kompetensi teknis, persyaratan kompetensi jabatan, dan proficiency level",Technical competency dictionary
Learning Architecture,"Menyusun learning pathway, kurikulum, modul, dan program pengembangan",Learning pathway dan curriculum
Job Evaluation,Menilai bobot dan relativitas jabatan serta mendukung penyusunan grading,Kajian job grading
Performance Management,"Menyusun KPI individu, mekanisme cascading, monitoring, review, dan evaluasi kinerja",Individual performance management system
Career Management,"Menyusun jalur karier, pola pergerakan, persyaratan promosi, dan succession criteria",Career path dan career management framework
Culture Management,"Menilai kondisi budaya, merumuskan budaya target, dan menyusun program internalisasi",Culture framework dan culture activation plan
HR Policy & SOP,"Menyusun dan menyempurnakan kebijakan, pedoman, prosedur, formulir, dan governance HR","HR policy, SOP, dan pedoman pelaksanaan"
Change Management,"Menyusun strategi komunikasi, stakeholder engagement, dan kesiapan perubahan",Change management plan
"4. Finance, Accounting & Governance",,
,,
"Berfokus pada kualitas informasi keuangan, pengendalian, kepatuhan, pengelolaan biaya, dan dukungan keputusan bisnis.",,
,,
Scope,Aktivitas Utama,Output
Bookkeeping,Mencatat dan mengklasifikasikan transaksi keuangan secara sistematis,Buku besar dan catatan transaksi
Financial Statement Compilation,"Mengompilasi laporan laba rugi, posisi keuangan, arus kas, dan perubahan ekuitas",Laporan keuangan
Financial Reporting Assistance,"Mendampingi rekonsiliasi, penyesuaian, dan penyelesaian laporan keuangan",Financial reporting package
Management Accounting,Menyediakan informasi keuangan untuk perencanaan dan pengambilan keputusan manajemen,Management report
Budgeting & Forecasting,"Menyusun anggaran, proyeksi keuangan, analisis skenario, dan pemantauan realisasi",Budget dan financial forecast
Financial Health Assessment,"Menilai profitabilitas, likuiditas, solvabilitas, arus kas, dan keberlanjutan keuangan",Financial health assessment
Cost & Profitability Analysis,"Menganalisis struktur biaya, cost driver, margin, unit economics, dan profitabilitas",Cost and profitability analysis
Taxation,"Mendukung perhitungan, administrasi, pelaporan, dan kepatuhan perpajakan",Tax calculation dan tax report
Agreed-Upon Procedures,Melaksanakan prosedur pemeriksaan tertentu sesuai ruang lingkup yang disepakati,AUP factual findings report
Financial Control,"Mengkaji mekanisme otorisasi, rekonsiliasi, dokumentasi, dan pengendalian transaksi",Internal financial control recommendation
Corporate Governance,Mengkaji dan menyusun laporan penerapan tata kelola perusahaan,GCG assessment dan GCG report
Financial Advisory,Memberikan analisis dan rekomendasi keuangan untuk mendukung keputusan manajemen,Financial advisory report
5. Operations Management & Process Improvement,,
,,
"Berfokus pada peningkatan produktivitas, kualitas, efisiensi proses, kapasitas, dan efektivitas pelaksanaan operasional.",,
,,
Scope,Aktivitas Utama,Output
Operating Model Review,"Mengkaji struktur pelaksanaan operasi, alur keputusan, kapasitas, sumber daya, dan mekanisme koordinasi",Operating model recommendation
Operations Management,"Merancang dan memperbaiki sistem perencanaan, pelaksanaan, pengendalian, dan evaluasi operasi",Operations management framework
Process Mapping,"Memetakan alur kerja, aktivitas, input-output, handoff, dan titik kendali proses",Process map dan workflow
SOP Development,"Menyusun, memperbarui, dan mengimplementasikan SOP operasional",SOP dan implementation guideline
Operational KPI,"Menetapkan indikator produktivitas, kualitas, waktu, biaya, utilisasi, dan tingkat layanan",Operational KPI framework
Productivity Review,"Mengukur produktivitas tenaga kerja, proses, aset, dan sumber daya operasional",Productivity assessment
Workload & Manpower Review,"Menganalisis beban kerja, kebutuhan tenaga kerja, utilisasi, dan kapasitas organisasi",Workload analysis dan manpower planning
Cost Control,"Mengidentifikasi cost driver, pemborosan, dan peluang efisiensi operasional",Operational cost improvement plan
Bottleneck Analysis,"Mengidentifikasi hambatan, antrean, duplikasi, rework, dan aktivitas yang tidak memberikan nilai tambah",Bottleneck and root-cause analysis
Process Improvement,"Mendesain perbaikan alur kerja, simplifikasi proses, standardisasi, dan otomasi",Process improvement roadmap
Service & Quality Improvement,"Mengembangkan standar mutu, tingkat layanan, quality control, dan continuous improvement",Service standard dan quality improvement plan
Business Incubation,Mendampingi pengembangan usaha baru dari tahap konsep hingga kesiapan operasional,Business incubation roadmap
SME Development,"Mendampingi penguatan tata kelola, proses, kapasitas, dan kinerja UMKM",SME development program
Implementation Guidance,"Mendampingi implementasi, monitoring progres, penyelesaian kendala, dan stabilisasi proses baru",Implementation report dan corrective action
Operational Leadership,"Mengembangkan mekanisme koordinasi, pengendalian, dan pengambilan keputusan tim operasional",Team operating rhythm dan governance
"6. Data, Digital & Information Technology",,
,,
"Berfokus pada pengelolaan data, analitik, pengembangan sistem, keamanan, dan solusi digital yang mendukung keputusan serta operasi bisnis.",,
,,
Scope,Aktivitas Utama,Output
Data Governance,"Menetapkan kepemilikan, standar, akses, kualitas, keamanan, dan siklus hidup data",Data governance framework
Data Cleansing,"Membersihkan data kosong, duplikasi, inkonsistensi, kesalahan format, dan anomali",Clean dataset
Data Validation & Integration,Memvalidasi dan mengintegrasikan data dari berbagai sistem atau sumber,Integrated database
Descriptive Analytics,"Menganalisis tren, profil, pola, dan kondisi kinerja historis",Descriptive analysis report
Business & Behavioral Analytics,"Menganalisis perilaku pelanggan, pegawai, transaksi, dan penggerak kinerja bisnis",Business and behavioral insights
Predictive Analytics,"Mengembangkan model prediksi, forecasting, segmentasi, dan machine learning",Predictive model dan forecast
Strategic Insights,Menerjemahkan hasil analisis menjadi rekomendasi bisnis yang dapat ditindaklanjuti,Insight and recommendation report
Dashboard Development,Mengembangkan dashboard interaktif untuk monitoring KPI dan pengambilan keputusan,Interactive dashboard
Data Visualization,"Merancang visualisasi, UI/UX, dan dynamic reporting yang mudah digunakan",Data visualization dan reporting interface
POS & Transaction System,"Mengembangkan sistem transaksi, penjualan, pembayaran, dan pencatatan operasional",POS and transaction system
Inventory Management System,"Mengembangkan sistem persediaan, mutasi stok, reorder, dan monitoring inventori",Inventory management system
Database & Synchronization,"Mengembangkan basis data cloud/lokal, integrasi API, dan sinkronisasi data secara real-time",Database and integration architecture
Information Security,"Mengembangkan kontrol akses, backup, recovery, keamanan data, dan audit trail",Security and access control framework
Executive Analytics Portal,Mengembangkan portal manajemen dan aplikasi bisnis yang disesuaikan dengan kebutuhan organisasi,Executive portal dan custom application
Web Development,"Mengembangkan website responsif, landing page, dan integrasi dengan sistem bisnis",Responsive website
System Maintenance,"Memantau performa, memperbaiki gangguan, melakukan pembaruan, dan menjaga stabilitas sistem",Maintenance report dan service support
Data Management Services,"Mengelola pembaruan, penyimpanan, kualitas, dan ketersediaan data secara berkelanjutan",Managed data services`;

const lines = raw.split("\n");
let currentCategory = "";
let currentKey = "";
let currentCategoryDesc = "";

const packages = [];

const mapping = {
  "1": "strategy",
  "2": "marketing",
  "3": "hr",
  "4": "finance",
  "5": "operations",
  "6": "data"
};

const labels = {
  "1": "Strategy",
  "2": "Marketing",
  "3": "HR",
  "4": "Finance",
  "5": "Operations",
  "6": "Data & IT"
};

let i = 0;
while (i < lines.length) {
  let line = lines[i].trim();
  if (line === "") { i++; continue; }
  
  if (line.match(/^["]?\d\./)) {
    // Category line
    let match = line.match(/^["]?(\d)\.\s+([^,]+)/);
    if (match) {
      let num = match[1];
      currentKey = mapping[num];
      currentCategory = match[2].replace(/"/g, '');
      
      // Next line is likely description
      i++;
      while (i < lines.length && (lines[i].trim() === "" || lines[i].trim() === ",,")) i++;
      if (i < lines.length && !lines[i].startsWith("Scope,")) {
        currentCategoryDesc = lines[i].replace(/,/g, '').replace(/"/g, '').trim();
        i++;
      }
      while (i < lines.length && !lines[i].startsWith("Scope,")) i++;
      // Skip header
      i++;
      continue;
    }
  }

  // Parse CSV line correctly taking into account quotes
  const parseCSVLine = (str) => {
    const result = [];
    let cur = "";
    let inQuote = false;
    for (let c of str) {
      if (c === '"') {
        inQuote = !inQuote;
      } else if (c === ',' && !inQuote) {
        result.push(cur);
        cur = "";
      } else {
        cur += c;
      }
    }
    result.push(cur);
    return result;
  };

  const parts = parseCSVLine(line);
  if (parts.length >= 3) {
    let scope = parts[0].trim();
    let aktivitas = parts[1].trim();
    let output = parts[2].trim();
    
    packages.push({
      areaKey: currentKey,
      areaName: currentCategory,
      badge: labels[Object.keys(mapping).find(k => mapping[k] === currentKey)],
      title: scope,
      scope: currentCategoryDesc, // Not ideal, maybe put aktivitas as scope
      features: [
        "Aktivitas: " + aktivitas,
        "Output: " + output
      ],
      highlight: false
    });
  }
  i++;
}

// Alternatively, let's make 6 BIG packages.
const bigPackages = [];
let catNum = "1";
for (let num = 1; num <= 6; num++) {
  let p = packages.filter(pk => pk.areaKey === mapping[num]);
  if (p.length === 0) continue;
  
  bigPackages.push({
    areaKey: p[0].areaKey,
    areaName: p[0].areaName,
    badge: p[0].badge,
    title: p[0].areaName,
    scope: p[0].scope,
    features: p.map(x => x.title + ": " + x.features[1].replace("Output: ", "")),
    highlight: false
  });
}

// Generate TS output for both and let's pick
fs.writeFileSync('output_83.json', JSON.stringify(packages, null, 2));
fs.writeFileSync('output_6.json', JSON.stringify(bigPackages, null, 2));

