@echo off
echo [PROD] Building and starting production server...
copy /Y ..\.env.prod ..\.env > nul
docker-compose -f ../docker/docker-compose.prod.yml up --build -d
