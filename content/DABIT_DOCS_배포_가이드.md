# DABIT DOCS 배포 가이드 (Quartz 4 + GitHub Pages)

## 개요

Obsidian 볼트(dabitdocs)의 마크다운 파일을 Quartz 4로 정적 사이트로 변환하여 GitHub Pages에 배포합니다.

- 사이트 주소: `https://docs.dabitsol.com`
- 기술 스택: Quartz 4 + GitHub Pages
- 배포 방식: 터미널 명령어 한 줄 (`npx quartz sync`)

---

## 1단계: GitHub 저장소 생성 (최초 1회)

### 1-1. GitHub 계정이 없는 경우
1. https://github.com 접속 → Sign up
2. 계정 생성

### 1-2. 새 저장소(Repository) 만들기
1. https://github.com/new 접속
2. 설정:
   - **Repository name**: `dabitdocs` (또는 원하는 이름)
   - **Public** 선택 (GitHub Pages 무료 사용을 위해)
   - **Initialize this repository** 체크 해제 (빈 저장소로 생성)
3. **Create repository** 클릭
4. 생성된 저장소 URL 복사 (예: `https://github.com/사용자명/dabitdocs.git`)

### 1-3. Quartz 프로젝트와 GitHub 저장소 연결
터미널(Git Bash)에서 실행:

```bash
cd "D:/Note/20_Marketing_Team/22_Area/dabitdocs-quartz"
git remote set-url origin https://github.com/사용자명/dabitdocs.git
```

> `사용자명`을 본인의 GitHub 사용자명으로 변경하세요.

---

## 2단계: GitHub Pages 설정 (최초 1회)

### 2-1. 첫 번째 배포 실행
```bash
cd "D:/Note/20_Marketing_Team/22_Area/dabitdocs-quartz"
npx quartz sync
```
- GitHub 로그인 창이 뜨면 로그인합니다.
- 첫 배포 시 시간이 좀 걸릴 수 있습니다.

### 2-2. GitHub Pages 활성화
1. GitHub 저장소 페이지 접속 → **Settings** 탭
2. 좌측 메뉴에서 **Pages** 클릭
3. **Source** 항목에서 **GitHub Actions** 선택
4. 저장

### 2-3. 커스텀 도메인 설정 (GitHub Pages)
1. 같은 Pages 설정 화면에서
2. **Custom domain** 항목에 `docs.dabitsol.com` 입력
3. **Save** 클릭
4. **Enforce HTTPS** 체크 (SSL 인증서 자동 발급)

---

## 3단계: 카페24 DNS 설정 (최초 1회)

### 기존 Obsidian Publish CNAME 변경
카페24 호스팅센터 → 도메인 관리 → DNS 관리:

1. 기존 `docs.dabitsol.com` → `publish-main.obsidian.md` 레코드 **삭제**
2. 새 CNAME 레코드 추가:
   - **도메인 별칭**: `docs.dabitsol.com`
   - **실제 도메인**: `사용자명.github.io`

> `사용자명`을 본인의 GitHub 사용자명으로 변경하세요.
> 예: GitHub 아이디가 `dabit-sol`이면 → `dabit-sol.github.io`

---

## 4단계: Obsidian Publish 설정 원복 (최초 1회)

Obsidian Publish에서 커스텀 도메인을 설정했으므로 원복이 필요합니다:
1. Obsidian 앱 → 설정 → Publish
2. 사용자 지정 도메인 설정 → `docs.dabitsol.com` 삭제
3. 리디렉션 OFF
4. 도메인 설정 업데이트

> 이렇게 해야 기존 `publish.obsidian.md/dabitdocs` 주소도 정상 접속됩니다.
> (GitHub Pages 사이트가 완전히 동작한 후 진행하세요)

---

## 일상적인 배포 방법 (매번 사용)

### 방법 A: 배포 스크립트 사용 (추천)

옵시디언에서 문서를 수정한 후 터미널에서:

```bash
bash "D:/Note/20_Marketing_Team/22_Area/dabitdocs-quartz/deploy.sh"
```

이 스크립트가 하는 일:
1. Obsidian 볼트에서 변경된 파일 복사
2. 프론트매터 자동 수정 (호환성 문제 처리)
3. Quartz 빌드 + GitHub push
4. GitHub Actions가 자동으로 사이트 배포

### 방법 B: 수동 단계별 실행

```bash
# 1. Quartz 프로젝트로 이동
cd "D:/Note/20_Marketing_Team/22_Area/dabitdocs-quartz"

# 2. 콘텐츠 동기화 (deploy.sh의 복사 부분만 실행)
# ... (deploy.sh 참조)

# 3. 배포
npx quartz sync
```

---

## 프로젝트 구조

```
D:/Note/20_Marketing_Team/22_Area/
├── dabitdocs/                  ← Obsidian 볼트 (여기서 문서 작성)
│   ├── 0. DABIT DOCS 소개/
│   ├── 1. 시작하기/
│   ├── 2. 사용자 매뉴얼/
│   ├── 3. 전문자료/
│   ├── 4. 고객지원/
│   ├── 5. 소프트웨어 다운로드/
│   ├── 6. 다빛솔루션 소개/
│   └── Inbox/files/            ← 이미지/첨부파일
│
└── dabitdocs-quartz/           ← Quartz 프로젝트 (빌드 & 배포용)
    ├── content/                ← 볼트에서 복사된 콘텐츠
    ├── public/                 ← 빌드 결과물 (HTML)
    ├── quartz.config.ts        ← Quartz 설정
    ├── deploy.sh               ← 배포 스크립트
    └── .github/workflows/      ← GitHub Actions 워크플로
```

---

## 알려진 이슈 및 해결

### 프론트매터 오류
일부 파일에서 `---`를 구분선으로 사용하면 Quartz가 프론트매터로 오인합니다.
- **해결**: `deploy.sh`가 자동으로 수정합니다.
- **원본 파일은 변경되지 않습니다.**

### git 날짜 경고
`isn't yet tracked by git, dates will be inaccurate` 경고가 나옵니다.
- 첫 배포 후 git에 커밋되면 자동으로 해결됩니다.
- 사이트 동작에는 영향 없습니다.

---

## 참고 링크

- Quartz 4 공식 문서: https://quartz.jzhao.xyz
- GitHub Pages 문서: https://docs.github.com/en/pages
- Quartz 설정 가이드: https://quartz.jzhao.xyz/configuration
