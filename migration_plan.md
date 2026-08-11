# 작업: dabitdocs를 DabitOne 기준으로 마이그레이션

## 배경
- 신규 프로그램 **DabitOne** 출시에 따라, dabitdocs(docs.dabitsol.com)의 매뉴얼을
  기존 **DBPS / 다빛채** 기준 안내에서 **DabitOne** 기준으로 전부 교체.
- dabitdocs는 `d:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz\content` 의
  md 파일을 기반으로 빌드되고, 변경사항은 챗봇(DABITDOCS)이 재인덱싱해서 가져감.
  → **잘못된 안내가 들어가면 고객 응대에 직접 영향**. 정확성 최우선.

## 작업 환경
1. `d:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz` 에서 git worktree 생성
   - 브랜치명: `migration/dabitone`
   - 워크트리 위치: `d:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz-dabitone`
2. 모든 수정은 워크트리 내 `content/` 하위에서만 진행. 메인 트리는 건드리지 않음.

## 참조 소스 (DabitOne UI 명칭/경로 확인용)
- 경로: `D:\Gitea\dabitche\DabitChe.Desktop`
  - 저장소 이름은 dabitche지만 현재 빌드되는 제품이 DabitOne임.
  - UI 소스 위치 확인됨:
    - `MainWindow.xaml` (메인 창)
    - `Views/` 22개 다이얼로그/창 (BgSchedule, BleSetting, BlinkCount, ComboSelect,
      CustomSignal, DefaultAttribute, DisplaySpeed, FontWeight, InfoTextSettings,
      MqttSetting, MultiMessage, NumberInput, Offset, Relay, TransferProgress,
      GifEditor, ImageEditor, TextEditor, AfterimageDelay, BrightnessAdvanced,
      SerialMonitor, SaveIpPreset)
    - `Themes/` 스타일 정의
    - 메뉴 라벨, 버튼 텍스트, 다이얼로그 제목 등은 .xaml의 `Content`/`Header` 속성,
      리소스 파일, 또는 `.cs` 코드 안에 들어 있음.
- 빌드 산출물 (`bin/Debug/`, `bin/Release/`, `obj/`)은 무시.

## 변환 패턴 (예시)

### 패턴 A — 두 섹션을 한 줄로 통합
**Before:**
```markdown
#### DBPS
- `설정` > 전광판 화면 구성
#### 다빛채
- `환경설정` > `화면설정`
```
**After:**
```markdown
#### DabitOne - `설정` > 전광판 화면 구성
```
- DBPS와 다빛채 두 섹션을 모두 제거하고, DabitOne 기준 메뉴 경로 한 줄로 통합.
- DabitOne의 실제 메뉴 경로는 `D:\Gitea\dabitche\DabitChe.Desktop` 에서 확인.

### 패턴 B — 본문 단계 안내에서 단어 치환 + 단계 삭제
**Before:**
```markdown
### 표출신호 설정 방법
- 표출신호: `해당 모듈의 표출신호`
- Color Order: `RGB` (필요시 변경)
- Scan Order: `138 IC` (기본값)
- `설정`
- `닫기`
```
**After (DabitOne 기준):**
```markdown
### 표출신호 설정 방법
- 표출신호: `해당 모듈의 표출신호`
- Color Order: `RGB` (필요시 변경)
- Scan Order: `138 IC` (기본값)
- `전송`
```
- DabitChe의 "설정" 버튼은 DabitOne에선 "전송"으로 변경.
- DabitChe의 "닫기"는 DabitOne에 없으므로 해당 항목 삭제.

### 패턴 C — 그 외
- 본문 중 "DBPS에서는...", "다빛채에서는..." 같은 서술형 안내,
- 메뉴 이름이 우회적으로 언급된 경우 등.
- 발견하면 "확인 필요" 목록으로 분리 후 사용자 답변 받고 처리.

## 작업 절차 (반드시 이 순서로)

### Phase 1. 인벤토리 (수정 금지, 조사만)
1. `content/` 전체에서 다음 키워드 등장 위치를 모두 추출:
   - `DBPS`, `dbps`
   - `다빛채`, `DabitChe`
   - 위 프로그램의 메뉴/버튼/창을 가리키는 우회 표현
2. 각 위치를 다음 형식의 표로 정리해서 보고:

   | 파일 | 라인 | 현재 표현 | 패턴(A/B/C) |

3. 이 단계가 끝나면 멈추고 보고. 사용자 승인 전에 절대 수정하지 않음.

### Phase 2. 매핑 계획
인벤토리 각 항목에 대해 DabitOne 대응 표현을 매핑:

| 파일 | 현재 표현 | DabitOne 대응 표현 | 근거(DabitChe.Desktop 내 파일/라인) |

- DabitOne 측 대응을 확신할 수 없는 항목은 **"확인 필요"** 로 분리해서 별도 목록으로.
- 이 목록을 보고하고 사용자 답변을 받은 뒤 Phase 3 진입.

### Phase 3. 실제 수정
- **한 문서당 1커밋** (커밋 메시지: `docs: migrate <파일경로> to DabitOne`)
- 변경 규칙:
  - DBPS / 다빛채 단어는 모두 제거 (병기 X)
  - 패턴 A/B/C에 따라 처리
  - DabitOne UI에 실제로 존재하는 메뉴/버튼명만 사용. 추측 금지.

### Phase 4. 자체 검증
- 수정 완료 후 `content/` 전체에 `DBPS|dbps|다빛채|DabitChe` 가 남아있지 않은지 grep.
- 의도적으로 남긴 부분이 있으면 그 목록을 함께 보고.

## 불확실할 때 행동 규칙
- DabitOne UI에서 대응 항목을 못 찾으면 **추측 금지**. "확인 필요" 목록에 모아서 질문.
- 한 파일에서 여러 개 헷갈리면 그 파일 전체를 일단 보류하고 다음으로.
- 매뉴얼 오류는 챗봇 통해 고객에게 직접 노출되므로, 빠른 진행보다 정확성이 우선.
