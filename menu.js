/* ================================================================
   MENU SISI CLab — dikongsi oleh semua halaman
   Cara guna: <script src="menu.js" defer></script>  (laluan relatif ke akar clab/)
   - Laman Utama + skrin lebar (≥1200px): menu tetap di kiri, boleh dilipat jadi ikon.
   - Halaman lain / telefon: butang ☰ terapung (bawah kiri) atau dalam header; menu ditarik keluar.
   Untuk tambah/ubah butang: edit senarai MENU di bawah.
   ================================================================ */
(function () {
  if (window.__clabMenu) return; window.__clabMenu = true;
  var skrip = document.currentScript || document.querySelector('script[src$="menu.js"]');
  var BASE = skrip ? skrip.src.replace(/menu\.js(\?.*)?$/, '') : './';
  var PW = 'https://script.google.com/macros/s/AKfycbxQU5YHWNJ8TzcEE-g60AhIDCPG1N-lRVuNcVDIbBELSQJD2V-7_gAlMdgFeovYeMSr1Q/exec';
  var RAYUAN = 'https://script.google.com/macros/s/AKfycbzLWcSIcWyFfVeiKsHS4WUlQy833Yc7Pu6-gMESXf9RsGCuJ5lkB-_jiE_quc58WhuW/exec';

  // [ikon, nama, pautan, jenis]  jenis: 'luar' = tab baharu, 'muat' = muat turun, 'aksi' = fungsi
  var MENU = [
    [null, [['⌂', 'Laman Utama', BASE]]],
    ['Urusan Kelas', [
      ['✅', 'Tanda Kehadiran', 'https://circuitcode-lab.github.io/attendance/', 'luar'],
      ['📨', 'Rayuan Kehadiran', RAYUAN, 'luar'],
      ['📤', 'Hantar PW', PW, 'luar'],
      ['🧭', 'Panduan Hantar PW', BASE + '#cara']
    ]],
    ['Belajar & Berlatih', [
      ['💻', 'Learn C', BASE + 'learn-c/', '', '1'],
      ['🧑‍🏫', 'SmartTutor', BASE + 'smarttutor/', '', '2'],
      ['▶️', 'C Lab Compiler', 'https://circuitcode-lab.github.io/compiler/', '', '3'],
      ['🎮', 'Games', BASE + 'games/', '', '4']
    ]],
    ['Bahan Rujukan', [
      ['📘', 'E-book', BASE + 'ebook/'],
      ['🎬', 'Galeri Video', BASE + 'video/'],
      ['🤖', 'AI Tutor', 'https://notebook.google.com/notebook/acbbb872-8dda-4c05-95f5-35893985ec20', 'luar']
    ]],
    ['Lain-lain', [
      ['⬇️', 'Dev-C++ (Windows)', BASE + 'download/Dev-Cpp_5_11_TDM-GCC_4_9_2_Setup.exe', 'muat'],
      ['💬', 'Bantuan Portal', 'bantuan', 'aksi'],
      ['🌙', 'Light / Dark', 'tema', 'aksi']
    ]]
  ];

  var laluan = location.pathname.replace(/index\.html$/, '');
  var akar = new URL(BASE).pathname;
  var diLamanUtama = laluan === akar;
  function semasa(href) {
    try {
      var u = new URL(href, location.href);
      if (u.origin !== location.origin || u.hash) return false;
      var p = u.pathname.replace(/index\.html$/, '');
      return p === akar ? laluan === akar : laluan.indexOf(p) === 0;
    } catch (e) { return false; }
  }

  /* ---------- Gaya ---------- */
  var css = `
  .cm-panel{position:fixed;top:0;left:0;bottom:0;width:250px;z-index:9998;display:flex;flex-direction:column;
    background:#fff;color:#1B1F3B;border-right:1px solid #E3E6F2;box-shadow:6px 0 24px rgba(27,31,59,.12);
    font-family:"Plus Jakarta Sans","Segoe UI",Roboto,Arial,sans-serif;transform:translateX(-105%);transition:transform .25s ease,width .2s ease}
  .cm-gelap .cm-panel{background:#181C33;color:#EEF0FF;border-color:#2B3152}
  .cm-buka .cm-panel{transform:none}
  .cm-kepala{display:flex;align-items:center;gap:10px;padding:14px 14px 10px;border-bottom:1px solid rgba(127,127,160,.2)}
  .cm-logo{width:36px;height:36px;flex:none;border-radius:10px;display:grid;place-items:center;color:#fff;font-weight:800;
    background:linear-gradient(135deg,#3A2CC9,#7B3FE4 60%,#E2508C)}
  .cm-kepala b{display:block;font-size:15px;line-height:1.2}.cm-kepala small{display:block;font-size:11.5px;opacity:.7;font-weight:600}
  .cm-tutup,.cm-lipat{margin-left:auto;border:0;background:transparent;color:inherit;font-size:20px;cursor:pointer;border-radius:8px;width:34px;height:34px}
  .cm-tutup:hover,.cm-lipat:hover{background:rgba(123,63,228,.12)}
  .cm-lipat{display:none}
  .cm-isi{overflow-y:auto;padding:8px 10px 16px;flex:1}
  .cm-kump{font-size:11px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;opacity:.6;margin:14px 10px 6px}
  .cm-item{display:flex;align-items:center;gap:10px;width:100%;text-decoration:none;color:inherit;font-family:inherit;font-weight:600;font-size:14.5px;line-height:1.3;
    padding:9px 10px;border-radius:11px;border:0;background:transparent;cursor:pointer;text-align:left}
  .cm-item:hover{background:rgba(123,63,228,.10)}
  .cm-item.aktif{background:linear-gradient(135deg,#3A2CC9,#7B3FE4);color:#fff}
  .cm-ik{width:26px;flex:none;text-align:center;font-size:18px}
  .cm-no{margin-left:auto;font-size:11px;font-weight:800;width:20px;height:20px;border-radius:50%;display:grid;place-items:center;background:rgba(123,63,228,.15)}
  .cm-item.aktif .cm-no{background:rgba(255,255,255,.25)}
  .cm-luar{margin-left:auto;font-size:11px;opacity:.55}
  .cm-latar{position:fixed;inset:0;z-index:9997;background:rgba(15,18,34,.45);opacity:0;pointer-events:none;transition:opacity .25s}
  .cm-buka .cm-latar{opacity:1;pointer-events:auto}
  .cm-btn{position:fixed;left:14px;bottom:14px;z-index:9996;width:50px;height:50px;border-radius:50%;border:0;cursor:pointer;color:#fff;font-size:22px;
    background:linear-gradient(135deg,#3A2CC9,#7B3FE4 60%,#E2508C);box-shadow:0 8px 20px rgba(58,44,201,.4)}
  .cm-btn-header{position:static;width:42px;height:42px;border-radius:12px;font-size:20px;box-shadow:none;flex:none}
  :focus-visible.cm-item,.cm-btn:focus-visible{outline:3px solid #A99CFF;outline-offset:2px}
  /* Laman Utama, skrin lebar: menu tetap */
  @media (min-width:1200px){
    .cm-tetap .cm-panel{transform:none;box-shadow:none}
    .cm-tetap .cm-latar{display:none}
    .cm-tetap body{padding-left:250px}
    .cm-tetap .cm-tutup{display:none}.cm-tetap .cm-lipat{display:block}
    .cm-tetap .cm-btn-header{display:none}
    .cm-tetap:not(.cm-kecil) header.atas .jenama{visibility:hidden}
    .cm-tetap.cm-kecil body{padding-left:68px}
    .cm-tetap.cm-kecil .cm-panel{width:68px}
    .cm-tetap.cm-kecil .cm-kepala span,.cm-tetap.cm-kecil .cm-kump,.cm-tetap.cm-kecil .cm-teks,.cm-tetap.cm-kecil .cm-no,.cm-tetap.cm-kecil .cm-luar,.cm-tetap.cm-kecil .cm-logo{display:none}
    .cm-tetap.cm-kecil .cm-kepala{justify-content:center;padding:14px 6px 10px}.cm-tetap.cm-kecil .cm-lipat{margin:0}
    .cm-tetap.cm-kecil .cm-item{justify-content:center;padding:10px 0}
    .cm-tetap.cm-kecil .cm-isi{padding:8px 6px}
  }
  @media (prefers-reduced-motion:reduce){.cm-panel,.cm-latar{transition:none}}
  @media print{.cm-panel,.cm-btn,.cm-latar{display:none!important}}`;
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* ---------- Binaan ---------- */
  var html = document.documentElement;
  var latar = document.createElement('div'); latar.className = 'cm-latar';
  var panel = document.createElement('nav'); panel.className = 'cm-panel'; panel.id = 'cm-panel'; panel.setAttribute('aria-label', 'Menu CLab');
  var isi = '<div class="cm-kepala"><span class="cm-logo" aria-hidden="true">C</span><span><b>CLab</b><small>DEC20313 · PKB</small></span>' +
    '<button type="button" class="cm-tutup" aria-label="Tutup menu">✕</button><button type="button" class="cm-lipat" aria-label="Lipat menu" title="Lipat / buka menu">☰</button></div><div class="cm-isi">';
  MENU.forEach(function (k) {
    if (k[0]) isi += '<div class="cm-kump">' + k[0] + '</div>';
    k[1].forEach(function (m) {
      var ik = '<span class="cm-ik" aria-hidden="true">' + m[0] + '</span><span class="cm-teks">' + m[1] + '</span>' +
        (m[4] ? '<span class="cm-no">' + m[4] + '</span>' : '') + (m[3] === 'luar' ? '<span class="cm-luar" aria-hidden="true">↗</span>' : '');
      if (m[3] === 'aksi') isi += '<button type="button" class="cm-item" data-aksi="' + m[2] + '" title="' + m[1] + '">' + ik + '</button>';
      else isi += '<a class="cm-item' + (semasa(m[2]) ? ' aktif" aria-current="page' : '') + '" href="' + m[2] + '" title="' + m[1] + '"' +
        (m[3] === 'luar' ? ' target="_blank" rel="noopener"' : '') + (m[3] === 'muat' ? ' download' : '') + '>' + ik + '</a>';
    });
  });
  panel.innerHTML = isi + '</div>';
  document.body.appendChild(latar); document.body.appendChild(panel);

  // Butang ☰: dalam header Laman Utama jika ada, jika tidak terapung di bawah kiri
  var btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'cm-btn'; btn.innerHTML = '☰';
  btn.setAttribute('aria-label', 'Buka menu'); btn.setAttribute('aria-controls', 'cm-panel'); btn.setAttribute('aria-expanded', 'false');
  var hdr = diLamanUtama && document.querySelector('header.atas .wrap');
  if (hdr) { btn.classList.add('cm-btn-header'); hdr.insertBefore(btn, hdr.firstChild); }
  else document.body.appendChild(btn);

  /* ---------- Tingkah laku ---------- */
  function gelapKah() { return html.getAttribute('data-theme') === 'dark' || document.body.classList.contains('dark') || html.classList.contains('dark'); }
  function kemasTema() { html.classList.toggle('cm-gelap', gelapKah()); }
  kemasTema();
  new MutationObserver(kemasTema).observe(html, { attributes: true, attributeFilter: ['data-theme', 'class'] });
  new MutationObserver(kemasTema).observe(document.body, { attributes: true, attributeFilter: ['class'] });

  function buka() { html.classList.add('cm-buka'); btn.setAttribute('aria-expanded', 'true'); var a = panel.querySelector('.cm-item'); if (a) a.focus(); }
  function tutup() { html.classList.remove('cm-buka'); btn.setAttribute('aria-expanded', 'false'); }
  btn.onclick = function () { html.classList.contains('cm-buka') ? tutup() : buka(); };
  latar.onclick = tutup;
  panel.querySelector('.cm-tutup').onclick = tutup;
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') tutup(); });
  // Leret ke kiri untuk tutup (telefon)
  var x0 = null;
  panel.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  panel.addEventListener('touchend', function (e) { if (x0 !== null && e.changedTouches[0].clientX - x0 < -50) tutup(); x0 = null; });
  panel.addEventListener('click', function (e) { var a = e.target.closest('a.cm-item'); if (a && !html.classList.contains('cm-tetap')) tutup(); });

  // Menu tetap di Laman Utama (skrin lebar) + lipat diingati
  if (diLamanUtama) {
    html.classList.add('cm-tetap');
    try { if (localStorage.getItem('clab-menu') === 'kecil') html.classList.add('cm-kecil'); } catch (e) {}
    panel.querySelector('.cm-lipat').onclick = function () {
      html.classList.toggle('cm-kecil');
      try { localStorage.setItem('clab-menu', html.classList.contains('cm-kecil') ? 'kecil' : 'penuh'); } catch (e) {}
    };
  }

  // Aksi: Bantuan Portal & tema
  panel.addEventListener('click', function (e) {
    var b = e.target.closest('[data-aksi]'); if (!b) return;
    if (b.dataset.aksi === 'bantuan') {
      var bot = document.getElementById('bot-btn');
      if (bot) { tutup(); bot.click(); } else location.href = BASE + '#bantuan';
    } else if (b.dataset.aksi === 'tema') {
      var sasaran = gelapKah() ? 'light' : 'dark';
      var t = document.querySelector('[data-tema="' + sasaran + '"]');
      if (typeof window.toggleTheme === 'function') window.toggleTheme();   // Learn C
      else if (t) t.click();
      else { html.setAttribute('data-theme', sasaran); try { localStorage.setItem('clab-tema', sasaran); } catch (e2) {} }
      setTimeout(kemasTema, 50);
    }
  });
  // Laman Utama: buka Bantuan Portal jika datang dengan #bantuan
  if (diLamanUtama && location.hash === '#bantuan') setTimeout(function () { var bot = document.getElementById('bot-btn'); if (bot) bot.click(); }, 400);
})();
