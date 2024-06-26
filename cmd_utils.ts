import { EmbedBuilder } from "discord.js";
import { Table } from "embed-table";
import { NormalSpawn, SpecialSpawn } from "./types";

export const findSimilar = (like: string, all: string[]) => {
  for (const v of all) {
    if (v.toLowerCase().includes(like.toLowerCase())) {
      return v;
    }
  }
  return undefined;
};

export const findStartsWith = (starts: string, all: string[]) => {
  for (const v of all) {
    if (v.toLowerCase().startsWith(starts.toLowerCase())) {
      return v;
    }
  }
  return undefined;
};

export const createByPokeSpecialTable = (prefix: string, poke: string | undefined, specialSpawnMap: { [key: string]: SpecialSpawn[]; }) => {
  const embeds: EmbedBuilder[] = [];

  if (poke === undefined) return embeds;
  const spawns = specialSpawnMap[poke];
  if (spawns === undefined) return embeds;

  const table = new Table({
    titles: ["M"], // added just to skip errors
    titleIndexes: [0],
    columnIndexes: [0],
    start: '`',
    end: '`',
    padEnd: 3,
  });
  for (const s of spawns) {
    table.addRow([s.method]);
  }
  const embed = new EmbedBuilder().setFields({
    name: `${prefix}**Pokemon:** ${poke} (${spawns[0].rarity})`,
    value: table.rows.join("\n"),
  });
  embeds.push(embed);

  return embeds;
};

export const createByPokeTable = (prefix: string, poke: string | undefined, spawnsByPoke: { [key: string]: NormalSpawn[]; }) => {
  const embeds: EmbedBuilder[] = [];

  if (poke === undefined) return embeds;
  const spawns = spawnsByPoke[poke];
  if (spawns === undefined) return embeds;

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
    const table = new Table({
      titles: ["Place", "R", "T", "M", "Lvl"], // added just to skip errors
      titleIndexes: [0, 33, 41, 48, 70],
      columnIndexes: [0, cIndexStart, cIndexStart + 4, cIndexStart + 9, cIndexStart + 14],
      start: '`',
      end: '`',
      padEnd: 3,
    });
    for (const s of slicedSpawn) {
      table.addRow([s.place, s.rarity, s.time, s.method, s.level]);
    }
    const embed = new EmbedBuilder().setFields({
      name: `${prefix}**Pokemon:** ${poke}${parts > 1 ? ` Part ${i + 1}` : ""}`,
      value: table.rows.join("\n"),
    });
    embeds.push(embed);
  }

  return embeds;
};

export const createByPlaceTable = (prefix: string, place: string | undefined, spawnsbyPlace: { [key: string]: NormalSpawn[]; }) => {
  const embeds: EmbedBuilder[] = [];

  if (place === undefined) return embeds;
  const spawns = spawnsbyPlace[place];
  if (spawns === undefined) return embeds;

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
    const table = new Table({
      titles: ["Pkmn", "R", "T", "M", "Lvl"], // added just to skip errors
      titleIndexes: [0, 25, 33, 40, 62],
      columnIndexes: [0, cIndexStart, cIndexStart + 4, cIndexStart + 9, cIndexStart + 14], // [0, 16, 20, 25, 35],
      start: '`',
      end: '`',
      padEnd: 3,
    });
    for (const s of slicedSpawn) {
      table.addRow([s.pokemon, s.rarity, s.time, s.method, s.level]);
    }
    const embed = new EmbedBuilder().setFields({
      name: `${prefix}**Place:** ${place}${parts > 1 ? ` Part ${i + 1}` : ""}`,
      value: table.rows.join("\n"),
    });
    embeds.push(embed);
  }

  return embeds;
};

export const createByPlaceSpecialTable = (prefix: string, place: "Swarm" | "Box", spawnsbyPoke: { [key: string]: SpecialSpawn[]; }) => {
  const embeds: EmbedBuilder[] = [];
  const isSwarm = place === "Swarm";
  if (place === undefined) return embeds;
  const spawns = Object.values(spawnsbyPoke).flat().filter(v => isSwarm ? v.method === "Swarm" : v.method !== "Swarm");
  if (spawns === undefined) return embeds;

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
    const table = new Table({
      titles: ["Pkmn", "R", "M"], // added just to skip errors
      titleIndexes: [0, 25, 33],
      columnIndexes: [0, cIndexStart, cIndexStart + 4], // [0, 16, 20, 25, 35],
      start: '`',
      end: '`',
      padEnd: 3,
    });
    for (const s of slicedSpawn) {
      table.addRow([s.pokemon, s.rarity, s.method]);
    }
    const embed = new EmbedBuilder().setFields({
      name: `${prefix}**Method:** ${place}${parts > 1 ? ` Part ${i + 1}` : ""}`,
      value: table.rows.join("\n"),
    });
    embeds.push(embed);
  }

  return embeds;
};