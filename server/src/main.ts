import { loadConfig } from './config.js';
import { mainWrapper } from './server.js';

async function main() {
  loadConfig();
  mainWrapper();
}

await main();
