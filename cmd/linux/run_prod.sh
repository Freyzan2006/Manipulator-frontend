#!/bin/bash

set -e

echo "[PROD] Сборка проекта и запуск..."

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"

cp "$PROJECT_ROOT/.env.prod" "$PROJECT_ROOT/.env"

docker-compose -f "$PROJECT_ROOT/docker/docker-compose.prod.yml" up --build -d


echo "[DEV] Чтобы остановить Если Linux: ./cmd/linux/stop.sh"
echo "[DEV] Чтобы остановить Если Windows: ./cmd/windows/stop.bat"
echo "[DEV] Чтобы запустить в продакшн: http://localhost:8080"