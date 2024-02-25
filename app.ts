import 'dotenv/config';
import express from 'express';
import {
  InteractionType,
  InteractionResponseType,
} from 'discord-interactions';
import { verifyDiscordRequest } from "./discord_utils";
import { SPAWN_COMMAND, handleSpawnCommand } from "./command_spawn";
import { HALLOWEEN_COMMAND, handleHalloweenCommand } from "./command_halloween";

const PORT = process.env.PORT || "3000";

const app = express();
app.use(express.json({ verify: verifyDiscordRequest(process.env.PUBLIC_KEY) }));

app.post("/interactions", async (req, res) => {
  const { type, id, data } = req.body as { type: InteractionType, id: string, data: any; };

  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name } = data;
    switch (name) {
      case SPAWN_COMMAND.name:
        handleSpawnCommand(req, res);
        break;
      case HALLOWEEN_COMMAND.name:
        handleHalloweenCommand(req, res);
        break;
    }
  }
});

app.listen(PORT, () => console.log('Listening on port', PORT));