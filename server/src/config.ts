import * as dotenv from 'dotenv';


/**
 * Configuration for the Discord client.
 *
 * The discord client is used for logs and notifcations.
 */
export interface DiscordConfig {
  /**
   * Discord webhook id
   */
  readonly webhookId: string;

  /**
   * Discord webhook token (secret)
   */
  readonly webhookToken: string;
}

/**
 * Server configuration
 */
export interface Config {
  /**
   * Boolean indicating if the server should run in production mode.
   */
  readonly isProduction: boolean;

  /**
   * Port used to bind the HTTP server.
   */
  readonly port: number;

  /**
   * Absolute URL to website root, as visible externally.
   */
  readonly selfUrl: URL;

  /**
   * Configuration for the Discord client (optional).
   */
  readonly discord: DiscordConfig | null;
}

/**
 * Read the port value based on the provided env value.
 *
 * Returns a default port if the value is missing or invalid.
 *
 * @param envPort Value of the `PORT` environment variable.
 */
export function readPort(envPort: string | undefined, defaultPort: number): number {
  if (typeof envPort === 'string') {
    const numPort = parseInt(envPort, 10);
    if (!Number.isNaN(numPort)) {
      return numPort;
    }
  }
  return defaultPort;
}

/**
 * Read the self-URL value based on the provided env value.
 *
 * Returns a default port if the value is missing or invalid.
 *
 * @param envSelfUrl Value of the `SELF_URL` environment variable.
 */
export function readSelfUrl(envSelfUrl: string | undefined): URL {
  if (typeof envSelfUrl === 'string') {
    try {
      const selfUrl = new URL(envSelfUrl);
      if (selfUrl.protocol === 'http:' || selfUrl.protocol === 'https:') {
        return selfUrl;
      }
    } catch {
      // fall through and return default
    }
  }
  return new URL('http://localhost:3000/');
}

/**
 * Read the provided environment recorded and build a config object.
 */
export function readConfig(env: Record<string, string | undefined>): Config {
  dotenv.config();

  const isProduction = env.NODE_ENV === 'production';
  const port = readPort(env.PORT, 9000);
  const selfUrl = readSelfUrl(env.SELF_URL);

  const rawDiscordId = env.DISCORD_WEBHOOK_ID;
  const rawDiscordToken = env.DISCORD_WEBHOOK_TOKEN;
  let discord: DiscordConfig | null = null;
  if (typeof rawDiscordId === 'string' && typeof rawDiscordToken === 'string') {
    discord = {
      webhookId: rawDiscordId,
      webhookToken: rawDiscordToken,
    };
  }

  return {
    isProduction,
    port,
    selfUrl,
    discord,
  };
}

/**
 * Load the configuration from the ambient environment.
 *
 * As part of this resolution, if a `.env` file is present in the current
 * working directory, it is loaded and applied to the process environment.
 */
export function loadConfig(): Config {
  dotenv.config();
  return readConfig(process.env);
}
