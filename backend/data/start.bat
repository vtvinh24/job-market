@echo off
title json-server
:a
cls
json-server --watch db.json --port 8000
pause
goto a