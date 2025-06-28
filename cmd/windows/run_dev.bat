@echo off
echo [DEV] Starting development server...
copy /Y ..\.env.dev ..\.env > nul
docker-compose -f ../docker/docker-compose.dev.yml up --build
