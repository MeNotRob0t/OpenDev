<p align="center">
  <img src="logo.png" alt="OpenDev logo">
</p>
<p align="center">OpenDev — เวอร์ชันปรับแต่งของ AI coding agent แบบ open source</p>

---

> [!IMPORTANT]
> OpenDev **ไม่ได้** สร้างโดยทีม OpenCode และ **ไม่ได้** เกี่ยวข้องกับ OpenCode ในทางใดทางหนึ่ง
> โปรเจกต์นี้เป็น variant ของ [OpenCode](https://github.com/anomalyco/opencode) โดย
> [anomalyco](https://github.com/anomalyco) AI coding agent ต้นทางที่เป็น open source
> สิทธิ์ทั้งหมดของ upstream codebase เป็นของผู้เขียนและผู้มีส่วนร่วมของ OpenCode

---

### OpenDev คืออะไร?

OpenDev เป็น personal variant ของ OpenCode ซึ่งเป็น open source AI coding agent ที่รันใน
terminal ของคุณ สร้างบน OpenCode codebase ด้วย local modifications และ configuration ที่ปรับแต่ง
สำหรับวิธีการทำงานของฉัน

สำหรับ upstream feature set ทั้งหมด documentation และ community ให้ดู
[**OpenCode**](https://github.com/anomalyco/opencode) และ docs ของมันที่ [**opencode.ai**](https://opencode.ai/docs)

### การติดตั้ง

OpenDev รันจาก source ด้วย [Bun](https://bun.sh)

```bash
# ติดตั้ง dependencies
bun install

# รัน dev server
bun dev

#ถ้าอยาก build ก็ได้

bun build ./src/index.ts --compile --outfile ./dist/OpenDev.exe
```

สำหรับ upstream binary installs (OpenCode ที่ไม่ได้ปรับแต่ง) ให้ดู
[official installer](https://opencode.ai/install)

### เอกสาร

OpenDev ถูก configure เหมือน OpenCode สำหรับวิธีการ configure OpenCode ให้ไปที่ upstream docs ที่
[**opencode.ai/docs**](https://opencode.ai/docs)

### การมีส่วนร่วม

นี่เป็น personal project แต่ว่ายนับ contributions

---

**Credits:** สร้างบน [OpenCode](https://github.com/anomalyco/opencode) โดย [anomalyco](https://github.com/anomalyco)