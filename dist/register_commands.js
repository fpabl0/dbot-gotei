"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const discord_utils_1 = require("./discord_utils");
const command_spawn_1 = require("./command_spawn");
const command_halloween_1 = require("./command_halloween");
const commands = [command_spawn_1.SPAWN_COMMAND, command_halloween_1.HALLOWEEN_COMMAND];
const overwriteCommands = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('overwriting commands...');
    const appId = process.env.APP_ID;
    const endpoint = `applications/${appId}/commands`;
    try {
        yield (0, discord_utils_1.discordRequest)(endpoint, { method: "PUT", body: commands });
    }
    catch (e) {
        console.log(`error overwriting commands: ${e}`);
    }
});
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
//# sourceMappingURL=register_commands.js.map