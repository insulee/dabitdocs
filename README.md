# DABIT DOCS

다빛솔루션 제품 기술문서 사이트. Obsidian에서 작성한 마크다운 문서를 Quartz 4로 빌드하여 GitHub Pages에 배포한다.

| 항목 | 값 |
|------|-----|
| 사이트 | https://docs.dabitsol.com |
| 기술 스택 | Quartz 4.5.2 + GitHub Pages + GitHub Actions |
| Node.js | >= 22 |
| 브랜치 | `v4` |

## 프로젝트 구조

```
dabitdocs/                 ← Obsidian 볼트 (여기서 문서 작성)
├── 0. DABIT DOCS 소개/
├── 1. 시작하기/
├── 2. 사용자 매뉴얼/
├── 3. 전문자료/
├── 4. 고객지원/
├── 5. 소프트웨어 다운로드/
├── 6. 다빛솔루션 소개/
└── Inbox/files/            ← 이미지, 첨부파일

dabitdocs-quartz/          ← 이 저장소 (빌드 & 배포용)
├── content/               ← 볼트에서 복사된 콘텐츠
├── quartz.config.ts       ← 사이트 설정
├── quartz.layout.ts       ← 레이아웃 설정
├── deploy.sh              ← 배포 자동화 스크립트
└── .github/workflows/
    └── deploy.yml         ← GitHub Actions 워크플로
```

## 배포 방법

### 문서 수정 후 배포 (일상 작업)

1. Obsidian에서 `dabitdocs/` 볼트의 문서를 편집하고 저장한다.
2. 아래 방법 중 하나로 배포한다:

```bash
# 방법 1: 배포 스크립트 (권장)
bash "D:/Note/20_Marketing_Team/22_Area/dabitdocs-quartz/deploy.sh"

# 방법 2: Claude Code 스킬
/deploy
```

스크립트가 하는 일:
1. `content/` 디렉토리 초기화
2. 볼트에서 마크다운 + 첨부파일 복사 (`.obsidian`, `.trash`, `Template` 등 제외)
3. 프론트매터 자동 수정 (Obsidian `---` 구분선 호환 처리)
4. `npx quartz sync` 실행 (빌드 + git push)
5. GitHub Actions가 자동으로 사이트에 배포

### 수동 배포

content를 직접 관리하는 경우:

```bash
cd "D:/Note/20_Marketing_Team/22_Area/dabitdocs-quartz"
npx quartz sync
```

## 배포 흐름

```
Obsidian 문서 편집
  → deploy.sh (콘텐츠 복사 + 프론트매터 수정)
    → npx quartz sync (빌드 + git push to v4)
      → GitHub Actions (빌드 + GitHub Pages 배포)
        → https://docs.dabitsol.com 반영
```

## 문서 동기화

배포 시 Obsidian 볼트(`dabitdocs/`)와 Quartz 콘텐츠(`content/`) 간 **전체 동기화(full sync)** 가 수행된다.

### 동기화 방식

`deploy.sh`는 매 실행 시 다음 순서로 동작한다:

1. `content/` 내부를 전부 삭제 (`index.md`, `CNAME`만 백업 후 복원)
2. 볼트에서 대상 파일을 `content/`로 새로 복사
3. 프론트매터 자동 수정
4. `npx quartz sync`로 빌드 + push

즉 **증분(diff) 동기화가 아닌 전체 교체** 방식이므로, 볼트에서 파일을 생성·수정·삭제하면 다음 배포 시 `content/`에 그대로 반영된다.

### 동기화 대상 / 제외 항목

| 구분 | 내용 |
|------|------|
| 동기화 대상 | 볼트 내 모든 파일 (마크다운 + 이미지 + 첨부파일) |
| 제외 | `.obsidian/`, `.claude/`, `.trash/`, `Template/`, `Inbox/*.md`, `publish.css`, `publish.js`, `googlef3332cce3b4aeec5.html` |
| 항상 유지 | `content/index.md` (랜딩 페이지), `content/CNAME` (커스텀 도메인) |

### 주의사항

- `content/` 디렉토리를 직접 수정해도 다음 배포 시 볼트 기준으로 덮어쓰기된다. **문서 편집은 반드시 Obsidian 볼트에서** 한다.
- 볼트에서 파일을 삭제하면 사이트에서도 제거된다. Obsidian의 `.trash/`로 이동한 파일은 동기화 대상에서 자동 제외된다.

## 초기 설정 (최초 1회)

이미 설정 완료된 상태이다. 새 환경에서 다시 구성할 경우 아래 순서를 따른다.

### 1. 프로젝트 클론 및 의존성 설치

```bash
git clone https://github.com/insulee/dabitdocs.git dabitdocs-quartz
cd dabitdocs-quartz
npm i
```

### 2. GitHub Pages 설정

- 저장소 Settings > Pages > Source를 **GitHub Actions**로 설정
- Custom domain에 `docs.dabitsol.com` 입력
- Enforce HTTPS 활성화

### 3. DNS 설정 (카페24)

카페24 호스팅센터 > 도메인 관리 > DNS 관리에서:

| 타입 | 호스트 | 대상 |
|------|--------|------|
| CNAME | docs.dabitsol.com | insulee.github.io |

## 주요 설정

### quartz.config.ts

| 설정 | 값 |
|------|-----|
| pageTitle | DABIT DOCS |
| locale | ko-KR |
| baseUrl | docs.dabitsol.com |
| 본문/헤더 폰트 | Pretendard Variable |
| 코드 폰트 | JetBrains Mono |
| 테마 | Stone 계열 커스텀 (라이트/다크) |

### quartz.layout.ts

- 좌측: 검색, 다크모드, 리더모드, 탐색기(Explorer)
- 우측: 목차(TableOfContents), 백링크(Backlinks)
- 전역: AI 기술지원 챗봇 (`chatbot.dabit.synology.me`)

## 커스텀 컴포넌트

### AI 챗봇

| 파일 | 역할 |
|------|------|
| `quartz/components/Chatbot.tsx` | 컴포넌트 본체 |
| `quartz/components/scripts/chatbot.inline.ts` | 모달 열기/닫기 인터랙션 |
| `quartz/components/styles/chatbot.scss` | 플로팅 버튼 + 모달 스타일 |

모든 페이지 우하단에 플로팅 버튼으로 표시되며, 클릭 시 iframe으로 챗봇을 로드한다.

## 알려진 이슈

| 이슈 | 해결 |
|------|------|
| Obsidian `---` 구분선이 프론트매터로 오인 | deploy.sh가 복사본에서 자동 수정 (원본 보존) |
| git 날짜 경고 (`dates will be inaccurate`) | 첫 sync 후 자동 해결. 동작 영향 없음 |
| CustomOgImages 플러그인 오류 | Pretendard 폰트 비호환으로 비활성화 |

## 참고

- [Quartz 4 공식 문서](https://quartz.jzhao.xyz)
- [GitHub Pages 문서](https://docs.github.com/en/pages)
- [배포 가이드 (상세)](../dabitdocs/DABIT_DOCS_배포_가이드.md)
