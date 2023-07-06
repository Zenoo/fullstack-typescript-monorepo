# Compile Typescript
npm run compile

# Build client
npm run build --workspace=client

# Copy server/.env to server/.env.tmp
cp server/.env server/.env.tmp

# Copy server/.env.standalone to server/.env
cp server/.env.standalone server/.env

# Read variables from variables.bat
# Example: set APPNAME=MyApp
# Should return: MyApp
APPNAME=$(grep APPNAME= exe/variables.bat | cut -d'=' -f2)
SERVERPORT=$(grep SERVERPORT exe/variables.bat | cut -d'=' -f2)
PGPORT=$(grep PGPORT exe/variables.bat | cut -d'=' -f2)
PGDATABASE=$(grep PGDATABASE exe/variables.bat | cut -d'=' -f2)
PGUSER=$(grep PGUSER exe/variables.bat | cut -d'=' -f2)
PGPASSWORD=$(grep PGPASSWORD exe/variables.bat | cut -d'=' -f2)

# Replace variables in server/.env
sed -i "s/{SERVERPORT}/${SERVERPORT}/g" server/.env
sed -i "s/{PGUSER}/${PGUSER}/g" server/.env
sed -i "s/{PGPASSWORD}/${PGPASSWORD}/g" server/.env
sed -i "s/{PGPORT}/${PGPORT}/g" server/.env
sed -i "s/{PGDATABASE}/${PGDATABASE}/g" server/.env

# Build server executable
pkg .

# Restore server/.env
mv server/.env.tmp server/.env

# Clean /exe directory
rm exe/bin/server.exe
rm -rf exe/bin/client

# Create /exe directory
mkdir -p exe/bin

# Convert APPNAME to lowercase and replace spaces
# Example: My App
# Should return: my-app
APPNAMELOWERCASE=$(echo "${APPNAME}" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

# Move server executable to /exe
mv "${APPNAMELOWERCASE}.exe" exe/bin/server.exe

# Create native electron app
nativefier --name "${APPNAME}" --icon "client/public/favicon.ico" "http://localhost:${SERVERPORT}" --single-instance --tray

# Move native electron app to /exe
mv "${APPNAME}-win32-x64/" exe/bin/client

# Copy favicon.ico to /exe
cp client/public/favicon.ico exe/favicon.ico

# Generate launcher executable with iexpress with exe/launcher.sed
iexpress /N /Q /M ./exe/launcher.SED

# Replace exe icon with Resource Hacker
# Makes Windows Defender cry, so skip for now
# ResourceHacker.exe -open "exe/${APPNAME}.exe" -save "exe/${APPNAME}.exe" -action addskip -res "exe/favicon.ico" -mask ICONGROUP,MAINICON,

# Create zip file (Windows)
# With
# exe/variables.bat
# exe/favicon.ico
# exe/bin
# exe/database/bin
# exe/database/include
# exe/database/lib
# exe/database/share
# exe/database/StackBuilder
# exe/database/symbols
# exe/database/backup.sql
# exe/${APPNAME}.exe
tar -czvf "exe/resources.tar.gz" exe/variables.bat exe/favicon.ico exe/bin exe/database/bin exe/database/include exe/database/lib exe/database/share exe/database/StackBuilder exe/database/symbols exe/database/backup.sql "exe/${APPNAME}.EXE"

# Generate installer executable with iexpress with exe/installer.sed
iexpress /N /Q /M ./exe/installer.SED