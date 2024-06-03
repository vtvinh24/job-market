@echo off

:a
REM Terminate existing npm processes if any
taskkill /F /IM node.exe /T 2>nul

REM Start two npm processes
cd .\backend
start "backend" cmd /c "npm start"
cd ..\frontend
start "frontend" cmd /c "npm run dev"
cd ..

REM Wait for user input to restart the processes
cls
pause
goto a
