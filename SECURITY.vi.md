# Bảo mật

## QUAN TRỌNG

Chúng tôi không chấp nhận báo cáo bảo mật được tạo bởi AI. Chúng tôi nhận được số lượng lớn các báo cáo này và hoàn toàn không có nguồn lực để xem xét tất cả. Nếu bạn gửi một báo cáo, bạn sẽ bị cấm tự động khỏi dự án.

## Mô hình Đe dọa

### Tổng quan

OpenCode là một trợ lý lập trình dựa trên AI chạy cục bộ trên máy của bạn. Nó cung cấp một hệ thống agent với quyền truy cập vào các công cụ mạnh mẽ, bao gồm thực thi shell, thao tác tệp và truy cập web.

### Không có Sandbox

OpenCode **không** sandbox agent. Hệ thống quyền tồn tại như một tính năng UX để giúp người dùng nhận thức được các hành động mà agent đang thực hiện - nó yêu cầu xác nhận trước khi thực thi lệnh, ghi tệp, v.v. Tuy nhiên, nó không được thiết kế để cung cấp cô lập bảo mật.

Nếu bạn cần cô lập thực sự, hãy chạy OpenCode bên trong một container Docker hoặc VM.

### Chế độ Server

Chế độ server chỉ là opt-in. Khi được bật, hãy đặt `OPENCODE_SERVER_PASSWORD` để yêu cầu HTTP Basic Auth. Nếu không, server chạy không được xác thực (với cảnh báo). Việc bảo mật server là trách nhiệm của người dùng cuối - bất kỳ chức năng nào nó cung cấp cũng không phải là lỗ hổng.

### Ngoài Phạm vi

| Danh mục | Lý do |
| ------------------------------- | ----------------------------------------------------------------------- |
| **Truy cập server khi opt-in** | Nếu bạn bật chế độ server, truy cập API là hành vi dự kiến |
| **Thoát Sandbox** | Hệ thống quyền không phải là sandbox (xem trên) |
| **Xử lý dữ liệu nhà cung cấp LLM** | Dữ liệu gửi đến nhà cung cấp LLM đã cấu hình của bạn được điều chỉnh bởi chính sách của họ |
| **Hành vi server MCP** | Các server MCP bên ngoài bạn cấu hình nằm ngoài ranh giới tin cậy của chúng tôi |
| **Tệp cấu hình độc hại** | Người dùng kiểm soát cấu hình của riêng họ; sửa đổi nó không phải là vectơ tấn công |

---

# Báo cáo Vấn đề Bảo mật

Chúng tôi trân trọng nỗ lực của bạn trong việc tiết lộ trách nhiệm các phát hiện của mình và sẽ nỗ lực hết sức để công nhận đóng góp của bạn.

Để báo cáo vấn đề bảo mật, vui lòng sử dụng tab GitHub Security Advisory ["Report a Vulnerability"](https://github.com/anomalyco/opencode/security/advisories/new).

Đội nhóm sẽ gửi phản hồi chỉ ra các bước tiếp theo trong việc xử lý báo cáo của bạn. Sau phản hồi ban đầu cho báo cáo của bạn, đội nhóm bảo mật sẽ cập nhật cho bạn tiến trình về bản sửa lỗi và công bố đầy đủ, và có thể yêu cầu thông tin hoặc hướng dẫn bổ sung.

## Leo thang

Nếu bạn không nhận được xác nhận báo cáo của mình trong vòng 6 ngày làm việc, bạn có thể gửi email đến security@anoma.ly