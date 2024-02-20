import { Request, Response } from "express";
import { discordRequest } from "./discord_utils";

const PING_CHANNEL_ID = process.env.PING_CHANNEL_ID;
const XPINGKEY = process.env.XPINGKEY;
const CW_PING = "1205239838756835348";
const BUG_PING = "1208547257562169444";
const FISH_PING = "1208547310104092692";
const DYNA_PING = "1208878139137196162";

export const handleEventPinger = async (req: Request, res: Response) => {
  if (req.headers["x-ping-key"] !== XPINGKEY) {
    res.sendStatus(401);
    return;
  }
  try {
    const message = pingEventMessage(req.query["event"] as string ?? "");
    console.log("i am here"); // TODO delete
    await discordRequest(`channels/${PING_CHANNEL_ID}/messages`, {
      method: "POST",
      body: {
        content: message,
        allowed_mentions: {
          roles: [CW_PING, BUG_PING, FISH_PING, DYNA_PING],
        },
      } as any,
    });
    res.sendStatus(200);
  } catch (e) {
    console.log("Catch error: "); // TODO delete
    console.log(e); // TODO delete
    res.status(500).send({ error: e });
  }
};

const pingEventMessage = (evName: string) => {
  let ret = "";
  switch (evName) {
    case "cw": ret += `<@&${CW_PING}>`; break;
    case "bug": ret += `<@&${BUG_PING}>`; break;
    case "fish": ret += `<@&${FISH_PING}>`; break;
    case "dyna": ret += `<@&${DYNA_PING}>`; break;
    default: throw "Invalid event";
  }
  return ret + " in less than 5 min";
};