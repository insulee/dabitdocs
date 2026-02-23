# DABIT DOCS

다빛솔루션 제품 기술문서 사이트. `content/` 폴더의 마크다운 문서를 Quartz 4로 빌드하여 GitHub Pages에 배포한다.

| 항목 | 값 |
|------|-----|
| 사이트 | https://docs.dabitsol.com |
| 기술 스택 | Quartz 4.5.2 + GitHub Pages + GitHub Actions |
| Node.js | >= 22 |
| 브랜치 | `v4` |

## 프로젝트 구조

```
dabitdocs-quartz/          ← 이 저장소
├── content/               ← 문서 원본 (여기서 직접 편집)
│   ├── 2. 사용자 매뉴얼/
│   ├── 3. 전문자료/
│   ├── 4. 고객지원/
│   ├── 5. 소프트웨어 다운로드/
│   ├── 6. 다빛솔루션 소개/
│   ├── Inbox/files/       ← 이미지, 첨부파일
│   └── index.md           ← 랜딩 페이지
├── quartz.config.ts       ← 사이트 설정
├── quartz.layout.ts       ← 레이아웃 설정
├── deploy.sh              ← 배포 스크립트
└── .github/workflows/
    └── deploy.yml         ← GitHub Actions 워크플로
```

## 배포 방법

### 문서 수정 후 배포 (일상 작업)

1. `content/` 폴더에서 문서를 직접 편집하고 저장한다.
2. 아래 방법 중 하나로 배포한다:

```bash
# 방법 1: 배포 스크립트 (권장)
bash "D:/Note/20_Marketing_Team/22_Area/dabitdocs-quartz/deploy.sh"

# 방법 2: Claude Code 스킬
/deploy
```

스크립트가 하는 일:
1. 프론트매터 자동 수정 (깨진 `---` 구분선 처리)
2. `npx quartz sync` 실행 (빌드 + git push)
3. GitHub Actions가 자동으로 사이트에 배포

## 배포 흐름

```
content/ 에서 문서 편집
  → deploy.sh (프론트매터 수정 + quartz sync)
    → npx quartz sync (빌드 + git push to v4)
      → GitHub Actions (빌드 + GitHub Pages 배포)
        → https://docs.dabitsol.com 반영
```

## 챗봇 연동

`content/` 폴더는 AI 기술지원 챗봇의 문서 소스이기도 하다. Windows 작업 스케줄러가 매시간 `content/`의 마크다운을 챗봇 인덱싱 폴더로 동기화한다.

```
content/ → sync-docs.ps1 (매시간) → 챗봇 documents/ → reindex.py → Qdrant DB
```

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
| Obsidian `---` 구분선이 프론트매터로 오인 | deploy.sh가 자동 수정 |
| git 날짜 경고 (`dates will be inaccurate`) | 첫 sync 후 자동 해결. 동작 영향 없음 |
| CustomOgImages 플러그인 오류 | Pretendard 폰트 비호환으로 비활성화 |

## 참고

- [Quartz 4 공식 문서](https://quartz.jzhao.xyz)
- [GitHub Pages 문서](https://docs.github.com/en/pages)
- [챗봇 동기화 시스템](../../Gitea/aiPlatform/apps/user_chatbot/data/README.md)
