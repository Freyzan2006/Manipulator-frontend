#!/bin/bash
echo "[STOP] Остановка и удаление контейнеров..."

# Убедимся, что запускаем из корня проекта
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(realpath "$SCRIPT_DIR/../..")"
COMPOSE_DEV_FILE="$PROJECT_ROOT/docker/docker-compose.dev.yml"
COMPOSE_PROD_FILE="$PROJECT_ROOT/docker/docker-compose.prod.yml"

docker-compose -f "$COMPOSE_DEV_FILE" down --remove-orphans
docker-compose -f "$COMPOSE_PROD_FILE" down --remove-orphans

echo "[STOP] Готово."
