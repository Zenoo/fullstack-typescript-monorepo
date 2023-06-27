# Compile Typescript
npm run compile

# Build client
npm run build --workspace=client

# Build server executable
pkg .

# Clean /exe directory
rm exe/bin/server.exe
rm -rf exe/bin/client

# Create /exe directory
mkdir -p exe/bin

# Move server executable to /exe
mv fullstack-typescript-monorepo.exe exe/bin/server.exe

# Create native electron app
nativefier --name "Fullstack Typescript Monorepo" --icon "client/public/favicon.ico" "http://localhost:9000" --single-instance --tray

# Move native electron app to /exe
mv Fullstack\ Typescript\ Monorepo-win32-x64/ exe/bin/client