#!/bin/bash
# DABIT DOCS 배포 스크립트
# content/ 폴더가 원본입니다. 직접 수정 후 이 스크립트로 배포하세요.
# 사용법: bash deploy.sh

set -e

QUARTZ_DIR="D:/Note/20_Marketing_Team/22_Area/dabitdocs-quartz"
CONTENT_DIR="$QUARTZ_DIR/content"

echo "=== DABIT DOCS 배포 시작 ==="

# Quartz 동기화 (빌드 + GitHub push)
echo "[1/1] Quartz 빌드 및 배포 중..."
cd "$QUARTZ_DIR"
npx quartz sync

echo "=== 배포 완료! ==="
echo "사이트: https://docs.dabitsol.com"
