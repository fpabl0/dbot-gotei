import 'dotenv/config';
import fetch from "node-fetch"; // to use in Glitch server
import { verifyKey } from 'discord-interactions';
import * as http from "http";

export const verifyDiscordRequest = (publicKey: string) => {
  return function (req: http.IncomingMessage, res: http.ServerResponse, buf: Buffer, encoding: string) {
    const signature = req.headers['x-signature-ed25519'] as string;
    const timestamp = req.headers['x-signature-timestamp'] as string;

    const isValidRequest = verifyKey(buf, signature, timestamp, publicKey);
    if (!isValidRequest) {
      throw new Error('Bad request signature');
    }
  };
};

type CustomRequestInit = RequestInit & {
  body?: any;
};

export const discordRequest = async (endpoint: string, options: CustomRequestInit) => {
  // append endpoint to root API URL
  const url = 'https://discord.com/api/v10/' + endpoint;
  // Stringify payloads
  if (options.body) options.body = JSON.stringify(options.body);
  // Use node-fetch to make requests
  const res = await fetch(url, {
    headers: {
      Authorization: `Bot ${process.env.BOT_TOKEN}`,
      'Content-Type': 'application/json; charset=UTF-8',
      'User-Agent': 'DiscordBot (https://github.com/discord/discord-example-app, 1.0.0)',
    },
    ...options
  });
  // throw API errors
  if (!res.ok) {
    const data = await res.json();
    console.log(res.status);
    throw new Error(JSON.stringify(data));
  }
  // return original response
  return res;
};