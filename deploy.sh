#!/bin/bash
# DABIT DOCS 배포 스크립트
# 사용법: bash deploy.sh

set -e

VAULT_DIR="D:/Note/20_Marketing_Team/22_Area/dabitdocs"
QUARTZ_DIR="D:/Note/20_Marketing_Team/22_Area/dabitdocs-quartz"
CONTENT_DIR="$QUARTZ_DIR/content"

echo "=== DABIT DOCS 배포 시작 ==="

# 1. 기존 콘텐츠 삭제 (index.md 백업 후 복원)
echo "[1/4] 기존 콘텐츠 정리 중..."
cp "$CONTENT_DIR/index.md" "$QUARTZ_DIR/index.md.bak" 2>/dev/null || true
rm -rf "$CONTENT_DIR"/*
cp "$QUARTZ_DIR/index.md.bak" "$CONTENT_DIR/index.md" 2>/dev/null || true
rm -f "$QUARTZ_DIR/index.md.bak"

# 2. Obsidian 볼트에서 콘텐츠 복사
echo "[2/4] 콘텐츠 복사 중..."
cd "$VAULT_DIR"

# 마크다운 및 첨부파일 복사
find . -not -path './.obsidian*' \
       -not -path './.claude*' \
       -not -path './.trash*' \
       -not -path './Template*' \
       -not -path './Inbox/*.md' \
       -not -name 'publish.css' \
       -not -name 'publish.js' \
       -not -name 'googlef3332cce3b4aeec5.html' \
       -type f | while read f; do
  dir=$(dirname "$f")
  mkdir -p "$CONTENT_DIR/$dir"
  cp "$f" "$CONTENT_DIR/$f"
done

# 3. 프론트매터 자동 수정 (원본 유지, 복사본만 수정)
echo "[3/4] 프론트매터 검증 중..."
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

# 4. Quartz 동기화 (빌드 + GitHub push)
echo "[4/4] Quartz 빌드 및 배포 중..."
cd "$QUARTZ_DIR"
npx quartz sync

echo "=== 배포 완료! ==="
echo "사이트: https://docs.dabitsol.com"
