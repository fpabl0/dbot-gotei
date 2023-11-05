import { Request, Response } from "express";
import { Command, CommandOptionType, CommandType } from "./types";
import { InteractionResponseType } from "discord-interactions";
import { HALLOWEEN_BY_PLACE, HALLOWEEN_BY_POKEMON, HALLOWEEN_PLACES, HALLOWEEN_POKEMON_NAMES, HALLOWEEN_SPECIAL_BY_POKEMON, NORMAL_SPAWNS_BY_PLACE, NORMAL_SPAWNS_BY_POKEMON, SPAWN_PLACES, SPAWN_POKEMON_NAMES, SPECIAL_SPAWNS_BY_POKEMON } from './spawns';
import { EmbedBuilder } from 'discord.js';
import { createByPlaceTable, createByPokeSpecialTable, createByPokeTable, findSimilar } from "./cmd_utils";

export const SPAWN_COMMAND: Command = {
  name: "gb_spawn",
  description: "Gotei Bot Spawn Command",
  type: CommandType.CharInput,
  options: [
    {
      type: CommandOptionType.Integer,
      name: "type",
      description: "Pick a spawn search type",
      required: true,
      choices: [
        { name: "|||| By Pokemon", value: 1 },
        { name: "|||| By Place", value: 2 },
      ],
    },
    {
      type: CommandOptionType.String,
      name: "data",
      description: "Write the pokemon or place name",
      required: true,
    },
  ],
};

export const handleSpawnCommand = (req: Request, res: Response) => {
  const { data } = req.body;

  const type = data.options[0] as { value: number; };
  const userdata = data.options[1] as { value: string; };

  let ret: EmbedBuilder[] | undefined;
  if (type.value === 1) {
    ret = handleSpawnsByPokemon(userdata.value);
  } else if (type.value === 2) {
    ret = handleSpawnsByPlace(userdata.value);
  } else {
    res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: "Invalid type" },
    });
  }

  if (ret === undefined) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: `Sorry, can't find any ${type.value === 1 ? "pokemon" : "place"} similar to "${userdata.value}".` }
    });
  }

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: { embeds: ret },
  });

};

const handleSpawnsByPokemon = (userInputPokemon: string) => {

  // find similar pokemon name
  const poke = findSimilar(userInputPokemon, SPAWN_POKEMON_NAMES);
  const hallowPoke = findSimilar(userInputPokemon, HALLOWEEN_POKEMON_NAMES);
  if (poke === undefined && hallowPoke === undefined) return undefined;

  const embeds: EmbedBuilder[] = [];

  // normal spawns
  const normalSpawnEmbeds = createByPokeTable("", poke, NORMAL_SPAWNS_BY_POKEMON);
  if (normalSpawnEmbeds.length > 0) {
    embeds.push(...normalSpawnEmbeds);
  }
  // special spawns
  const specialSpawnEmbeds = createByPokeSpecialTable("", poke, SPECIAL_SPAWNS_BY_POKEMON);
  if (specialSpawnEmbeds.length > 0) {
    embeds.push(...specialSpawnEmbeds);
  }
  // Halloween
  const halloweenSpawnEmbeds = createByPokeTable("**Halloween 2023**\n", hallowPoke, HALLOWEEN_BY_POKEMON);
  if (halloweenSpawnEmbeds.length > 0) {
    embeds.push(...halloweenSpawnEmbeds);
  }
  // Halloween special spawns
  const halloweenSpecialSpawnEmbeds = createByPokeSpecialTable("**Halloween 2023**\n", hallowPoke, HALLOWEEN_SPECIAL_BY_POKEMON);
  if (halloweenSpecialSpawnEmbeds.length > 0) {
    embeds.push(...halloweenSpecialSpawnEmbeds);
  }

  if (embeds.length === 0) return undefined;
  return embeds;
};

const handleSpawnsByPlace = (userInputPlace: string) => {

  // find similar place
  const place = findSimilar(userInputPlace, SPAWN_PLACES);
  const hallowPlace = findSimilar(userInputPlace, HALLOWEEN_PLACES);
  if (place === undefined && hallowPlace === undefined) return undefined;

  const embeds: EmbedBuilder[] = [];

  // NORMAL SPAWNS
  const normalSpawnEmbeds = createByPlaceTable("", place, NORMAL_SPAWNS_BY_PLACE);
  if (normalSpawnEmbeds.length > 0) {
    embeds.push(...normalSpawnEmbeds);
  }
  // HALLOWEEN
  const halloweenSpawnEmbeds = createByPlaceTable("**Halloween 2023**\n", hallowPlace, HALLOWEEN_BY_PLACE);
  if (halloweenSpawnEmbeds.length > 0) {
    embeds.push(...halloweenSpawnEmbeds);
  }

  if (embeds.length === 0) return undefined;
  return embeds;
};