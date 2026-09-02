<p align="center">
  <img src="logo.png" alt="OpenDev logo">
</p>
<p align="center">OpenDev — 오픈소스 AI 코딩 에이전트의 변형.</p>

---

> [!IMPORTANT]
> OpenDev는 OpenCode 팀이 만든 것이 **아니며** 어떤 방식으로도 **제휴되어 있지 않습니다**.
> 이 프로젝트는 원본 오픈소스 AI 코딩 에이전트인 [anomalyco](https://github.com/anomalyco)의
> [OpenCode](https://github.com/anomalyco/opencode) 변형입니다.
> 업스트림 코드베이스에 대한 모든 크레딧은 OpenCode 작성자와 기여자들에게 돌아갑니다.

---

### OpenDev란 무엇인가요?

OpenDev는 터미널에서 실행되는 오픈소스 AI 코딩 에이전트인 OpenCode의 개인적 변형입니다. 내 작업 방식에 맞춘 로컬 수정 사항과 설정으로 OpenCode 코드베이스 위에 구축되었습니다.

전체 업스트림 기능 세트, 문서, 커뮤니티는
[**OpenCode**](https://github.com/anomalyco/opencode)와 [**opencode.ai**](https://opencode.ai/docs)의 문서를 참조하세요.

### 설치

OpenDev는 [Bun](https://bun.sh)을 사용하여 소스에서 실행됩니다.

```bash
# 의존성 설치
bun install

# 개발 서버 실행
bun dev

# 원한다면 빌드도 가능

bun build ./src/index.ts --compile --outfile ./dist/OpenDev.exe
```

업스트림 바이너리 설치(수정되지 않은 OpenCode)의 경우
[공식 설치 프로그램](https://opencode.ai/install)을 참조하세요.

### 문서

OpenDev는 OpenCode와 같은 방식으로 설정됩니다. OpenCode 설정 방법은 업스트림 문서 [**opencode.ai/docs**](https://opencode.ai/docs)에서 확인하세요.

### 기여

이것은 개인 프로젝트지만 기여는 환영합니다

---

**크레딧:** [OpenCode](https://github.com/anomalyco/opencode) 기반으로 [anomalyco](https://github.com/anomalyco)가 구축.