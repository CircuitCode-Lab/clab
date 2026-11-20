# C Programming Learning Lab (DEC20313)

Portal kursus **DEC20313 C Programming**, Jabatan Kejuruteraan Elektrik (JKE), Politeknik Kota Bharu.
Dihoskan percuma dengan **GitHub Pages**.

**Laman langsung:** https://circuitcode-lab.github.io/clab/
**Learn C:** https://circuitcode-lab.github.io/clab/learn-c/
**Video:** https://circuitcode-lab.github.io/clab/video/
**C Lab Compiler:** https://circuitcode-lab.github.io/compiler/ (repo `CircuitCode-Lab/compiler`)

## Struktur

```
clab/
├── index.html      → Laman Utama
├── learn-c/        → Learn C (Modul 5P) + Program & Flowchart Studio
├── video/          → Video (YouTube Panduan Lab, PW1–PW5, Topik 1–7, Tip)
├── ebook/          → E-Book flipbook "C Programming Made Easy" (95 halaman, imej JPG bertanda air)
├── compiler/     → lencongan ke repo compiler (alamat lama)
├── download/       → Fail muat turun (Dev-C++ 5.11 + TDM-GCC 4.9.2 installer)
└── kehadiran/      → Tanda Kehadiran          [akan dipindah dari Netlify]
```

Sistem yang memerlukan Google Sheet kekal di Google Apps Script: Rayuan Kehadiran, Hantar PW (Sistem Lab) dan Games.

## Peraturan pautan
- Laman dalam repo ini (Learn C, Video, dan Kehadiran selepas dipindah) dibuka di **tab yang sama** dan mesti ada butang **⌂ Laman Utama**.
- Sistem luar (Apps Script, AI Tutor) dibuka di **tab baharu**.
- Video YouTube di `video/` dibuka di **tab yang sama** (pautan biasa, tanpa tab baharu) supaya berfungsi dalam semua pelayar dan aplikasi; di telefon ia membuka aplikasi YouTube.
- Pembantu Learning Lab: senarai `TAB_SAMA` dalam `index.html` menentukan pautan yang dibuka di tab sama.

## Cara kemas kini
**Tambah video:** buka `video/index.html`, cari senarai `VIDEO`, isi `id` dengan kod YouTube (huruf selepas `watch?v=`). `id: ""` = kad "Akan datang".

Ubah fail dalam repo ini (atau minta Claude ubah). GitHub Pages mengemas kini laman secara automatik dalam 1–2 minit. Tiada kredit atau kos.

## Sejarah
- **20 Nov 2026:** C Lab Compiler dipindah ke repo sendiri **CircuitCode-Lab/compiler** supaya boleh dipasang sebagai app berasingan (ikon "C Compiler"). `clab/compiler/` kini halaman lencongan + `sw.js` yang membuang cache lama. Pintasan `shortcuts` dibuang dari `manifest.json` akar. Kad dan jawapan Pembantu menghala ke alamat baharu.
- **20 Nov 2026:** Compiler berada dalam skop app C Lab (`manifest.json` akar, `scope: ./`), jadi telefon yang sudah pasang C Lab tidak boleh pasang compiler sebagai app berasingan. Ditambah `shortcuts` dalam `manifest.json` akar (tekan lama ikon C Lab → C Lab Compiler); `compiler/manifest.json` diberi `id` dan nama "C Compiler"; cache compiler v2.
- **20 Nov 2026:** **C Lab Compiler** `compiler/` ditambah (kad 📱 di bahagian 🛠️ Perisian + jawapan Pembantu). Interpreter PicoC (WebAssembly, lesen BSD) dibenamkan dalam `compiler/index.html` dan dijalankan dalam Web Worker — tiada server. PWA sendiri (`compiler/manifest.json`, `compiler/sw.js`) supaya boleh dipasang dan digunakan offline. Input `scanf` diisi dalam kotak Input; `%f` ditukar automatik kepada `%lf` (float = double dalam PicoC); `conio.h`, `getch()`, `system("pause")` diabaikan; had masa 8 saat. Bila mengemas kini `compiler/index.html`, naikkan nombor `CACHE` dalam `compiler/sw.js` (cth. `clab-compiler-v2`).
- **20 Nov 2026:** E-Book: ciri **🔍 Zoom** (butang, klik dua kali pada halaman, kekunci Z; tatal/cubit untuk zoom sehingga 6×, seret untuk alih). Imej halaman dinaikkan ke 150 dpi (1241×1755 px) supaya teks kecil jelas. Belek dengan klik dimatikan (seret bucu / butang / ← →) supaya klik dua kali tidak membelek halaman.
- **20 Nov 2026:** **E-Book** `ebook/` ditambah (kad baharu 📚 Bahan bacaan + jawapan Pembantu). Flipbook StPageFlip daripada PDF Canva "textbook C Program for DET" (95 hal.). PDF asal **tidak** dimasukkan ke repo; halaman disimpan sebagai `ebook/hal/001–095.jpg` (kini 150 dpi) dengan watermark "© Wan Fazlini Idayu – PKB". Penghalang: klik kanan/seret/pilih teks dimatikan, Ctrl+P/S/U/C dan F12 disekat, cetakan kosong, paparan dikaburkan bila tetingkap hilang fokus. Untuk kemas kini: ganti imej dalam `hal/` dan ubah `JUMLAH` dalam `ebook/index.html`.
- **19 Nov 2026:** Kad **Download Dev-C++** ditambah di bahagian 🛠️ Perisian. Fail: `download/Dev-Cpp_5_11_TDM-GCC_4_9_2_Setup.exe` (48 MB, SHA-256 `faad96bb…c9c0f1f`).
- **14 Nov 2026:** Kad Bahan Kursus (Padlet) dibuang dari Laman Utama (Padlet mengandungi data pelajar). Diganti dengan kad **Video Pembelajaran** → `video/`.
- **14 Nov 2026:** Video kini dibuka terus di YouTube (pemain terbenam dan tab baharu dibuang kerana tidak berfungsi pada sesetengah peranti).
- **15 Nov 2026:** Kad "Video Pembelajaran" dinamakan semula **Video**. Bahagian baharu **🧭 Panduan Learning Lab** di `video/`: Video Tour Learning Lab, Panduan Sistem Upload Jawapan Pelajar, Video Tour Games.
- **13 Nov 2026:** Repo dipindah dari `ayuwafa/clab-pkb` ke organization **CircuitCode-Lab** dan dinamakan semula `clab`. Alamat laman baharu: https://circuitcode-lab.github.io/clab/ (alamat lama `ayuwafa.github.io/clab-pkb/` tidak lagi berfungsi).
- **13 Nov 2026:** Learn C (Studio v4, flowchart I/O fixed) dipindah dari Netlify (golden-shortbread-13093b) ke `learn-c/`. Kad Learn C di Laman Utama kini `learn-c/`; butang ⌂ Laman Utama dalam Learn C kini `../`.
- **13 Nov 2026:** Laman Utama v4.1 dipindah dari Netlify (stately-crumble-3c7799) ke GitHub Pages. Sumber asal: repo `CircuitCode-Lab/C_Programming_Learning_Lab` (diarkibkan).

---
Hak Cipta & Idea © 2026 Wan Fazlini Idayu · Jabatan Kejuruteraan Elektrik, Politeknik Kota Bharu
