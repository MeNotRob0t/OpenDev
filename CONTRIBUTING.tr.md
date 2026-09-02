# Katkıda Bulunma

Katkınız için teşekkürler! Bu proje [OpenCode](https://github.com/anomalyco/opencode)'ın bir varyantıdır.

Katkılar boyutları ve etkileri temel alınarak incelenir.

## Değişiklik Türleri

| Değişiklik Türü | Oy Gerekli mi? | Kim Oyluyor? | Onay Eşiği |
| :--- | :--- | :--- | :--- |
| **Küçük Değişiklikler** | Hayır | — | — |
| **Yeni Özellikler** | Evet | Herkes | >= 2/3 |
| **Büyük Değişiklikler** | Evet | Uygun Proje Oyuncuları | >= 3/4 |

---

## Tüm oylamalar Google Forms üzerinden yapılır

---

## 1. Küçük Değişiklikler
> **Oy gerekmez.** Hazır olduğunda bakıcılar tarafından birleştirilir.

* **Örnekler:** Hata/hata/güvenlik düzeltmeleri, küçük optimizasyonlar, doküman/yazım hatası düzeltmeleri ve küçük breaking-change olmayan refaktörler.

---

## 2. Yeni Özellikler
> **Kamu oyu gerekli.** Herkese açık. **>= 2/3** onayla geçer (`Onay / (Onay + Red)` olarak hesaplanır).

* **İş Akışı:**
  1. Öneriyi detaylandıran bir GitHub Issue/Tartışma açın.
  2. Bakıcılar değişikliği sınıflandırır ve kamuya açık bir Google Forms oylaması açar.
  3. Geçerse, özelliği uygulayın ve oylamaya atıfta bulunan bir pull request açın.

---

## 3. Büyük Değişiklikler
> **Proje oyuncusu oyu gerekli.** Uygun proje oyuncularıyla sınırlı. **>= 3/4** onayla geçer.

* **Örnekler:** Mimari yeniden yapılandırmalar, büyük bileşenlerin değiştirilmesi ve breaking changes.
* **İş Akışı:** Yeni özellikler gibi, ancak proje oyuncularıyla sınırlı ve **>= 3/4** eşiği gerektirir.

---

## 4. Oylama ve Bütünlük
* **Platform:** README/Tartışmalarda bağlantılı belirli bir Google Form üzerinden gerçekleştirilir.
* **Seçenekler:** Onayla, Reddet veya Çekil. Beraberlikler başarısız olur.
* **Bütünlük:** Bakıcılar Google Forms kontrollerini kullanarak yinelenenleri önler ve dolandırıcılı, otomatik veya spam oyları geçersiz kılabilir.

---

## 5. Pull Requestler ve Kod Yönergeleri
* **PR En İyi Uygulamaları:** Değişiklikleri net açıklayın, PR'leri odaklı tutun, testler ekleyin ve herhangi bir oylama sonucuna atıfta bulunun. İlgisiz değişiklikleri birleştirmeyin.
* **Kod Kalitesi:** Proje kurallarını izleyin, gereksiz bağımlılıkları/tekrarlamayı önleyin ve kullanıcıya yönelik değişiklikler için belgeleri güncelleyin.

---

## 6. Lisanslama ve Upstream Kod
* [OpenCode](https://github.com/anomalyco/opencode)'dan türetilmiştir.
* Katkıda bulunanlar üçüncü taraf telif haklarını/lisansları korumalı ve gönderilen kodu dağıtma yasal hakkına sahip olmalıdır.

---

## 7. Bakıcı Yetkisi ve Acil Durumlar
* **Yetki:** Bakıcılar PR'leri inceler, değişiklikleri sınıflandırır, uyuşmazlıkları çözer ve oylamaları yönetir.
* **Acil Değişiklikler:** Bakıcılar oylamayı *sadece* kritik güvenlik düzeltmeleri, ciddi hatalar veya veri kaybı için atlayabilir ve bunu sonrasında belgelenmelidir.

---

## 8. Topluluk Yönergeleri ve Politika Değişiklikleri
* **Yönergeler:** Saygılı, yapıcı olun ve tartışmaları konuyla alakalı tutun.
* **Politika Güncellemeleri:** Bu dosyadaki değişiklikler, uygun proje oyuncularının en az **üçte dört (3/4)**'ünün onayını gerektirir.