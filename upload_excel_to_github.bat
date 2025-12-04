@echo off
echo ========================================
echo   Excel'i GitHub'a Yukle
echo ========================================
echo.

REM Excel dosyasinin yolunu sor
set /p EXCEL_PATH="Excel dosyasinin tam yolunu girin: "

REM Hedef dosya adini sor
set /p TARGET_NAME="GitHub'da ne isimle kaydedilsin (ornek: gunluk.xlsx): "

echo.
echo Excel kopyalaniyor...
copy "%EXCEL_PATH%" "%TARGET_NAME%"

echo.
echo Git'e ekleniyor...
git add "%TARGET_NAME%"

echo.
echo Commit yapiliyor...
set /p COMMIT_MSG="Commit mesaji (bos birakilirsa otomatik): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Excel guncellendi: %date% %time%
git commit -m "%COMMIT_MSG%"

echo.
echo GitHub'a yukleniyor...
git push origin main

echo.
echo ========================================
echo   Tamamlandi!
echo ========================================
echo.
echo Raw URL:
echo https://raw.githubusercontent.com/karincalogistics-com/karinca-dashboard/main/%TARGET_NAME%
echo.
pause
