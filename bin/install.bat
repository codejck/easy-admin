@echo off
echo.
echo install
echo.

%~d0
cd %~dp0

cd ..
npm install

pause