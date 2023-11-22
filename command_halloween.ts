import { Request, Response } from "express";
import { Command, CommandOptionType, CommandType } from "./types";
import { HALLOWEEN_BY_PLACE, HALLOWEEN_PLACES, HALLOWEEN_SPECIAL_BY_POKEMON } from "./spawns";
import { EmbedBuilder } from "discord.js";
import { createByPlaceSpecialTable, createByPlaceTable, createByPokeSpecialTable } from "./cmd_utils";
import { InteractionResponseType } from "discord-interactions";

export const HALLOWEEN_COMMAND: Command = {
  name: "gb_halloween",
  description: "Show all halloween spawns divided in small parts",
  type: CommandType.CharInput,
  options: [
    {
      type: CommandOptionType.Integer,
      name: "part",
      description: "Select the part you want to see",
      required: true,
      choices: [
        { name: "|||| Part 1", value: 0 },
        { name: "|||| Part 2", value: 1 },
        { name: "|||| Part 3", value: 2 },
        { name: "|||| Part 4", value: 3 },
        { name: "|||| Part 5", value: 4 },
        { name: "|||| Part 6", value: 5 },
      ],
    },
  ],
};

export const handleHalloweenCommand = (req: Request, res: Response) => {
  const { data } = req.body;

  const part = (data.options[0] as { value: number; }).value;

  const allPlaces = [...HALLOWEEN_PLACES, "Swarm", "Box"];

  const start = part * 5;
  let end = start + 5;
  end = end > allPlaces.length ? allPlaces.length : end;
  const reqPlaces = allPlaces.slice(part * 5, end);

  const embeds: EmbedBuilder[] = [];

  for (const p of reqPlaces) {
    let ts: EmbedBuilder[] = [];
    if (p === "Swarm") {
      ts = createByPlaceSpecialTable("", "Swarm", HALLOWEEN_SPECIAL_BY_POKEMON);
    } else if (p === "Box") {
      ts = createByPlaceSpecialTable("", "Box", HALLOWEEN_SPECIAL_BY_POKEMON);
    } else {
      ts = createByPlaceTable("", p, HALLOWEEN_BY_PLACE);
    }
    embeds.push(...ts);
  }

  if (embeds.length === 0) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: `Sorry, can't find that part.` }
    });
  }

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: { embeds },
  });
};

