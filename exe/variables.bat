@echo off

:: SET ENVIRONMENT VARIABLES


:: APPLICATION

:: Application name
set APPNAME=Fullstack Typescript Monorepo
:: Application port
set SERVERPORT=9888

:: Local folder (Program Files)
set LOCALFOLDER=%LOCALAPPDATA%\%APPNAME%

:: DATABASE

:: PostgreSQL executable path: current folder/database/bin
set PATH=%PATH%;%LOCALFOLDER%\database\bin
:: PostgreSQL root directory: current folder/database
set PGDIR=%LOCALFOLDER%\database
:: PostgreSQL data directory: current folder/database/data
set PGDATA=%LOCALFOLDER%\database\data
:: PostgreSQL locale directory: current folder/database/share/locale
set PGLOCALEDIR=%LOCALFOLDER%\database\share\locale
:: PostgreSQL port: 5888
set PGPORT=5888
:: PostgreSQL database name: ftm
set PGDATABASE=ftm
:: PostgreSQL username: ftmuser
set PGUSER=ftmuser
:: PostgreSQL password: ftmpassword
set PGPASSWORD=ftmpassword
:: PostgreSQL logs: current folder/database/logfile
set PGLOGS=%LOCALFOLDER%\database\logfile
