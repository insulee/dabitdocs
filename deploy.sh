#!/bin/bash
# DABIT DOCS 배포 스크립트
# content/ 폴더가 원본입니다. 직접 수정 후 이 스크립트로 배포하세요.
# 사용법: bash deploy.sh

set -e

QUARTZ_DIR="D:/Note/20_Marketing_Team/22_Area/dabitdocs-quartz"
CONTENT_DIR="$QUARTZ_DIR/content"

echo "=== DABIT DOCS 배포 시작 ==="

# 1. 프론트매터 자동 수정
echo "[1/2] 프론트매터 검증 중..."
find "$CONTENT_DIR" -name "*.md" | while read f; do
  # 파일 첫 비공백 라인이 --- 이고, 10줄 내에 닫는 --- 가 없으면 제거
  first=$(head -5 "$f" | sed '/^$/d' | head -1)
  if [ "$first" = "---" ]; then
    count=$(head -10 "$f" | grep -c "^---$" || true)
    if [ "$count" -eq 1 ]; then
      # 닫히지 않은 ---는 구분선이므로 제거
      sed -i '0,/^---$/s/^---$//' "$f"
      echo "  수정: $(basename "$f") (구분선 --- 제거)"
    fi
  fi
  # 프론트매터가 있지만 닫히지 않은 경우 (share_link 등)
  if head -1 "$f" | grep -q "^---$"; then
    if ! head -20 "$f" | tail -n +2 | grep -q "^---$"; then
      # 프론트매터 끝에 --- 추가
      sed -i '/^share_updated:.*$/a ---' "$f" 2>/dev/null || true
      echo "  수정: $(basename "$f") (프론트매터 닫기 추가)"
    fi
  fi
done

# 2. Quartz 동기화 (빌드 + GitHub push)
echo "[2/2] Quartz 빌드 및 배포 중..."
cd "$QUARTZ_DIR"
npx quartz sync

echo "=== 배포 완료! ==="
echo "사이트: https://docs.dabitsol.com"
