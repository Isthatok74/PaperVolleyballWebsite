REM Run the npm build command
call npm run build

REM Check if the build was successful
if %ERRORLEVEL% neq 0 (
    echo Build failed. Exiting.
    exit /b %ERRORLEVEL%
)
echo Build successful.

REM Ensure the docs folder exists
if not exist "docs" (
    mkdir "docs"
)

REM Move the contents of the build folder to the docs folder, replacing existing files
xcopy "build\*" "docs\" /s /e /y

REM Confirm completion
echo Files moved successfully to the docs folder.