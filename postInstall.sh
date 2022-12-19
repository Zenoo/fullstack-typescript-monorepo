if [ "$NODE_ENV" = "production" ]; then
  npm run db:sync:prod
  npm run compile
  npm run db:seed
  npm run build --workspace=client
else
  npm run db:sync:dev
  npm run compile
  npm run db:seed
fi