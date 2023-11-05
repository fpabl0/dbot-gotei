import 'dotenv/config';
import { discordRequest } from "./discord_utils";
import { SPAWN_COMMAND } from "./command_spawn";
import { HALLOWEEN_COMMAND } from "./command_halloween";

const commands = [SPAWN_COMMAND, HALLOWEEN_COMMAND];

const overwriteCommands = async () => {
  console.log('overwriting commands...');

  const appId = process.env.APP_ID;
  const endpoint = `applications/${appId}/commands`;

  try {
    await discordRequest(endpoint, { method: "PUT", body: commands as any });
  } catch (e) {
    console.log(`error overwriting commands: ${e}`);
  }
};

overwriteCommands();

/*
const deleteAllCommands = async () => {
  console.log('deleting previous commands ...');

  const appId = process.env.APP_ID;
  const getEndpoint = `applications/${appId}/commands`;
  const resp = await discordRequest(getEndpoint, { method: "GET" });
  const data = (await resp.json()) as { id: string; name: string; }[];

  for (let c of data) {
    try {
      const deleteEndpoint = `applications/${appId}/commands/${c.id}`;
      await discordRequest(deleteEndpoint, { method: "DELETE" });
    } catch (e) {
      console.log(`error deleting ${c.name} command: ${e}`);
    }
  }
};


const registerCommands = async () => {
  console.log('registering commands...');

  const appId = process.env.APP_ID;
  const endpoint = `applications/${appId}/commands`;


  for (let c of commands) {
    try {
      await discordRequest(endpoint, { method: "POST", body: c as any });
    } catch (e) {
      console.log(`error creating ${c.name} command: ${e}`);
    }
  }
};

deleteAllCommands();
registerCommands();
*/