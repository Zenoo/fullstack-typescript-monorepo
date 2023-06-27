@echo off

:: SET ENVIRONMENT VARIABLES
:: PostgreSQL executable path: current folder/database/bin
set PATH=%PATH%;%cd%\database\bin
:: PostgreSQL root directory: current folder/database
set PGDIR=%cd%\database
:: PostgreSQL data directory: current folder/database/data
set PGDATA=%cd%\database\data
:: PostgreSQL locale directory: current folder/database/share/locale
set PGLOCALEDIR=%cd%\database\share\locale
:: PostgreSQL port: 5888
set PGPORT=5888
:: PostgreSQL database name: ftm
set PGDATABASE=ftm
:: PostgreSQL username: ftmuser
set PGUSER=ftmuser
:: PostgreSQL password: ftmpassword
set PGPASSWORD=ftmpassword
:: PostgreSQL logs: current folder/database/logfile
set PGLOGS=%cd%\database\logfile

:: Initialize database if not exists
if not exist database\data (
  :: First create a temporary file containing the password
  echo %PGPASSWORD%>password.txt

  :: Initialize database
  "%PGDIR%\bin\initdb" -D %PGDATA% -U %PGUSER% -A trust -E UTF8 --pwfile=password.txt

  :: Remove temporary file
  del password.txt
)

:: Start PostgreSQL server if not running
"%PGDIR%\bin\pg_ctl" -D %PGDATA% status
if %errorlevel%==3 (
  "%PGDIR%\bin\pg_ctl" -D %PGDATA% -l %PGLOGS% start
)

:: Restore backup.sql if PGDATABASE doesn't exist
psql -U %PGUSER% -d postgres -c "SELECT datname FROM pg_database WHERE datname='%PGDATABASE%'" | findstr /r /c:"0 rows" >nul
if %errorlevel%==0 (
  :: Create database PGDATABASE
  "%PGDIR%\bin\createdb" -U %PGUSER% -O %PGUSER% -E UTF8 -T template0 %PGDATABASE%

  :: Restore backup.sql
  "%PGDIR%\bin\psql" -U %PGUSER% -f database\backup.sql
)

:: Move to the bin directory
cd bin

:: Start server.exe (hide command prompt window)
start /B server.exe

:: Move to client directory
cd client

:: Run Fullstack\ Typescript\ Monorepo.exe normally
start "" "Fullstack Typescript Monorepo.exe"
