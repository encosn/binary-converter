@echo off
rem ============================================================
rem  binary-converter : run as a local web server
rem
rem  HOW TO USE (Korean note is in CLAUDE.md of this folder)
rem    - Double-click this file. A browser opens automatically.
rem    - Python must be installed.
rem    - Other port : start-server.bat 9000
rem    - Stop        : press Ctrl+C, or just close this window.
rem
rem  NOTE: messages below are ASCII only on purpose.
rem        cmd.exe garbles Korean text in .bat files depending on
rem        the console code page, so do NOT add Korean here.
rem ============================================================

cd /d "%~dp0"

set PORT=%1
if "%PORT%"=="" set PORT=8080

where python >nul 2>nul
if errorlevel 1 (
  echo.
  echo  [ERROR] Python not found. Cannot start the local server.
  echo          You can still open index.html by double-clicking it.
  echo.
  pause
  exit /b 1
)

echo.
echo  binary-converter - local server
echo.
echo    URL  : http://localhost:%PORT%
echo    Stop : Ctrl+C  (or close this window)
echo.

rem Pass "nobrowser" as the 2nd argument to skip opening the browser.
if /i "%2"=="nobrowser" goto serve
start "" "http://localhost:%PORT%"

:serve
python -m http.server %PORT%
