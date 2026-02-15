# DABIT DOCS 기술문서 사이트 구축 과정

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | DABIT DOCS 기술문서 사이트 구축 |
| 사이트 주소 | https://docs.dabitsol.com |
| 기술 스택 | Obsidian + Quartz 4 + GitHub Pages |
| 목적 | 다빛솔루션 제품 기술문서를 웹에 공개하여 고객 접근성 향상 |

기존 Obsidian Publish 기반 문서 사이트를 Quartz 4 + GitHub Pages로 마이그레이션하여 비용 절감 및 커스터마이징 자유도를 확보했습니다.

---

## 2. 전체 작업 흐름 요약

```
[1] Obsidian 볼트(dabitdocs/) 문서 작성
 ↓
[2] deploy.sh 스크립트 실행
 ↓
[3] 콘텐츠 복사 (dabitdocs → dabitdocs-quartz/content)
 ↓
[4] 프론트매터 자동 수정
 ↓
[5] npx quartz sync (빌드 + GitHub push)
 ↓
[6] GitHub Actions가 자동 빌드 & 배포
 ↓
[7] https://docs.dabitsol.com 에 반영
```

---

## 3. 단계별 구축 과정

### 3-1. Quartz 4 프로젝트 설치

Quartz 4 공식 가이드에 따라 프로젝트를 클론하고 초기 설정을 진행했습니다.

```bash
git clone https://github.com/jackyzha0/quartz.git dabitdocs-quartz
cd dabitdocs-quartz
npm i
```

### 3-2. Quartz 설정 커스터마이징 (`quartz.config.ts`)

사이트 정보와 한국어 환경에 맞게 설정을 변경했습니다.

| 설정 항목 | 값 |
|-----------|-----|
| `pageTitle` | `"DABIT DOCS"` |
| `pageTitleSuffix` | `" - 다빛솔루션"` |
| `locale` | `"ko-KR"` |
| `baseUrl` | `"docs.dabitsol.com"` |
| `enableSPA` | `true` |
| `enablePopovers` | `true` |
| 헤더/본문 폰트 | Pretendard Variable |
| 코드 폰트 | JetBrains Mono |
| 라이트/다크 모드 | Stone 계열 커스텀 컬러 |

**무시 패턴 설정:**
```
ignorePatterns: ["private", "templates", ".obsidian", ".claude", ".trash", "Template"]
```

**주요 플러그인:**
- `ObsidianFlavoredMarkdown` - Obsidian 문법 호환
- `SyntaxHighlighting` - GitHub Light/Dark 테마
- `TableOfContents` - 목차 자동 생성
- `Latex` (KaTeX) - 수식 렌더링
- `ContentIndex` - 사이트맵, RSS 피드 자동 생성

### 3-3. GitHub 저장소 생성 및 연결

1. GitHub에 `dabitdocs` 저장소를 생성 (Public)
2. Quartz 프로젝트의 remote를 변경:
   ```bash
   git remote set-url origin https://github.com/insulee/dabitdocs.git
   ```
3. 기본 브랜치: `v4`

### 3-4. GitHub Pages 설정

1. 저장소 Settings → Pages → Source를 **GitHub Actions**로 설정
2. Custom domain에 `docs.dabitsol.com` 입력
3. **Enforce HTTPS** 활성화

### 3-5. GitHub Actions 워크플로 작성 (`deploy.yml`)

`v4` 브랜치에 push되면 자동으로 빌드 및 배포하는 워크플로를 구성했습니다.

```yaml
on:
  push:
    branches: [v4]

jobs:
  build:
    - actions/checkout@v4 (fetch-depth: 0)
    - actions/setup-node@v4 (node 22)
    - npm ci
    - npx quartz build
    - CNAME 복사
    - upload-pages-artifact

  deploy:
    - deploy-pages@v4
```

### 3-6. 카페24 DNS 변경 (커스텀 도메인)

기존 Obsidian Publish에 연결되어 있던 DNS를 GitHub Pages로 변경했습니다.

| 변경 전 | 변경 후 |
|---------|---------|
| `docs.dabitsol.com` → `publish-main.obsidian.md` | `docs.dabitsol.com` → `insulee.github.io` |

### 3-7. Obsidian Publish 설정 원복

커스텀 도메인 충돌을 방지하기 위해 Obsidian Publish에서 `docs.dabitsol.com` 도메인 연결을 해제했습니다.

### 3-8. 배포 자동화 스크립트 작성 (`deploy.sh`)

매번 수동으로 파일을 복사하고 배포하는 과정을 자동화하는 스크립트를 작성했습니다.

**스크립트 주요 기능:**

1. **콘텐츠 정리** - 기존 content 디렉터리 초기화 (index.md 제외)
2. **파일 복사** - Obsidian 볼트에서 마크다운 + 첨부파일 복사
   - 제외 대상: `.obsidian`, `.claude`, `.trash`, `Template`, `Inbox/*.md`, `publish.css/js`
