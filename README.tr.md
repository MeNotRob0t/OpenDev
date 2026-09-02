<p align="center">
  <img src="logo.png" alt="OpenDev logo">
</p>
<p align="center">OpenDev — açık kaynak AI kodlama ajanı'nın bir varyantı.</p>

---

> [!IMPORTANT]
> OpenDev, OpenCode ekibi tarafından oluşturulmamış ve herhangi bir şekilde **bağlı değildir**.
> Bu proje, orijinal açık kaynak AI kodlama ajanı olan [anomalyco](https://github.com/anomalyco) tarafından
> [OpenCode](https://github.com/anomalyco/opencode)'ın bir varyantıdır.
> Upstream kod tabanı için tüm krediler OpenCode yazarlarına ve katkıda bulunanlara aittir.

---

### OpenDev Nedir?

OpenDev, terminalinizde çalışan açık kaynak AI kodlama ajanı olan OpenCode'un kişisel bir varyantıdır. Benim çalışma şeklim için uyarlanmış yerel değişiklikler ve yapılandırma ile OpenCode kod tabanı üzerine inşa edilmiştir.

Tam upstream özellik seti, belge ve topluluk için
[**OpenCode**](https://github.com/anomalyco/opencode) ve [**opencode.ai**](https://opencode.ai/docs)上的文档 bakın.

### Kurulum

OpenDev [Bun](https://bun.sh) ile kaynak koddan çalışır.

```bash
# Bağımlılıkları yükleyin
bun install

# Geliştirme sunucusunu çalıştırın
bun dev

#isterseniz derleyebilirsiniz

bun build ./src/index.ts --compile --outfile ./dist/OpenDev.exe
```

Upstream binary kurulumları (değiştirilmemiş OpenCode) için
[resmi kurucu](https://opencode.ai/install) adresine bakın.

### Belgeler

OpenDev, OpenCode ile aynı şekilde yapılandırılır. OpenCode nasıl yapılandırılır için upstream belgelerine
[**opencode.ai/docs**](https://opencode.ai/docs) adresinden gidin.

### Katkıda Bulunma

Bu bir kişisel projedir, ancak katkılar hoş karşılanır

---

**Krediler:** [OpenCode](https://github.com/anomalyco/opencode) üzerinde [anomalyco](https://github.com/anomalyco) tarafından oluşturulmuştur.