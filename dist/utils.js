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
exports.discordRequest = exports.verifyDiscordRequest = void 0;
require("dotenv/config");
const discord_interactions_1 = require("discord-interactions");
const verifyDiscordRequest = (publicKey) => {
    return function (req, res, buf, encoding) {
        const signature = req.headers['x-signature-ed25519'];
        const timestamp = req.headers['x-signature-timestamp'];
        const isValidRequest = (0, discord_interactions_1.verifyKey)(buf, signature, timestamp, publicKey);
        if (!isValidRequest) {
            throw new Error('Bad request signature');
        }
    };
};
exports.verifyDiscordRequest = verifyDiscordRequest;
const discordRequest = (endpoint, options) => __awaiter(void 0, void 0, void 0, function* () {
    // append endpoint to root API URL
    const url = 'https://discord.com/api/v10/' + endpoint;
    // Stringify payloads
    if (options.body)
        options.body = JSON.stringify(options.body);
    // Use node-fetch to make requests
    const res = yield fetch(url, Object.assign({ headers: {
            Authorization: `Bot ${process.env.BOT_TOKEN}`,
            'Content-Type': 'application/json; charset=UTF-8',
            'User-Agent': 'DiscordBot (https://github.com/discord/discord-example-app, 1.0.0)',
        } }, options));
    // throw API errors
    if (!res.ok) {
        const data = yield res.json();
        console.log(res.status);
        throw new Error(JSON.stringify(data));
    }
    // return original response
    return res;
});
exports.discordRequest = discordRequest;
//# sourceMappingURL=utils.js.map