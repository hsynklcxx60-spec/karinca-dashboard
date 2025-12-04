@echo off
echo ========================================
echo   Hizli Excel Yukleme
echo ========================================
echo.

REM Excel dosyasini buraya surekle veya yolunu gir
echo Excel dosyasini bu pencereye surekle ve Enter'a bas:
set /p EXCEL_FILE=

REM Tirnak isaretlerini kaldir
set EXCEL_FILE=%EXCEL_FILE:"=%

REM Dosya adini al
for %%F in ("%EXCEL_FILE%") do set FILENAME=%%~nxF

echo.
echo Dosya: %FILENAME%
echo Yukleniyor...

REM Kopyala
copy "%EXCEL_FILE%" "%FILENAME%"

REM Git'e ekle
git add "%FILENAME%"
git commit -m "Excel guncellendi: %FILENAME%"
git push origin main

echo.
echo ========================================
echo   TAMAMLANDI!
echo ========================================
echo.
echo Dashboard'da kullanacagin URL:
echo https://raw.githubusercontent.com/karincalogistics-com/karinca-dashboard/main/%FILENAME%
echo.
echo Bu URL'i kopyala ve Dashboard'a yapistir!
echo.
pause
