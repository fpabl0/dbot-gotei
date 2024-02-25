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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const discord_interactions_1 = require("discord-interactions");
const discord_utils_1 = require("./discord_utils");
const command_spawn_1 = require("./command_spawn");
const command_halloween_1 = require("./command_halloween");
const PORT = process.env.PORT || "3000";
const app = (0, express_1.default)();
app.use(express_1.default.json({ verify: (0, discord_utils_1.verifyDiscordRequest)(process.env.PUBLIC_KEY) }));
app.post("/interactions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, id, data } = req.body;
    if (type === discord_interactions_1.InteractionType.PING) {
        return res.send({ type: discord_interactions_1.InteractionResponseType.PONG });
    }
    if (type === discord_interactions_1.InteractionType.APPLICATION_COMMAND) {
        const { name } = data;
        switch (name) {
            case command_spawn_1.SPAWN_COMMAND.name:
                (0, command_spawn_1.handleSpawnCommand)(req, res);
                break;
            case command_halloween_1.HALLOWEEN_COMMAND.name:
                (0, command_halloween_1.handleHalloweenCommand)(req, res);
                break;
        }
    }
}));
app.listen(PORT, () => console.log('Listening on port', PORT));
//# sourceMappingURL=app.js.map