if [ "$NODE_ENV" = "production" ]; then
  npm run db:sync:prod
  npm run build --workspace=client
else
  npm run db:sync:dev
fi