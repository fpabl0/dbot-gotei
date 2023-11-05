"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPAWN_COMMAND = void 0;
const types_1 = require("./types");
exports.SPAWN_COMMAND = {
    name: "gb_spawn",
    description: "Gotei Bot Command",
    type: types_1.CommandType.CharInput,
    options: [
        {
            type: types_1.CommandOptionType.Integer,
            name: "type",
            description: "Pick a spawn search type",
            required: true,
            choices: [
                { name: "By Pokemon", value: 1 },
                { name: "By Place", value: 2 },
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
//# sourceMappingURL=commands.js.map