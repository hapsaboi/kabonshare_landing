@echo off
echo.
echo ====================================
echo   Media Share API Landing Page
echo ====================================
echo.

if not exist "node_modules" (
    echo Installing dependencies...
    echo.
    call npm install
    echo.
    echo Dependencies installed!
    echo.
)

echo Starting development server...
echo.
echo Open your browser to: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev
