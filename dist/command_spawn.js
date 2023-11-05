"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSpawnCommand = exports.SPAWN_COMMAND = void 0;
const types_1 = require("./types");
const discord_interactions_1 = require("discord-interactions");
const spawns_1 = require("./spawns");
const cmd_utils_1 = require("./cmd_utils");
exports.SPAWN_COMMAND = {
    name: "gb_spawn",
    description: "Gotei Bot Spawn Command",
    type: types_1.CommandType.CharInput,
    options: [
        {
            type: types_1.CommandOptionType.Integer,
            name: "type",
            description: "Pick a spawn search type",
            required: true,
            choices: [
                { name: "|||| By Pokemon", value: 1 },
                { name: "|||| By Place", value: 2 },
            ],
        },
        {
            type: types_1.CommandOptionType.String,
            name: "data",
            description: "Write the pokemon or place name",
            required: true,
        },
    ],
};
const handleSpawnCommand = (req, res) => {
    const { data } = req.body;
    const type = data.options[0];
    const userdata = data.options[1];
    let ret;
    if (type.value === 1) {
        ret = handleSpawnsByPokemon(userdata.value);
    }
    else if (type.value === 2) {
        ret = handleSpawnsByPlace(userdata.value);
    }
    else {
        res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: { content: "Invalid type" },
        });
    }
    if (ret === undefined) {
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: { content: `Sorry, can't find any ${type.value === 1 ? "pokemon" : "place"} similar to "${userdata.value}".` }
        });
    }
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { embeds: ret },
    });
};
exports.handleSpawnCommand = handleSpawnCommand;
const handleSpawnsByPokemon = (userInputPokemon) => {
    // find similar pokemon name
    const poke = (0, cmd_utils_1.findSimilar)(userInputPokemon, spawns_1.SPAWN_POKEMON_NAMES);
    const hallowPoke = (0, cmd_utils_1.findSimilar)(userInputPokemon, spawns_1.HALLOWEEN_POKEMON_NAMES);
    if (poke === undefined && hallowPoke === undefined)
        return undefined;
    const embeds = [];
    // normal spawns
    const normalSpawnEmbeds = (0, cmd_utils_1.createByPokeTable)("", poke, spawns_1.NORMAL_SPAWNS_BY_POKEMON);
    if (normalSpawnEmbeds.length > 0) {
        embeds.push(...normalSpawnEmbeds);
    }
    // special spawns
    const specialSpawnEmbeds = (0, cmd_utils_1.createByPokeSpecialTable)("", poke, spawns_1.SPECIAL_SPAWNS_BY_POKEMON);
    if (specialSpawnEmbeds.length > 0) {
        embeds.push(...specialSpawnEmbeds);
    }
    // Halloween
    const halloweenSpawnEmbeds = (0, cmd_utils_1.createByPokeTable)("**Halloween 2023**\n", hallowPoke, spawns_1.HALLOWEEN_BY_POKEMON);
    if (halloweenSpawnEmbeds.length > 0) {
        embeds.push(...halloweenSpawnEmbeds);
    }
    // Halloween special spawns
    const halloweenSpecialSpawnEmbeds = (0, cmd_utils_1.createByPokeSpecialTable)("**Halloween 2023**\n", hallowPoke, spawns_1.HALLOWEEN_SPECIAL_BY_POKEMON);
    if (halloweenSpecialSpawnEmbeds.length > 0) {
        embeds.push(...halloweenSpecialSpawnEmbeds);
    }
    if (embeds.length === 0)
        return undefined;
    return embeds;
};
const handleSpawnsByPlace = (userInputPlace) => {
    // find similar place
    const place = (0, cmd_utils_1.findSimilar)(userInputPlace, spawns_1.SPAWN_PLACES);
    const hallowPlace = (0, cmd_utils_1.findSimilar)(userInputPlace, spawns_1.HALLOWEEN_PLACES);
    if (place === undefined && hallowPlace === undefined)
        return undefined;
    const embeds = [];
    // NORMAL SPAWNS
    const normalSpawnEmbeds = (0, cmd_utils_1.createByPlaceTable)("", place, spawns_1.NORMAL_SPAWNS_BY_PLACE);
    if (normalSpawnEmbeds.length > 0) {
        embeds.push(...normalSpawnEmbeds);
    }
    // HALLOWEEN
    const halloweenSpawnEmbeds = (0, cmd_utils_1.createByPlaceTable)("**Halloween 2023**\n", hallowPlace, spawns_1.HALLOWEEN_BY_PLACE);
    if (halloweenSpawnEmbeds.length > 0) {
        embeds.push(...halloweenSpawnEmbeds);
    }
    if (embeds.length === 0)
        return undefined;
    return embeds;
};
//# sourceMappingURL=command_spawn.js.map