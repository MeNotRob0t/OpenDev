<p align="center">
  <img src="logo.png" alt="OpenDev logo">
</p>
<p align="center">OpenDev — một biến thể của AI coding agent open source.</p>

---

> [!IMPORTANT]
> OpenDev **không** được xây dựng bởi đội ngũ OpenCode và **không** liên kết với nó theo bất kỳ cách nào.
> Dự án này là một biến thể của [OpenCode](https://github.com/anomalyco/opencode) bởi
> [anomalyco](https://github.com/anomalyco), AI coding agent open source gốc.
> Tất cả credit cho upstream codebase thuộc về các tác giả và người đóng góp của OpenCode.

---

### OpenDev là gì?

OpenDev là một biến thể cá nhân của OpenCode, một AI coding agent open source chạy trong
terminal của bạn. Nó được xây dựng trên codebase của OpenCode với các sửa đổi cục bộ và cấu hình được điều chỉnh
cho cách tôi làm việc.

Để có bộ tính năng upstream đầy đủ, tài liệu và cộng đồng, hãy xem
[**OpenCode**](https://github.com/anomalyco/opencode) và docs của nó tại [**opencode.ai**](https://opencode.ai/docs).

### Cài đặt

OpenDev chạy từ source với [Bun](https://bun.sh).

```bash
# Cài đặt dependencies
bun install

# Chạy dev server
bun dev

#nếu bạn muốn, bạn cũng có thể build nó

bun build ./src/index.ts --compile --outfile ./dist/OpenDev.exe
```

Đối với các bản cài đặt binary upstream (OpenCode không sửa đổi), hãy xem
[official installer](https://opencode.ai/install).

### Tài liệu

OpenDev được cấu hình theo cách tương tự như OpenCode. Để biết cách OpenCode được cấu hình, hãy truy cập upstream docs tại
[**opencode.ai/docs**](https://opencode.ai/docs).

### Đóng góp

Đây là một dự án cá nhân, nhưng các đóng góp được chào đón

---

**Credits:** Xây dựng trên [OpenCode](https://github.com/anomalyco/opencode) bởi [anomalyco](https://github.com/anomalyco).