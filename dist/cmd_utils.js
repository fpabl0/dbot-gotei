"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createByPlaceSpecialTable = exports.createByPlaceTable = exports.createByPokeTable = exports.createByPokeSpecialTable = exports.findSimilar = void 0;
const discord_js_1 = require("discord.js");
const embed_table_1 = require("embed-table");
const findSimilar = (like, all) => {
    for (const v of all) {
        if (v.toLowerCase().includes(like.toLowerCase())) {
            return v;
        }
    }
    return undefined;
};
exports.findSimilar = findSimilar;
const createByPokeSpecialTable = (prefix, poke, specialSpawnMap) => {
    const embeds = [];
    if (poke === undefined)
        return embeds;
    const spawns = specialSpawnMap[poke];
    if (spawns === undefined)
        return embeds;
    const table = new embed_table_1.Table({
        titles: ["M"],
        titleIndexes: [0],
        columnIndexes: [0],
        start: '`',
        end: '`',
        padEnd: 3,
    });
    for (const s of spawns) {
        table.addRow([s.method]);
    }
    const embed = new discord_js_1.EmbedBuilder().setFields({
        name: `${prefix}**Pokemon:** ${poke} (${spawns[0].rarity})`,
        value: table.rows.join("\n"),
    });
    embeds.push(embed);
    return embeds;
};
exports.createByPokeSpecialTable = createByPokeSpecialTable;
const createByPokeTable = (prefix, poke, spawnsByPoke) => {
    const embeds = [];
    if (poke === undefined)
        return embeds;
    const spawns = spawnsByPoke[poke];
    if (spawns === undefined)
        return embeds;
    let maxPlaceLen = 0;
    for (const s of spawns) {
        if (s.place.length > maxPlaceLen) {
            maxPlaceLen = s.place.length;
        }
    }
    const cIndexStart = maxPlaceLen + 2;
    // create normal table
    const parts = spawns.length > 15 ? 2 : 1;
    for (let i = 0; i < parts; i++) {
        const slicedSpawn = parts === 1 ? spawns : i === 0 ? spawns.slice(0, 15) : spawns.slice(15);
        const table = new embed_table_1.Table({
            titles: ["Place", "T", "M", "Lvl"],
            titleIndexes: [0, 33, 40, 62],
            columnIndexes: [0, cIndexStart, cIndexStart + 5, cIndexStart + 10],
            start: '`',
            end: '`',
            padEnd: 3,
        });
        for (const s of slicedSpawn) {
            table.addRow([s.place, s.time, s.method, s.level]);
        }
        const embed = new discord_js_1.EmbedBuilder().setFields({
            name: `${prefix}**Pokemon:** ${poke} (${spawns[0].rarity})${parts > 1 ? ` Part ${i + 1}` : ""}`,
            value: table.rows.join("\n"),
        });
        embeds.push(embed);
    }
    return embeds;
};
exports.createByPokeTable = createByPokeTable;
const createByPlaceTable = (prefix, place, spawnsbyPlace) => {
    const embeds = [];
    if (place === undefined)
        return embeds;
    const spawns = spawnsbyPlace[place];
    if (spawns === undefined)
        return embeds;
    // max pokemon name len
    let maxPkmnNameLen = 0;
    for (const s of spawns) {
        if (s.pokemon.length > maxPkmnNameLen) {
            maxPkmnNameLen = s.pokemon.length;
        }
    }
    const cIndexStart = maxPkmnNameLen + 2;
    // create table
    const parts = spawns.length > 22 ? 2 : 1;
    for (let i = 0; i < parts; i++) {
        const slicedSpawn = parts === 1 ? spawns : i === 0 ? spawns.slice(0, 22) : spawns.slice(22);
        const table = new embed_table_1.Table({
            titles: ["Pkmn", "R", "T", "M", "Lvl"],
            titleIndexes: [0, 25, 33, 40, 62],
            columnIndexes: [0, cIndexStart, cIndexStart + 4, cIndexStart + 9, cIndexStart + 14],
            start: '`',
            end: '`',
            padEnd: 3,
        });
        for (const s of slicedSpawn) {
            table.addRow([s.pokemon, s.rarity, s.time, s.method, s.level]);
        }
        const embed = new discord_js_1.EmbedBuilder().setFields({
            name: `${prefix}**Place:** ${place}${parts > 1 ? ` Part ${i + 1}` : ""}`,
            value: table.rows.join("\n"),
        });
        embeds.push(embed);
    }
    return embeds;
};
exports.createByPlaceTable = createByPlaceTable;
const createByPlaceSpecialTable = (prefix, place, spawnsbyPoke) => {
    const embeds = [];
    const isSwarm = place === "Swarm";
    if (place === undefined)
        return embeds;
    const spawns = Object.values(spawnsbyPoke).flat().filter(v => isSwarm ? v.method === "Swarm" : v.method !== "Swarm");
    if (spawns === undefined)
        return embeds;
    // max pokemon name len
    let maxPkmnNameLen = 0;
    for (const s of spawns) {
        if (s.pokemon.length > maxPkmnNameLen) {
            maxPkmnNameLen = s.pokemon.length;
        }
    }
    const cIndexStart = maxPkmnNameLen + 2;
    // create table
    const parts = spawns.length > 22 ? 2 : 1;
    for (let i = 0; i < parts; i++) {
        const slicedSpawn = parts === 1 ? spawns : i === 0 ? spawns.slice(0, 22) : spawns.slice(22);
        const table = new embed_table_1.Table({
            titles: ["Pkmn", "R", "M"],
            titleIndexes: [0, 25, 33],
            columnIndexes: [0, cIndexStart, cIndexStart + 4],
            start: '`',
            end: '`',
            padEnd: 3,
        });
        for (const s of slicedSpawn) {
            table.addRow([s.pokemon, s.rarity, s.method]);
        }
        const embed = new discord_js_1.EmbedBuilder().setFields({
            name: `${prefix}**Method:** ${place}${parts > 1 ? ` Part ${i + 1}` : ""}`,
            value: table.rows.join("\n"),
        });
        embeds.push(embed);
    }
    return embeds;
};
exports.createByPlaceSpecialTable = createByPlaceSpecialTable;
//# sourceMappingURL=cmd_utils.js.map