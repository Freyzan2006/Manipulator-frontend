#!/bin/bash

set -e

echo "[DEV] Сборка проекта и запуск..."

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"

cp "$PROJECT_ROOT/.env.dev" "$PROJECT_ROOT/.env"

docker-compose -f "$PROJECT_ROOT/docker/docker-compose.dev.yml" up --build

echo "[DEV] Чтобы запустить в продакшн: http://localhost:5173"