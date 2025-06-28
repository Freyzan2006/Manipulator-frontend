@echo off
echo [STOP] Остановка и удаление контейнеров...

docker-compose -f ../../docker/docker-compose.dev.yml down --remove-orphans
docker-compose -f ../../docker/docker-compose.prod.yml down --remove-orphans

echo [STOP] Готово.
pause
