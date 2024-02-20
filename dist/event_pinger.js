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
exports.handleEventPinger = void 0;
const discord_utils_1 = require("./discord_utils");
const PING_CHANNEL_ID = process.env.PING_CHANNEL_ID;
const XPINGKEY = process.env.XPINGKEY;
const CW_PING = "1205239838756835348";
const BUG_PING = "1208547257562169444";
const FISH_PING = "1208547310104092692";
const DYNA_PING = "1208878139137196162";
const handleEventPinger = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (req.headers["x-ping-key"] !== XPINGKEY) {
        res.sendStatus(401);
        return;
    }
    try {
        const message = pingEventMessage((_a = req.query["event"]) !== null && _a !== void 0 ? _a : "");
        yield (0, discord_utils_1.discordRequest)(`channels/${PING_CHANNEL_ID}/messages`, {
            method: "POST",
            body: {
                content: message,
                allowed_mentions: {
                    roles: [CW_PING, BUG_PING, FISH_PING, DYNA_PING],
                },
            },
        });
        res.sendStatus(200);
    }
    catch (e) {
        res.status(500).send({ error: e });
    }
});
exports.handleEventPinger = handleEventPinger;
const pingEventMessage = (evName) => {
    let ret = "";
    switch (evName) {
        case "cw":
            ret += `<@&${CW_PING}>`;
            break;
        case "bug":
            ret += `<@&${BUG_PING}>`;
            break;
        case "fish":
            ret += `<@&${FISH_PING}>`;
            break;
        case "dyna":
            ret += `<@&${DYNA_PING}>`;
            break;
        default: throw "Invalid event";
    }
    return ret + " in less than 5 min";
};
//# sourceMappingURL=event_pinger.js.map