3. **프론트매터 자동 수정** - Obsidian 구분선(`---`)이 프론트매터로 오인되는 문제 자동 처리
   - 닫히지 않은 `---` 제거
   - `share_updated` 이후 `---` 자동 추가
4. **빌드 & 배포** - `npx quartz sync` 실행

### 3-9. Claude Code 배포 스킬 등록

Claude Code에서 "배포" 명령으로 바로 실행할 수 있도록 스킬을 등록했습니다.

- 위치: `.claude/skills/deploy/SKILL.md`
- 트리거: `배포`, `deploy`, `sync`, `동기화`
- 동작: `robocopy`로 콘텐츠 동기화 → `npx quartz sync`로 빌드 & 배포

---

## 4. 문서 콘텐츠 구조

Obsidian 볼트(dabitdocs)의 문서 구조:

```
dabitdocs/
├── 0. DABIT DOCS 소개/        - 사이트 소개, 환영 페이지
├── 1. 시작하기/                - 제품 시작 가이드
├── 2. 사용자 매뉴얼/           - 상세 사용법
│   ├── 2.1. 통신 설정
│   ├── 2.2. 전광판 크기 설정
│   ├── 2.3. 표출신호 설정
│   ├── 2.4. 폰트 설정
│   └── ... (2.5~2.10)
├── 3. 전문자료/                - 기술 심화 자료
│   └── 3.1~3.31 (프로토콜, 펌웨어 등)
├── 4. 고객지원/                - AS, 견적, 원격지원, AI 챗봇
├── 5. 소프트웨어 다운로드/      - 제품 소프트웨어
├── 6. 다빛솔루션 소개/          - 회사 소개, 연혁
└── Inbox/files/               - 이미지, 첨부파일
```

총 약 76개 마크다운 파일로 구성되어 있습니다.

---

## 5. 해결한 문제들

### 5-1. 프론트매터 파싱 오류
- **문제**: Obsidian에서 구분선(`---`)으로 사용한 마크다운이 Quartz에서 YAML 프론트매터로 오인됨
- **해결**: `deploy.sh`에서 복사된 파일만 자동 수정 (원본 보존)

### 5-2. git 날짜 경고
- **문제**: `isn't yet tracked by git, dates will be inaccurate` 경고 발생
- **해결**: 첫 배포 후 git 커밋 완료 시 자동 해결, 사이트 동작에 영향 없음

### 5-3. OG 이미지 생성 비활성화
- **문제**: Pretendard 폰트가 CustomOgImages 플러그인과 호환되지 않음
- **해결**: `CustomOgImages` 플러그인 비활성화

---

## 6. 최종 아키텍처

```
┌─────────────────────────────────────────────────┐
│  작성자 (Obsidian)                               │
│  D:/Note/.../dabitdocs/                          │
│  ┌──────────────────────────────────────┐        │
│  │ 마크다운 문서 작성 및 편집            │        │
│  └──────────────┬───────────────────────┘        │
└─────────────────┼───────────────────────────────┘
                  │ deploy.sh / /deploy 스킬
                  ▼
┌─────────────────────────────────────────────────┐
│  빌드 시스템 (Quartz 4)                          │
│  D:/Note/.../dabitdocs-quartz/                   │
│  ┌──────────────────────────────────────┐        │
│  │ content/ ← 볼트에서 복사된 파일       │        │
│  │ quartz.config.ts ← 사이트 설정       │        │
│  │ npx quartz sync ← 빌드 + push        │        │
│  └──────────────┬───────────────────────┘        │
└─────────────────┼───────────────────────────────┘
                  │ git push (v4 branch)
                  ▼
┌─────────────────────────────────────────────────┐
│  GitHub                                          │
│  github.com/insulee/dabitdocs                    │
│  ┌──────────────────────────────────────┐        │
│  │ GitHub Actions (deploy.yml)           │        │
│  │ → npm ci → npx quartz build           │       │
│  │ → upload-pages-artifact               │       │
│  │ → deploy-pages                        │       │
│  └──────────────┬───────────────────────┘        │
└─────────────────┼───────────────────────────────┘
                  │ GitHub Pages
                  ▼
┌─────────────────────────────────────────────────┐
│  https://docs.dabitsol.com                       │
│  (카페24 DNS → insulee.github.io)                │
│  Enforce HTTPS 활성화                            │
└─────────────────────────────────────────────────┘
```

---

## 7. 일상 배포 방법

문서 수정 후 배포는 한 줄로 완료됩니다:

```bash
# 방법 1: 스크립트 직접 실행
bash "D:/Note/20_Marketing_Team/22_Area/dabitdocs-quartz/deploy.sh"

# 방법 2: Claude Code 스킬 사용
/deploy
```

---

## 8. 참고 링크

- Quartz 4 공식 문서: https://quartz.jzhao.xyz
- GitHub Pages 문서: https://docs.github.com/en/pages
- GitHub 저장소: https://github.com/insulee/dabitdocs
- 배포된 사이트: https://docs.dabitsol.com
