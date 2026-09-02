# Kontribusi

Matur nuwun kanggo kontribusi! Proyek iki varian saka [OpenCode](https://github.com/anomalyco/opencode).

Kontribusi direview adhedhasar ukuran lan dampak.

## Tipe Perubahan

| Tipe Perubahan | Aku Butuh Vote? | Sopo Ngvote? | Ambang Persetujuan |
| :--- | :--- | :--- | :--- |
| **Perubahan Kecil** | Ora | — | — |
| **Fitur Anyar** | Iya | Kabeh | >= 2/3 |
| **Perubahan Gedhe** | Iya | Voter Proyek Layak | >= 3/4 |

---

## Kabeh Vote Digawe Nggunakake Google Forms

---

## 1. Perubahan Kecil
> **Ora Butuh Vote.** Dimergake dening maintainer nalika wis siap.

* **Contoh:** Perbaikan bug/error/security, optimasi cilik, Koreksi docs/typo, lan refactor cilik non-breaking.

---

## 2. Fitur Anyar
> **Vote Publik Diperlukan.** Mbuka kanggo kabeh. Lulus karo persetujuan **>= 2/3** (dihitung minangka `Setuju / (Setuju + Tolak)`).

* **Workflow:**
  1. Mbuka GitHub Issue/Discussion sing nglacak propos.
  2. Maintainer nggolongake owah lan mbuka vote Google Forms publik.
  3. Yen lulus, implementasike fitur lan mbuka pull request ngereferensi vote.

---

## 3. Perubahan Gedhe
> **Vote Voter Proyek Diperlukan.** Dibatasi kanggo voter proyek layak. Lulus karo persetujuan **>= 3/4**.

* **Contoh:** Overhaul arsitektur, ngganti komponen gedhe, lan breaking changes.
* **Workflow:** Padha karo fitur anyar, nanging dibatasi kanggo voter proyek lan butuh ambang **>= 3/4**.

---

## 4. Vote & Integritas
* **Platform:** Digawe liwat Google Forms sing ditetepake sing dikonekake ing README/Discussions.
* **Pilihan:** Setuju, Tolak, utawa Menahan. Seri kalah.
* **Integritas:** Maintainer nggunakake kontrol Google Forms kanggo mencegah duplikat lan bisa nganggep vote fraud, otomatis, utawa spam ora sah.

---

## 5. Pull Request & Pedoman Kode
* **PR Best Practices:** Jelaskan owah kanthi jelas, tetep fokusi PR, kalebu test, lan referensi tembung vote. Aja nggabungake owah ora kasebut.
* **Kualitas Kode:** Ikuti konvensi proyek, hindari dependensi/duplikasi ora perlu, lan update dokumentasi kanggo owah user-facing.

---

## 6. Lisensi & Kode Upstream
* Diturutake saka [OpenCode](https://github.com/anomalyco/opencode).
* Kontributor kudu njaga hak cipta/lisensi pihak katelu lan pasti ana hak hukum kanggo ndistribusike kode sing dikirim.

---

## 7. Kewenangan Maintainer & Darurat
* **Kewenangan:** Maintainer nereview PR, nggolongake owah, ngrampungake sengketa, lan ngurus vote.
* **Perubahan Darurat:** Maintainer bisa mlebu vote *mung* kanggo perbaikan keamanan kritis, bug parah, utawa kehilangan data, lan kudu ndokumentasikake mlebu iku sawise.

---

## 8. Pedoman Komunitas & Perubahan Kebijakan
* **Pedoman:** Sopan, konstruktif, lan tetep relevant diskusi.
* **Perubahan Kebijakan:** Owah ing file iki butuh persetujuan saka **telu perempat (3/4)** voter proyek layak.