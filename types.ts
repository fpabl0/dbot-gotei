
// ===============================================================
// Discord Command
// ===============================================================

export type Command = {
  name: string;
  description: string;
  options?: CommandOption[];
  type: CommandType;
};

export enum CommandType {
  CharInput = 1,
  User = 2,
  Message = 3,
};

export type CommandOption = {
  name: string;
  description?: string;
  type: CommandOptionType;
  required?: boolean;
  choices?: CommandChoice[];
};

export enum CommandOptionType {
  String = 3,
  Integer = 4,
  Boolean = 5,
  User = 6,
  Number = 10,
};

export type CommandChoice = {
  name: string;
  value: string | number;
};

// ===============================================================
// Spawn types
// ===============================================================

export type NormalSpawn = {
  sprite: string;
  pokemon: string;
  rarity: string;
  time: string;
  method: string;
  level: string;
  ev?: string;
  place: string;
};

export type SpecialSpawn = {
  sprite?: string;
  pokemon: string;
  rarity: string;
  method: string; // swarm, box, contest
};