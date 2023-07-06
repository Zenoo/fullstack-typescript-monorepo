@echo off

:: Initialize environment variables
call variables.bat

:: Start PostgreSQL server if not running
call "%PGDIR%\bin\pg_ctl" -D %PGDATA% status
if %errorlevel%==3 (
  call "%PGDIR%\bin\pg_ctl" -D %PGDATA% -l %PGLOGS% start
)

:: Move to the bin directory
cd "%LOCALFOLDER%\bin"

:: Start server.exe (hide command prompt window)
start /B server.exe

:: Move to client directory
cd client

:: Run Fullstack\ Typescript\ Monorepo.exe normally
start "" "%APPNAME%.exe"
