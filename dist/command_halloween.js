"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHalloweenCommand = exports.HALLOWEEN_COMMAND = void 0;
const types_1 = require("./types");
const spawns_1 = require("./spawns");
const cmd_utils_1 = require("./cmd_utils");
const discord_interactions_1 = require("discord-interactions");
exports.HALLOWEEN_COMMAND = {
    name: "gb_halloween",
    description: "Show all halloween spawns divided in small parts",
    type: types_1.CommandType.CharInput,
    options: [
        {
            type: types_1.CommandOptionType.Integer,
            name: "part",
            description: "Select the part you want to see",
            required: true,
            choices: [
                { name: "|||| Part 1", value: 0 },
                { name: "|||| Part 2", value: 1 },
                { name: "|||| Part 3", value: 2 },
                { name: "|||| Part 4", value: 3 },
                { name: "|||| Part 5", value: 4 },
            ],
        },
    ],
};
const handleHalloweenCommand = (req, res) => {
    const { data } = req.body;
    const part = data.options[0].value;
    const allPlaces = [...spawns_1.HALLOWEEN_PLACES, "Swarm", "Box"];
    const start = part * 5;
    let end = start + 5;
    end = end > allPlaces.length ? allPlaces.length : end;
    const reqPlaces = allPlaces.slice(part * 5, end);
    const embeds = [];
    for (const p of reqPlaces) {
        let ts = [];
        if (p === "Swarm") {
            ts = (0, cmd_utils_1.createByPlaceSpecialTable)("", "Swarm", spawns_1.HALLOWEEN_SPECIAL_BY_POKEMON);
        }
        else if (p === "Box") {
            ts = (0, cmd_utils_1.createByPlaceSpecialTable)("", "Box", spawns_1.HALLOWEEN_SPECIAL_BY_POKEMON);
        }
        else {
            ts = (0, cmd_utils_1.createByPlaceTable)("", p, spawns_1.HALLOWEEN_BY_PLACE);
        }
        embeds.push(...ts);
    }
    if (embeds.length === 0) {
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: { content: `Sorry, can't find that part.` }
        });
    }
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { embeds },
    });
};
exports.handleHalloweenCommand = handleHalloweenCommand;
//# sourceMappingURL=command_halloween.js.map