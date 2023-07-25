@echo off

:: Unzip resources.tar.gz
tar -xzf resources.tar.gz

:: Move contents of exe folder to current folder
move exe\* .
move exe\bin .
move exe\database .

:: Remove exe folder
rmdir /s /q exe

:: Remove archive
del resources.tar.gz

:: Execution stops here, find out why

:: Initialize environment variables
call variables.bat

:: Create installation folder if not exists
if not exist "%LOCALFOLDER%" (
  mkdir "%LOCALFOLDER%"
)

:: Clean installation folder
del /q "%LOCALFOLDER%\*"

:: Move files to installation folder
move "%APPNAME%.EXE" "%LOCALFOLDER%"
move "favicon.ico" "%LOCALFOLDER%"
move bin "%LOCALFOLDER%"
move database "%LOCALFOLDER%"

:: First create a temporary file containing the DB password
echo %PGPASSWORD%>password.txt

:: Initialize database
call "%PGDIR%\bin\initdb" -D "%PGDATA%" -U %PGUSER% -A trust -E UTF8 --pwfile=password.txt

:: Remove temporary file
del password.txt

:: Start PostgreSQL server
call "%PGDIR%\bin\pg_ctl" -D "%PGDATA%" -l "%PGLOGS%" -o "-p %PGPORT%" start

:: Create database PGDATABASE
call "%PGDIR%\bin\createdb" -U %PGUSER% -O %PGUSER% -E UTF8 -T template0 %PGDATABASE%

:: Restore backup.sql
call "%PGDIR%\bin\psql" -U %PGUSER% -f "%PGDIR%\backup.sql"

:: Add %APPNAME%.EXE shortcut to desktop if not exists
if not exist "%USERPROFILE%\Desktop\%APPNAME%.lnk" (
  mklink "%USERPROFILE%\Desktop\%APPNAME%.lnk" "%LOCALFOLDER%\%APPNAME%.EXE"
)

:: Exit
exit