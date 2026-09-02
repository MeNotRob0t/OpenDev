# Güvenlik

## ÖNEMLİ

Yapay zeka tarafından oluşturulan güvenlik raporlarını kabul etmiyoruz. Bunların çok sayısı geliyor ve hepsini incelemek için kaynağımız yok. Gönderirseniz projeden otomatik olarak yasaklanacaksınız.

## Tehdit Modeli

### Genel Bakış

OpenCode, makinenizde yerel olarak çalışan yapay zeka destekli bir kodlama asistanıdır. Kabuk yürütme, dosya işlemleri ve web erişimi dahil güçlü araçlara erişimi olan bir ajan sistemi sağlar.

### Sandbox Yok

OpenCode ajan için **sandbox** yapmaz. İzin sistemi, kullanıcıların ajanının hangi eylemleri gerçekleştirdiğini bilmelerine yardımcı olmak için bir UX özelliği olarak mevcuttur - komutları yürütmeden, dosyaları yazmadan önce onay ister. Ancak, güvenlik yalıtımı sağlamak için tasarlanmamıştır.

Gerçek yalıtım ihtiyacınız varsa, OpenCode'u bir Docker konteyneri veya sanal makine içinde çalıştırın.

### Sunucu Modu

Sunucu modu sadece opt-in'dir. Etkinleştirildiğinde, HTTP Basic Auth gerektirmek için `OPENCODE_SERVER_PASSWORD` ayarlayın. Bu olmadan sunucu kimlik doğrulamasız çalışır (uyarı ile). Sunucuyu güvenli hale getirmek son kullanıcının sorumluluğundadır - sağladığı herhangi bir işlevsellik bir güvenlik açığı değildir.

### Kapsam Dışı

| Kategori | Gerekçe |
| ------------------------------- | ----------------------------------------------------------------------- |
| **Opt-in yapıldığında sunucu erişimi** | Sunucu modunu etkinleştirirseniz, API erişimi beklenen davranıştır |
| **Sandbox kaçışları** | İzin sistemi bir sandbox değildir (yukarıya bakın) |
| **LLM sağlayıcısı veri işleme** | Yapılandırdığınız LLM sağlayıcısına gönderilen veriler onların politikalarına tabidir |
| **MCP sunucusu davranışı** | Yapılandırdığınız harici MCP sunucuları güven sınırımızın dışındadır |
| **Kötü amaçlı yapılandırma dosyaları** | Kullanıcılar kendi yapılandırmalarını kontrol eder; bunları değiştirmek saldırı vektörü değildir |

---

# Güvenlik Sorunlarını Bildirme

Sorumlu bir şekilde bulgularınızı açıklamak için çabalarınızı takdir ediyoruz ve katkılarınızı tanımak için çaba göstereceğiz.

Güvenlik sorununu bildirmek için, lütfen GitHub Security Advisory ["Report a Vulnerability"](https://github.com/anomalyco/opencode/security/advisories/new) sekmesini kullanın.

Ekip, raporunuzun işlenmesindeki sonraki adımları belirten bir yanıt gönderecektir. Raporunuza ilk yanıttan sonra, güvenlik ekibi düzeltme ve tam duyuru yönündeki ilerleme hakkında sizi bilgilendirecek ve ek bilgi veya rehberlik isteyebilir.

## Yükseltme

Raporunuzun onayını 6 iş günü içinde almazsanız, security@anoma.ly adresine e-posta gönderebilirsiniz.