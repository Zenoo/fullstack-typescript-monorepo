/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { EmbedBuilder, WebhookClient, WebhookMessageCreateOptions } from 'discord.js';
import { Response } from 'express';
import Env from './Env';

// const server = Env.SELF_URL; // Local debug
const server = 'https://your.server.url';

const send = async (props: WebhookMessageCreateOptions) => {
  try {
    if (!Env.DISCORD_WEBHOOK_ID) {
      return;
    }

    const webhookClient = new WebhookClient({
      id: Env.DISCORD_WEBHOOK_ID,
      token: Env.DISCORD_WEBHOOK_TOKEN,
    });

    await webhookClient.send(props);
  } catch (error) {
    console.error('Error trying to send a message: ', error);
  }
};

const sendError = async (error: unknown, res?: Response) => {
  try {
    if (!Env.DISCORD_LOGS_WEBHOOK_ID) {
      console.error(error);
      return;
    }

    const webhookClient = new WebhookClient({
      id: Env.DISCORD_LOGS_WEBHOOK_ID,
      token: Env.DISCORD_LOGS_WEBHOOK_TOKEN,
    });

    const embed = new EmbedBuilder()
      .setColor(0xff0000)
      .setTitle(res ? res.req.url : error instanceof Error ? error.message : 'Unknown error')
      .setAuthor({
        name: 'Fullstack Typescript Monorepo',
        iconURL: `${server}/favicon.png`,
      })
      .setDescription(`\`\`\`
${error instanceof Error ? error.stack : error}
\`\`\``)
      .setTimestamp();

    if (res) {
      embed.addFields(
        // Request method
        { name: 'Method', value: res.req.method, inline: true },
        // Response status code
        { name: 'Status code', value: res.statusCode.toString(), inline: true },
        // Response status message
        { name: 'Status', value: res.statusMessage, inline: true },
      );

      // Request params
      if (Object.keys(res.req.params as object).length) {
        embed.addFields({
          name: 'Params',
          value: `\`\`\`json
  ${JSON.stringify(res.req.params)}
  \`\`\``,
        });
      }

      // Request body
      if (Object.keys(res.req.body as object).length) {
        embed.addFields({
          name: 'Body',
          value: `\`\`\`json
  ${JSON.stringify(res.req.body)}
  \`\`\``,
        });
      }
    }

    await webhookClient.send({ embeds: [embed] });
  } catch (err) {
    console.error('Error trying to send a message: ', err);
  }
};

const sendLog = async (message: string) => {
  try {
    if (!Env.DISCORD_LOGS_WEBHOOK_ID) {
      // eslint-disable-next-line no-console
      console.log(message);
      return;
    }

    const webhookClient = new WebhookClient({
      id: Env.DISCORD_LOGS_WEBHOOK_ID,
      token: Env.DISCORD_LOGS_WEBHOOK_TOKEN,
    });

    await webhookClient.send(message);
  } catch (error) {
    console.error('Error trying to send a message: ', error);
  }
};

export default {
  send,
  sendError,
  sendLog,
};