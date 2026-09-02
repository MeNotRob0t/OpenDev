# Keamanan

## PENTING

Kita ora nampa laporan keamanan sing digenerate dening AI. Kita nampa akeh banget saka iku lan kita ora duwe resource kanggo nereview kabehe. Yen sampeyan ngirimake, bakal kena banned otomatis saka proyek.

## Model Ancaman

### Gambaran Umum

OpenCode yaiku asisten coding sing didhukung AI sing lumaku lokal ing mesin sampeyan. Iku nuduhake sistem agent kanthi akses kanggo tool akeh banget kalebu eksekusi shell, operasi file, lan akses web.

### Ora Ana Sandbox

OpenCode **ora** nggawe sandbox agent. Sistem permesinan ana minangka fitur UX kanggo mbantu penggunane tetep sadar babagan opi sing dilakoni agent - nggawe konfirmasi sadurunge ngeksekusi command, nulis file, liyane. Nanging, ora didesain kanggo nuduhake isolasi keamanan.

Yen sampeyan butuh isolasi bener, jalukake OpenCode njero Docker container utawa VM.

### Modhe Server

Modhe server opt-in mung. Yen diaktifake, set `OPENCODE_SERVER_PASSWORD` kanggo butuh HTTP Basic Auth. Ora kaya ngene, server lumaku tanpa autentikasi (kanthi peringatan). Iku tanggung jawab penggunane pungkasan kanggo ngamankake server - fungsi sing disedhiakake ora vulnerability.

### Out of Scope

| Kategori | Alasan |
| ------------------------------- | ----------------------------------------------------------------------- |
| **Akses server yen opt-in** | Yen sampeyan nganaktifake modhe server, akses API yaiku prilaku sing diarep-arepke |
| **Sandbox escapes** | Sistem permesinan ora sandbox (deleng ndhuwur) |
| **Penanganan data penyedia LLM** | Data sing dikirimake kanggo penyedia LLM sing dikonfigurasi diatur dening policy dhéwé |
| **Perilaku server MCP** | Server MCP eksternal sing dikonfigurasi sampeyan ana njaba trust boundary kita |
| **File konfigurasi jahat** | Pengguna kontrol konfigurasi dhéwé; ngowahi ora vektor serangan |

---

# Nglaporake Masalah Keamanan

Kita nggawe apresiasi kanggo usaha sampeyan kanggo ngungkapake temuan kanthi tanggung jawab, lan bakal nglakoni kabeh upaya kanggo ngakoni kontribusi sampeyan.

Kanggo nglaporake masalah keamanan, mangga gunakake tab GitHub Security Advisory ["Report a Vulnerability"](https://github.com/anomalyco/opencode/security/advisories/new).

Tim bakal ngirimake tanggapan sing nuduhake langkah selanjutnya ing nganggo laporan sampeyan. Sawise tanggapan awal kanggo laporan sampeyan, tim keamanan bakal tetep nginformasikan sampeyan babagan kemajuan ngarepake perbaikan lan pengumuman purnan, lan bisa nggawe pitakonan kanggo informasi utawa pandhuan tambahan.

## Eskalasi

Yen sampeyan ora nampa pengakuan kanggo laporan sampeyan sakheartine 6 dina bisnis, sampeyan bisa ngirim email marang security@anoma.ly