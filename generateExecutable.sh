# Compile Typescript
npm run compile

# Build client
npm run build --workspace=client

# Build server executable
pkg .

# Empty /exe directory
rm -rf exe

# Create /exe directory
mkdir -p exe/bin

# Move server executable to /exe
mv fullstack-typescript-monorepo.exe exe/bin/server.exe

# Create native electron app
nativefier --name "Fullstack Typescript Monorepo" --icon "client/public/favicon.ico" "http://localhost:9000" --single-instance --tray

# Move native electron app to /exe
mv Fullstack\ Typescript\ Monorepo-win32-x64/ exe/bin/client

# Copy launcher to /exe
cp launcher.bat exe/launcher.bat