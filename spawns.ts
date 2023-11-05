import { NormalSpawn, SpecialSpawn } from "./types";

export const SPAWN_PLACES = [
  "Twinleaf Town",
  "Route 201",
  "Lake Verity",
  "Route 219",
  "Route 202",
  "Route 203",
  "Route 204",
  "Oreburgh Gate",
  "Ravaged Path",
  "Route 205",
  "Valley Windworks",
  "Eterna Forest",
  "Route 205: Eterna",
  "Route 206",
  "Route 207",
  "Mt. Coronet 1F1",
  "Route 208",
  "Route 209",
  "Route 210: East",
  "Route 215",
  "Route 214",
  "Valor Lakefront",
  "Lake Valor",
  "Route 213",
  "Route 213: East",
  "Pastoria City",
  "Route 212 (South)",
  "Route 212 (North)",
  "Route 210: North",
  "Route 210",
  "Route 211 (East)",
  "Mt. Coronet Upper 1F1",
  "Route 211 (West)",
  "Route 218",
  "Canalave City",
  "Mt. Coronet Upper B1F",
  "Mt. Coronet Upper 1F 2",
  "Route 216",
  "Route 217",
  "Acuity Lakefront",
  "Lake Acuity",
  "Mt. Coronet 2F",
  "Mt. Coronet 2F: North",
  "Mt. Coronet 2F: West",
  "Mt. Coronet 3F",
  "Mt. Coronet Peak",
  "Mt. Coronet 1F 2",
  "Mt. Coronet 4F1",
  "Mt. Coronet 4F3",
  "Mt. Coronet 5F",
  "Mt. Coronet 6F",
  "Route 222",
  "Sunyshore City",
  "Route 223",
  "Iron Island B1F",
  "Iron Island B1F L",
  "Iron Island B1F R",
  "Iron Island B2F R",
  "Iron Island B2F L",
  "Victory Road 1F",
  "Victory Road B1F",
  "Victory Road 2F",
  "Spring Valley",
  "Route 225",
  "Survival Area",
  "Route 226",
  "Route 227",
  "Stark Mountain",
  "Stark Mountain: Entrance",
  "Stark Mountain Inside",
  "Route 228",
  "Route 229",
  "Steel Cavern 1F",
  "Steel Cavern",
  "Fuego Ironworks",
  "Route 230",
  "Resort Area",
  "Old Chateau 2F",
  "Old Chateau Abandoned Room #5",
  "Old Chateau Abandoned Room #4",
  "Old Chateau Abandoned Room #3",
  "Old Chateau Abandoned Room #2",
  "Old Chateau Dining Area",
  "Old Chateau 1F",
  "Old Chateau 1F: East",
  "Old Chateau 1F: West",
  "Old Chateau Abandoned Room #1",
  "Wayward Cave 1F",
  "Wayward Cave 2F",
  "Lost Tower #1",
  "Lost Tower #2",
  "Lost Tower #3",
  "Lost Tower #4",
  "Lost Tower #5",
  "Great Marsh",
  "Route Sereny",
  "Route 1",
  "Rockshore City",
  "Route 2",
  "Boulder Cavern 1F",
  "Patthar Village",
  "Oozy Forest",
  "Boulder Cavern 2F",
  "Route 3 Cliffs",
  "Route 3",
  "Bijli City",
  "Route 4",
  "Route 4 Shores",
  "Lehar Town",
  "Route 3 - Cliffside",
  "Lehar Town Shores",
  "Route 5",
  "Route 5-Lakefront",
  "Grayroot Town - Northern Pass",
  "Nuzbar Forest",
  "Nuzbar Village",
  "Boulder Cavern - B1F",
  "Boulder Cavern - B2F",
  "Underground Cavern",
  "Route 6",
  "Route 6 Highway Pass",
  "Scorched Desert",
  "Sunshire Town",
  "Cresemun Beach",
  "Amberwick Pass",
  "Amberwick Town",
  "Mt. Inferno",
  "Mt. Inferno Peak",
  "Oozy Forest Northern Pass",
  "Oozy Forest (Faunas)",
  "Inferno-Moonshire Pass",
  "Route 7-A",
  "Route 7-B",
  "Drenched Forest",
  "Route 7-C",
  "Route 8-A",
  "Route 8-B",
  "Glacier Cave-A",
  "Glacier Cave-B",
  "Glacier Cave-C",
  "Glacier Cave-D",
  "Barfi Pass",
  "Ochra Cliffs",
  "Ochra Park-A",
  "Ochra Park-B",
  "Route 9-A",
  "Route 9-B",
  "Matti Village",
  "Matti Cliffs",
  "Route 10",
  "Goldburn City",
  "Route 11-A",
  "Route 11-B",
  "Route 11-C",
  "Route 12-A",
  "Route 12-B",
  "Jannat Village",
  "Goldburn City Shores",
  "Old Power Plant",
  "Old Power Plant - Stairs 1F",
  "Old Power Plant - Stairs B1F",
  "Old Power Plant - Restricted Area",
  "Old Power Plant - Generator Room",
  "Old Power Plant - Room 3",
  "Route 219 (South-West)",
  "Route 13-B",
  "Route 13-C",
  "Route 13-D",
  "Champions Villa #1",
  "Champions Villa #2",
  "Gym 5",
  "Champions Road #1",
  "Champions Road #2",
  "Champions Road #3",
  "Champions Road #4",
  "Champions Road #5",
  "Champions Road #6",
  "Champions Road #7",
  "Gym 7",
  "Cavity Cavern 1-A",
  "Cavity Cavern 2-A",
  "Cavity Cavern 2-B",
  "Cavity Cavern 3-A",
  "Cavity Cavern 2-C",
  "Cavity Cavern 2-D",
  "Cavity Cavern 2-E",
  "Cavity Cavern 1-B",
  "Dragon Tower Floor 1",
  "Dragon Tower Floor 2",
  "Dragon Tower Floor 3",
  "Dragon Tower Floor 4",
  "Dragon Tower Floor 5",
  "Dragon Tower Floor 6",
  "Dragon Tower Floor 7"
]

export const NORMAL_SPAWNS_BY_PLACE: {[key: string]: NormalSpawn[]} = {
  "Twinleaf Town": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Twinleaf Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Twinleaf Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "3-5",
      "ev": "1 SP_ATK",
      "place": "Twinleaf Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "3-5",
      "ev": "1 ATK",
      "place": "Twinleaf Town"
    }
  ],
  "Route 201": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketot.gif",
      "pokemon": "Kricketot",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 DEF",
      "place": "Route 201"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bidoof.gif",
      "pokemon": "Bidoof",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 BASE_HP",
      "place": "Route 201"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shinx.gif",
      "pokemon": "Shinx",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 ATK",
      "place": "Route 201"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 BASE_HP",
      "place": "Route 201"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/weedle.gif",
      "pokemon": "Weedle",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 SPEED",
      "place": "Route 201"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/starly.gif",
      "pokemon": "Starly",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "3-4",
      "ev": "1 SPEED",
      "place": "Route 201"
    }
  ],
  "Lake Verity": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketot.gif",
      "pokemon": "Kricketot",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 DEF",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bidoof.gif",
      "pokemon": "Bidoof",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 BASE_HP",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shinx.gif",
      "pokemon": "Shinx",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 ATK",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 BASE_HP",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/weedle.gif",
      "pokemon": "Weedle",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 SPEED",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/starly.gif",
      "pokemon": "Starly",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "3-4",
      "ev": "1 SPEED",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "3-5",
      "ev": "1 SP_ATK",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "3-5",
      "ev": "1 ATK",
      "place": "Lake Verity"
    }
  ],
  "Route 219": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 SPEED",
      "place": "Route 219"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 ATK",
      "place": "Route 219"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clamperl.gif",
      "pokemon": "Clamperl",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 DEF",
      "place": "Route 219"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "1 SP_DEF",
      "place": "Route 219"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "2 SP_DEF",
      "place": "Route 219"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "1 SP_ATK",
      "place": "Route 219"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "2 SP_ATK",
      "place": "Route 219"
    }
  ],
  "Route 202": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bidoof.gif",
      "pokemon": "Bidoof",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-5",
      "ev": "1 BASE_HP",
      "place": "Route 202"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shinx.gif",
      "pokemon": "Shinx",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-5",
      "ev": "1 ATK",
      "place": "Route 202"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kakuna.gif",
      "pokemon": "Kakuna",
      "rarity": "UC",
      "time": "🌑",
      "method": "🍀",
      "level": "4-6",
      "ev": "2 DEF",
      "place": "Route 202"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/metapod.gif",
      "pokemon": "Metapod",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "4-6",
      "ev": "2 DEF",
      "place": "Route 202"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/starly.gif",
      "pokemon": "Starly",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "5-7",
      "ev": "1 SPEED",
      "place": "Route 202"
    }
  ],
  "Route 203": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketot.gif",
      "pokemon": "Kricketot",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 DEF",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bidoof.gif",
      "pokemon": "Bidoof",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 BASE_HP",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shinx.gif",
      "pokemon": "Shinx",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 ATK",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 SPEED",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/surskit.gif",
      "pokemon": "Surskit",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 SPEED",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pineco.gif",
      "pokemon": "Pineco",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 DEF",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/starly.gif",
      "pokemon": "Starly",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "7-9",
      "ev": "1 SPEED",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "4-6",
      "ev": "1 ATK",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "4-6",
      "ev": "1 SP_ATK",
      "place": "Route 203"
    }
  ],
  "Route 204": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 BASE_HP",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/glameow.gif",
      "pokemon": "Glameow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 SPEED",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 SP_DEF",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seedot.gif",
      "pokemon": "Seedot",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 DEF",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/budew.gif",
      "pokemon": "Budew",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 SP_ATK",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "8-10",
      "ev": "1 ATK",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "8-10",
      "ev": "1 SP_ATK",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "8-10",
      "ev": "1 SP_DEF",
      "place": "Route 204"
    }
  ],
  "Oreburgh Gate": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 DEF",
      "place": "Oreburgh Gate"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 SPEED",
      "place": "Oreburgh Gate"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 SP_ATK",
      "place": "Oreburgh Gate"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 DEF",
      "place": "Oreburgh Gate"
    }
  ],
  "Ravaged Path": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 DEF",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 SPEED",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 SP_ATK",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 DEF",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SPEED",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SPEED",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "12-14",
      "ev": "1 ATK",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "12-14",
      "ev": "1 SP_ATK",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "12-14",
      "ev": "1 BASE_HP",
      "place": "Ravaged Path"
    }
  ],
  "Route 205": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 BASE_HP",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/glameow.gif",
      "pokemon": "Glameow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SPEED",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SP_DEF",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "11-13",
      "ev": "1 ATK",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "11-13",
      "ev": "1 SP_ATK",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "11-13",
      "ev": "1 SP_DEF",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 ATK",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_DEF",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_DEF",
      "place": "Route 205"
    }
  ],
  "Valley Windworks": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bidoof.gif",
      "pokemon": "Bidoof",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 BASE_HP",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buizel.gif",
      "pokemon": "Buizel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SPEED",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pachirisu.gif",
      "pokemon": "Pachirisu",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SPEED",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SP_DEF",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/drifloon.gif",
      "pokemon": "Drifloon",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 BASE_HP",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mareep.gif",
      "pokemon": "Mareep",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SP_ATK",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/elekid.gif",
      "pokemon": "Elekid",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "15-17",
      "ev": "1 SPEED",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "10-12",
      "ev": "1 ATK",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "10-12",
      "ev": "1 SP_ATK",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "10-12",
      "ev": "1 SP_DEF",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 ATK",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_DEF",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 ATK",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_DEF",
      "place": "Valley Windworks"
    }
  ],
  "Eterna Forest": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketune.gif",
      "pokemon": "Kricketune",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "2 ATK",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 BASE_HP",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/silcoon.gif",
      "pokemon": "Silcoon",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "14-16",
      "ev": "2 DEF",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cascoon.gif",
      "pokemon": "Cascoon",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "14-16",
      "ev": "2 DEF",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/beautifly.gif",
      "pokemon": "Beautifly",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "14-16",
      "ev": "3 SP_ATK",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dustox.gif",
      "pokemon": "Dustox",
      "rarity": "UC",
      "time": "🌑",
      "method": "🍀",
      "level": "14-16",
      "ev": "3 SP_DEF",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buneary.gif",
      "pokemon": "Buneary",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SPEED",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoothoot.gif",
      "pokemon": "Hoothoot",
      "rarity": "UC",
      "time": "🌑",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 BASE_HP",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/budew.gif",
      "pokemon": "Budew",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SP_ATK",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/murkrow.gif",
      "pokemon": "Murkrow",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SPEED",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/heracross.gif",
      "pokemon": "Heracross",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "2 ATK",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pinsir.gif",
      "pokemon": "Pinsir",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "2 ATK",
      "place": "Eterna Forest"
    }
  ],
  "Route 205: Eterna": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 BASE_HP",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/glameow.gif",
      "pokemon": "Glameow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SPEED",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 ATK",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_DEF",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_DEF",
      "place": "Route 205: Eterna"
    }
  ],
  "Route 206": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seviper.gif",
      "pokemon": "Seviper",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "18-20",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 206"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketot.gif",
      "pokemon": "Kricketot",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "18-20",
      "ev": "1 DEF",
      "place": "Route 206"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ponyta.gif",
      "pokemon": "Ponyta",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "18-20",
      "ev": "1 SPEED",
      "place": "Route 206"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stunky.gif",
      "pokemon": "Stunky",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "18-20",
      "ev": "1 SPEED",
      "place": "Route 206"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machop.gif",
      "pokemon": "Machop",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "18-20",
      "ev": "1 ATK",
      "place": "Route 206"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-20",
      "ev": "1 DEF",
      "place": "Route 206"
    }
  ],
  "Route 207": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pachirisu.gif",
      "pokemon": "Pachirisu",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 SPEED",
      "place": "Route 207"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketot.gif",
      "pokemon": "Kricketot",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 DEF",
      "place": "Route 207"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ponyta.gif",
      "pokemon": "Ponyta",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 SPEED",
      "place": "Route 207"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikachu.gif",
      "pokemon": "Pikachu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "2 SPEED",
      "place": "Route 207"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machop.gif",
      "pokemon": "Machop",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 ATK",
      "place": "Route 207"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/phanpy.gif",
      "pokemon": "Phanpy",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 BASE_HP",
      "place": "Route 207"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gligar.gif",
      "pokemon": "Gligar",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 DEF",
      "place": "Route 207"
    }
  ],
  "Mt. Coronet 1F1": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 DEF",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 DEF",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machop.gif",
      "pokemon": "Machop",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 DEF",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "16-18",
      "ev": "1 BASE_HP",
      "place": "Mt. Coronet 1F1"
    }
  ],
  "Route 208": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bibarel.gif",
      "pokemon": "Bibarel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "2 ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pachirisu.gif",
      "pokemon": "Pachirisu",
      "rarity": "C",
      "time": "all",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 SPEED",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spoink.gif",
      "pokemon": "Spoink",
      "rarity": "UC",
      "time": "all",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 SP_DEF",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machop.gif",
      "pokemon": "Machop",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/budew.gif",
      "pokemon": "Budew",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 SP_ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wooper.gif",
      "pokemon": "Wooper",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 BASE_HP",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ralts.gif",
      "pokemon": "Ralts",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 SP_ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "20-22",
      "ev": "1 SP_ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "20-22",
      "ev": "1 ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "20-22",
      "ev": "1 BASE_HP",
      "place": "Route 208"
    }
  ],
  "Route 209": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 BASE_HP",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pachirisu.gif",
      "pokemon": "Pachirisu",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 SPEED",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 SPEED",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌑",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 SP_DEF",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kirlia.gif",
      "pokemon": "Kirlia",
      "rarity": "VR",
      "time": "🌕",
      "method": "🍀",
      "level": "22-24",
      "ev": "2 SP_ATK",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 SP_ATK",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 BASE_HP",
      "place": "Route 209"
    }
  ],
  "Route 210: East": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 SP_ATK",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/doduo.gif",
      "pokemon": "Doduo",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 ATK",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 ATK",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 SPEED",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/miltank.gif",
      "pokemon": "Miltank",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 DEF",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chansey.gif",
      "pokemon": "Chansey",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 BASE_HP",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "30-32",
      "ev": "1 SP_ATK",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "30-32",
      "ev": "2 SP_ATK",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "30-32",
      "ev": "1 SP_ATK",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "30-32",
      "ev": "1 ATK",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "30-32",
      "ev": "1 BASE_HP",
      "place": "Route 210: East"
    }
  ],
  "Route 215": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 SP_ATK",
      "place": "Route 215"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/doduo.gif",
      "pokemon": "Doduo",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 ATK",
      "place": "Route 215"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "2 ATK",
      "place": "Route 215"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magnemite.gif",
      "pokemon": "Magnemite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 SP_ATK",
      "place": "Route 215"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/marill.gif",
      "pokemon": "Marill",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "2 BASE_HP",
      "place": "Route 215"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gligar.gif",
      "pokemon": "Gligar",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 DEF",
      "place": "Route 215"
    }
  ],
  "Route 214": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/burmy.gif",
      "pokemon": "Burmy",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 SP_DEF",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wormadam.gif",
      "pokemon": "Wormadam-Plant",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 SP_DEF",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buneary.gif",
      "pokemon": "Buneary",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 SPEED",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/girafarig.gif",
      "pokemon": "Girafarig",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 SP_ATK",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/houndour.gif",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 SP_ATK",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "30-32",
      "ev": "1 SP_ATK",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "30-32",
      "ev": "2 SP_ATK",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "30-32",
      "ev": "1 ATK",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "30-32",
      "ev": "1 SP_ATK",
      "place": "Route 214"
    }
  ],
  "Valor Lakefront": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketune.gif",
      "pokemon": "Kricketune",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 ATK",
      "place": "Valor Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bibarel.gif",
      "pokemon": "Bibarel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 ATK",
      "place": "Valor Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 DEF",
      "place": "Valor Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 DEF",
      "place": "Valor Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/girafarig.gif",
      "pokemon": "Girafarig",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 SP_ATK",
      "place": "Valor Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/houndour.gif",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 SP_ATK",
      "place": "Valor Lakefront"
    }
  ],
  "Lake Valor": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "40-42",
      "ev": "1 SP_ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "40-42",
      "ev": "2 SP_ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bibarel.gif",
      "pokemon": "Bibarel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "40-42",
      "ev": "2 ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketune.gif",
      "pokemon": "Kricketune",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "40-42",
      "ev": "2 ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "40-42",
      "ev": "2 BASE_HP",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "40-42",
      "ev": "1 SP_ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/staravia.gif",
      "pokemon": "Staravia",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "40-42",
      "ev": "2 SPEED",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "40-42",
      "ev": "1 ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "40-42",
      "ev": "2 ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "40-42",
      "ev": "1 SP_ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "40-42",
      "ev": "2 SP_ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "40-42",
      "ev": "1 SP_ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "40-42",
      "ev": "2 SP_ATK",
      "place": "Lake Valor"
    }
  ],
  "Route 213": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/floatzel.gif",
      "pokemon": "Floatzel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "2 SPEED",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/masquerain.gif",
      "pokemon": "Masquerain",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "1 SP_DEF, 1 SP_ATK",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tranquill.gif",
      "pokemon": "Tranquill",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "2 ATK",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos-east.gif",
      "pokemon": "Shellos-East",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swellow.gif",
      "pokemon": "Swellow",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "2 SPEED",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "32-34",
      "ev": "1 SP_ATK",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "32-34",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "32-34",
      "ev": "1 SP_DEF",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chinchou.gif",
      "pokemon": "Chinchou",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "33-35",
      "ev": "1 BASE_HP",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "32-34",
      "ev": "1 SP_DEF",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "32-34",
      "ev": "2 SP_DEF",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos-east.gif",
      "pokemon": "Shellos-East",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "32-34",
      "ev": "",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon-east.gif",
      "pokemon": "Gastrodon-East",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "32-34",
      "ev": "",
      "place": "Route 213"
    }
  ],
  "Route 213: East": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/floatzel.gif",
      "pokemon": "Floatzel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 SPEED",
      "place": "Route 213: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/masquerain.gif",
      "pokemon": "Masquerain",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 SP_DEF, 1 SP_ATK",
      "place": "Route 213: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tranquill.gif",
      "pokemon": "Tranquill",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 ATK",
      "place": "Route 213: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos-east.gif",
      "pokemon": "Shellos-East",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "",
      "place": "Route 213: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swellow.gif",
      "pokemon": "Swellow",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 SPEED",
      "place": "Route 213: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/helioptile.gif",
      "pokemon": "Helioptile",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 SPEED",
      "place": "Route 213: East"
    }
  ],
  "Pastoria City": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 SP_ATK",
      "place": "Pastoria City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Pastoria City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "1 SP_DEF",
      "place": "Pastoria City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "2 SP_DEF",
      "place": "Pastoria City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos-east.gif",
      "pokemon": "Shellos-East",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "",
      "place": "Pastoria City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon-east.gif",
      "pokemon": "Gastrodon-East",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "",
      "place": "Pastoria City"
    }
  ],
  "Route 212 (South)": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/patrat.gif",
      "pokemon": "Patrat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/watchog.gif",
      "pokemon": "Watchog",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "2 ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidove.gif",
      "pokemon": "Pidove",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos.gif",
      "pokemon": "Shellos",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 BASE_HP",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wooper.gif",
      "pokemon": "Wooper",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 BASE_HP",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/croagunk.gif",
      "pokemon": "Croagunk",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 SP_ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 BASE_HP",
      "place": "Route 212 (South)"
    }
  ],
  "Route 212 (North)": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/patrat.gif",
      "pokemon": "Patrat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/watchog.gif",
      "pokemon": "Watchog",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "2 ATK",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidove.gif",
      "pokemon": "Pidove",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos.gif",
      "pokemon": "Shellos",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 BASE_HP",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/budew.gif",
      "pokemon": "Budew",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 SP_ATK",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/trubbish.gif",
      "pokemon": "Trubbish",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 SPEED",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ralts.gif",
      "pokemon": "Ralts",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 SP_ATK",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 SP_ATK",
      "place": "Route 212 (North)"
    }
  ],
  "Route 210: North": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 SP_ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/doduo.gif",
      "pokemon": "Doduo",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "2 ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 SPEED",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/roselia.gif",
      "pokemon": "Roselia",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "28-30",
      "ev": "2 SP_ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/miltank.gif",
      "pokemon": "Miltank",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "2 DEF",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chansey.gif",
      "pokemon": "Chansey",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "2 BASE_HP",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "28-30",
      "ev": "1 SP_ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "28-30",
      "ev": "2 SP_ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "28-30",
      "ev": "1 SP_ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "28-30",
      "ev": "1 ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "28-30",
      "ev": "1 BASE_HP",
      "place": "Route 210: North"
    }
  ],
  "Route 210": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_ATK",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/doduo.gif",
      "pokemon": "Doduo",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "2 ATK",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SPEED",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/roselia.gif",
      "pokemon": "Roselia",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "24-26",
      "ev": "2 SP_ATK",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/miltank.gif",
      "pokemon": "Miltank",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "2 DEF",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "24-26",
      "ev": "1 SP_ATK",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "24-26",
      "ev": "1 BASE_HP",
      "place": "Route 210"
    }
  ],
  "Route 211 (East)": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wormadam-sandy.gif",
      "pokemon": "Wormadam-Sandy",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "2 DEF",
      "place": "Route 211 (East)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "1 SP_ATK",
      "place": "Route 211 (East)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jumpluff.gif",
      "pokemon": "Jumpluff",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "3 SPEED",
      "place": "Route 211 (East)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/aipom.gif",
      "pokemon": "Aipom",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "1 SPEED",
      "place": "Route 211 (East)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "2 ATK",
      "place": "Route 211 (East)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magnemite.gif",
      "pokemon": "Magnemite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "1 SP_ATK",
      "place": "Route 211 (East)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/vulpix.gif",
      "pokemon": "Vulpix",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "1 SPEED",
      "place": "Route 211 (East)"
    }
  ],
  "Mt. Coronet Upper 1F1": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 DEF",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 SPEED",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 ATK",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet Upper 1F1"
    }
  ],
  "Route 211 (West)": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 BASE_HP",
      "place": "Route 211 (West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/glameow.gif",
      "pokemon": "Glameow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 SPEED",
      "place": "Route 211 (West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 SP_DEF",
      "place": "Route 211 (West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 SPEED",
      "place": "Route 211 (West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 DEF",
      "place": "Route 211 (West)"
    }
  ],
  "Route 218": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/floatzel.gif",
      "pokemon": "Floatzel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "2 SPEED",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bibarel.gif",
      "pokemon": "Bibarel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "2 ATK",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon.gif",
      "pokemon": "Gastrodon",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "2 BASE_HP",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chatot.gif",
      "pokemon": "Chatot",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 ATK",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mrmime.gif",
      "pokemon": "Mr.Mime",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "2 SP_DEF",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/munchlax.gif",
      "pokemon": "Munchlax",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 BASE_HP",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-40",
      "ev": "1 SPEED",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-40",
      "ev": "1 ATK",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "36-40",
      "ev": "1 SP_DEF",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "36-40",
      "ev": "2 SP_DEF",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos.gif",
      "pokemon": "Shellos",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "36-40",
      "ev": "1 BASE_HP",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon.gif",
      "pokemon": "Gastrodon",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "36-40",
      "ev": "2 BASE_HP",
      "place": "Route 218"
    }
  ],
  "Canalave City": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "1 ATK",
      "place": "Canalave City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "1 SPEED",
      "place": "Canalave City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lumineon.gif",
      "pokemon": "Lumineon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "2 SPEED",
      "place": "Canalave City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/staryu.gif",
      "pokemon": "Staryu",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "1 SPEED",
      "place": "Canalave City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chinchou.gif",
      "pokemon": "Chinchou",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "1 BASE_HP",
      "place": "Canalave City"
    }
  ],
  "Mt. Coronet Upper B1F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "2 DEF",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "2 SPEED",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "36-38",
      "ev": "2 ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-38",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-38",
      "ev": "2 SP_ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "36-38",
      "ev": "1 BASE_HP",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "36-38",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-38",
      "ev": "1 ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-38",
      "ev": "2 ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/feebas.gif",
      "pokemon": "Feebas",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "36-38",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "36-38",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "36-38",
      "ev": "2 SPEED",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "36-38",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "36-38",
      "ev": "2 SP_ATK",
      "place": "Mt. Coronet Upper B1F"
    }
  ],
  "Mt. Coronet Upper 1F 2": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "2 DEF",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "2 SPEED",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "38-40",
      "ev": "2 ATK",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet Upper 1F 2"
    }
  ],
  "Route 216": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zangoose.gif",
      "pokemon": "Zangoose",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "2 ATK",
      "place": "Route 216"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "2 BASE_HP",
      "place": "Route 216"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "2 SP_ATK",
      "place": "Route 216"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "1 ATK",
      "place": "Route 216"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "1 BASE_HP",
      "place": "Route 216"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "1 ATK",
      "place": "Route 216"
    }
  ],
  "Route 217": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zangoose.gif",
      "pokemon": "Zangoose",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "2 ATK",
      "place": "Route 217"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "2 BASE_HP",
      "place": "Route 217"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "2 SP_ATK",
      "place": "Route 217"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "1 ATK",
      "place": "Route 217"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "1 BASE_HP",
      "place": "Route 217"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "1 ATK",
      "place": "Route 217"
    }
  ],
  "Acuity Lakefront": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zangoose.gif",
      "pokemon": "Zangoose",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "2 ATK",
      "place": "Acuity Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "2 BASE_HP",
      "place": "Acuity Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "2 SP_ATK",
      "place": "Acuity Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "1 ATK",
      "place": "Acuity Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "1 BASE_HP",
      "place": "Acuity Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "1 ATK",
      "place": "Acuity Lakefront"
    }
  ],
  "Lake Acuity": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zangoose.gif",
      "pokemon": "Zangoose",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "48-50",
      "ev": "2 ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "48-50",
      "ev": "2 BASE_HP",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "48-50",
      "ev": "2 SP_ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "48-50",
      "ev": "1 ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "48-50",
      "ev": "1 BASE_HP",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sneasel.gif",
      "pokemon": "Sneasel",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "48-50",
      "ev": "1 SPEED",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "48-50",
      "ev": "1 ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "48-50",
      "ev": "2 ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "48-50",
      "ev": "1 SP_ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "48-50",
      "ev": "2 SP_ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "48-50",
      "ev": "1 SP_ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "48-50",
      "ev": "2 SP_ATK",
      "place": "Lake Acuity"
    }
  ],
  "Mt. Coronet 2F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 2F"
    }
  ],
  "Mt. Coronet 2F: North": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 2F: North"
    }
  ],
  "Mt. Coronet 2F: West": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 2F: West"
    }
  ],
  "Mt. Coronet 3F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 3F"
    }
  ],
  "Mt. Coronet Peak": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet Peak"
    }
  ],
  "Mt. Coronet 1F 2": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 1F 2"
    }
  ],
  "Mt. Coronet 4F1": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "50-52",
      "ev": "2 SP_ATK",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "50-52",
      "ev": "1 BASE_HP",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "50-52",
      "ev": "1 ATK",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/feebas.gif",
      "pokemon": "Feebas",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 4F1"
    }
  ],
  "Mt. Coronet 4F3": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 4F3"
    }
  ],
  "Mt. Coronet 5F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 5F"
    }
  ],
  "Mt. Coronet 6F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 6F"
    }
  ],
  "Route 222": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/purugly.gif",
      "pokemon": "Purugly",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 SPEED",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luxio.gif",
      "pokemon": "Luxio",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon-east.gif",
      "pokemon": "Gastrodon-East",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magnemite.gif",
      "pokemon": "Magnemite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "1 SP_ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/elekid.gif",
      "pokemon": "Elekid",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "1 SPEED",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 SP_ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "2 ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/carvanha.gif",
      "pokemon": "Carvanha",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "1 SP_DEF",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "2 SP_DEF",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "1 SP_ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "2 SP_ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wingull.gif",
      "pokemon": "Wingull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "1 SPEED",
      "place": "Route 222"
    }
  ],
  "Sunyshore City": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 SP_ATK",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 ATK",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "2 ATK",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/staryu.gif",
      "pokemon": "Staryu",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 SPEED",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "1 SP_DEF",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "2 SP_DEF",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "1 SP_ATK",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "2 SP_ATK",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mantyke.gif",
      "pokemon": "Mantyke",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "1 SP_DEF",
      "place": "Sunyshore City"
    }
  ],
  "Route 223": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "54-56",
      "ev": "1 SP_ATK",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "54-56",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "54-56",
      "ev": "1 ATK",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "54-56",
      "ev": "2 ATK",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/carvanha.gif",
      "pokemon": "Carvanha",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "54-56",
      "ev": "1 ATK",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "54-56",
      "ev": "1 SP_DEF",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "54-56",
      "ev": "2 SP_DEF",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "54-56",
      "ev": "1 SP_ATK",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "54-56",
      "ev": "2 SP_ATK",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mantyke.gif",
      "pokemon": "Mantyke",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "54-56",
      "ev": "1 SP_DEF",
      "place": "Route 223"
    }
  ],
  "Iron Island B1F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Iron Island B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Iron Island B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Iron Island B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B1F"
    }
  ],
  "Iron Island B1F L": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Iron Island B1F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Iron Island B1F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B1F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Iron Island B1F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B1F L"
    }
  ],
  "Iron Island B1F R": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Iron Island B1F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Iron Island B1F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B1F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Iron Island B1F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B1F R"
    }
  ],
  "Iron Island B2F R": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Iron Island B2F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "--",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Iron Island B2F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B2F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Iron Island B2F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B2F R"
    }
  ],
  "Iron Island B2F L": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Iron Island B2F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Iron Island B2F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B2F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Iron Island B2F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B2F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mawile.gif",
      "pokemon": "Mawile",
      "rarity": "VR",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 ATK, 1 DEF",
      "place": "Iron Island B2F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sableye.gif",
      "pokemon": "Sableye",
      "rarity": "VR",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 ATK, 1 DEF",
      "place": "Iron Island B2F L"
    }
  ],
  "Victory Road 1F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 DEF",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golem.gif",
      "pokemon": "Golem",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "3 DEF",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 ATK",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "1 DEF",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 ATK",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/medicham.gif",
      "pokemon": "Medicham",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 SPEED",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rhyhorn.gif",
      "pokemon": "Rhyhorn",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "1 DEF",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kadabra.gif",
      "pokemon": "Kadabra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 SP_ATK",
      "place": "Victory Road 1F"
    }
  ],
  "Victory Road B1F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 DEF",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/floatzel.gif",
      "pokemon": "Floatzel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 SPEED",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golem.gif",
      "pokemon": "Golem",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "3 DEF",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 ATK",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "1 DEF",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 ATK",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/medicham.gif",
      "pokemon": "Medicham",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 SPEED",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rhyhorn.gif",
      "pokemon": "Rhyhorn",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "1 DEF",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kadabra.gif",
      "pokemon": "Kadabra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 SP_ATK",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chansey.gif",
      "pokemon": "Chansey",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 BASE_HP",
      "place": "Victory Road B1F"
    }
  ],
  "Victory Road 2F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 DEF",
      "place": "Victory Road 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golem.gif",
      "pokemon": "Golem",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "3 DEF",
      "place": "Victory Road 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 ATK",
      "place": "Victory Road 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "1 DEF",
      "place": "Victory Road 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 ATK",
      "place": "Victory Road 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/medicham.gif",
      "pokemon": "Medicham",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 SPEED",
      "place": "Victory Road 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rhyhorn.gif",
      "pokemon": "Rhyhorn",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "1 DEF",
      "place": "Victory Road 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kadabra.gif",
      "pokemon": "Kadabra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 SP_ATK",
      "place": "Victory Road 2F"
    }
  ],
  "Spring Valley": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 BASE_HP",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/weedle.gif",
      "pokemon": "Weedle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 BASE_HP",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/glameow.gif",
      "pokemon": "Glameow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buizel.gif",
      "pokemon": "Buizel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/metapod.gif",
      "pokemon": "Metapod",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "2 DEF",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cascoon.gif",
      "pokemon": "Cascoon",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "2 DEF",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kakuna.gif",
      "pokemon": "Kakuna",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "2 DEF",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/silcoon.gif",
      "pokemon": "Silcoon",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "2 DEF",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buneary.gif",
      "pokemon": "Buneary",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/venonat.gif",
      "pokemon": "Venonat",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 SP_DEF",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/volbeat.gif",
      "pokemon": "Volbeat",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/illumise.gif",
      "pokemon": "Illumise",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pinsir.gif",
      "pokemon": "Pinsir",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "2 ATK",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/heracross.gif",
      "pokemon": "Heracross",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "2 ATK",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gligar.gif",
      "pokemon": "Gligar",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 DEF",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/larvesta.gif",
      "pokemon": "Larvesta",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 ATK",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/panpour.gif",
      "pokemon": "Panpour",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwag.gif",
      "pokemon": "Poliwag",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "1-10",
      "ev": "1 SP_ATK",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/feebas.gif",
      "pokemon": "Feebas",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dratini.gif",
      "pokemon": "Dratini",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "1-10",
      "ev": "1 ATK",
      "place": "Spring Valley"
    }
  ],
  "Route 225": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/purugly.gif",
      "pokemon": "Purugly",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinda.gif",
      "pokemon": "Spinda",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_ATK",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lopunny.gif",
      "pokemon": "Lopunny",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/skuntank.gif",
      "pokemon": "Skuntank",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swablu.gif",
      "pokemon": "Swablu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_DEF",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/altaria.gif",
      "pokemon": "Altaria",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SP_DEF",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorlax.gif",
      "pokemon": "Snorlax",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bruxish.gif",
      "pokemon": "Bruxish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 ATK",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/qwilfish.gif",
      "pokemon": "Qwilfish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Route 225"
    }
  ],
  "Survival Area": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Survival Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Survival Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Survival Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bruxish.gif",
      "pokemon": "Bruxish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 ATK",
      "place": "Survival Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Survival Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Survival Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/qwilfish.gif",
      "pokemon": "Qwilfish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Survival Area"
    }
  ],
  "Route 226": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/purugly.gif",
      "pokemon": "Purugly",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinda.gif",
      "pokemon": "Spinda",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_ATK",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lopunny.gif",
      "pokemon": "Lopunny",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/skuntank.gif",
      "pokemon": "Skuntank",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swablu.gif",
      "pokemon": "Swablu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_DEF",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/altaria.gif",
      "pokemon": "Altaria",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SP_DEF",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorlax.gif",
      "pokemon": "Snorlax",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bruxish.gif",
      "pokemon": "Bruxish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 ATK",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/qwilfish.gif",
      "pokemon": "Qwilfish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Route 226"
    }
  ],
  "Route 227": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinda.gif",
      "pokemon": "Spinda",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lunatone.gif",
      "pokemon": "Lunatone",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/solrock.gif",
      "pokemon": "Solrock",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/numel.gif",
      "pokemon": "Numel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/camerupt.gif",
      "pokemon": "Camerupt",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/torkoal.gif",
      "pokemon": "Torkoal",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 DEF",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/trapinch.gif",
      "pokemon": "Trapinch",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Route 227"
    }
  ],
  "Stark Mountain": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 SPEED",
      "place": "Stark Mountain"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 DEF",
      "place": "Stark Mountain"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/numel.gif",
      "pokemon": "Numel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 SP_ATK",
      "place": "Stark Mountain"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/camerupt.gif",
      "pokemon": "Camerupt",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Stark Mountain"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/torkoal.gif",
      "pokemon": "Torkoal",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 DEF",
      "place": "Stark Mountain"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/heatmor.gif",
      "pokemon": "Heatmor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 SP_ATK",
      "place": "Stark Mountain"
    }
  ],
  "Stark Mountain: Entrance": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 SPEED",
      "place": "Stark Mountain: Entrance"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 DEF",
      "place": "Stark Mountain: Entrance"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/numel.gif",
      "pokemon": "Numel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 SP_ATK",
      "place": "Stark Mountain: Entrance"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/camerupt.gif",
      "pokemon": "Camerupt",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Stark Mountain: Entrance"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/torkoal.gif",
      "pokemon": "Torkoal",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 DEF",
      "place": "Stark Mountain: Entrance"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/heatmor.gif",
      "pokemon": "Heatmor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 SP_ATK",
      "place": "Stark Mountain: Entrance"
    }
  ],
  "Stark Mountain Inside": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 SPEED",
      "place": "Stark Mountain Inside"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 DEF",
      "place": "Stark Mountain Inside"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/slugma.gif",
      "pokemon": "Slugma",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 SP_ATK",
      "place": "Stark Mountain Inside"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 DEF",
      "place": "Stark Mountain Inside"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/torkoal.gif",
      "pokemon": "Torkoal",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 DEF",
      "place": "Stark Mountain Inside"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/heatmor.gif",
      "pokemon": "Heatmor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 SP_ATK",
      "place": "Stark Mountain Inside"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/larvitar.gif",
      "pokemon": "Larvitar",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 ATK",
      "place": "Stark Mountain Inside"
    }
  ],
  "Route 228": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandslash.gif",
      "pokemon": "Sandslash",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 DEF",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandshrew.gif",
      "pokemon": "Sandshrew",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cacnea.gif",
      "pokemon": "Cacnea",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_ATK",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cacturne.gif",
      "pokemon": "Cacturne",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 BASE_HP",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/aron.gif",
      "pokemon": "Aron",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hippopotas.gif",
      "pokemon": "Hippopotas",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Route 228"
    }
  ],
  "Route 229": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tropius.gif",
      "pokemon": "Tropius",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nincada.gif",
      "pokemon": "Nincada",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/combee.gif",
      "pokemon": "Combee",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/vespiquen.gif",
      "pokemon": "Vespiquen",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/venomoth.gif",
      "pokemon": "Venomoth",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_ATK, 1 SPEED",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/fletchling.gif",
      "pokemon": "Fletchling",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/frillish.gif",
      "pokemon": "Frillish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SP_DEF",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_DEF",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wailord.gif",
      "pokemon": "Wailord",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 229"
    }
  ],
  "Steel Cavern 1F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stunfisk.gif",
      "pokemon": "Stunfisk",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Steel Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/makuhita.gif",
      "pokemon": "Makuhita",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 BASE_HP",
      "place": "Steel Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hariyama.gif",
      "pokemon": "Hariyama",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Steel Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Steel Cavern 1F"
    },
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/geodude-alola.gif",
      "pokemon": "Geodude-Alola",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Steel Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tyrogue.gif",
      "pokemon": "Tyrogue",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Steel Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/riolu.gif",
      "pokemon": "Riolu",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Steel Cavern 1F"
    }
  ],
  "Steel Cavern": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stunfisk.gif",
      "pokemon": "Stunfisk",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Steel Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/makuhita.gif",
      "pokemon": "Makuhita",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 BASE_HP",
      "place": "Steel Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hariyama.gif",
      "pokemon": "Hariyama",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Steel Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Steel Cavern"
    },
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/geodude-alola.gif",
      "pokemon": "Geodude-Alola",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Steel Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tyrogue.gif",
      "pokemon": "Tyrogue",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Steel Cavern"
    }
  ],
  "Fuego Ironworks": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luxio.gif",
      "pokemon": "Luxio",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "2 ATK",
      "place": "Fuego Ironworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buizel.gif",
      "pokemon": "Buizel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 SPEED",
      "place": "Fuego Ironworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ponyta.gif",
      "pokemon": "Ponyta",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 SPEED",
      "place": "Fuego Ironworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/togedemaru.gif",
      "pokemon": "Togedemaru",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "2 ATK",
      "place": "Fuego Ironworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pichu.gif",
      "pokemon": "Pichu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 SPEED",
      "place": "Fuego Ironworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikachu-rockstar.gif",
      "pokemon": "Pikachu-Rock-Star",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "",
      "place": "Fuego Ironworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikachu-popstar.gif",
      "pokemon": "Pikachu-Pop-Star",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "",
      "place": "Fuego Ironworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikachu-phd.gif",
      "pokemon": "Pikachu-PhD",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "",
      "place": "Fuego Ironworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikachu-libre.gif",
      "pokemon": "Pikachu-Libre",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "",
      "place": "Fuego Ironworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikachu-belle.gif",
      "pokemon": "Pikachu-Belle",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "",
      "place": "Fuego Ironworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magby.gif",
      "pokemon": "Magby",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 SPEED",
      "place": "Fuego Ironworks"
    }
  ],
  "Route 230": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tropius.gif",
      "pokemon": "Tropius",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nincada.gif",
      "pokemon": "Nincada",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/combee.gif",
      "pokemon": "Combee",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/vespiquen.gif",
      "pokemon": "Vespiquen",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/venomoth.gif",
      "pokemon": "Venomoth",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_ATK, 1 SPEED",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/fletchling.gif",
      "pokemon": "Fletchling",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/frillish.gif",
      "pokemon": "Frillish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SP_DEF",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/horsea.gif",
      "pokemon": "Horsea",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SP_ATK",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_DEF",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wailord.gif",
      "pokemon": "Wailord",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/horsea.gif",
      "pokemon": "Horsea",
      "rarity": "UR",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 SP_ATK",
      "place": "Route 230"
    }
  ],
  "Resort Area": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Resort Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Resort Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Resort Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/frillish.gif",
      "pokemon": "Frillish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SP_DEF",
      "place": "Resort Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Resort Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_DEF",
      "place": "Resort Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Resort Area"
    }
  ],
  "Old Chateau 2F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 2F"
    }
  ],
  "Old Chateau Abandoned Room #5": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau Abandoned Room #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #5"
    }
  ],
  "Old Chateau Abandoned Room #4": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau Abandoned Room #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #4"
    }
  ],
  "Old Chateau Abandoned Room #3": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau Abandoned Room #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #3"
    }
  ],
  "Old Chateau Abandoned Room #2": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau Abandoned Room #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #2"
    }
  ],
  "Old Chateau Dining Area": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Dining Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Dining Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Dining Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau Dining Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Dining Area"
    }
  ],
  "Old Chateau 1F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 1F"
    }
  ],
  "Old Chateau 1F: East": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 1F: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 1F: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 1F: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau 1F: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 1F: East"
    }
  ],
  "Old Chateau 1F: West": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 1F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 1F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 1F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau 1F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 1F: West"
    }
  ],
  "Old Chateau Abandoned Room #1": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau Abandoned Room #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #1"
    }
  ],
  "Wayward Cave 1F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "41-43",
      "ev": "2 SPEED",
      "place": "Wayward Cave 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/floatzel.gif",
      "pokemon": "Floatzel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "41-43",
      "ev": "2 SPEED",
      "place": "Wayward Cave 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chimecho.gif",
      "pokemon": "Chimecho",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "41-43",
      "ev": "1 SP_DEF, 1 SP_ATK",
      "place": "Wayward Cave 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler-alola.gif",
      "pokemon": "Graveler-Alola",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "41-43",
      "ev": "2 DEF",
      "place": "Wayward Cave 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rhyhorn.gif",
      "pokemon": "Rhyhorn",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "41-43",
      "ev": "1 DEF",
      "place": "Wayward Cave 1F"
    }
  ],
  "Wayward Cave 2F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "43-45",
      "ev": "2 SPEED",
      "place": "Wayward Cave 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/floatzel.gif",
      "pokemon": "Floatzel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "43-45",
      "ev": "2 SPEED",
      "place": "Wayward Cave 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chimecho.gif",
      "pokemon": "Chimecho",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "43-45",
      "ev": "1 SP_DEF, 1 SP_ATK",
      "place": "Wayward Cave 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler-alola.gif",
      "pokemon": "Graveler-Alola",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "43-45",
      "ev": "2 DEF",
      "place": "Wayward Cave 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rhydon.gif",
      "pokemon": "Rhydon",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "43-45",
      "ev": "2 ATK",
      "place": "Wayward Cave 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gible.gif",
      "pokemon": "Gible",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "43-45",
      "ev": "1 ATK",
      "place": "Wayward Cave 2F"
    }
  ],
  "Lost Tower #1": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_ATK",
      "place": "Lost Tower #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/murkrow.gif",
      "pokemon": "Murkrow",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SPEED",
      "place": "Lost Tower #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #1"
    }
  ],
  "Lost Tower #2": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_ATK",
      "place": "Lost Tower #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/murkrow.gif",
      "pokemon": "Murkrow",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SPEED",
      "place": "Lost Tower #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #2"
    }
  ],
  "Lost Tower #3": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_ATK",
      "place": "Lost Tower #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/murkrow.gif",
      "pokemon": "Murkrow",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SPEED",
      "place": "Lost Tower #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #3"
    }
  ],
  "Lost Tower #4": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_ATK",
      "place": "Lost Tower #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/murkrow.gif",
      "pokemon": "Murkrow",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SPEED",
      "place": "Lost Tower #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #4"
    }
  ],
  "Lost Tower #5": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_ATK",
      "place": "Lost Tower #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/murkrow.gif",
      "pokemon": "Murkrow",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SPEED",
      "place": "Lost Tower #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #5"
    }
  ],
  "Great Marsh": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wormadam-trash.gif",
      "pokemon": "Wormadam-Trash",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/patrat.gif",
      "pokemon": "Patrat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 ATK",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/surskit.gif",
      "pokemon": "Surskit",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 SPEED",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/electrike.gif",
      "pokemon": "Electrike",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 SPEED",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bonsly.gif",
      "pokemon": "Bonsly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 DEF",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shroomish.gif",
      "pokemon": "Shroomish",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 BASE_HP",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oddish.gif",
      "pokemon": "Oddish",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 SP_ATK",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yanma.gif",
      "pokemon": "Yanma",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 SPEED",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/skorupi.gif",
      "pokemon": "Skorupi",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 DEF",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chimchar.gif",
      "pokemon": "Chimchar",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 SPEED",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/turtwig.gif",
      "pokemon": "Turtwig",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 ATK",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwag.gif",
      "pokemon": "Poliwag",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "ev": "1 SPEED",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "ev": "1 ATK",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magikarp.gif",
      "pokemon": "Magikarp",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "ev": "1 SPEED",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lapras.gif",
      "pokemon": "Lapras",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "ev": "2 BASE_HP",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/piplup.gif",
      "pokemon": "Piplup",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "ev": "1 SP_ATK",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "ev": "1 SP_DEF",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lotad.gif",
      "pokemon": "Lotad",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "ev": "1 SP_DEF",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wailmer.gif",
      "pokemon": "Wailmer",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "ev": "1 BASE_HP",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/slowpoke.gif",
      "pokemon": "Slowpoke",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "ev": "1 BASE_HP",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/piplup.gif",
      "pokemon": "Piplup",
      "rarity": "UR",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "ev": "1 SP_ATK",
      "place": "Great Marsh"
    }
  ],
  "Route Sereny": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 SP_ATK",
      "place": "Route Sereny"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 ATK",
      "place": "Route Sereny"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgey.gif",
      "pokemon": "Pidgey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 SPEED",
      "place": "Route Sereny"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rattata.gif",
      "pokemon": "Rattata",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 SPEED",
      "place": "Route Sereny"
    }
  ],
  "Route 1": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 ATK",
      "place": "Route 1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgey.gif",
      "pokemon": "Pidgey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 SPEED",
      "place": "Route 1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rattata.gif",
      "pokemon": "Rattata",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 SPEED",
      "place": "Route 1"
    }
  ],
  "Rockshore City": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-4",
      "ev": "1 ATK",
      "place": "Rockshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spearow.gif",
      "pokemon": "Spearow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "ev": "1 SPEED",
      "place": "Rockshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bonsly.gif",
      "pokemon": "Bonsly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "ev": "1 DEF",
      "place": "Rockshore City"
    }
  ],
  "Route 2": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ekans.gif",
      "pokemon": "Ekans",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-5",
      "ev": "1 ATK",
      "place": "Route 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgey.gif",
      "pokemon": "Pidgey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-5",
      "ev": "1 SPEED",
      "place": "Route 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-5",
      "ev": "1 ATK",
      "place": "Route 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ledyba.gif",
      "pokemon": "Ledyba",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "4-5",
      "ev": "1 SP_DEF",
      "place": "Route 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kakuna.gif",
      "pokemon": "Kakuna",
      "rarity": "UC",
      "time": "🌑",
      "method": "🍀",
      "level": "4-5",
      "ev": "2 DEF",
      "place": "Route 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/crabrawler.gif",
      "pokemon": "Crabrawler",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "4-6",
      "ev": "1 ATK",
      "place": "Route 2"
    }
  ],
  "Boulder Cavern 1F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 DEF",
      "place": "Boulder Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 SPEED",
      "place": "Boulder Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/paras.gif",
      "pokemon": "Paras",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 ATK",
      "place": "Boulder Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dwebble.gif",
      "pokemon": "Dwebble",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "7-9",
      "ev": "1 DEF",
      "place": "Boulder Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/diglett.gif",
      "pokemon": "Diglett",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "7-9",
      "ev": "1 SPEED",
      "place": "Boulder Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "7-9",
      "ev": "1 SP_DEF",
      "place": "Boulder Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "7-9",
      "ev": "1 ATK",
      "place": "Boulder Cavern 1F"
    }
  ],
  "Patthar Village": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandshrew.gif",
      "pokemon": "Sandshrew",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 DEF",
      "place": "Patthar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 ATK",
      "place": "Patthar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/paras.gif",
      "pokemon": "Paras",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 ATK",
      "place": "Patthar Village"
    }
  ],
  "Oozy Forest": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-11",
      "ev": "1 BASE_HP",
      "place": "Oozy Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-11",
      "ev": "1 BASE_HP",
      "place": "Oozy Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/paras.gif",
      "pokemon": "Paras",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-11",
      "ev": "1 ATK",
      "place": "Oozy Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/combee.gif",
      "pokemon": "Combee",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "6-11",
      "ev": "1 SPEED",
      "place": "Oozy Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "6-11",
      "ev": "1 SP_ATK",
      "place": "Oozy Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "6-11",
      "ev": "1 SP_ATK",
      "place": "Oozy Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/qwilfish.gif",
      "pokemon": "Qwilfish",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "6-11",
      "ev": "1 ATK",
      "place": "Oozy Forest"
    }
  ],
  "Boulder Cavern 2F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 DEF",
      "place": "Boulder Cavern 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandshrew.gif",
      "pokemon": "Sandshrew",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 DEF",
      "place": "Boulder Cavern 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 DEF",
      "place": "Boulder Cavern 2F"
    }
  ],
  "Route 3 Cliffs": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgey.gif",
      "pokemon": "Pidgey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 SPEED",
      "place": "Route 3 Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ekans.gif",
      "pokemon": "Ekans",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 ATK",
      "place": "Route 3 Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikipek.gif",
      "pokemon": "Pikipek",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 ATK",
      "place": "Route 3 Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio-pompom.gif",
      "pokemon": "Oricorio-PomPom",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "2 SP_ATK",
      "place": "Route 3 Cliffs"
    }
  ],
  "Route 3": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 ATK",
      "place": "Route 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgey.gif",
      "pokemon": "Pidgey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 SPEED",
      "place": "Route 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rattata.gif",
      "pokemon": "Rattata",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 SPEED",
      "place": "Route 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgeotto.gif",
      "pokemon": "Pidgeotto",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "2 SPEED",
      "place": "Route 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "12-14",
      "ev": "1 SP_DEF",
      "place": "Route 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "12-14",
      "ev": "1 SPEED",
      "place": "Route 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seel.gif",
      "pokemon": "Seel",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "12-14",
      "ev": "1 SP_DEF",
      "place": "Route 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/frillish.gif",
      "pokemon": "Frillish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "14-16",
      "ev": "1 SP_DEF",
      "place": "Route 3"
    }
  ],
  "Bijli City": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/voltorb.gif",
      "pokemon": "Voltorb",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SPEED",
      "place": "Bijli City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rattata.gif",
      "pokemon": "Rattata",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SPEED",
      "place": "Bijli City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos.gif",
      "pokemon": "Shellos",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 BASE_HP",
      "place": "Bijli City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/emolga.gif",
      "pokemon": "Emolga",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "2 SPEED",
      "place": "Bijli City"
    }
  ],
  "Route 4": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 ATK",
      "place": "Route 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mankey.gif",
      "pokemon": "Mankey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 ATK",
      "place": "Route 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spearow.gif",
      "pokemon": "Spearow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 SPEED",
      "place": "Route 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/grubbin.gif",
      "pokemon": "Grubbin",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 ATK",
      "place": "Route 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/koffing.gif",
      "pokemon": "Koffing",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 DEF",
      "place": "Route 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/scraggy.gif",
      "pokemon": "Scraggy",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "18-20",
      "ev": "1 ATK",
      "place": "Route 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/happiny.gif",
      "pokemon": "Happiny",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "18-20",
      "ev": "1 BASE_HP",
      "place": "Route 4"
    }
  ],
  "Route 4 Shores": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/surskit.gif",
      "pokemon": "Surskit",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 SPEED",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 SP_ATK",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgey.gif",
      "pokemon": "Pidgey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 SPEED",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgeotto.gif",
      "pokemon": "Pidgeotto",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "2 SPEED",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/grubbin.gif",
      "pokemon": "Grubbin",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 ATK",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wooper.gif",
      "pokemon": "Wooper",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 BASE_HP",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-20",
      "ev": "1 SP_DEF",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-20",
      "ev": "1 SPEED",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seel.gif",
      "pokemon": "Seel",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "16-20",
      "ev": "1 SP_DEF",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bruxish.gif",
      "pokemon": "Bruxish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "18-20",
      "ev": "2 ATK",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellder.gif",
      "pokemon": "Shellder",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "18-20",
      "ev": "1 DEF",
      "place": "Route 4 Shores"
    }
  ],
  "Lehar Town": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌑",
      "method": "🎣",
      "level": "16-20",
      "ev": "1 SP_DEF",
      "place": "Lehar Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌕",
      "method": "🎣",
      "level": "16-20",
      "ev": "1 SPEED",
      "place": "Lehar Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-20",
      "ev": "1 ATK",
      "place": "Lehar Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-20",
      "ev": "1 SP_ATK",
      "place": "Lehar Town"
    }
  ],
  "Route 3 - Cliffside": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgey.gif",
      "pokemon": "Pidgey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "ev": "1 SPEED",
      "place": "Route 3 - Cliffside"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ekans.gif",
      "pokemon": "Ekans",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "ev": "1 ATK",
      "place": "Route 3 - Cliffside"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikipek.gif",
      "pokemon": "Pikipek",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "ev": "1 ATK",
      "place": "Route 3 - Cliffside"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio-pompom.gif",
      "pokemon": "Oricorio-PomPom",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "2 SP_ATK",
      "place": "Route 3 - Cliffside"
    }
  ],
  "Lehar Town Shores": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bidoof.gif",
      "pokemon": "Bidoof",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "ev": "1 BASE_HP",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tropius.gif",
      "pokemon": "Tropius",
      "rarity": "--",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "ev": "2 BASE_HP",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikipek.gif",
      "pokemon": "Pikipek",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "ev": "1 ATK",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sunkern.gif",
      "pokemon": "Sunkern",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "18-22",
      "ev": "1 SP_ATK",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/crabrawler.gif",
      "pokemon": "Crabrawler",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "ev": "1 ATK",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandygast.gif",
      "pokemon": "Sandygast",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "ev": "1 DEF",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌕",
      "method": "🎣",
      "level": "18-22",
      "ev": "1 SPEED",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "18-22",
      "ev": "1 ATK",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "18-22",
      "ev": "1 SP_ATK",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seel.gif",
      "pokemon": "Seel",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "18-22",
      "ev": "1 SP_DEF",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌑",
      "method": "🎣",
      "level": "18-22",
      "ev": "1 SP_DEF",
      "place": "Lehar Town Shores"
    }
  ],
  "Route 5": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tropius.gif",
      "pokemon": "Tropius",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "2 BASE_HP",
      "place": "Route 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 BASE_HP",
      "place": "Route 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 SP_DEF",
      "place": "Route 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oddish.gif",
      "pokemon": "Oddish",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 SP_ATK",
      "place": "Route 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/natu.gif",
      "pokemon": "Natu",
      "rarity": "VR",
      "time": "🌕",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 SP_ATK",
      "place": "Route 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/munna.gif",
      "pokemon": "Munna",
      "rarity": "VR",
      "time": "🌑",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 BASE_HP",
      "place": "Route 5"
    }
  ],
  "Route 5-Lakefront": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 BASE_HP",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 SP_DEF",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cherubi.gif",
      "pokemon": "Cherubi",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 SP_ATK",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ledyba.gif",
      "pokemon": "Ledyba",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 SP_DEF",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/exeggcute.gif",
      "pokemon": "Exeggcute",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 DEF",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/karrablast.gif",
      "pokemon": "Karrablast",
      "rarity": "VR",
      "time": "🌑",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 ATK",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shelmet.gif",
      "pokemon": "Shelmet",
      "rarity": "VR",
      "time": "🌕",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 DEF",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "23-25",
      "ev": "1 ATK",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "23-25",
      "ev": "1 SP_ATK",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tynamo.gif",
      "pokemon": "Tynamo",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "23-25",
      "ev": "1 SPEED",
      "place": "Route 5-Lakefront"
    }
  ],
  "Grayroot Town - Northern Pass": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/drowzee.gif",
      "pokemon": "Drowzee",
      "rarity": "C",
      "time": "🌓",
      "method": "Waking",
      "level": "26-30",
      "ev": "1 SP_DEF",
      "place": "Grayroot Town - Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dustox.gif",
      "pokemon": "Dustox",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "26-30",
      "ev": "3 SP_DEF",
      "place": "Grayroot Town - Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spoink.gif",
      "pokemon": "Spoink",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "26-30",
      "ev": "1 SP_DEF",
      "place": "Grayroot Town - Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricoriopau.gif",
      "pokemon": "Oricorio-Pau",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "26-30",
      "ev": "2 SP_ATK",
      "place": "Grayroot Town - Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mudbray.gif",
      "pokemon": "Mudbray",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 ATK",
      "place": "Grayroot Town - Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/munchlax.gif",
      "pokemon": "Munchlax",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 BASE_HP",
      "place": "Grayroot Town - Northern Pass"
    }
  ],
  "Nuzbar Forest": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 BASE_HP",
      "place": "Nuzbar Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 BASE_HP",
      "place": "Nuzbar Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/weedle.gif",
      "pokemon": "Weedle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 SPEED",
      "place": "Nuzbar Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/silcoon.gif",
      "pokemon": "Silcoon",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "30-33",
      "ev": "2 DEF",
      "place": "Nuzbar Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cascoon.gif",
      "pokemon": "Cascoon",
      "rarity": "UC",
      "time": "🌑",
      "method": "🍀",
      "level": "30-33",
      "ev": "2 DEF",
      "place": "Nuzbar Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cutiefly.gif",
      "pokemon": "Cutiefly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 SPEED",
      "place": "Nuzbar Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/joltik.gif",
      "pokemon": "Joltik",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "32-33",
      "ev": "1 SPEED",
      "place": "Nuzbar Forest"
    }
  ],
  "Nuzbar Village": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kecleon.gif",
      "pokemon": "Kecleon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 SP_DEF",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/metapod.gif",
      "pokemon": "Metapod",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "2 DEF",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kakuna.gif",
      "pokemon": "Kakuna",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "2 DEF",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/silcoon.gif",
      "pokemon": "Silcoon",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "30-33",
      "ev": "2 DEF",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cascoon.gif",
      "pokemon": "Cascoon",
      "rarity": "UC",
      "time": "🌑",
      "method": "🍀",
      "level": "30-33",
      "ev": "2 DEF",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cutiefly.gif",
      "pokemon": "Cutiefly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 SPEED",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/joltik.gif",
      "pokemon": "Joltik",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "32-33",
      "ev": "1 SPEED",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zarude.gif",
      "pokemon": "Zarude",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "32-33",
      "ev": "",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zarude-dada.gif",
      "pokemon": "Zarude-Dada",
      "rarity": "L",
      "time": "🌓",
      "method": "🍀",
      "level": "32-33",
      "ev": "",
      "place": "Nuzbar Village"
    }
  ],
  "Boulder Cavern - B1F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Boulder Cavern - B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Boulder Cavern - B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/paras.gif",
      "pokemon": "Paras",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 ATK",
      "place": "Boulder Cavern - B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dwebble.gif",
      "pokemon": "Dwebble",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Boulder Cavern - B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/roggenrola.gif",
      "pokemon": "Roggenrola",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-35",
      "ev": "1 DEF",
      "place": "Boulder Cavern - B1F"
    }
  ],
  "Boulder Cavern - B2F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Boulder Cavern - B2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Boulder Cavern - B2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/paras.gif",
      "pokemon": "Paras",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 ATK",
      "place": "Boulder Cavern - B2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/diglett.gif",
      "pokemon": "Diglett",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Boulder Cavern - B2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/roggenrola.gif",
      "pokemon": "Roggenrola",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-35",
      "ev": "1 DEF",
      "place": "Boulder Cavern - B2F"
    }
  ],
  "Underground Cavern": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandshrew.gif",
      "pokemon": "Sandshrew",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/diglett.gif",
      "pokemon": "Diglett",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dwebble.gif",
      "pokemon": "Dwebble",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola-galar.gif",
      "pokemon": "Corsola-Galar",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-35",
      "ev": "1 SP_DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/klefki.gif",
      "pokemon": "Klefki",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-35",
      "ev": "1 DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "32-35",
      "ev": "1 SP_DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "32-35",
      "ev": "1 ATK",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola.gif",
      "pokemon": "Corsola",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "32-35",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/marill.gif",
      "pokemon": "Marill",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "32-35",
      "ev": "2 BASE_HP",
      "place": "Underground Cavern"
    }
  ],
  "Route 6": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 ATK",
      "place": "Route 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spearow.gif",
      "pokemon": "Spearow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 SPEED",
      "place": "Route 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rattata.gif",
      "pokemon": "Rattata",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 SPEED",
      "place": "Route 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandslash.gif",
      "pokemon": "Sandslash",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "2 DEF",
      "place": "Route 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minior.gif",
      "pokemon": "Minior",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 6"
    }
  ],
  "Route 6 Highway Pass": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 ATK",
      "place": "Route 6 Highway Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spearow.gif",
      "pokemon": "Spearow",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 SPEED",
      "place": "Route 6 Highway Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rattata.gif",
      "pokemon": "Rattata",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 SPEED",
      "place": "Route 6 Highway Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandslash.gif",
      "pokemon": "Sandslash",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "2 DEF",
      "place": "Route 6 Highway Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minior.gif",
      "pokemon": "Minior",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 6 Highway Pass"
    }
  ],
  "Scorched Desert": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "34-38",
      "ev": "1 ATK",
      "place": "Scorched Desert"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spearow.gif",
      "pokemon": "Spearow",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "34-38",
      "ev": "1 SPEED",
      "place": "Scorched Desert"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rattata.gif",
      "pokemon": "Rattata",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-38",
      "ev": "1 SPEED",
      "place": "Scorched Desert"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandslash.gif",
      "pokemon": "Sandslash",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "34-38",
      "ev": "2 DEF",
      "place": "Scorched Desert"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minior.gif",
      "pokemon": "Minior",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "34-38",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Scorched Desert"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/roggenrola.gif",
      "pokemon": "Roggenrola",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 DEF",
      "place": "Scorched Desert"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/drilbur.gif",
      "pokemon": "Drilbur",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 ATK",
      "place": "Scorched Desert"
    }
  ],
  "Sunshire Town": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "1 SP_ATK",
      "place": "Sunshire Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Sunshire Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kingler.gif",
      "pokemon": "Kingler",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "2 ATK",
      "place": "Sunshire Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seel.gif",
      "pokemon": "Seel",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "1 SP_DEF",
      "place": "Sunshire Town"
    }
  ],
  "Cresemun Beach": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon.gif",
      "pokemon": "Gastrodon",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "38-42",
      "ev": "2 BASE_HP",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dunsparce.gif",
      "pokemon": "Dunsparce",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "38-42",
      "ev": "1 BASE_HP",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/baltoy.gif",
      "pokemon": "Baltoy",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "38-42",
      "ev": "1 SP_DEF",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/togedemaru.gif",
      "pokemon": "Togedemaru",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "38-42",
      "ev": "2 ATK",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/fomantis.gif",
      "pokemon": "Fomantis",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "38-42",
      "ev": "1 ATK",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola-galar.gif",
      "pokemon": "Corsola-Galar",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "40-42",
      "ev": "1 SP_DEF",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/solosis.gif",
      "pokemon": "Solosis",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "40-42",
      "ev": "1 SP_ATK",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "38-42",
      "ev": "1 SP_ATK",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "38-42",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola.gif",
      "pokemon": "Corsola",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "38-42",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seel.gif",
      "pokemon": "Seel",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "38-42",
      "ev": "1 SP_DEF",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dhelmise.gif",
      "pokemon": "Dhelmise",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "40-42",
      "ev": "2 ATK",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/alomomola.gif",
      "pokemon": "Alomomola",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "40-42",
      "ev": "2 BASE_HP",
      "place": "Cresemun Beach"
    }
  ],
  "Amberwick Pass": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinda.gif",
      "pokemon": "Spinda",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "40-44",
      "ev": "1 SP_ATK",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kecleon.gif",
      "pokemon": "Kecleon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "40-44",
      "ev": "1 SP_DEF",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/komala.gif",
      "pokemon": "Komala",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "40-44",
      "ev": "2 ATK",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bounsweet.gif",
      "pokemon": "Bounsweet",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "40-44",
      "ev": "1 BASE_HP",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/vulpix.gif",
      "pokemon": "Vulpix",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "1 SPEED",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magby.gif",
      "pokemon": "Magby",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "1 SPEED",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "40-44",
      "ev": "1 SP_DEF",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "40-44",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola.gif",
      "pokemon": "Corsola",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "40-44",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seel.gif",
      "pokemon": "Seel",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "40-44",
      "ev": "1 SP_DEF",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chinchou.gif",
      "pokemon": "Chinchou",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "42-44",
      "ev": "1 BASE_HP",
      "place": "Amberwick Pass"
    }
  ],
  "Amberwick Town": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "42-44",
      "ev": "1 SP_DEF",
      "place": "Amberwick Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "42-44",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Amberwick Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "42-44",
      "ev": "1 BASE_HP",
      "place": "Amberwick Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "42-44",
      "ev": "2 BASE_HP",
      "place": "Amberwick Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/staryu.gif",
      "pokemon": "Staryu",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "44-46",
      "ev": "1 SPEED",
      "place": "Amberwick Town"
    }
  ],
  "Mt. Inferno": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/solrock.gif",
      "pokemon": "Solrock",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "44-46",
      "ev": "2 ATK",
      "place": "Mt. Inferno"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lunatone.gif",
      "pokemon": "Lunatone",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "44-46",
      "ev": "2 SP_ATK",
      "place": "Mt. Inferno"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/numel.gif",
      "pokemon": "Numel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "1 SP_ATK",
      "place": "Mt. Inferno"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio.gif",
      "pokemon": "Oricorio",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "2 SP_ATK",
      "place": "Mt. Inferno"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/turtonator.gif",
      "pokemon": "Turtonator",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "45-47",
      "ev": "2 DEF",
      "place": "Mt. Inferno"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/litwick.gif",
      "pokemon": "Litwick",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "45-47",
      "ev": "1 SP_ATK",
      "place": "Mt. Inferno"
    }
  ],
  "Mt. Inferno Peak": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/solrock.gif",
      "pokemon": "Solrock",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "46-48",
      "ev": "2 ATK",
      "place": "Mt. Inferno Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lunatone.gif",
      "pokemon": "Lunatone",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "46-48",
      "ev": "2 SP_ATK",
      "place": "Mt. Inferno Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/numel.gif",
      "pokemon": "Numel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "1 SP_ATK",
      "place": "Mt. Inferno Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio.gif",
      "pokemon": "Oricorio",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "2 SP_ATK",
      "place": "Mt. Inferno Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/salazzle.gif",
      "pokemon": "Salazzle",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "47-49",
      "ev": "2 SPEED",
      "place": "Mt. Inferno Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jangmoo.gif",
      "pokemon": "Jangmo-o",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "47-49",
      "ev": "1 DEF",
      "place": "Mt. Inferno Peak"
    }
  ],
  "Oozy Forest Northern Pass": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/paras.gif",
      "pokemon": "Paras",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 ATK",
      "place": "Oozy Forest Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 BASE_HP",
      "place": "Oozy Forest Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/weedle.gif",
      "pokemon": "Weedle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 SPEED",
      "place": "Oozy Forest Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/combee.gif",
      "pokemon": "Combee",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 SPEED",
      "place": "Oozy Forest Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cutiefly.gif",
      "pokemon": "Cutiefly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 SPEED",
      "place": "Oozy Forest Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-40",
      "ev": "1 SP_ATK",
      "place": "Oozy Forest Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-40",
      "ev": "1 SP_ATK",
      "place": "Oozy Forest Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/qwilfish.gif",
      "pokemon": "Qwilfish",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "36-40",
      "ev": "1 ATK",
      "place": "Oozy Forest Northern Pass"
    }
  ],
  "Oozy Forest (Faunas)": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 BASE_HP",
      "place": "Oozy Forest (Faunas)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 BASE_HP",
      "place": "Oozy Forest (Faunas)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/paras.gif",
      "pokemon": "Paras",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 ATK",
      "place": "Oozy Forest (Faunas)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/silcoon.gif",
      "pokemon": "Silcoon",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "2 DEF",
      "place": "Oozy Forest (Faunas)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cascoon.gif",
      "pokemon": "Cascoon",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "2 DEF",
      "place": "Oozy Forest (Faunas)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cutiefly.gif",
      "pokemon": "Cutiefly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 SPEED",
      "place": "Oozy Forest (Faunas)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wimpod.gif",
      "pokemon": "Wimpod",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 SPEED",
      "place": "Oozy Forest (Faunas)"
    }
  ],
  "Inferno-Moonshire Pass": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon.gif",
      "pokemon": "Gastrodon",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "2 BASE_HP",
      "place": "Inferno-Moonshire Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dunsparce.gif",
      "pokemon": "Dunsparce",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "1 BASE_HP",
      "place": "Inferno-Moonshire Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bounsweet.gif",
      "pokemon": "Bounsweet",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "1 BASE_HP",
      "place": "Inferno-Moonshire Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandygast.gif",
      "pokemon": "Sandygast",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "45-47",
      "ev": "1 DEF",
      "place": "Inferno-Moonshire Pass"
    }
  ],
  "Route 7-A": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "49-53",
      "ev": "2 ATK",
      "place": "Route 7-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "49-53",
      "ev": "1 SP_ATK",
      "place": "Route 7-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tynamo.gif",
      "pokemon": "Tynamo",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "49-53",
      "ev": "1 SPEED",
      "place": "Route 7-A"
    }
  ],
  "Route 7-B": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "1 ATK",
      "place": "Route 7-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ledian.gif",
      "pokemon": "Ledian",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "2 SP_DEF",
      "place": "Route 7-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/beedrill.gif",
      "pokemon": "Beedrill",
      "rarity": "UC",
      "time": "🌑",
      "method": "🍀",
      "level": "49-53",
      "ev": "1 SP_DEF, 2 ATK",
      "place": "Route 7-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mothim.gif",
      "pokemon": "Mothim",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "49-53",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 7-B"
    }
  ],
  "Drenched Forest": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/parasect.gif",
      "pokemon": "Parasect",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "49-53",
      "ev": "2 ATK, 1 DEF",
      "place": "Drenched Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ledian.gif",
      "pokemon": "Ledian",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "49-53",
      "ev": "2 SP_DEF",
      "place": "Drenched Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/morelull.gif",
      "pokemon": "Morelull",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "1 SP_DEF",
      "place": "Drenched Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/charjabug.gif",
      "pokemon": "Charjabug",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "2 DEF",
      "place": "Drenched Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cutiefly.gif",
      "pokemon": "Cutiefly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "1 SPEED",
      "place": "Drenched Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dewpider.gif",
      "pokemon": "Dewpider",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "51-53",
      "ev": "1 SP_DEF",
      "place": "Drenched Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuckle.gif",
      "pokemon": "Shuckle",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "51-53",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Drenched Forest"
    }
  ],
  "Route 7-C": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/parasect.gif",
      "pokemon": "Parasect",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "2 ATK, 1 DEF",
      "place": "Route 7-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ledian.gif",
      "pokemon": "Ledian",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "2 SP_DEF",
      "place": "Route 7-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/morelull.gif",
      "pokemon": "Morelull",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "1 SP_DEF",
      "place": "Route 7-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/charjabug.gif",
      "pokemon": "Charjabug",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "2 DEF",
      "place": "Route 7-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kangaskhan.gif",
      "pokemon": "Kangaskhan",
      "rarity": "VR",
      "time": "🌕",
      "method": "🍀",
      "level": "51-53",
      "ev": "2 BASE_HP",
      "place": "Route 7-C"
    }
  ],
  "Route 8-A": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/masquerain.gif",
      "pokemon": "Masquerain",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "1 SP_DEF, 1 SP_ATK",
      "place": "Route 8-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mankey.gif",
      "pokemon": "Mankey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "1 ATK",
      "place": "Route 8-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/primeape.gif",
      "pokemon": "Primeape",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 ATK",
      "place": "Route 8-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/charjabug.gif",
      "pokemon": "Charjabug",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 DEF",
      "place": "Route 8-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oranguru.gif",
      "pokemon": "Oranguru",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 SP_DEF",
      "place": "Route 8-A"
    }
  ],
  "Route 8-B": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/masquerain.gif",
      "pokemon": "Masquerain",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "1 SP_DEF, 1 SP_ATK",
      "place": "Route 8-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mankey.gif",
      "pokemon": "Mankey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "1 ATK",
      "place": "Route 8-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seviper.gif",
      "pokemon": "Seviper",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 8-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/primeape.gif",
      "pokemon": "Primeape",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 ATK",
      "place": "Route 8-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/charjabug.gif",
      "pokemon": "Charjabug",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 DEF",
      "place": "Route 8-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oranguru.gif",
      "pokemon": "Oranguru",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 SP_DEF",
      "place": "Route 8-B"
    }
  ],
  "Glacier Cave-A": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 SPEED",
      "place": "Glacier Cave-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 DEF",
      "place": "Glacier Cave-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 SP_ATK",
      "place": "Glacier Cave-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 ATK",
      "place": "Glacier Cave-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 BASE_HP",
      "place": "Glacier Cave-A"
    }
  ],
  "Glacier Cave-B": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 SPEED",
      "place": "Glacier Cave-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 DEF",
      "place": "Glacier Cave-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/smoochum.gif",
      "pokemon": "Smoochum",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 SP_ATK",
      "place": "Glacier Cave-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 ATK",
      "place": "Glacier Cave-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 BASE_HP",
      "place": "Glacier Cave-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spheal.gif",
      "pokemon": "Spheal",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 BASE_HP",
      "place": "Glacier Cave-B"
    }
  ],
  "Glacier Cave-C": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 SPEED",
      "place": "Glacier Cave-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 DEF",
      "place": "Glacier Cave-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 SP_ATK",
      "place": "Glacier Cave-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 ATK",
      "place": "Glacier Cave-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 BASE_HP",
      "place": "Glacier Cave-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spheal.gif",
      "pokemon": "Spheal",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 BASE_HP",
      "place": "Glacier Cave-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "55-56",
      "ev": "1 ATK",
      "place": "Glacier Cave-C"
    }
  ],
  "Glacier Cave-D": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 SPEED",
      "place": "Glacier Cave-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 DEF",
      "place": "Glacier Cave-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/smoochum.gif",
      "pokemon": "Smoochum",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 SP_ATK",
      "place": "Glacier Cave-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 ATK",
      "place": "Glacier Cave-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spheal.gif",
      "pokemon": "Spheal",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 BASE_HP",
      "place": "Glacier Cave-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "55-56",
      "ev": "1 ATK",
      "place": "Glacier Cave-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sneasel.gif",
      "pokemon": "Sneasel",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "55-56",
      "ev": "1 SPEED",
      "place": "Glacier Cave-D"
    }
  ],
  "Barfi Pass": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Barfi Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zangoose.gif",
      "pokemon": "Zangoose",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 ATK",
      "place": "Barfi Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/crabrawler.gif",
      "pokemon": "Crabrawler",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Barfi Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/aron.gif",
      "pokemon": "Aron",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Barfi Pass"
    }
  ],
  "Ochra Cliffs": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwag.gif",
      "pokemon": "Poliwag",
      "rarity": "C",
      "time": "🌕",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 SPEED",
      "place": "Ochra Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Ochra Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌑",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 SP_DEF",
      "place": "Ochra Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kingler.gif",
      "pokemon": "Kingler",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "2 ATK",
      "place": "Ochra Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola.gif",
      "pokemon": "Corsola",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Ochra Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/marill.gif",
      "pokemon": "Marill",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "2 BASE_HP",
      "place": "Ochra Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wishiwashi.gif",
      "pokemon": "Wishiwashi",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "60-62",
      "ev": "1 BASE_HP",
      "place": "Ochra Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellder.gif",
      "pokemon": "Shellder",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "60-62",
      "ev": "1 DEF",
      "place": "Ochra Cliffs"
    }
  ],
  "Ochra Park-A": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgeotto.gif",
      "pokemon": "Pidgeotto",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "2 SPEED",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sentret.gif",
      "pokemon": "Sentret",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "1 ATK",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/primeape.gif",
      "pokemon": "Primeape",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "2 ATK",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/fomantis.gif",
      "pokemon": "Fomantis",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "1 ATK",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/passimian.gif",
      "pokemon": "Passimian",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "60-62",
      "ev": "2 ATK",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/krabby.gif",
      "pokemon": "Krabby",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 ATK",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 SP_DEF",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/qwilfish.gif",
      "pokemon": "Qwilfish",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 ATK",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "2 BASE_HP",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wishiwashi.gif",
      "pokemon": "Wishiwashi",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "60-62",
      "ev": "1 BASE_HP",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/feebas.gif",
      "pokemon": "Feebas",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "60-62",
      "ev": "1 SPEED",
      "place": "Ochra Park-A"
    }
  ],
  "Ochra Park-B": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgeotto.gif",
      "pokemon": "Pidgeotto",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "2 SPEED",
      "place": "Ochra Park-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sentret.gif",
      "pokemon": "Sentret",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "1 ATK",
      "place": "Ochra Park-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/primeape.gif",
      "pokemon": "Primeape",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "2 ATK",
      "place": "Ochra Park-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/fomantis.gif",
      "pokemon": "Fomantis",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "1 ATK",
      "place": "Ochra Park-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/passimian.gif",
      "pokemon": "Passimian",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "60-62",
      "ev": "2 ATK",
      "place": "Ochra Park-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pyukumuku.gif",
      "pokemon": "Pyukumuku",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "60-62",
      "ev": "2 SP_DEF",
      "place": "Ochra Park-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/krabby.gif",
      "pokemon": "Krabby",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 ATK",
      "place": "Ochra Park-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 SP_ATK",
      "place": "Ochra Park-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/azurill.gif",
      "pokemon": "Azurill",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 BASE_HP",
      "place": "Ochra Park-B"
    }
  ],
  "Route 9-A": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gumshoos.gif",
      "pokemon": "Gumshoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "2 ATK",
      "place": "Route 9-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/arbok.gif",
      "pokemon": "Arbok",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "2 ATK",
      "place": "Route 9-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/igglybuff.gif",
      "pokemon": "Igglybuff",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "1 BASE_HP",
      "place": "Route 9-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meowth.gif",
      "pokemon": "Meowth",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "1 SPEED",
      "place": "Route 9-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "1 SP_ATK",
      "place": "Route 9-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "2 SP_ATK",
      "place": "Route 9-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/azurill.gif",
      "pokemon": "Azurill",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "1 BASE_HP",
      "place": "Route 9-A"
    }
  ],
  "Route 9-B": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gumshoos.gif",
      "pokemon": "Gumshoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "2 ATK",
      "place": "Route 9-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/arbok.gif",
      "pokemon": "Arbok",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "2 ATK",
      "place": "Route 9-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/igglybuff.gif",
      "pokemon": "Igglybuff",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "1 BASE_HP",
      "place": "Route 9-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meowth.gif",
      "pokemon": "Meowth",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "1 SPEED",
      "place": "Route 9-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sigilyph.gif",
      "pokemon": "Sigilyph",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "62-64",
      "ev": "2 SP_ATK",
      "place": "Route 9-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "1 SP_ATK",
      "place": "Route 9-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "2 SP_ATK",
      "place": "Route 9-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "1 SP_DEF",
      "place": "Route 9-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/azurill.gif",
      "pokemon": "Azurill",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "1 BASE_HP",
      "place": "Route 9-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/marill.gif",
      "pokemon": "Marill",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "2 BASE_HP",
      "place": "Route 9-B"
    }
  ],
  "Matti Village": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/skiploom.gif",
      "pokemon": "Skiploom",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "2 SPEED",
      "place": "Matti Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sunkern.gif",
      "pokemon": "Sunkern",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "1 SP_ATK",
      "place": "Matti Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buneary.gif",
      "pokemon": "Buneary",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "1 SPEED",
      "place": "Matti Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ponyta.gif",
      "pokemon": "Ponyta",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "1 SPEED",
      "place": "Matti Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mareep.gif",
      "pokemon": "Mareep",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "1 SP_ATK",
      "place": "Matti Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tauros.gif",
      "pokemon": "Tauros",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "64-65",
      "ev": "1 ATK, 1 SPEED",
      "place": "Matti Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorlax.gif",
      "pokemon": "Snorlax",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "64-65",
      "ev": "2 BASE_HP",
      "place": "Matti Village"
    }
  ],
  "Matti Cliffs": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/skiploom.gif",
      "pokemon": "Skiploom",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "2 SPEED",
      "place": "Matti Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sunkern.gif",
      "pokemon": "Sunkern",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "1 SP_ATK",
      "place": "Matti Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ponyta.gif",
      "pokemon": "Ponyta",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "1 SPEED",
      "place": "Matti Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mareep.gif",
      "pokemon": "Mareep",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "1 SP_ATK",
      "place": "Matti Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stufful.gif",
      "pokemon": "Stufful",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "64-65",
      "ev": "1 ATK",
      "place": "Matti Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "62-65",
      "ev": "1 SP_DEF",
      "place": "Matti Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "62-65",
      "ev": "2 SP_DEF",
      "place": "Matti Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/carvanha.gif",
      "pokemon": "Carvanha",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "64-65",
      "ev": "1 ATK",
      "place": "Matti Cliffs"
    }
  ],
  "Route 10": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinda.gif",
      "pokemon": "Spinda",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "66-68",
      "ev": "1 SP_ATK",
      "place": "Route 10"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nincada.gif",
      "pokemon": "Nincada",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "66-68",
      "ev": "1 DEF",
      "place": "Route 10"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stunky.gif",
      "pokemon": "Stunky",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "66-68",
      "ev": "1 SPEED",
      "place": "Route 10"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stufful.gif",
      "pokemon": "Stufful",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "67-68",
      "ev": "1 ATK",
      "place": "Route 10"
    }
  ],
  "Goldburn City": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinda.gif",
      "pokemon": "Spinda",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_ATK",
      "place": "Goldburn City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kecleon.gif",
      "pokemon": "Kecleon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_DEF",
      "place": "Goldburn City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spoink.gif",
      "pokemon": "Spoink",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_DEF",
      "place": "Goldburn City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio.gif",
      "pokemon": "Oricorio",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "2 SP_ATK",
      "place": "Goldburn City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwag.gif",
      "pokemon": "Poliwag",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Goldburn City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Goldburn City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "2 BASE_HP",
      "place": "Goldburn City"
    }
  ],
  "Route 11-A": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/masquerain.gif",
      "pokemon": "Masquerain",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_DEF, 1 SP_ATK",
      "place": "Route 11-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buizel.gif",
      "pokemon": "Buizel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Route 11-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/krabby.gif",
      "pokemon": "Krabby",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 ATK",
      "place": "Route 11-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/castform.gif",
      "pokemon": "Castform",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 BASE_HP",
      "place": "Route 11-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/quagsire.gif",
      "pokemon": "Quagsire",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "2 BASE_HP",
      "place": "Route 11-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lumineon.gif",
      "pokemon": "Lumineon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "2 SPEED",
      "place": "Route 11-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "2 ATK",
      "place": "Route 11-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon.gif",
      "pokemon": "Gastrodon",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "2 BASE_HP",
      "place": "Route 11-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chinchou.gif",
      "pokemon": "Chinchou",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "69-70",
      "ev": "1 BASE_HP",
      "place": "Route 11-A"
    }
  ],
  "Route 11-B": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/plusle.gif",
      "pokemon": "Plusle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Route 11-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minun.gif",
      "pokemon": "Minun",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Route 11-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gulpin.gif",
      "pokemon": "Gulpin",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 BASE_HP",
      "place": "Route 11-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/togedemaru.gif",
      "pokemon": "Togedemaru",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "2 ATK",
      "place": "Route 11-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kirlia.gif",
      "pokemon": "Kirlia",
      "rarity": "VR",
      "time": "🌕",
      "method": "🍀",
      "level": "69-70",
      "ev": "2 SP_ATK",
      "place": "Route 11-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌑",
      "method": "🍀",
      "level": "69-70",
      "ev": "1 SP_DEF",
      "place": "Route 11-B"
    }
  ],
  "Route 11-C": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/plusle.gif",
      "pokemon": "Plusle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Route 11-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minun.gif",
      "pokemon": "Minun",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Route 11-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cherubi.gif",
      "pokemon": "Cherubi",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_ATK",
      "place": "Route 11-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gulpin.gif",
      "pokemon": "Gulpin",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 BASE_HP",
      "place": "Route 11-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/togedemaru.gif",
      "pokemon": "Togedemaru",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "2 ATK",
      "place": "Route 11-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ralts.gif",
      "pokemon": "Ralts",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "69-70",
      "ev": "1 SP_ATK",
      "place": "Route 11-C"
    }
  ],
  "Route 12-A": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mankey.gif",
      "pokemon": "Mankey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "1 ATK",
      "place": "Route 12-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/beedrill.gif",
      "pokemon": "Beedrill",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "1 SP_DEF, 2 ATK",
      "place": "Route 12-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ponyta.gif",
      "pokemon": "Ponyta",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "1 SPEED",
      "place": "Route 12-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sudowoodo.gif",
      "pokemon": "Sudowoodo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "2 DEF",
      "place": "Route 12-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rufflet.gif",
      "pokemon": "Rufflet",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "59-61",
      "ev": "1 ATK",
      "place": "Route 12-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-61",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 12-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-61",
      "ev": "2 ATK",
      "place": "Route 12-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "58-61",
      "ev": "2 BASE_HP",
      "place": "Route 12-A"
    }
  ],
  "Route 12-B": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mankey.gif",
      "pokemon": "Mankey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "1 ATK",
      "place": "Route 12-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tropius.gif",
      "pokemon": "Tropius",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "2 BASE_HP",
      "place": "Route 12-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ponyta.gif",
      "pokemon": "Ponyta",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "1 SPEED",
      "place": "Route 12-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/trumbeak.gif",
      "pokemon": "Trumbeak",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "2 ATK",
      "place": "Route 12-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/aipom.gif",
      "pokemon": "Aipom",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "1 SPEED",
      "place": "Route 12-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mimejr.gif",
      "pokemon": "MimeJr.",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "59-61",
      "ev": "1 SP_DEF",
      "place": "Route 12-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-61",
      "ev": "2 SP_DEF",
      "place": "Route 12-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-61",
      "ev": "2 ATK",
      "place": "Route 12-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "58-61",
      "ev": "2 BASE_HP",
      "place": "Route 12-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clamperl.gif",
      "pokemon": "Clamperl",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "59-61",
      "ev": "1 DEF",
      "place": "Route 12-B"
    }
  ],
  "Jannat Village": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zigzagoon.gif",
      "pokemon": "Zigzagoon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kecleon.gif",
      "pokemon": "Kecleon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SP_DEF",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/houndour.gif",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SP_ATK",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio-sensu.gif",
      "pokemon": "Oricorio-Sensu",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "72-75",
      "ev": "",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bewear.gif",
      "pokemon": "Bewear",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "2 ATK",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/litten.gif",
      "pokemon": "Litten",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 SPEED",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rowlet.gif",
      "pokemon": "Rowlet",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 BASE_HP",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwag.gif",
      "pokemon": "Poliwag",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lumineon.gif",
      "pokemon": "Lumineon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tynamo.gif",
      "pokemon": "Tynamo",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lapras.gif",
      "pokemon": "Lapras",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "74-75",
      "ev": "2 BASE_HP",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/popplio.gif",
      "pokemon": "Popplio",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "74-75",
      "ev": "1 SP_ATK",
      "place": "Jannat Village"
    }
  ],
  "Goldburn City Shores": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinda.gif",
      "pokemon": "Spinda",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_ATK",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kecleon.gif",
      "pokemon": "Kecleon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_DEF",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spoink.gif",
      "pokemon": "Spoink",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_DEF",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio.gif",
      "pokemon": "Oricorio",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "2 SP_ATK",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/drampa.gif",
      "pokemon": "Drampa",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "69-70",
      "ev": "2 SP_ATK",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/druddigon.gif",
      "pokemon": "Druddigon",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "69-70",
      "ev": "2 ATK",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/durant.gif",
      "pokemon": "Durant",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "69-70",
      "ev": "2 DEF",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "1 SP_DEF",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "2 SP_DEF",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/qwilfish.gif",
      "pokemon": "Qwilfish",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "1 ATK",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "2 BASE_HP",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wishiwashi.gif",
      "pokemon": "Wishiwashi",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "69-70",
      "ev": "1 BASE_HP",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/skrelp.gif",
      "pokemon": "Skrelp",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "69-70",
      "ev": "1 SP_DEF",
      "place": "Goldburn City Shores"
    }
  ],
  "Old Power Plant": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/plusle.gif",
      "pokemon": "Plusle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandshrew.gif",
      "pokemon": "Sandshrew",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Old Power Plant"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/voltorb.gif",
      "pokemon": "Voltorb",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dwebble.gif",
      "pokemon": "Dwebble",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Old Power Plant"
    }
  ],
  "Old Power Plant - Stairs 1F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minun.gif",
      "pokemon": "Minun",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Stairs 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Stairs 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/voltorb.gif",
      "pokemon": "Voltorb",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Stairs 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/grubbin.gif",
      "pokemon": "Grubbin",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 ATK",
      "place": "Old Power Plant - Stairs 1F"
    }
  ],
  "Old Power Plant - Stairs B1F": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/plusle.gif",
      "pokemon": "Plusle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Stairs B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Stairs B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/voltorb.gif",
      "pokemon": "Voltorb",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Stairs B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magnemite.gif",
      "pokemon": "Magnemite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SP_ATK",
      "place": "Old Power Plant - Stairs B1F"
    }
  ],
  "Old Power Plant - Restricted Area": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/plusle.gif",
      "pokemon": "Plusle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Restricted Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minun.gif",
      "pokemon": "Minun",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Restricted Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/voltorb.gif",
      "pokemon": "Voltorb",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Restricted Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magnemite.gif",
      "pokemon": "Magnemite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SP_ATK",
      "place": "Old Power Plant - Restricted Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/joltik.gif",
      "pokemon": "Joltik",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Restricted Area"
    }
  ],
  "Old Power Plant - Generator Room": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Old Power Plant - Generator Room"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Generator Room"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minun.gif",
      "pokemon": "Minun",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Generator Room"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magnemite.gif",
      "pokemon": "Magnemite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SP_ATK",
      "place": "Old Power Plant - Generator Room"
    }
  ],
  "Old Power Plant - Room 3": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Room 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/voltorb.gif",
      "pokemon": "Voltorb",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Room 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Old Power Plant - Room 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/grubbin.gif",
      "pokemon": "Grubbin",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 ATK",
      "place": "Old Power Plant - Room 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/joltik.gif",
      "pokemon": "Joltik",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Room 3"
    }
  ],
  "Route 219 (South-West)": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bidoof.gif",
      "pokemon": "Bidoof",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 BASE_HP",
      "place": "Route 219 (South-West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 SP_DEF",
      "place": "Route 219 (South-West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shinx.gif",
      "pokemon": "Shinx",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 ATK",
      "place": "Route 219 (South-West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kakuna.gif",
      "pokemon": "Kakuna",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 DEF",
      "place": "Route 219 (South-West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/metapod.gif",
      "pokemon": "Metapod",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 DEF",
      "place": "Route 219 (South-West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 ATK",
      "place": "Route 219 (South-West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 SP_ATK",
      "place": "Route 219 (South-West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 SP_DEF",
      "place": "Route 219 (South-West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "1 SP_ATK",
      "place": "Route 219 (South-West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "2 SP_ATK",
      "place": "Route 219 (South-West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "2 SP_DEF",
      "place": "Route 219 (South-West)"
    }
  ],
  "Route 13-B": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 BASE_HP",
      "place": "Route 13-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 SP_ATK",
      "place": "Route 13-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/abomasnow.gif",
      "pokemon": "Abomasnow",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 13-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 BASE_HP",
      "place": "Route 13-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/klink.gif",
      "pokemon": "Klink",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "1 DEF",
      "place": "Route 13-B"
    }
  ],
  "Route 13-C": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 BASE_HP",
      "place": "Route 13-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 SP_ATK",
      "place": "Route 13-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/abomasnow.gif",
      "pokemon": "Abomasnow",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 13-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "1 BASE_HP",
      "place": "Route 13-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 BASE_HP",
      "place": "Route 13-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "71-72",
      "ev": "1 ATK",
      "place": "Route 13-C"
    }
  ],
  "Route 13-D": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 BASE_HP",
      "place": "Route 13-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cryogonal.gif",
      "pokemon": "Cryogonal",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 SP_DEF",
      "place": "Route 13-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "1 BASE_HP",
      "place": "Route 13-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 BASE_HP",
      "place": "Route 13-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "71-72",
      "ev": "1 ATK",
      "place": "Route 13-D"
    }
  ],
  "Champions Villa #1": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Champions Villa #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cryogonal.gif",
      "pokemon": "Cryogonal",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_DEF",
      "place": "Champions Villa #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 BASE_HP",
      "place": "Champions Villa #1"
    }
  ],
  "Champions Villa #2": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Champions Villa #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cryogonal.gif",
      "pokemon": "Cryogonal",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_DEF",
      "place": "Champions Villa #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Champions Villa #2"
    }
  ],
  "Gym 5": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandshrew.gif",
      "pokemon": "Sandshrew",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 DEF",
      "place": "Gym 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 ATK",
      "place": "Gym 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandslash.gif",
      "pokemon": "Sandslash",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "2 DEF",
      "place": "Gym 5"
    }
  ],
  "Champions Road #1": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Champions Road #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/delibird.gif",
      "pokemon": "Delibird",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Champions Road #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stantler.gif",
      "pokemon": "Stantler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 DEF",
      "place": "Champions Road #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Champions Road #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kadabra.gif",
      "pokemon": "Kadabra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "2 SP_ATK",
      "place": "Champions Road #1"
    }
  ],
  "Champions Road #2": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Champions Road #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/delibird.gif",
      "pokemon": "Delibird",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Champions Road #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stantler.gif",
      "pokemon": "Stantler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Champions Road #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cufant.gif",
      "pokemon": "Cufant",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 ATK",
      "place": "Champions Road #2"
    }
  ],
  "Champions Road #3": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Champions Road #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/delibird.gif",
      "pokemon": "Delibird",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Champions Road #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stantler.gif",
      "pokemon": "Stantler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 DEF",
      "place": "Champions Road #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubchoo.gif",
      "pokemon": "Cubchoo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golett.gif",
      "pokemon": "Golett",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 ATK",
      "place": "Champions Road #3"
    }
  ],
  "Champions Road #4": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Champions Road #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/delibird.gif",
      "pokemon": "Delibird",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Champions Road #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stantler.gif",
      "pokemon": "Stantler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/crabrawler.gif",
      "pokemon": "Crabrawler",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Champions Road #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lairon.gif",
      "pokemon": "Lairon",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "2 DEF",
      "place": "Champions Road #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pawniard.gif",
      "pokemon": "Pawniard",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 ATK",
      "place": "Champions Road #4"
    }
  ],
  "Champions Road #5": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Champions Road #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/delibird.gif",
      "pokemon": "Delibird",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Champions Road #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stantler.gif",
      "pokemon": "Stantler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 DEF",
      "place": "Champions Road #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Champions Road #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lairon.gif",
      "pokemon": "Lairon",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "2 DEF",
      "place": "Champions Road #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pawniard.gif",
      "pokemon": "Pawniard",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 ATK",
      "place": "Champions Road #5"
    }
  ],
  "Champions Road #6": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/arbok.gif",
      "pokemon": "Arbok",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golem.gif",
      "pokemon": "Golem",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "3 DEF",
      "place": "Champions Road #6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/koffing.gif",
      "pokemon": "Koffing",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 DEF",
      "place": "Champions Road #6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SP_ATK",
      "place": "Champions Road #6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golett.gif",
      "pokemon": "Golett",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/foongus.gif",
      "pokemon": "Foongus",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 BASE_HP",
      "place": "Champions Road #6"
    }
  ],
  "Champions Road #7": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Champions Road #7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golem.gif",
      "pokemon": "Golem",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "3 DEF",
      "place": "Champions Road #7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Champions Road #7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machop.gif",
      "pokemon": "Machop",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mienfoo.gif",
      "pokemon": "Mienfoo",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 ATK",
      "place": "Champions Road #7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rotom-wash.gif",
      "pokemon": "Rotom-Wash",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 SP_ATK, 1 SPEED",
      "place": "Champions Road #7"
    }
  ],
  "Gym 7": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/delibird.gif",
      "pokemon": "Delibird",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 SPEED",
      "place": "Gym 7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 SP_ATK",
      "place": "Gym 7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 ATK",
      "place": "Gym 7"
    }
  ],
  "Cavity Cavern 1-A": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 1-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 SPEED",
      "place": "Cavity Cavern 1-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/parasect.gif",
      "pokemon": "Parasect",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 ATK, 1 DEF",
      "place": "Cavity Cavern 1-A"
    }
  ],
  "Cavity Cavern 2-A": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 DEF",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 SPEED",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 BASE_HP",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/aron.gif",
      "pokemon": "Aron",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 DEF",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌕",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SP_ATK",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "64-67",
      "ev": "2 SP_ATK",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌑",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SP_DEF",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola.gif",
      "pokemon": "Corsola",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tynamo.gif",
      "pokemon": "Tynamo",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SPEED",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/staryu.gif",
      "pokemon": "Staryu",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "66-67",
      "ev": "1 SPEED",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/skrelp.gif",
      "pokemon": "Skrelp",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "66-67",
      "ev": "1 SP_DEF",
      "place": "Cavity Cavern 2-A"
    }
  ],
  "Cavity Cavern 2-B": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 2-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/parasect.gif",
      "pokemon": "Parasect",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 ATK, 1 DEF",
      "place": "Cavity Cavern 2-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 BASE_HP",
      "place": "Cavity Cavern 2-B"
    }
  ],
  "Cavity Cavern 3-A": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 SPEED",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 ATK",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 BASE_HP",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/aron.gif",
      "pokemon": "Aron",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 DEF",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/abra.gif",
      "pokemon": "Abra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 SP_ATK",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cleffa.gif",
      "pokemon": "Cleffa",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 SP_DEF",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌕",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SP_ATK",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "64-67",
      "ev": "2 SP_ATK",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌑",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SP_DEF",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola.gif",
      "pokemon": "Corsola",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seel.gif",
      "pokemon": "Seel",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SP_DEF",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/staryu.gif",
      "pokemon": "Staryu",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "66-67",
      "ev": "1 SPEED",
      "place": "Cavity Cavern 3-A"
    }
  ],
  "Cavity Cavern 2-C": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 2-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 SPEED",
      "place": "Cavity Cavern 2-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 BASE_HP",
      "place": "Cavity Cavern 2-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/abra.gif",
      "pokemon": "Abra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 SP_ATK",
      "place": "Cavity Cavern 2-C"
    }
  ],
  "Cavity Cavern 2-D": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 2-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 SPEED",
      "place": "Cavity Cavern 2-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 BASE_HP",
      "place": "Cavity Cavern 2-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/abra.gif",
      "pokemon": "Abra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 SP_ATK",
      "place": "Cavity Cavern 2-D"
    }
  ],
  "Cavity Cavern 2-E": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 2-E"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 SPEED",
      "place": "Cavity Cavern 2-E"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 BASE_HP",
      "place": "Cavity Cavern 2-E"
    }
  ],
  "Cavity Cavern 1-B": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 1-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 SPEED",
      "place": "Cavity Cavern 1-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 ATK",
      "place": "Cavity Cavern 1-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 BASE_HP",
      "place": "Cavity Cavern 1-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/aron.gif",
      "pokemon": "Aron",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 DEF",
      "place": "Cavity Cavern 1-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/abra.gif",
      "pokemon": "Abra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 SP_ATK",
      "place": "Cavity Cavern 1-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cleffa.gif",
      "pokemon": "Cleffa",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 SP_DEF",
      "place": "Cavity Cavern 1-B"
    }
  ],
  "Dragon Tower Floor 1": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Dragon Tower Floor 1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Dragon Tower Floor 1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ledian.gif",
      "pokemon": "Ledian",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_DEF",
      "place": "Dragon Tower Floor 1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 DEF",
      "place": "Dragon Tower Floor 1"
    }
  ],
  "Dragon Tower Floor 2": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Dragon Tower Floor 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/raticate.gif",
      "pokemon": "Raticate",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Dragon Tower Floor 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 DEF",
      "place": "Dragon Tower Floor 2"
    }
  ],
  "Dragon Tower Floor 3": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gumshoos.gif",
      "pokemon": "Gumshoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Dragon Tower Floor 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ledian.gif",
      "pokemon": "Ledian",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_DEF",
      "place": "Dragon Tower Floor 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 DEF",
      "place": "Dragon Tower Floor 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swablu.gif",
      "pokemon": "Swablu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SP_DEF",
      "place": "Dragon Tower Floor 3"
    }
  ],
  "Dragon Tower Floor 4": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zigzagoon.gif",
      "pokemon": "Zigzagoon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Dragon Tower Floor 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gumshoos.gif",
      "pokemon": "Gumshoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tropius.gif",
      "pokemon": "Tropius",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Dragon Tower Floor 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swablu.gif",
      "pokemon": "Swablu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SP_DEF",
      "place": "Dragon Tower Floor 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricoriosensu.gif",
      "pokemon": "Oricorio-Sensu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "",
      "place": "Dragon Tower Floor 4"
    }
  ],
  "Dragon Tower Floor 5": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zigzagoon.gif",
      "pokemon": "Zigzagoon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Dragon Tower Floor 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/furret.gif",
      "pokemon": "Furret",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Dragon Tower Floor 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/banette.gif",
      "pokemon": "Banette",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/altaria.gif",
      "pokemon": "Altaria",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_DEF",
      "place": "Dragon Tower Floor 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/flaaffy.gif",
      "pokemon": "Flaaffy",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_ATK",
      "place": "Dragon Tower Floor 5"
    }
  ],
  "Dragon Tower Floor 6": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Dragon Tower Floor 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dunsparce.gif",
      "pokemon": "Dunsparce",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 BASE_HP",
      "place": "Dragon Tower Floor 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/flaaffy.gif",
      "pokemon": "Flaaffy",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_ATK",
      "place": "Dragon Tower Floor 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/altaria.gif",
      "pokemon": "Altaria",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_DEF",
      "place": "Dragon Tower Floor 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/falinks.gif",
      "pokemon": "Falinks",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75 ",
      "ev": "1 SP_DEF, 2 ATK",
      "place": "Dragon Tower Floor 6"
    }
  ],
  "Dragon Tower Floor 7": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/furret.gif",
      "pokemon": "Furret",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Dragon Tower Floor 7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/banette.gif",
      "pokemon": "Banette",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Dragon Tower Floor 7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/flaaffy.gif",
      "pokemon": "Flaaffy",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_ATK",
      "place": "Dragon Tower Floor 7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio-sensu.gif",
      "pokemon": "Oricorio-Sensu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "",
      "place": "Dragon Tower Floor 7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/druddigon.gif",
      "pokemon": "Druddigon",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dreepy.gif",
      "pokemon": "Dreepy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 SPEED",
      "place": "Dragon Tower Floor 7"
    }
  ]
}

export const SPAWN_POKEMON_NAMES = [
  "Psyduck",
  "Golduck",
  "Goldeen",
  "Kricketot",
  "Bidoof",
  "Shinx",
  "Caterpie",
  "Weedle",
  "Starly",
  "Finneon",
  "Clamperl",
  "Tentacool",
  "Tentacruel",
  "Kakuna",
  "Metapod",
  "Zubat",
  "Surskit",
  "Pineco",
  "Wurmple",
  "Glameow",
  "Hoppip",
  "Seedot",
  "Budew",
  "Geodude",
  "Cubone",
  "Golbat",
  "Barboach",
  "Buizel",
  "Pachirisu",
  "Drifloon",
  "Mareep",
  "Elekid",
  "Seaking",
  "Kricketune",
  "Silcoon",
  "Cascoon",
  "Beautifly",
  "Dustox",
  "Buneary",
  "Hoothoot",
  "Murkrow",
  "Heracross",
  "Pinsir",
  "Seviper",
  "Ponyta",
  "Stunky",
  "Machop",
  "Bronzor",
  "Pikachu",
  "Phanpy",
  "Gligar",
  "Nosepass",
  "Meditite",
  "Chingling",
  "Bibarel",
  "Spoink",
  "Wooper",
  "Ralts",
  "Duskull",
  "Kirlia",
  "Doduo",
  "Mightyena",
  "Miltank",
  "Chansey",
  "Magnemite",
  "Marill",
  "Burmy",
  "Wormadam-Plant",
  "Girafarig",
  "Houndour",
  "Graveler",
  "Noctowl",
  "Staravia",
  "Floatzel",
  "Masquerain",
  "Tranquill",
  "Shellos-East",
  "Swellow",
  "Remoraid",
  "Octillery",
  "Chinchou",
  "Gastrodon-East",
  "Helioptile",
  "Patrat",
  "Watchog",
  "Pidove",
  "Shellos",
  "Croagunk",
  "Trubbish",
  "Roselia",
  "Wormadam-Sandy",
  "Jumpluff",
  "Aipom",
  "Machoke",
  "Vulpix",
  "Clefairy",
  "Gastrodon",
  "Chatot",
  "Mr.Mime",
  "Munchlax",
  "Lumineon",
  "Staryu",
  "Whiscash",
  "Feebas",
  "Zangoose",
  "Jynx",
  "Snover",
  "Snorunt",
  "Swinub",
  "Sneasel",
  "Purugly",
  "Luxio",
  "Carvanha",
  "Wingull",
  "Mantyke",
  "Onix",
  "Mawile",
  "Sableye",
  "Golem",
  "Medicham",
  "Rhyhorn",
  "Kadabra",
  "Venonat",
  "Volbeat",
  "Illumise",
  "Larvesta",
  "Panpour",
  "Poliwag",
  "Dratini",
  "Spinda",
  "Lopunny",
  "Skuntank",
  "Swablu",
  "Altaria",
  "Snorlax",
  "Poliwhirl",
  "Bruxish",
  "Qwilfish",
  "Lunatone",
  "Solrock",
  "Numel",
  "Camerupt",
  "Torkoal",
  "Trapinch",
  "Relicanth",
  "Heatmor",
  "Slugma",
  "Larvitar",
  "Sandslash",
  "Sandshrew",
  "Cacnea",
  "Cacturne",
  "Whismur",
  "Aron",
  "Hippopotas",
  "Luvdisc",
  "Tropius",
  "Nincada",
  "Combee",
  "Vespiquen",
  "Venomoth",
  "Fletchling",
  "Frillish",
  "Wailord",
  "Stunfisk",
  "Makuhita",
  "Hariyama",
  "Geodude-Alola",
  "Tyrogue",
  "Riolu",
  "Togedemaru",
  "Pichu",
  "Pikachu-Rock-Star",
  "Pikachu-Pop-Star",
  "Pikachu-PhD",
  "Pikachu-Libre",
  "Pikachu-Belle",
  "Magby",
  "Horsea",
  "Spinarak",
  "Shuppet",
  "Misdreavus",
  "Gastly",
  "Chimecho",
  "Graveler-Alola",
  "Rhydon",
  "Gible",
  "Wormadam-Trash",
  "Electrike",
  "Bonsly",
  "Shroomish",
  "Oddish",
  "Yanma",
  "Skorupi",
  "Chimchar",
  "Turtwig",
  "Magikarp",
  "Lapras",
  "Piplup",
  "Lotad",
  "Wailmer",
  "Slowpoke",
  "Yungoos",
  "Pidgey",
  "Rattata",
  "Spearow",
  "Ekans",
  "Ledyba",
  "Crabrawler",
  "Paras",
  "Dwebble",
  "Diglett",
  "Pikipek",
  "Oricorio-PomPom",
  "Pidgeotto",
  "Seel",
  "Voltorb",
  "Emolga",
  "Mankey",
  "Grubbin",
  "Koffing",
  "Scraggy",
  "Happiny",
  "Shellder",
  "Sunkern",
  "Sandygast",
  "Natu",
  "Munna",
  "Cherubi",
  "Exeggcute",
  "Karrablast",
  "Shelmet",
  "Tynamo",
  "Drowzee",
  "Oricorio-Pau",
  "Mudbray",
  "Cutiefly",
  "Joltik",
  "Kecleon",
  "Zarude",
  "Zarude-Dada",
  "Roggenrola",
  "Corsola-Galar",
  "Klefki",
  "Corsola",
  "Minior",
  "Drilbur",
  "Kingler",
  "Dunsparce",
  "Baltoy",
  "Fomantis",
  "Solosis",
  "Dhelmise",
  "Alomomola",
  "Komala",
  "Bounsweet",
  "Oricorio",
  "Turtonator",
  "Litwick",
  "Salazzle",
  "Jangmo-o",
  "Wimpod",
  "Ledian",
  "Beedrill",
  "Mothim",
  "Parasect",
  "Morelull",
  "Charjabug",
  "Dewpider",
  "Shuckle",
  "Kangaskhan",
  "Primeape",
  "Oranguru",
  "Smoochum",
  "Spheal",
  "Wishiwashi",
  "Sentret",
  "Passimian",
  "Krabby",
  "Pyukumuku",
  "Azurill",
  "Gumshoos",
  "Arbok",
  "Igglybuff",
  "Meowth",
  "Sigilyph",
  "Skiploom",
  "Tauros",
  "Stufful",
  "Castform",
  "Quagsire",
  "Plusle",
  "Minun",
  "Gulpin",
  "Sudowoodo",
  "Rufflet",
  "Trumbeak",
  "MimeJr.",
  "Zigzagoon",
  "Oricorio-Sensu",
  "Bewear",
  "Litten",
  "Rowlet",
  "Popplio",
  "Drampa",
  "Druddigon",
  "Durant",
  "Skrelp",
  "Abomasnow",
  "Sealeo",
  "Klink",
  "Cryogonal",
  "Delibird",
  "Stantler",
  "Cufant",
  "Cubchoo",
  "Golett",
  "Lairon",
  "Pawniard",
  "Foongus",
  "Mienfoo",
  "Rotom-Wash",
  "Abra",
  "Cleffa",
  "Raticate",
  "Furret",
  "Banette",
  "Flaaffy",
  "Falinks",
  "Dreepy",
  "Nidoran-F",
  "Nidoran-M",
  "Litleo",
  "Yamper",
  "Snubbull",
  "Flabébé-Orange",
  "Comfey",
  "Cottonee",
  "Lillipup",
  "Teddiursa",
  "Sandile",
  "Tangela",
  "Indeedee",
  "Farfetch'd",
  "Sandshrew-Alola",
  "Toxel",
  "Vulpix-Alola",
  "Scyther",
  "Noibat",
  "Farfetch'd-Galar",
  "Zigzagoon-Galar",
  "Chewtle",
  "Tympole",
  "Venipede",
  "Blipbug",
  "Bulbasaur",
  "Charmander",
  "Squirtle",
  "Skarmory",
  "Hattena",
  "Vullaby",
  "Growlithe",
  "Timburr",
  "Corphish",
  "Rockruff",
  "Uxie",
  "Azelf",
  "Mesprit",
  "Porygon",
  "Togepi",
  "Axew",
  "Heatran"
]

export const NORMAL_SPAWNS_BY_POKEMON: {[key: string]: NormalSpawn[]} = {
  "Psyduck": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Twinleaf Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "3-5",
      "ev": "1 SP_ATK",
      "place": "Twinleaf Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "3-5",
      "ev": "1 SP_ATK",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "1 SP_ATK",
      "place": "Route 219"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "4-6",
      "ev": "1 SP_ATK",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "8-10",
      "ev": "1 SP_ATK",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 SP_ATK",
      "place": "Oreburgh Gate"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 SP_ATK",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "12-14",
      "ev": "1 SP_ATK",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "11-13",
      "ev": "1 SP_ATK",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "10-12",
      "ev": "1 SP_ATK",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "20-22",
      "ev": "1 SP_ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 SP_ATK",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 SP_ATK",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "30-32",
      "ev": "1 SP_ATK",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "30-32",
      "ev": "1 SP_ATK",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 SP_ATK",
      "place": "Route 215"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "30-32",
      "ev": "1 SP_ATK",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "30-32",
      "ev": "1 SP_ATK",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "40-42",
      "ev": "1 SP_ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "40-42",
      "ev": "1 SP_ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "40-42",
      "ev": "1 SP_ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 SP_ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 SP_ATK",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 SP_ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "28-30",
      "ev": "1 SP_ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "28-30",
      "ev": "1 SP_ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_ATK",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_ATK",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "24-26",
      "ev": "1 SP_ATK",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-38",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "36-38",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "48-50",
      "ev": "1 SP_ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "48-50",
      "ev": "1 SP_ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "1 SP_ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "1 SP_ATK",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "54-56",
      "ev": "1 SP_ATK",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 SP_ATK",
      "place": "Route Sereny"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "6-11",
      "ev": "1 SP_ATK",
      "place": "Oozy Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 SP_ATK",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-20",
      "ev": "1 SP_ATK",
      "place": "Lehar Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "18-22",
      "ev": "1 SP_ATK",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "23-25",
      "ev": "1 SP_ATK",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "1 SP_ATK",
      "place": "Sunshire Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "38-42",
      "ev": "1 SP_ATK",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-40",
      "ev": "1 SP_ATK",
      "place": "Oozy Forest Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "49-53",
      "ev": "1 SP_ATK",
      "place": "Route 7-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 SP_ATK",
      "place": "Ochra Park-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "1 SP_ATK",
      "place": "Route 9-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "1 SP_ATK",
      "place": "Route 9-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 SP_ATK",
      "place": "Route 219 (South-West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "1 SP_ATK",
      "place": "Route 219 (South-West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌕",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SP_ATK",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/psyduck.gif",
      "pokemon": "Psyduck",
      "rarity": "C",
      "time": "🌕",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SP_ATK",
      "place": "Cavity Cavern 3-A"
    }
  ],
  "Golduck": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Twinleaf Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "2 SP_ATK",
      "place": "Route 219"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "30-32",
      "ev": "2 SP_ATK",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "30-32",
      "ev": "2 SP_ATK",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "40-42",
      "ev": "2 SP_ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "40-42",
      "ev": "2 SP_ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "40-42",
      "ev": "2 SP_ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "28-30",
      "ev": "2 SP_ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_ATK",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-38",
      "ev": "2 SP_ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "36-38",
      "ev": "2 SP_ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "48-50",
      "ev": "2 SP_ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "48-50",
      "ev": "2 SP_ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "50-52",
      "ev": "2 SP_ATK",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "2 SP_ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "2 SP_ATK",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "54-56",
      "ev": "2 SP_ATK",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Survival Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Survival Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Resort Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Resort Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "2 SP_ATK",
      "place": "Route 9-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "2 SP_ATK",
      "place": "Route 9-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "2 SP_ATK",
      "place": "Route 219 (South-West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "64-67",
      "ev": "2 SP_ATK",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golduck.gif",
      "pokemon": "Golduck",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "64-67",
      "ev": "2 SP_ATK",
      "place": "Cavity Cavern 3-A"
    }
  ],
  "Goldeen": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "3-5",
      "ev": "1 ATK",
      "place": "Twinleaf Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "3-5",
      "ev": "1 ATK",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 ATK",
      "place": "Route 219"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "4-6",
      "ev": "1 ATK",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "8-10",
      "ev": "1 ATK",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "12-14",
      "ev": "1 ATK",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "11-13",
      "ev": "1 ATK",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 ATK",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "10-12",
      "ev": "1 ATK",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 ATK",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 ATK",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "20-22",
      "ev": "1 ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "30-32",
      "ev": "1 ATK",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "30-32",
      "ev": "1 ATK",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "40-42",
      "ev": "1 ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "28-30",
      "ev": "1 ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-40",
      "ev": "1 ATK",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "1 ATK",
      "place": "Canalave City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-38",
      "ev": "1 ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "48-50",
      "ev": "1 ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "50-52",
      "ev": "1 ATK",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 ATK",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "54-56",
      "ev": "1 ATK",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "ev": "1 ATK",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "7-9",
      "ev": "1 ATK",
      "place": "Boulder Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-20",
      "ev": "1 ATK",
      "place": "Lehar Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "18-22",
      "ev": "1 ATK",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "23-25",
      "ev": "1 ATK",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "32-35",
      "ev": "1 ATK",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/goldeen.gif",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 ATK",
      "place": "Route 219 (South-West)"
    }
  ],
  "Kricketot": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketot.gif",
      "pokemon": "Kricketot",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 DEF",
      "place": "Route 201"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketot.gif",
      "pokemon": "Kricketot",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 DEF",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketot.gif",
      "pokemon": "Kricketot",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 DEF",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketot.gif",
      "pokemon": "Kricketot",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "18-20",
      "ev": "1 DEF",
      "place": "Route 206"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketot.gif",
      "pokemon": "Kricketot",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 DEF",
      "place": "Route 207"
    }
  ],
  "Bidoof": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bidoof.gif",
      "pokemon": "Bidoof",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 BASE_HP",
      "place": "Route 201"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bidoof.gif",
      "pokemon": "Bidoof",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 BASE_HP",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bidoof.gif",
      "pokemon": "Bidoof",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-5",
      "ev": "1 BASE_HP",
      "place": "Route 202"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bidoof.gif",
      "pokemon": "Bidoof",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 BASE_HP",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bidoof.gif",
      "pokemon": "Bidoof",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 BASE_HP",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bidoof.gif",
      "pokemon": "Bidoof",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "ev": "1 BASE_HP",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bidoof.gif",
      "pokemon": "Bidoof",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 BASE_HP",
      "place": "Route 219 (South-West)"
    }
  ],
  "Shinx": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shinx.gif",
      "pokemon": "Shinx",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 ATK",
      "place": "Route 201"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shinx.gif",
      "pokemon": "Shinx",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 ATK",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shinx.gif",
      "pokemon": "Shinx",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-5",
      "ev": "1 ATK",
      "place": "Route 202"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shinx.gif",
      "pokemon": "Shinx",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 ATK",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shinx.gif",
      "pokemon": "Shinx",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 ATK",
      "place": "Route 219 (South-West)"
    }
  ],
  "Caterpie": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 BASE_HP",
      "place": "Route 201"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 BASE_HP",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 BASE_HP",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-11",
      "ev": "1 BASE_HP",
      "place": "Oozy Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 BASE_HP",
      "place": "Route 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 BASE_HP",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 BASE_HP",
      "place": "Nuzbar Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 BASE_HP",
      "place": "Oozy Forest Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/caterpie.gif",
      "pokemon": "Caterpie",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 BASE_HP",
      "place": "Oozy Forest (Faunas)"
    }
  ],
  "Weedle": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/weedle.gif",
      "pokemon": "Weedle",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 SPEED",
      "place": "Route 201"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/weedle.gif",
      "pokemon": "Weedle",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 SPEED",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/weedle.gif",
      "pokemon": "Weedle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/weedle.gif",
      "pokemon": "Weedle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 SPEED",
      "place": "Nuzbar Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/weedle.gif",
      "pokemon": "Weedle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 SPEED",
      "place": "Oozy Forest Northern Pass"
    }
  ],
  "Starly": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/starly.gif",
      "pokemon": "Starly",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "3-4",
      "ev": "1 SPEED",
      "place": "Route 201"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/starly.gif",
      "pokemon": "Starly",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "3-4",
      "ev": "1 SPEED",
      "place": "Lake Verity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/starly.gif",
      "pokemon": "Starly",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "5-7",
      "ev": "1 SPEED",
      "place": "Route 202"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/starly.gif",
      "pokemon": "Starly",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "7-9",
      "ev": "1 SPEED",
      "place": "Route 203"
    }
  ],
  "Finneon": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 SPEED",
      "place": "Route 219"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-40",
      "ev": "1 SPEED",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "1 SPEED",
      "place": "Canalave City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "12-14",
      "ev": "1 SPEED",
      "place": "Route 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-20",
      "ev": "1 SPEED",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌕",
      "method": "🎣",
      "level": "16-20",
      "ev": "1 SPEED",
      "place": "Lehar Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌕",
      "method": "🎣",
      "level": "18-22",
      "ev": "1 SPEED",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/finneon.gif",
      "pokemon": "Finneon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Jannat Village"
    }
  ],
  "Clamperl": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clamperl.gif",
      "pokemon": "Clamperl",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 DEF",
      "place": "Route 219"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clamperl.gif",
      "pokemon": "Clamperl",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "59-61",
      "ev": "1 DEF",
      "place": "Route 12-B"
    }
  ],
  "Tentacool": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "1 SP_DEF",
      "place": "Route 219"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "8-10",
      "ev": "1 SP_DEF",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "11-13",
      "ev": "1 SP_DEF",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_DEF",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "10-12",
      "ev": "1 SP_DEF",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_DEF",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SP_DEF",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "32-34",
      "ev": "1 SP_DEF",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "32-34",
      "ev": "1 SP_DEF",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "1 SP_DEF",
      "place": "Pastoria City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "36-40",
      "ev": "1 SP_DEF",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "1 SP_DEF",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "1 SP_DEF",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "54-56",
      "ev": "1 SP_DEF",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "ev": "1 SP_DEF",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "7-9",
      "ev": "1 SP_DEF",
      "place": "Boulder Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "12-14",
      "ev": "1 SP_DEF",
      "place": "Route 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "16-20",
      "ev": "1 SP_DEF",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌑",
      "method": "🎣",
      "level": "16-20",
      "ev": "1 SP_DEF",
      "place": "Lehar Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌑",
      "method": "🎣",
      "level": "18-22",
      "ev": "1 SP_DEF",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "32-35",
      "ev": "1 SP_DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "40-44",
      "ev": "1 SP_DEF",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "42-44",
      "ev": "1 SP_DEF",
      "place": "Amberwick Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌑",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 SP_DEF",
      "place": "Ochra Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 SP_DEF",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "1 SP_DEF",
      "place": "Route 9-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "62-65",
      "ev": "1 SP_DEF",
      "place": "Matti Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "1 SP_DEF",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 SP_DEF",
      "place": "Route 219 (South-West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌑",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SP_DEF",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacool.gif",
      "pokemon": "Tentacool",
      "rarity": "C",
      "time": "🌑",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SP_DEF",
      "place": "Cavity Cavern 3-A"
    }
  ],
  "Tentacruel": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "2 SP_DEF",
      "place": "Route 219"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_DEF",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_DEF",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SP_DEF",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "32-34",
      "ev": "2 SP_DEF",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "2 SP_DEF",
      "place": "Pastoria City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "36-40",
      "ev": "2 SP_DEF",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "2 SP_DEF",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "2 SP_DEF",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "54-56",
      "ev": "2 SP_DEF",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_DEF",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_DEF",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SP_DEF",
      "place": "Resort Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "62-65",
      "ev": "2 SP_DEF",
      "place": "Matti Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-61",
      "ev": "2 SP_DEF",
      "place": "Route 12-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "2 SP_DEF",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tentacruel.gif",
      "pokemon": "Tentacruel",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "2 SP_DEF",
      "place": "Route 219 (South-West)"
    }
  ],
  "Kakuna": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kakuna.gif",
      "pokemon": "Kakuna",
      "rarity": "UC",
      "time": "🌑",
      "method": "🍀",
      "level": "4-6",
      "ev": "2 DEF",
      "place": "Route 202"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kakuna.gif",
      "pokemon": "Kakuna",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "2 DEF",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kakuna.gif",
      "pokemon": "Kakuna",
      "rarity": "UC",
      "time": "🌑",
      "method": "🍀",
      "level": "4-5",
      "ev": "2 DEF",
      "place": "Route 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kakuna.gif",
      "pokemon": "Kakuna",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "2 DEF",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kakuna.gif",
      "pokemon": "Kakuna",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 DEF",
      "place": "Route 219 (South-West)"
    }
  ],
  "Metapod": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/metapod.gif",
      "pokemon": "Metapod",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "4-6",
      "ev": "2 DEF",
      "place": "Route 202"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/metapod.gif",
      "pokemon": "Metapod",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "2 DEF",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/metapod.gif",
      "pokemon": "Metapod",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "2 DEF",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/metapod.gif",
      "pokemon": "Metapod",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 DEF",
      "place": "Route 219 (South-West)"
    }
  ],
  "Zubat": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 SPEED",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 SPEED",
      "place": "Oreburgh Gate"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 SPEED",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SPEED",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 SPEED",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "36-38",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Iron Island B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Iron Island B1F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Iron Island B1F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Iron Island B2F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Iron Island B2F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 SPEED",
      "place": "Boulder Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Boulder Cavern - B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Boulder Cavern - B2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Stairs 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Stairs B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Generator Room"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zubat.gif",
      "pokemon": "Zubat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Room 3"
    }
  ],
  "Surskit": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/surskit.gif",
      "pokemon": "Surskit",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 SPEED",
      "place": "Route 203"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/surskit.gif",
      "pokemon": "Surskit",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 SPEED",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/surskit.gif",
      "pokemon": "Surskit",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 SPEED",
      "place": "Route 4 Shores"
    }
  ],
  "Pineco": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pineco.gif",
      "pokemon": "Pineco",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 DEF",
      "place": "Route 203"
    }
  ],
  "Wurmple": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 BASE_HP",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 BASE_HP",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 BASE_HP",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 BASE_HP",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 BASE_HP",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 BASE_HP",
      "place": "Route 211 (West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 BASE_HP",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-11",
      "ev": "1 BASE_HP",
      "place": "Oozy Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 BASE_HP",
      "place": "Nuzbar Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wurmple.gif",
      "pokemon": "Wurmple",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 BASE_HP",
      "place": "Oozy Forest (Faunas)"
    }
  ],
  "Glameow": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/glameow.gif",
      "pokemon": "Glameow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 SPEED",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/glameow.gif",
      "pokemon": "Glameow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SPEED",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/glameow.gif",
      "pokemon": "Glameow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SPEED",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/glameow.gif",
      "pokemon": "Glameow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 SPEED",
      "place": "Route 211 (West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/glameow.gif",
      "pokemon": "Glameow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    }
  ],
  "Hoppip": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 SP_DEF",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SP_DEF",
      "place": "Route 205"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SP_DEF",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Route 205: Eterna"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 SP_DEF",
      "place": "Route 211 (West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 SP_DEF",
      "place": "Route 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 SP_DEF",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoppip.gif",
      "pokemon": "Hoppip",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 SP_DEF",
      "place": "Route 219 (South-West)"
    }
  ],
  "Seedot": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seedot.gif",
      "pokemon": "Seedot",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 DEF",
      "place": "Route 204"
    }
  ],
  "Budew": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/budew.gif",
      "pokemon": "Budew",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 SP_ATK",
      "place": "Route 204"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/budew.gif",
      "pokemon": "Budew",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SP_ATK",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/budew.gif",
      "pokemon": "Budew",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 SP_ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/budew.gif",
      "pokemon": "Budew",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 SP_ATK",
      "place": "Route 212 (North)"
    }
  ],
  "Geodude": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 DEF",
      "place": "Oreburgh Gate"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 DEF",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 DEF",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 DEF",
      "place": "Valor Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B1F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B1F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B2F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B2F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 DEF",
      "place": "Boulder Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 DEF",
      "place": "Boulder Cavern 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Boulder Cavern - B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Boulder Cavern - B2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Old Power Plant - Generator Room"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/geodude.gif",
      "pokemon": "Geodude",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 DEF",
      "place": "Cavity Cavern 2-A"
    }
  ],
  "Cubone": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 DEF",
      "place": "Oreburgh Gate"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 DEF",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 DEF",
      "place": "Boulder Cavern 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Old Power Plant - Room 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 DEF",
      "place": "Dragon Tower Floor 1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 DEF",
      "place": "Dragon Tower Floor 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubone.gif",
      "pokemon": "Cubone",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 DEF",
      "place": "Dragon Tower Floor 3"
    }
  ],
  "Golbat": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SPEED",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 SPEED",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "2 SPEED",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "36-38",
      "ev": "2 SPEED",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "2 SPEED",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Iron Island B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Iron Island B1F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Iron Island B1F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "--",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Iron Island B2F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 SPEED",
      "place": "Iron Island B2F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 SPEED",
      "place": "Stark Mountain"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 SPEED",
      "place": "Stark Mountain: Entrance"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 SPEED",
      "place": "Stark Mountain Inside"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "41-43",
      "ev": "2 SPEED",
      "place": "Wayward Cave 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "43-45",
      "ev": "2 SPEED",
      "place": "Wayward Cave 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 SPEED",
      "place": "Glacier Cave-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 SPEED",
      "place": "Glacier Cave-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 SPEED",
      "place": "Glacier Cave-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 SPEED",
      "place": "Glacier Cave-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Champions Road #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Champions Road #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Champions Road #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Champions Road #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Champions Road #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Champions Road #7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 SPEED",
      "place": "Cavity Cavern 1-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 SPEED",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 SPEED",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 SPEED",
      "place": "Cavity Cavern 2-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 SPEED",
      "place": "Cavity Cavern 2-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 SPEED",
      "place": "Cavity Cavern 2-E"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 SPEED",
      "place": "Cavity Cavern 1-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Dragon Tower Floor 1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Dragon Tower Floor 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golbat.gif",
      "pokemon": "Golbat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Dragon Tower Floor 7"
    }
  ],
  "Barboach": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "12-14",
      "ev": "1 BASE_HP",
      "place": "Ravaged Path"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "16-18",
      "ev": "1 BASE_HP",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "20-22",
      "ev": "1 BASE_HP",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 BASE_HP",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "30-32",
      "ev": "1 BASE_HP",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "22-24",
      "ev": "1 BASE_HP",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "28-30",
      "ev": "1 BASE_HP",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "24-26",
      "ev": "1 BASE_HP",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "36-38",
      "ev": "1 BASE_HP",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "50-52",
      "ev": "1 BASE_HP",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/barboach.gif",
      "pokemon": "Barboach",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "42-44",
      "ev": "1 BASE_HP",
      "place": "Amberwick Town"
    }
  ],
  "Buizel": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buizel.gif",
      "pokemon": "Buizel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SPEED",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buizel.gif",
      "pokemon": "Buizel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buizel.gif",
      "pokemon": "Buizel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 SPEED",
      "place": "Fuego Ironworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buizel.gif",
      "pokemon": "Buizel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Route 11-A"
    }
  ],
  "Pachirisu": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pachirisu.gif",
      "pokemon": "Pachirisu",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SPEED",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pachirisu.gif",
      "pokemon": "Pachirisu",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 SPEED",
      "place": "Route 207"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pachirisu.gif",
      "pokemon": "Pachirisu",
      "rarity": "C",
      "time": "all",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 SPEED",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pachirisu.gif",
      "pokemon": "Pachirisu",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 SPEED",
      "place": "Route 209"
    }
  ],
  "Drifloon": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/drifloon.gif",
      "pokemon": "Drifloon",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 BASE_HP",
      "place": "Valley Windworks"
    }
  ],
  "Mareep": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mareep.gif",
      "pokemon": "Mareep",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SP_ATK",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mareep.gif",
      "pokemon": "Mareep",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "1 SP_ATK",
      "place": "Matti Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mareep.gif",
      "pokemon": "Mareep",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "1 SP_ATK",
      "place": "Matti Cliffs"
    }
  ],
  "Elekid": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/elekid.gif",
      "pokemon": "Elekid",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "15-17",
      "ev": "1 SPEED",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/elekid.gif",
      "pokemon": "Elekid",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "1 SPEED",
      "place": "Route 222"
    }
  ],
  "Seaking": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "27-30",
      "ev": "2 ATK",
      "place": "Valley Windworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "40-42",
      "ev": "2 ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-38",
      "ev": "2 ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "48-50",
      "ev": "2 ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "2 ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "2 ATK",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "54-56",
      "ev": "2 ATK",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "49-53",
      "ev": "2 ATK",
      "place": "Route 7-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "2 ATK",
      "place": "Route 11-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-61",
      "ev": "2 ATK",
      "place": "Route 12-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seaking.gif",
      "pokemon": "Seaking",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-61",
      "ev": "2 ATK",
      "place": "Route 12-B"
    }
  ],
  "Kricketune": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketune.gif",
      "pokemon": "Kricketune",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "2 ATK",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketune.gif",
      "pokemon": "Kricketune",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 ATK",
      "place": "Valor Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kricketune.gif",
      "pokemon": "Kricketune",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "40-42",
      "ev": "2 ATK",
      "place": "Lake Valor"
    }
  ],
  "Silcoon": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/silcoon.gif",
      "pokemon": "Silcoon",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "14-16",
      "ev": "2 DEF",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/silcoon.gif",
      "pokemon": "Silcoon",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "2 DEF",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/silcoon.gif",
      "pokemon": "Silcoon",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "30-33",
      "ev": "2 DEF",
      "place": "Nuzbar Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/silcoon.gif",
      "pokemon": "Silcoon",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "30-33",
      "ev": "2 DEF",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/silcoon.gif",
      "pokemon": "Silcoon",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "2 DEF",
      "place": "Oozy Forest (Faunas)"
    }
  ],
  "Cascoon": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cascoon.gif",
      "pokemon": "Cascoon",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "14-16",
      "ev": "2 DEF",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cascoon.gif",
      "pokemon": "Cascoon",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "2 DEF",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cascoon.gif",
      "pokemon": "Cascoon",
      "rarity": "UC",
      "time": "🌑",
      "method": "🍀",
      "level": "30-33",
      "ev": "2 DEF",
      "place": "Nuzbar Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cascoon.gif",
      "pokemon": "Cascoon",
      "rarity": "UC",
      "time": "🌑",
      "method": "🍀",
      "level": "30-33",
      "ev": "2 DEF",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cascoon.gif",
      "pokemon": "Cascoon",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "2 DEF",
      "place": "Oozy Forest (Faunas)"
    }
  ],
  "Beautifly": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/beautifly.gif",
      "pokemon": "Beautifly",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "14-16",
      "ev": "3 SP_ATK",
      "place": "Eterna Forest"
    }
  ],
  "Dustox": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dustox.gif",
      "pokemon": "Dustox",
      "rarity": "UC",
      "time": "🌑",
      "method": "🍀",
      "level": "14-16",
      "ev": "3 SP_DEF",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dustox.gif",
      "pokemon": "Dustox",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "26-30",
      "ev": "3 SP_DEF",
      "place": "Grayroot Town - Northern Pass"
    }
  ],
  "Buneary": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buneary.gif",
      "pokemon": "Buneary",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SPEED",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buneary.gif",
      "pokemon": "Buneary",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 SPEED",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buneary.gif",
      "pokemon": "Buneary",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/buneary.gif",
      "pokemon": "Buneary",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "1 SPEED",
      "place": "Matti Village"
    }
  ],
  "Hoothoot": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hoothoot.gif",
      "pokemon": "Hoothoot",
      "rarity": "UC",
      "time": "🌑",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 BASE_HP",
      "place": "Eterna Forest"
    }
  ],
  "Murkrow": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/murkrow.gif",
      "pokemon": "Murkrow",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "14-16",
      "ev": "1 SPEED",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/murkrow.gif",
      "pokemon": "Murkrow",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SPEED",
      "place": "Lost Tower #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/murkrow.gif",
      "pokemon": "Murkrow",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SPEED",
      "place": "Lost Tower #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/murkrow.gif",
      "pokemon": "Murkrow",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SPEED",
      "place": "Lost Tower #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/murkrow.gif",
      "pokemon": "Murkrow",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SPEED",
      "place": "Lost Tower #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/murkrow.gif",
      "pokemon": "Murkrow",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SPEED",
      "place": "Lost Tower #5"
    }
  ],
  "Heracross": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/heracross.gif",
      "pokemon": "Heracross",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "2 ATK",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/heracross.gif",
      "pokemon": "Heracross",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "2 ATK",
      "place": "Spring Valley"
    }
  ],
  "Pinsir": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pinsir.gif",
      "pokemon": "Pinsir",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "2 ATK",
      "place": "Eterna Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pinsir.gif",
      "pokemon": "Pinsir",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "2 ATK",
      "place": "Spring Valley"
    }
  ],
  "Seviper": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seviper.gif",
      "pokemon": "Seviper",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "18-20",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 206"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seviper.gif",
      "pokemon": "Seviper",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 8-B"
    }
  ],
  "Ponyta": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ponyta.gif",
      "pokemon": "Ponyta",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "18-20",
      "ev": "1 SPEED",
      "place": "Route 206"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ponyta.gif",
      "pokemon": "Ponyta",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 SPEED",
      "place": "Route 207"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ponyta.gif",
      "pokemon": "Ponyta",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 SPEED",
      "place": "Fuego Ironworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ponyta.gif",
      "pokemon": "Ponyta",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "1 SPEED",
      "place": "Matti Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ponyta.gif",
      "pokemon": "Ponyta",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "1 SPEED",
      "place": "Matti Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ponyta.gif",
      "pokemon": "Ponyta",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "1 SPEED",
      "place": "Route 12-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ponyta.gif",
      "pokemon": "Ponyta",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "1 SPEED",
      "place": "Route 12-B"
    }
  ],
  "Stunky": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stunky.gif",
      "pokemon": "Stunky",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "18-20",
      "ev": "1 SPEED",
      "place": "Route 206"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stunky.gif",
      "pokemon": "Stunky",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "66-68",
      "ev": "1 SPEED",
      "place": "Route 10"
    }
  ],
  "Machop": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machop.gif",
      "pokemon": "Machop",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "18-20",
      "ev": "1 ATK",
      "place": "Route 206"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machop.gif",
      "pokemon": "Machop",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 ATK",
      "place": "Route 207"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machop.gif",
      "pokemon": "Machop",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machop.gif",
      "pokemon": "Machop",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machop.gif",
      "pokemon": "Machop",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #7"
    }
  ],
  "Bronzor": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-20",
      "ev": "1 DEF",
      "place": "Route 206"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 DEF",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 DEF",
      "place": "Route 211 (West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bronzor.gif",
      "pokemon": "Bronzor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 6F"
    }
  ],
  "Pikachu": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikachu.gif",
      "pokemon": "Pikachu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "2 SPEED",
      "place": "Route 207"
    }
  ],
  "Phanpy": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/phanpy.gif",
      "pokemon": "Phanpy",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 BASE_HP",
      "place": "Route 207"
    }
  ],
  "Gligar": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gligar.gif",
      "pokemon": "Gligar",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "10-12",
      "ev": "1 DEF",
      "place": "Route 207"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gligar.gif",
      "pokemon": "Gligar",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 DEF",
      "place": "Route 215"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gligar.gif",
      "pokemon": "Gligar",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 DEF",
      "place": "Spring Valley"
    }
  ],
  "Nosepass": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 DEF",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 DEF",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Steel Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nosepass.gif",
      "pokemon": "Nosepass",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Steel Cavern"
    }
  ],
  "Meditite": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 SPEED",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 SPEED",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SPEED",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 SPEED",
      "place": "Route 211 (West)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meditite.gif",
      "pokemon": "Meditite",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Champions Road #7"
    }
  ],
  "Chingling": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "40-42",
      "ev": "1 SP_ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "1 SP_ATK",
      "place": "Route 211 (East)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chingling.gif",
      "pokemon": "Chingling",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 SP_ATK",
      "place": "Mt. Coronet 6F"
    }
  ],
  "Bibarel": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bibarel.gif",
      "pokemon": "Bibarel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "2 ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bibarel.gif",
      "pokemon": "Bibarel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 ATK",
      "place": "Valor Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bibarel.gif",
      "pokemon": "Bibarel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "40-42",
      "ev": "2 ATK",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bibarel.gif",
      "pokemon": "Bibarel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "2 ATK",
      "place": "Route 218"
    }
  ],
  "Spoink": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spoink.gif",
      "pokemon": "Spoink",
      "rarity": "UC",
      "time": "all",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 SP_DEF",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spoink.gif",
      "pokemon": "Spoink",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "26-30",
      "ev": "1 SP_DEF",
      "place": "Grayroot Town - Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spoink.gif",
      "pokemon": "Spoink",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_DEF",
      "place": "Goldburn City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spoink.gif",
      "pokemon": "Spoink",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_DEF",
      "place": "Goldburn City Shores"
    }
  ],
  "Wooper": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wooper.gif",
      "pokemon": "Wooper",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 BASE_HP",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wooper.gif",
      "pokemon": "Wooper",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 BASE_HP",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wooper.gif",
      "pokemon": "Wooper",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 BASE_HP",
      "place": "Route 4 Shores"
    }
  ],
  "Ralts": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ralts.gif",
      "pokemon": "Ralts",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "20-22",
      "ev": "1 SP_ATK",
      "place": "Route 208"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ralts.gif",
      "pokemon": "Ralts",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 SP_ATK",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ralts.gif",
      "pokemon": "Ralts",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "69-70",
      "ev": "1 SP_ATK",
      "place": "Route 11-C"
    }
  ],
  "Duskull": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌑",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 SP_DEF",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Dining Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 1F: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 1F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/duskull.gif",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌑",
      "method": "🍀",
      "level": "69-70",
      "ev": "1 SP_DEF",
      "place": "Route 11-B"
    }
  ],
  "Kirlia": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kirlia.gif",
      "pokemon": "Kirlia",
      "rarity": "VR",
      "time": "🌕",
      "method": "🍀",
      "level": "22-24",
      "ev": "2 SP_ATK",
      "place": "Route 209"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kirlia.gif",
      "pokemon": "Kirlia",
      "rarity": "VR",
      "time": "🌕",
      "method": "🍀",
      "level": "69-70",
      "ev": "2 SP_ATK",
      "place": "Route 11-B"
    }
  ],
  "Doduo": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/doduo.gif",
      "pokemon": "Doduo",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 ATK",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/doduo.gif",
      "pokemon": "Doduo",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 ATK",
      "place": "Route 215"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/doduo.gif",
      "pokemon": "Doduo",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/doduo.gif",
      "pokemon": "Doduo",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Route 210"
    }
  ],
  "Mightyena": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 ATK",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "2 ATK",
      "place": "Route 215"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "2 ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "2 ATK",
      "place": "Route 210"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 ATK",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 ATK",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 ATK",
      "place": "Victory Road 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #7"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 ATK",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 ATK",
      "place": "Cavity Cavern 1-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mightyena.gif",
      "pokemon": "Mightyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 6"
    }
  ],
  "Miltank": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/miltank.gif",
      "pokemon": "Miltank",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 DEF",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/miltank.gif",
      "pokemon": "Miltank",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "2 DEF",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/miltank.gif",
      "pokemon": "Miltank",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "2 DEF",
      "place": "Route 210"
    }
  ],
  "Chansey": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chansey.gif",
      "pokemon": "Chansey",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 BASE_HP",
      "place": "Route 210: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chansey.gif",
      "pokemon": "Chansey",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "2 BASE_HP",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chansey.gif",
      "pokemon": "Chansey",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 BASE_HP",
      "place": "Victory Road B1F"
    }
  ],
  "Magnemite": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magnemite.gif",
      "pokemon": "Magnemite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 SP_ATK",
      "place": "Route 215"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magnemite.gif",
      "pokemon": "Magnemite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "1 SP_ATK",
      "place": "Route 211 (East)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magnemite.gif",
      "pokemon": "Magnemite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "1 SP_ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magnemite.gif",
      "pokemon": "Magnemite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SP_ATK",
      "place": "Old Power Plant - Stairs B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magnemite.gif",
      "pokemon": "Magnemite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SP_ATK",
      "place": "Old Power Plant - Restricted Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magnemite.gif",
      "pokemon": "Magnemite",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SP_ATK",
      "place": "Old Power Plant - Generator Room"
    }
  ],
  "Marill": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/marill.gif",
      "pokemon": "Marill",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "2 BASE_HP",
      "place": "Route 215"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/marill.gif",
      "pokemon": "Marill",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "32-35",
      "ev": "2 BASE_HP",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/marill.gif",
      "pokemon": "Marill",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "2 BASE_HP",
      "place": "Ochra Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/marill.gif",
      "pokemon": "Marill",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "2 BASE_HP",
      "place": "Route 9-B"
    }
  ],
  "Burmy": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/burmy.gif",
      "pokemon": "Burmy",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 SP_DEF",
      "place": "Route 214"
    }
  ],
  "Wormadam-Plant": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wormadam.gif",
      "pokemon": "Wormadam-Plant",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 SP_DEF",
      "place": "Route 214"
    }
  ],
  "Girafarig": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/girafarig.gif",
      "pokemon": "Girafarig",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 SP_ATK",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/girafarig.gif",
      "pokemon": "Girafarig",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 SP_ATK",
      "place": "Valor Lakefront"
    }
  ],
  "Houndour": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/houndour.gif",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 SP_ATK",
      "place": "Route 214"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/houndour.gif",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "30-32",
      "ev": "1 SP_ATK",
      "place": "Valor Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/houndour.gif",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SP_ATK",
      "place": "Jannat Village"
    }
  ],
  "Graveler": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-32",
      "ev": "2 DEF",
      "place": "Valor Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 DEF",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "2 DEF",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "2 DEF",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Iron Island B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Iron Island B1F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Iron Island B1F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Iron Island B2F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 DEF",
      "place": "Iron Island B2F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 DEF",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 DEF",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 DEF",
      "place": "Victory Road 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 DEF",
      "place": "Stark Mountain"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 DEF",
      "place": "Stark Mountain: Entrance"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 DEF",
      "place": "Stark Mountain Inside"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 DEF",
      "place": "Glacier Cave-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 DEF",
      "place": "Glacier Cave-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 DEF",
      "place": "Glacier Cave-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 DEF",
      "place": "Glacier Cave-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 1-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 2-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 2-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 2-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 2-E"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler.gif",
      "pokemon": "Graveler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 DEF",
      "place": "Cavity Cavern 1-B"
    }
  ],
  "Noctowl": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "40-42",
      "ev": "2 BASE_HP",
      "place": "Lake Valor"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "2 BASE_HP",
      "place": "Route 216"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "2 BASE_HP",
      "place": "Route 217"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "2 BASE_HP",
      "place": "Acuity Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "48-50",
      "ev": "2 BASE_HP",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Barfi Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 BASE_HP",
      "place": "Route 13-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 BASE_HP",
      "place": "Route 13-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 BASE_HP",
      "place": "Route 13-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Champions Villa #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Champions Villa #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Dragon Tower Floor 1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Dragon Tower Floor 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/noctowl.gif",
      "pokemon": "Noctowl",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Dragon Tower Floor 6"
    }
  ],
  "Staravia": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/staravia.gif",
      "pokemon": "Staravia",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "40-42",
      "ev": "2 SPEED",
      "place": "Lake Valor"
    }
  ],
  "Floatzel": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/floatzel.gif",
      "pokemon": "Floatzel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "2 SPEED",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/floatzel.gif",
      "pokemon": "Floatzel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 SPEED",
      "place": "Route 213: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/floatzel.gif",
      "pokemon": "Floatzel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "2 SPEED",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/floatzel.gif",
      "pokemon": "Floatzel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 SPEED",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/floatzel.gif",
      "pokemon": "Floatzel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "41-43",
      "ev": "2 SPEED",
      "place": "Wayward Cave 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/floatzel.gif",
      "pokemon": "Floatzel",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "43-45",
      "ev": "2 SPEED",
      "place": "Wayward Cave 2F"
    }
  ],
  "Masquerain": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/masquerain.gif",
      "pokemon": "Masquerain",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "1 SP_DEF, 1 SP_ATK",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/masquerain.gif",
      "pokemon": "Masquerain",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 SP_DEF, 1 SP_ATK",
      "place": "Route 213: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/masquerain.gif",
      "pokemon": "Masquerain",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "1 SP_DEF, 1 SP_ATK",
      "place": "Route 8-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/masquerain.gif",
      "pokemon": "Masquerain",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "1 SP_DEF, 1 SP_ATK",
      "place": "Route 8-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/masquerain.gif",
      "pokemon": "Masquerain",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_DEF, 1 SP_ATK",
      "place": "Route 11-A"
    }
  ],
  "Tranquill": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tranquill.gif",
      "pokemon": "Tranquill",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "2 ATK",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tranquill.gif",
      "pokemon": "Tranquill",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 ATK",
      "place": "Route 213: East"
    }
  ],
  "Shellos-East": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos-east.gif",
      "pokemon": "Shellos-East",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos-east.gif",
      "pokemon": "Shellos-East",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "32-34",
      "ev": "",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos-east.gif",
      "pokemon": "Shellos-East",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "",
      "place": "Route 213: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos-east.gif",
      "pokemon": "Shellos-East",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "",
      "place": "Pastoria City"
    }
  ],
  "Swellow": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swellow.gif",
      "pokemon": "Swellow",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "2 SPEED",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swellow.gif",
      "pokemon": "Swellow",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 SPEED",
      "place": "Route 213: East"
    }
  ],
  "Remoraid": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "32-34",
      "ev": "1 SP_ATK",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 SP_ATK",
      "place": "Pastoria City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 SP_ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 SP_ATK",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "54-56",
      "ev": "1 SP_ATK",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "1-10",
      "ev": "1 SP_ATK",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "6-11",
      "ev": "1 SP_ATK",
      "place": "Oozy Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/remoraid.gif",
      "pokemon": "Remoraid",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "36-40",
      "ev": "1 SP_ATK",
      "place": "Oozy Forest Northern Pass"
    }
  ],
  "Octillery": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "32-34",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "34-36",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Pastoria City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "54-56",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Resort Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Ochra Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/octillery.gif",
      "pokemon": "Octillery",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-61",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 12-A"
    }
  ],
  "Chinchou": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chinchou.gif",
      "pokemon": "Chinchou",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "33-35",
      "ev": "1 BASE_HP",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chinchou.gif",
      "pokemon": "Chinchou",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "1 BASE_HP",
      "place": "Canalave City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chinchou.gif",
      "pokemon": "Chinchou",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "42-44",
      "ev": "1 BASE_HP",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chinchou.gif",
      "pokemon": "Chinchou",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "69-70",
      "ev": "1 BASE_HP",
      "place": "Route 11-A"
    }
  ],
  "Gastrodon-East": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon-east.gif",
      "pokemon": "Gastrodon-East",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "32-34",
      "ev": "",
      "place": "Route 213"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon-east.gif",
      "pokemon": "Gastrodon-East",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "34-36",
      "ev": "",
      "place": "Pastoria City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon-east.gif",
      "pokemon": "Gastrodon-East",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "",
      "place": "Route 222"
    }
  ],
  "Helioptile": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/helioptile.gif",
      "pokemon": "Helioptile",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "1 SPEED",
      "place": "Route 213: East"
    }
  ],
  "Patrat": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/patrat.gif",
      "pokemon": "Patrat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/patrat.gif",
      "pokemon": "Patrat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/patrat.gif",
      "pokemon": "Patrat",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 ATK",
      "place": "Great Marsh"
    }
  ],
  "Watchog": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/watchog.gif",
      "pokemon": "Watchog",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "2 ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/watchog.gif",
      "pokemon": "Watchog",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "2 ATK",
      "place": "Route 212 (North)"
    }
  ],
  "Pidove": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidove.gif",
      "pokemon": "Pidove",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidove.gif",
      "pokemon": "Pidove",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 212 (North)"
    }
  ],
  "Shellos": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos.gif",
      "pokemon": "Shellos",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 BASE_HP",
      "place": "Route 212 (South)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos.gif",
      "pokemon": "Shellos",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 BASE_HP",
      "place": "Route 212 (North)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos.gif",
      "pokemon": "Shellos",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "36-40",
      "ev": "1 BASE_HP",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellos.gif",
      "pokemon": "Shellos",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 BASE_HP",
      "place": "Bijli City"
    }
  ],
  "Croagunk": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/croagunk.gif",
      "pokemon": "Croagunk",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 ATK",
      "place": "Route 212 (South)"
    }
  ],
  "Trubbish": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/trubbish.gif",
      "pokemon": "Trubbish",
      "rarity": "R",
      "time": "🌑",
      "method": "🍀",
      "level": "22-24",
      "ev": "1 SPEED",
      "place": "Route 212 (North)"
    }
  ],
  "Roselia": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/roselia.gif",
      "pokemon": "Roselia",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "28-30",
      "ev": "2 SP_ATK",
      "place": "Route 210: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/roselia.gif",
      "pokemon": "Roselia",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "24-26",
      "ev": "2 SP_ATK",
      "place": "Route 210"
    }
  ],
  "Wormadam-Sandy": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wormadam-sandy.gif",
      "pokemon": "Wormadam-Sandy",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "2 DEF",
      "place": "Route 211 (East)"
    }
  ],
  "Jumpluff": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jumpluff.gif",
      "pokemon": "Jumpluff",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "3 SPEED",
      "place": "Route 211 (East)"
    }
  ],
  "Aipom": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/aipom.gif",
      "pokemon": "Aipom",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "1 SPEED",
      "place": "Route 211 (East)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/aipom.gif",
      "pokemon": "Aipom",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "1 SPEED",
      "place": "Route 12-B"
    }
  ],
  "Machoke": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "2 ATK",
      "place": "Route 211 (East)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 ATK",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "36-38",
      "ev": "2 ATK",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "38-40",
      "ev": "2 ATK",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 ATK",
      "place": "Mt. Coronet 6F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 ATK",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 ATK",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/machoke.gif",
      "pokemon": "Machoke",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 ATK",
      "place": "Victory Road 2F"
    }
  ],
  "Vulpix": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/vulpix.gif",
      "pokemon": "Vulpix",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "32-34",
      "ev": "1 SPEED",
      "place": "Route 211 (East)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/vulpix.gif",
      "pokemon": "Vulpix",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "1 SPEED",
      "place": "Amberwick Pass"
    }
  ],
  "Clefairy": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-36",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet Upper 1F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet Upper 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 2F: North"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 2F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 3F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 1F 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 4F3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 5F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/clefairy.gif",
      "pokemon": "Clefairy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 6F"
    }
  ],
  "Gastrodon": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon.gif",
      "pokemon": "Gastrodon",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "2 BASE_HP",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon.gif",
      "pokemon": "Gastrodon",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "36-40",
      "ev": "2 BASE_HP",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon.gif",
      "pokemon": "Gastrodon",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "38-42",
      "ev": "2 BASE_HP",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon.gif",
      "pokemon": "Gastrodon",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "2 BASE_HP",
      "place": "Inferno-Moonshire Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastrodon.gif",
      "pokemon": "Gastrodon",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "2 BASE_HP",
      "place": "Route 11-A"
    }
  ],
  "Chatot": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chatot.gif",
      "pokemon": "Chatot",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 ATK",
      "place": "Route 218"
    }
  ],
  "Mr.Mime": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mrmime.gif",
      "pokemon": "Mr.Mime",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "2 SP_DEF",
      "place": "Route 218"
    }
  ],
  "Munchlax": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/munchlax.gif",
      "pokemon": "Munchlax",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 BASE_HP",
      "place": "Route 218"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/munchlax.gif",
      "pokemon": "Munchlax",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 BASE_HP",
      "place": "Grayroot Town - Northern Pass"
    }
  ],
  "Lumineon": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lumineon.gif",
      "pokemon": "Lumineon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "2 SPEED",
      "place": "Canalave City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lumineon.gif",
      "pokemon": "Lumineon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "2 SPEED",
      "place": "Route 11-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lumineon.gif",
      "pokemon": "Lumineon",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Jannat Village"
    }
  ],
  "Staryu": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/staryu.gif",
      "pokemon": "Staryu",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "1 SPEED",
      "place": "Canalave City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/staryu.gif",
      "pokemon": "Staryu",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 SPEED",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/staryu.gif",
      "pokemon": "Staryu",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "44-46",
      "ev": "1 SPEED",
      "place": "Amberwick Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/staryu.gif",
      "pokemon": "Staryu",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "66-67",
      "ev": "1 SPEED",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/staryu.gif",
      "pokemon": "Staryu",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "66-67",
      "ev": "1 SPEED",
      "place": "Cavity Cavern 3-A"
    }
  ],
  "Whiscash": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "36-38",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "50-52",
      "ev": "2 BASE_HP",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Survival Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "42-44",
      "ev": "2 BASE_HP",
      "place": "Amberwick Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "2 BASE_HP",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "2 BASE_HP",
      "place": "Goldburn City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "58-61",
      "ev": "2 BASE_HP",
      "place": "Route 12-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "58-61",
      "ev": "2 BASE_HP",
      "place": "Route 12-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whiscash.gif",
      "pokemon": "Whiscash",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "2 BASE_HP",
      "place": "Goldburn City Shores"
    }
  ],
  "Feebas": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/feebas.gif",
      "pokemon": "Feebas",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "36-38",
      "ev": "1 SPEED",
      "place": "Mt. Coronet Upper B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/feebas.gif",
      "pokemon": "Feebas",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "50-52",
      "ev": "1 SPEED",
      "place": "Mt. Coronet 4F1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/feebas.gif",
      "pokemon": "Feebas",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/feebas.gif",
      "pokemon": "Feebas",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "60-62",
      "ev": "1 SPEED",
      "place": "Ochra Park-A"
    }
  ],
  "Zangoose": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zangoose.gif",
      "pokemon": "Zangoose",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "2 ATK",
      "place": "Route 216"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zangoose.gif",
      "pokemon": "Zangoose",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "2 ATK",
      "place": "Route 217"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zangoose.gif",
      "pokemon": "Zangoose",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "2 ATK",
      "place": "Acuity Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zangoose.gif",
      "pokemon": "Zangoose",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "48-50",
      "ev": "2 ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zangoose.gif",
      "pokemon": "Zangoose",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 ATK",
      "place": "Barfi Pass"
    }
  ],
  "Jynx": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "2 SP_ATK",
      "place": "Route 216"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "2 SP_ATK",
      "place": "Route 217"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "2 SP_ATK",
      "place": "Acuity Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "48-50",
      "ev": "2 SP_ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 SP_ATK",
      "place": "Glacier Cave-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "2 SP_ATK",
      "place": "Glacier Cave-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 SP_ATK",
      "place": "Route 13-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 SP_ATK",
      "place": "Route 13-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jynx.gif",
      "pokemon": "Jynx",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 SP_ATK",
      "place": "Gym 7"
    }
  ],
  "Snover": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "1 ATK",
      "place": "Route 216"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "1 ATK",
      "place": "Route 217"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "1 ATK",
      "place": "Acuity Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "48-50",
      "ev": "1 ATK",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 ATK",
      "place": "Glacier Cave-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 ATK",
      "place": "Glacier Cave-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 ATK",
      "place": "Glacier Cave-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 ATK",
      "place": "Glacier Cave-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snover.gif",
      "pokemon": "Snover",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 ATK",
      "place": "Gym 7"
    }
  ],
  "Snorunt": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "1 BASE_HP",
      "place": "Route 216"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "1 BASE_HP",
      "place": "Route 217"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "1 BASE_HP",
      "place": "Acuity Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "48-50",
      "ev": "1 BASE_HP",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 BASE_HP",
      "place": "Glacier Cave-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 BASE_HP",
      "place": "Glacier Cave-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 BASE_HP",
      "place": "Glacier Cave-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "1 BASE_HP",
      "place": "Route 13-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "1 BASE_HP",
      "place": "Route 13-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorunt.gif",
      "pokemon": "Snorunt",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 BASE_HP",
      "place": "Champions Villa #1"
    }
  ],
  "Swinub": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "1 ATK",
      "place": "Route 216"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "1 ATK",
      "place": "Route 217"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "1 ATK",
      "place": "Acuity Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "55-56",
      "ev": "1 ATK",
      "place": "Glacier Cave-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "55-56",
      "ev": "1 ATK",
      "place": "Glacier Cave-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "71-72",
      "ev": "1 ATK",
      "place": "Route 13-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "71-72",
      "ev": "1 ATK",
      "place": "Route 13-D"
    }
  ],
  "Sneasel": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sneasel.gif",
      "pokemon": "Sneasel",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "48-50",
      "ev": "1 SPEED",
      "place": "Lake Acuity"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sneasel.gif",
      "pokemon": "Sneasel",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "55-56",
      "ev": "1 SPEED",
      "place": "Glacier Cave-D"
    }
  ],
  "Purugly": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/purugly.gif",
      "pokemon": "Purugly",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 SPEED",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/purugly.gif",
      "pokemon": "Purugly",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/purugly.gif",
      "pokemon": "Purugly",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 226"
    }
  ],
  "Luxio": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luxio.gif",
      "pokemon": "Luxio",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luxio.gif",
      "pokemon": "Luxio",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "2 ATK",
      "place": "Fuego Ironworks"
    }
  ],
  "Carvanha": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/carvanha.gif",
      "pokemon": "Carvanha",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "52-54",
      "ev": "1 ATK",
      "place": "Route 222"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/carvanha.gif",
      "pokemon": "Carvanha",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "54-56",
      "ev": "1 ATK",
      "place": "Route 223"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/carvanha.gif",
      "pokemon": "Carvanha",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "64-65",
      "ev": "1 ATK",
      "place": "Matti Cliffs"
    }
  ],
  "Wingull": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wingull.gif",
      "pokemon": "Wingull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "1 SPEED",
      "place": "Route 222"
    }
  ],
  "Mantyke": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mantyke.gif",
      "pokemon": "Mantyke",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "52-54",
      "ev": "1 SP_DEF",
      "place": "Sunyshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mantyke.gif",
      "pokemon": "Mantyke",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "54-56",
      "ev": "1 SP_DEF",
      "place": "Route 223"
    }
  ],
  "Onix": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B1F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B1F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B2F R"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 DEF",
      "place": "Iron Island B2F L"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "1 DEF",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "1 DEF",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "1 DEF",
      "place": "Victory Road 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 DEF",
      "place": "Stark Mountain Inside"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 DEF",
      "place": "Champions Road #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 DEF",
      "place": "Champions Road #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/onix.gif",
      "pokemon": "Onix",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 DEF",
      "place": "Champions Road #5"
    }
  ],
  "Mawile": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mawile.gif",
      "pokemon": "Mawile",
      "rarity": "VR",
      "time": "🌕",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 ATK, 1 DEF",
      "place": "Iron Island B2F L"
    }
  ],
  "Sableye": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sableye.gif",
      "pokemon": "Sableye",
      "rarity": "VR",
      "time": "🌑",
      "method": "🍀",
      "level": "50-52",
      "ev": "1 ATK, 1 DEF",
      "place": "Iron Island B2F L"
    }
  ],
  "Golem": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golem.gif",
      "pokemon": "Golem",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "3 DEF",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golem.gif",
      "pokemon": "Golem",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "3 DEF",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golem.gif",
      "pokemon": "Golem",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "3 DEF",
      "place": "Victory Road 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golem.gif",
      "pokemon": "Golem",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "3 DEF",
      "place": "Champions Road #6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golem.gif",
      "pokemon": "Golem",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "3 DEF",
      "place": "Champions Road #7"
    }
  ],
  "Medicham": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/medicham.gif",
      "pokemon": "Medicham",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 SPEED",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/medicham.gif",
      "pokemon": "Medicham",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 SPEED",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/medicham.gif",
      "pokemon": "Medicham",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 SPEED",
      "place": "Victory Road 2F"
    }
  ],
  "Rhyhorn": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rhyhorn.gif",
      "pokemon": "Rhyhorn",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "1 DEF",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rhyhorn.gif",
      "pokemon": "Rhyhorn",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "1 DEF",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rhyhorn.gif",
      "pokemon": "Rhyhorn",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "1 DEF",
      "place": "Victory Road 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rhyhorn.gif",
      "pokemon": "Rhyhorn",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "41-43",
      "ev": "1 DEF",
      "place": "Wayward Cave 1F"
    }
  ],
  "Kadabra": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kadabra.gif",
      "pokemon": "Kadabra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 SP_ATK",
      "place": "Victory Road 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kadabra.gif",
      "pokemon": "Kadabra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 SP_ATK",
      "place": "Victory Road B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kadabra.gif",
      "pokemon": "Kadabra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "54-56",
      "ev": "2 SP_ATK",
      "place": "Victory Road 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kadabra.gif",
      "pokemon": "Kadabra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "2 SP_ATK",
      "place": "Champions Road #1"
    }
  ],
  "Venonat": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/venonat.gif",
      "pokemon": "Venonat",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 SP_DEF",
      "place": "Spring Valley"
    }
  ],
  "Volbeat": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/volbeat.gif",
      "pokemon": "Volbeat",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    }
  ],
  "Illumise": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/illumise.gif",
      "pokemon": "Illumise",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    }
  ],
  "Larvesta": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/larvesta.gif",
      "pokemon": "Larvesta",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "1-10",
      "ev": "1 ATK",
      "place": "Spring Valley"
    }
  ],
  "Panpour": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/panpour.gif",
      "pokemon": "Panpour",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    }
  ],
  "Poliwag": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwag.gif",
      "pokemon": "Poliwag",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "1-10",
      "ev": "1 SPEED",
      "place": "Spring Valley"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwag.gif",
      "pokemon": "Poliwag",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "ev": "1 SPEED",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwag.gif",
      "pokemon": "Poliwag",
      "rarity": "C",
      "time": "🌕",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 SPEED",
      "place": "Ochra Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwag.gif",
      "pokemon": "Poliwag",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Goldburn City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwag.gif",
      "pokemon": "Poliwag",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Jannat Village"
    }
  ],
  "Dratini": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dratini.gif",
      "pokemon": "Dratini",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "1-10",
      "ev": "1 ATK",
      "place": "Spring Valley"
    }
  ],
  "Spinda": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinda.gif",
      "pokemon": "Spinda",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_ATK",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinda.gif",
      "pokemon": "Spinda",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_ATK",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinda.gif",
      "pokemon": "Spinda",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinda.gif",
      "pokemon": "Spinda",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "40-44",
      "ev": "1 SP_ATK",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinda.gif",
      "pokemon": "Spinda",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "66-68",
      "ev": "1 SP_ATK",
      "place": "Route 10"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinda.gif",
      "pokemon": "Spinda",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_ATK",
      "place": "Goldburn City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinda.gif",
      "pokemon": "Spinda",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_ATK",
      "place": "Goldburn City Shores"
    }
  ],
  "Lopunny": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lopunny.gif",
      "pokemon": "Lopunny",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lopunny.gif",
      "pokemon": "Lopunny",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 226"
    }
  ],
  "Skuntank": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/skuntank.gif",
      "pokemon": "Skuntank",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/skuntank.gif",
      "pokemon": "Skuntank",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 226"
    }
  ],
  "Swablu": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swablu.gif",
      "pokemon": "Swablu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_DEF",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swablu.gif",
      "pokemon": "Swablu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_DEF",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swablu.gif",
      "pokemon": "Swablu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SP_DEF",
      "place": "Dragon Tower Floor 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/swablu.gif",
      "pokemon": "Swablu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SP_DEF",
      "place": "Dragon Tower Floor 4"
    }
  ],
  "Altaria": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/altaria.gif",
      "pokemon": "Altaria",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SP_DEF",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/altaria.gif",
      "pokemon": "Altaria",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SP_DEF",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/altaria.gif",
      "pokemon": "Altaria",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_DEF",
      "place": "Dragon Tower Floor 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/altaria.gif",
      "pokemon": "Altaria",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_DEF",
      "place": "Dragon Tower Floor 6"
    }
  ],
  "Snorlax": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorlax.gif",
      "pokemon": "Snorlax",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorlax.gif",
      "pokemon": "Snorlax",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/snorlax.gif",
      "pokemon": "Snorlax",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "64-65",
      "ev": "2 BASE_HP",
      "place": "Matti Village"
    }
  ],
  "Poliwhirl": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Survival Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Survival Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/poliwhirl.gif",
      "pokemon": "Poliwhirl",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 SPEED",
      "place": "Route 228"
    }
  ],
  "Bruxish": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bruxish.gif",
      "pokemon": "Bruxish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 ATK",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bruxish.gif",
      "pokemon": "Bruxish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 ATK",
      "place": "Survival Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bruxish.gif",
      "pokemon": "Bruxish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "2 ATK",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bruxish.gif",
      "pokemon": "Bruxish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "18-20",
      "ev": "2 ATK",
      "place": "Route 4 Shores"
    }
  ],
  "Qwilfish": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/qwilfish.gif",
      "pokemon": "Qwilfish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Route 225"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/qwilfish.gif",
      "pokemon": "Qwilfish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Survival Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/qwilfish.gif",
      "pokemon": "Qwilfish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Route 226"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/qwilfish.gif",
      "pokemon": "Qwilfish",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "6-11",
      "ev": "1 ATK",
      "place": "Oozy Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/qwilfish.gif",
      "pokemon": "Qwilfish",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "36-40",
      "ev": "1 ATK",
      "place": "Oozy Forest Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/qwilfish.gif",
      "pokemon": "Qwilfish",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 ATK",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/qwilfish.gif",
      "pokemon": "Qwilfish",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "1 ATK",
      "place": "Goldburn City Shores"
    }
  ],
  "Lunatone": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lunatone.gif",
      "pokemon": "Lunatone",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 SP_ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lunatone.gif",
      "pokemon": "Lunatone",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "44-46",
      "ev": "2 SP_ATK",
      "place": "Mt. Inferno"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lunatone.gif",
      "pokemon": "Lunatone",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "46-48",
      "ev": "2 SP_ATK",
      "place": "Mt. Inferno Peak"
    }
  ],
  "Solrock": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/solrock.gif",
      "pokemon": "Solrock",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/solrock.gif",
      "pokemon": "Solrock",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "44-46",
      "ev": "2 ATK",
      "place": "Mt. Inferno"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/solrock.gif",
      "pokemon": "Solrock",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "46-48",
      "ev": "2 ATK",
      "place": "Mt. Inferno Peak"
    }
  ],
  "Numel": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/numel.gif",
      "pokemon": "Numel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/numel.gif",
      "pokemon": "Numel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 SP_ATK",
      "place": "Stark Mountain"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/numel.gif",
      "pokemon": "Numel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 SP_ATK",
      "place": "Stark Mountain: Entrance"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/numel.gif",
      "pokemon": "Numel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "1 SP_ATK",
      "place": "Mt. Inferno"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/numel.gif",
      "pokemon": "Numel",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "1 SP_ATK",
      "place": "Mt. Inferno Peak"
    }
  ],
  "Camerupt": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/camerupt.gif",
      "pokemon": "Camerupt",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/camerupt.gif",
      "pokemon": "Camerupt",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Stark Mountain"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/camerupt.gif",
      "pokemon": "Camerupt",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Stark Mountain: Entrance"
    }
  ],
  "Torkoal": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/torkoal.gif",
      "pokemon": "Torkoal",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 DEF",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/torkoal.gif",
      "pokemon": "Torkoal",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 DEF",
      "place": "Stark Mountain"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/torkoal.gif",
      "pokemon": "Torkoal",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 DEF",
      "place": "Stark Mountain: Entrance"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/torkoal.gif",
      "pokemon": "Torkoal",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 DEF",
      "place": "Stark Mountain Inside"
    }
  ],
  "Trapinch": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/trapinch.gif",
      "pokemon": "Trapinch",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Route 227"
    }
  ],
  "Relicanth": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Route 227"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Sunshire Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "38-42",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "40-44",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/relicanth.gif",
      "pokemon": "Relicanth",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "42-44",
      "ev": "1 BASE_HP, 1 DEF",
      "place": "Amberwick Town"
    }
  ],
  "Heatmor": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/heatmor.gif",
      "pokemon": "Heatmor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 SP_ATK",
      "place": "Stark Mountain"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/heatmor.gif",
      "pokemon": "Heatmor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 SP_ATK",
      "place": "Stark Mountain: Entrance"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/heatmor.gif",
      "pokemon": "Heatmor",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "2 SP_ATK",
      "place": "Stark Mountain Inside"
    }
  ],
  "Slugma": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/slugma.gif",
      "pokemon": "Slugma",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 SP_ATK",
      "place": "Stark Mountain Inside"
    }
  ],
  "Larvitar": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/larvitar.gif",
      "pokemon": "Larvitar",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 ATK",
      "place": "Stark Mountain Inside"
    }
  ],
  "Sandslash": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandslash.gif",
      "pokemon": "Sandslash",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 DEF",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandslash.gif",
      "pokemon": "Sandslash",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "2 DEF",
      "place": "Route 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandslash.gif",
      "pokemon": "Sandslash",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "2 DEF",
      "place": "Route 6 Highway Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandslash.gif",
      "pokemon": "Sandslash",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "34-38",
      "ev": "2 DEF",
      "place": "Scorched Desert"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandslash.gif",
      "pokemon": "Sandslash",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "2 DEF",
      "place": "Gym 5"
    }
  ],
  "Sandshrew": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandshrew.gif",
      "pokemon": "Sandshrew",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandshrew.gif",
      "pokemon": "Sandshrew",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 DEF",
      "place": "Patthar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandshrew.gif",
      "pokemon": "Sandshrew",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 DEF",
      "place": "Boulder Cavern 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandshrew.gif",
      "pokemon": "Sandshrew",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandshrew.gif",
      "pokemon": "Sandshrew",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Old Power Plant"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandshrew.gif",
      "pokemon": "Sandshrew",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 DEF",
      "place": "Gym 5"
    }
  ],
  "Cacnea": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cacnea.gif",
      "pokemon": "Cacnea",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_ATK",
      "place": "Route 228"
    }
  ],
  "Cacturne": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cacturne.gif",
      "pokemon": "Cacturne",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 228"
    }
  ],
  "Whismur": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 BASE_HP",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 BASE_HP",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 BASE_HP",
      "place": "Cavity Cavern 2-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 BASE_HP",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 BASE_HP",
      "place": "Cavity Cavern 2-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 BASE_HP",
      "place": "Cavity Cavern 2-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 BASE_HP",
      "place": "Cavity Cavern 2-E"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/whismur.gif",
      "pokemon": "Whismur",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "1 BASE_HP",
      "place": "Cavity Cavern 1-B"
    }
  ],
  "Aron": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/aron.gif",
      "pokemon": "Aron",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/aron.gif",
      "pokemon": "Aron",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Barfi Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/aron.gif",
      "pokemon": "Aron",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 DEF",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/aron.gif",
      "pokemon": "Aron",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 DEF",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/aron.gif",
      "pokemon": "Aron",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 DEF",
      "place": "Cavity Cavern 1-B"
    }
  ],
  "Hippopotas": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hippopotas.gif",
      "pokemon": "Hippopotas",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Route 228"
    }
  ],
  "Luvdisc": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 228"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Resort Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Resort Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Goldburn City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/luvdisc.gif",
      "pokemon": "Luvdisc",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Goldburn City Shores"
    }
  ],
  "Tropius": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tropius.gif",
      "pokemon": "Tropius",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tropius.gif",
      "pokemon": "Tropius",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tropius.gif",
      "pokemon": "Tropius",
      "rarity": "--",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "ev": "2 BASE_HP",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tropius.gif",
      "pokemon": "Tropius",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "2 BASE_HP",
      "place": "Route 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tropius.gif",
      "pokemon": "Tropius",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "2 BASE_HP",
      "place": "Route 12-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tropius.gif",
      "pokemon": "Tropius",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Dragon Tower Floor 4"
    }
  ],
  "Nincada": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nincada.gif",
      "pokemon": "Nincada",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nincada.gif",
      "pokemon": "Nincada",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/nincada.gif",
      "pokemon": "Nincada",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "66-68",
      "ev": "1 DEF",
      "place": "Route 10"
    }
  ],
  "Combee": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/combee.gif",
      "pokemon": "Combee",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/combee.gif",
      "pokemon": "Combee",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/combee.gif",
      "pokemon": "Combee",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "6-11",
      "ev": "1 SPEED",
      "place": "Oozy Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/combee.gif",
      "pokemon": "Combee",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 SPEED",
      "place": "Oozy Forest Northern Pass"
    }
  ],
  "Vespiquen": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/vespiquen.gif",
      "pokemon": "Vespiquen",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/vespiquen.gif",
      "pokemon": "Vespiquen",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Route 230"
    }
  ],
  "Venomoth": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/venomoth.gif",
      "pokemon": "Venomoth",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_ATK, 1 SPEED",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/venomoth.gif",
      "pokemon": "Venomoth",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SP_ATK, 1 SPEED",
      "place": "Route 230"
    }
  ],
  "Fletchling": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/fletchling.gif",
      "pokemon": "Fletchling",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/fletchling.gif",
      "pokemon": "Fletchling",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 SPEED",
      "place": "Route 230"
    }
  ],
  "Frillish": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/frillish.gif",
      "pokemon": "Frillish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SP_DEF",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/frillish.gif",
      "pokemon": "Frillish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SP_DEF",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/frillish.gif",
      "pokemon": "Frillish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SP_DEF",
      "place": "Resort Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/frillish.gif",
      "pokemon": "Frillish",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "14-16",
      "ev": "1 SP_DEF",
      "place": "Route 3"
    }
  ],
  "Wailord": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wailord.gif",
      "pokemon": "Wailord",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 229"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wailord.gif",
      "pokemon": "Wailord",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Route 230"
    }
  ],
  "Stunfisk": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stunfisk.gif",
      "pokemon": "Stunfisk",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Steel Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stunfisk.gif",
      "pokemon": "Stunfisk",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Steel Cavern"
    }
  ],
  "Makuhita": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/makuhita.gif",
      "pokemon": "Makuhita",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 BASE_HP",
      "place": "Steel Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/makuhita.gif",
      "pokemon": "Makuhita",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 BASE_HP",
      "place": "Steel Cavern"
    }
  ],
  "Hariyama": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hariyama.gif",
      "pokemon": "Hariyama",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Steel Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/hariyama.gif",
      "pokemon": "Hariyama",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "2 BASE_HP",
      "place": "Steel Cavern"
    }
  ],
  "Geodude-Alola": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/geodude-alola.gif",
      "pokemon": "Geodude-Alola",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Steel Cavern 1F"
    },
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/geodude-alola.gif",
      "pokemon": "Geodude-Alola",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 DEF",
      "place": "Steel Cavern"
    }
  ],
  "Tyrogue": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tyrogue.gif",
      "pokemon": "Tyrogue",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Steel Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tyrogue.gif",
      "pokemon": "Tyrogue",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Steel Cavern"
    }
  ],
  "Riolu": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/riolu.gif",
      "pokemon": "Riolu",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Steel Cavern 1F"
    }
  ],
  "Togedemaru": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/togedemaru.gif",
      "pokemon": "Togedemaru",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "2 ATK",
      "place": "Fuego Ironworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/togedemaru.gif",
      "pokemon": "Togedemaru",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "38-42",
      "ev": "2 ATK",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/togedemaru.gif",
      "pokemon": "Togedemaru",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "2 ATK",
      "place": "Route 11-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/togedemaru.gif",
      "pokemon": "Togedemaru",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "2 ATK",
      "place": "Route 11-C"
    }
  ],
  "Pichu": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pichu.gif",
      "pokemon": "Pichu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 SPEED",
      "place": "Fuego Ironworks"
    }
  ],
  "Pikachu-Rock-Star": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikachu-rockstar.gif",
      "pokemon": "Pikachu-Rock-Star",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "",
      "place": "Fuego Ironworks"
    }
  ],
  "Pikachu-Pop-Star": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikachu-popstar.gif",
      "pokemon": "Pikachu-Pop-Star",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "",
      "place": "Fuego Ironworks"
    }
  ],
  "Pikachu-PhD": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikachu-phd.gif",
      "pokemon": "Pikachu-PhD",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "",
      "place": "Fuego Ironworks"
    }
  ],
  "Pikachu-Libre": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikachu-libre.gif",
      "pokemon": "Pikachu-Libre",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "",
      "place": "Fuego Ironworks"
    }
  ],
  "Pikachu-Belle": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikachu-belle.gif",
      "pokemon": "Pikachu-Belle",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "",
      "place": "Fuego Ironworks"
    }
  ],
  "Magby": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magby.gif",
      "pokemon": "Magby",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 SPEED",
      "place": "Fuego Ironworks"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magby.gif",
      "pokemon": "Magby",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "42-44",
      "ev": "1 SPEED",
      "place": "Amberwick Pass"
    }
  ],
  "Horsea": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/horsea.gif",
      "pokemon": "Horsea",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "56-58",
      "ev": "1 SP_ATK",
      "place": "Route 230"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/horsea.gif",
      "pokemon": "Horsea",
      "rarity": "UR",
      "time": "🌓",
      "method": "🌊",
      "level": "56-58",
      "ev": "1 SP_ATK",
      "place": "Route 230"
    }
  ],
  "Spinarak": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Dining Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 1F: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 1F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spinarak.gif",
      "pokemon": "Spinarak",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "1 ATK",
      "place": "Route 7-B"
    }
  ],
  "Shuppet": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Dining Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 1F: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau 1F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 ATK",
      "place": "Old Chateau Abandoned Room #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuppet.gif",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 ATK",
      "place": "Lost Tower #5"
    }
  ],
  "Misdreavus": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Dining Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 1F: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau 1F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_DEF",
      "place": "Old Chateau Abandoned Room #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/misdreavus.gif",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_DEF",
      "place": "Lost Tower #5"
    }
  ],
  "Gastly": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau 2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau Abandoned Room #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau Abandoned Room #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau Abandoned Room #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau Abandoned Room #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau Dining Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau 1F: East"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau 1F: West"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SP_ATK",
      "place": "Old Chateau Abandoned Room #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_ATK",
      "place": "Lost Tower #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_ATK",
      "place": "Lost Tower #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_ATK",
      "place": "Lost Tower #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_ATK",
      "place": "Lost Tower #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "24-26",
      "ev": "1 SP_ATK",
      "place": "Lost Tower #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gastly.gif",
      "pokemon": "Gastly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SP_ATK",
      "place": "Champions Road #6"
    }
  ],
  "Chimecho": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chimecho.gif",
      "pokemon": "Chimecho",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "41-43",
      "ev": "1 SP_DEF, 1 SP_ATK",
      "place": "Wayward Cave 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chimecho.gif",
      "pokemon": "Chimecho",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "43-45",
      "ev": "1 SP_DEF, 1 SP_ATK",
      "place": "Wayward Cave 2F"
    }
  ],
  "Graveler-Alola": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler-alola.gif",
      "pokemon": "Graveler-Alola",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "41-43",
      "ev": "2 DEF",
      "place": "Wayward Cave 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/graveler-alola.gif",
      "pokemon": "Graveler-Alola",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "43-45",
      "ev": "2 DEF",
      "place": "Wayward Cave 2F"
    }
  ],
  "Rhydon": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rhydon.gif",
      "pokemon": "Rhydon",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "43-45",
      "ev": "2 ATK",
      "place": "Wayward Cave 2F"
    }
  ],
  "Gible": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gible.gif",
      "pokemon": "Gible",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "43-45",
      "ev": "1 ATK",
      "place": "Wayward Cave 2F"
    }
  ],
  "Wormadam-Trash": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wormadam-trash.gif",
      "pokemon": "Wormadam-Trash",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Great Marsh"
    }
  ],
  "Electrike": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/electrike.gif",
      "pokemon": "Electrike",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 SPEED",
      "place": "Great Marsh"
    }
  ],
  "Bonsly": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bonsly.gif",
      "pokemon": "Bonsly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 DEF",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bonsly.gif",
      "pokemon": "Bonsly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "ev": "1 DEF",
      "place": "Rockshore City"
    }
  ],
  "Shroomish": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shroomish.gif",
      "pokemon": "Shroomish",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 BASE_HP",
      "place": "Great Marsh"
    }
  ],
  "Oddish": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oddish.gif",
      "pokemon": "Oddish",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 SP_ATK",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oddish.gif",
      "pokemon": "Oddish",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 SP_ATK",
      "place": "Route 5"
    }
  ],
  "Yanma": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yanma.gif",
      "pokemon": "Yanma",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 SPEED",
      "place": "Great Marsh"
    }
  ],
  "Skorupi": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/skorupi.gif",
      "pokemon": "Skorupi",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 DEF",
      "place": "Great Marsh"
    }
  ],
  "Chimchar": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/chimchar.gif",
      "pokemon": "Chimchar",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 SPEED",
      "place": "Great Marsh"
    }
  ],
  "Turtwig": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/turtwig.gif",
      "pokemon": "Turtwig",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "ev": "1 ATK",
      "place": "Great Marsh"
    }
  ],
  "Magikarp": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/magikarp.gif",
      "pokemon": "Magikarp",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "ev": "1 SPEED",
      "place": "Great Marsh"
    }
  ],
  "Lapras": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lapras.gif",
      "pokemon": "Lapras",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "ev": "2 BASE_HP",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lapras.gif",
      "pokemon": "Lapras",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "74-75",
      "ev": "2 BASE_HP",
      "place": "Jannat Village"
    }
  ],
  "Piplup": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/piplup.gif",
      "pokemon": "Piplup",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "ev": "1 SP_ATK",
      "place": "Great Marsh"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/piplup.gif",
      "pokemon": "Piplup",
      "rarity": "UR",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "ev": "1 SP_ATK",
      "place": "Great Marsh"
    }
  ],
  "Lotad": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lotad.gif",
      "pokemon": "Lotad",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "ev": "1 SP_DEF",
      "place": "Great Marsh"
    }
  ],
  "Wailmer": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wailmer.gif",
      "pokemon": "Wailmer",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "ev": "1 BASE_HP",
      "place": "Great Marsh"
    }
  ],
  "Slowpoke": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/slowpoke.gif",
      "pokemon": "Slowpoke",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "ev": "1 BASE_HP",
      "place": "Great Marsh"
    }
  ],
  "Yungoos": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 ATK",
      "place": "Route Sereny"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 ATK",
      "place": "Route 1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-4",
      "ev": "1 ATK",
      "place": "Rockshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-5",
      "ev": "1 ATK",
      "place": "Route 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 ATK",
      "place": "Patthar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 ATK",
      "place": "Route 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 ATK",
      "place": "Route 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 ATK",
      "place": "Route 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 ATK",
      "place": "Route 6 Highway Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "34-38",
      "ev": "1 ATK",
      "place": "Scorched Desert"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/yungoos.gif",
      "pokemon": "Yungoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 ATK",
      "place": "Gym 5"
    }
  ],
  "Pidgey": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgey.gif",
      "pokemon": "Pidgey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 SPEED",
      "place": "Route Sereny"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgey.gif",
      "pokemon": "Pidgey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 SPEED",
      "place": "Route 1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgey.gif",
      "pokemon": "Pidgey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-5",
      "ev": "1 SPEED",
      "place": "Route 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgey.gif",
      "pokemon": "Pidgey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 SPEED",
      "place": "Route 3 Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgey.gif",
      "pokemon": "Pidgey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 SPEED",
      "place": "Route 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgey.gif",
      "pokemon": "Pidgey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 SPEED",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgey.gif",
      "pokemon": "Pidgey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "ev": "1 SPEED",
      "place": "Route 3 - Cliffside"
    }
  ],
  "Rattata": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rattata.gif",
      "pokemon": "Rattata",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 SPEED",
      "place": "Route Sereny"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rattata.gif",
      "pokemon": "Rattata",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-3",
      "ev": "1 SPEED",
      "place": "Route 1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rattata.gif",
      "pokemon": "Rattata",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 SPEED",
      "place": "Route 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rattata.gif",
      "pokemon": "Rattata",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SPEED",
      "place": "Bijli City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rattata.gif",
      "pokemon": "Rattata",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 SPEED",
      "place": "Route 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rattata.gif",
      "pokemon": "Rattata",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 SPEED",
      "place": "Route 6 Highway Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rattata.gif",
      "pokemon": "Rattata",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "34-38",
      "ev": "1 SPEED",
      "place": "Scorched Desert"
    }
  ],
  "Spearow": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spearow.gif",
      "pokemon": "Spearow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "ev": "1 SPEED",
      "place": "Rockshore City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spearow.gif",
      "pokemon": "Spearow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 SPEED",
      "place": "Route 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spearow.gif",
      "pokemon": "Spearow",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 SPEED",
      "place": "Route 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spearow.gif",
      "pokemon": "Spearow",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 SPEED",
      "place": "Route 6 Highway Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spearow.gif",
      "pokemon": "Spearow",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "34-38",
      "ev": "1 SPEED",
      "place": "Scorched Desert"
    }
  ],
  "Ekans": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ekans.gif",
      "pokemon": "Ekans",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-5",
      "ev": "1 ATK",
      "place": "Route 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ekans.gif",
      "pokemon": "Ekans",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 ATK",
      "place": "Route 3 Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ekans.gif",
      "pokemon": "Ekans",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "ev": "1 ATK",
      "place": "Route 3 - Cliffside"
    }
  ],
  "Ledyba": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ledyba.gif",
      "pokemon": "Ledyba",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "4-5",
      "ev": "1 SP_DEF",
      "place": "Route 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ledyba.gif",
      "pokemon": "Ledyba",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 SP_DEF",
      "place": "Route 5-Lakefront"
    }
  ],
  "Crabrawler": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/crabrawler.gif",
      "pokemon": "Crabrawler",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "4-6",
      "ev": "1 ATK",
      "place": "Route 2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/crabrawler.gif",
      "pokemon": "Crabrawler",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "ev": "1 ATK",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/crabrawler.gif",
      "pokemon": "Crabrawler",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "56-58",
      "ev": "1 ATK",
      "place": "Barfi Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/crabrawler.gif",
      "pokemon": "Crabrawler",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #4"
    }
  ],
  "Paras": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/paras.gif",
      "pokemon": "Paras",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-8",
      "ev": "1 ATK",
      "place": "Boulder Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/paras.gif",
      "pokemon": "Paras",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "8-10",
      "ev": "1 ATK",
      "place": "Patthar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/paras.gif",
      "pokemon": "Paras",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "6-11",
      "ev": "1 ATK",
      "place": "Oozy Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/paras.gif",
      "pokemon": "Paras",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 ATK",
      "place": "Boulder Cavern - B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/paras.gif",
      "pokemon": "Paras",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 ATK",
      "place": "Boulder Cavern - B2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/paras.gif",
      "pokemon": "Paras",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 ATK",
      "place": "Oozy Forest Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/paras.gif",
      "pokemon": "Paras",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 ATK",
      "place": "Oozy Forest (Faunas)"
    }
  ],
  "Dwebble": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dwebble.gif",
      "pokemon": "Dwebble",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "7-9",
      "ev": "1 DEF",
      "place": "Boulder Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dwebble.gif",
      "pokemon": "Dwebble",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Boulder Cavern - B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dwebble.gif",
      "pokemon": "Dwebble",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dwebble.gif",
      "pokemon": "Dwebble",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 DEF",
      "place": "Old Power Plant"
    }
  ],
  "Diglett": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/diglett.gif",
      "pokemon": "Diglett",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "7-9",
      "ev": "1 SPEED",
      "place": "Boulder Cavern 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/diglett.gif",
      "pokemon": "Diglett",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Boulder Cavern - B2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/diglett.gif",
      "pokemon": "Diglett",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Underground Cavern"
    }
  ],
  "Pikipek": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikipek.gif",
      "pokemon": "Pikipek",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "12-14",
      "ev": "1 ATK",
      "place": "Route 3 Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikipek.gif",
      "pokemon": "Pikipek",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "ev": "1 ATK",
      "place": "Route 3 - Cliffside"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pikipek.gif",
      "pokemon": "Pikipek",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "ev": "1 ATK",
      "place": "Lehar Town Shores"
    }
  ],
  "Oricorio-PomPom": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio-pompom.gif",
      "pokemon": "Oricorio-PomPom",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "2 SP_ATK",
      "place": "Route 3 Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio-pompom.gif",
      "pokemon": "Oricorio-PomPom",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "2 SP_ATK",
      "place": "Route 3 - Cliffside"
    }
  ],
  "Pidgeotto": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgeotto.gif",
      "pokemon": "Pidgeotto",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "14-16",
      "ev": "2 SPEED",
      "place": "Route 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgeotto.gif",
      "pokemon": "Pidgeotto",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "2 SPEED",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgeotto.gif",
      "pokemon": "Pidgeotto",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "2 SPEED",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pidgeotto.gif",
      "pokemon": "Pidgeotto",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "2 SPEED",
      "place": "Ochra Park-B"
    }
  ],
  "Seel": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seel.gif",
      "pokemon": "Seel",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "12-14",
      "ev": "1 SP_DEF",
      "place": "Route 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seel.gif",
      "pokemon": "Seel",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "16-20",
      "ev": "1 SP_DEF",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seel.gif",
      "pokemon": "Seel",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "18-22",
      "ev": "1 SP_DEF",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seel.gif",
      "pokemon": "Seel",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "1 SP_DEF",
      "place": "Sunshire Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seel.gif",
      "pokemon": "Seel",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "38-42",
      "ev": "1 SP_DEF",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seel.gif",
      "pokemon": "Seel",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "40-44",
      "ev": "1 SP_DEF",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/seel.gif",
      "pokemon": "Seel",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SP_DEF",
      "place": "Cavity Cavern 3-A"
    }
  ],
  "Voltorb": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/voltorb.gif",
      "pokemon": "Voltorb",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "1 SPEED",
      "place": "Bijli City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/voltorb.gif",
      "pokemon": "Voltorb",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/voltorb.gif",
      "pokemon": "Voltorb",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Stairs 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/voltorb.gif",
      "pokemon": "Voltorb",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Stairs B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/voltorb.gif",
      "pokemon": "Voltorb",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Restricted Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/voltorb.gif",
      "pokemon": "Voltorb",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Room 3"
    }
  ],
  "Emolga": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/emolga.gif",
      "pokemon": "Emolga",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-18",
      "ev": "2 SPEED",
      "place": "Bijli City"
    }
  ],
  "Mankey": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mankey.gif",
      "pokemon": "Mankey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 ATK",
      "place": "Route 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mankey.gif",
      "pokemon": "Mankey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "1 ATK",
      "place": "Route 8-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mankey.gif",
      "pokemon": "Mankey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "1 ATK",
      "place": "Route 8-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mankey.gif",
      "pokemon": "Mankey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "1 ATK",
      "place": "Route 12-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mankey.gif",
      "pokemon": "Mankey",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "1 ATK",
      "place": "Route 12-B"
    }
  ],
  "Grubbin": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/grubbin.gif",
      "pokemon": "Grubbin",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 ATK",
      "place": "Route 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/grubbin.gif",
      "pokemon": "Grubbin",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 ATK",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/grubbin.gif",
      "pokemon": "Grubbin",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 ATK",
      "place": "Old Power Plant - Stairs 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/grubbin.gif",
      "pokemon": "Grubbin",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 ATK",
      "place": "Old Power Plant - Room 3"
    }
  ],
  "Koffing": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/koffing.gif",
      "pokemon": "Koffing",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-20",
      "ev": "1 DEF",
      "place": "Route 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/koffing.gif",
      "pokemon": "Koffing",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 DEF",
      "place": "Champions Road #6"
    }
  ],
  "Scraggy": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/scraggy.gif",
      "pokemon": "Scraggy",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "18-20",
      "ev": "1 ATK",
      "place": "Route 4"
    }
  ],
  "Happiny": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/happiny.gif",
      "pokemon": "Happiny",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "18-20",
      "ev": "1 BASE_HP",
      "place": "Route 4"
    }
  ],
  "Shellder": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellder.gif",
      "pokemon": "Shellder",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "18-20",
      "ev": "1 DEF",
      "place": "Route 4 Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shellder.gif",
      "pokemon": "Shellder",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "60-62",
      "ev": "1 DEF",
      "place": "Ochra Cliffs"
    }
  ],
  "Sunkern": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sunkern.gif",
      "pokemon": "Sunkern",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "18-22",
      "ev": "1 SP_ATK",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sunkern.gif",
      "pokemon": "Sunkern",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "1 SP_ATK",
      "place": "Matti Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sunkern.gif",
      "pokemon": "Sunkern",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "1 SP_ATK",
      "place": "Matti Cliffs"
    }
  ],
  "Sandygast": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandygast.gif",
      "pokemon": "Sandygast",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "ev": "1 DEF",
      "place": "Lehar Town Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sandygast.gif",
      "pokemon": "Sandygast",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "45-47",
      "ev": "1 DEF",
      "place": "Inferno-Moonshire Pass"
    }
  ],
  "Natu": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/natu.gif",
      "pokemon": "Natu",
      "rarity": "VR",
      "time": "🌕",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 SP_ATK",
      "place": "Route 5"
    }
  ],
  "Munna": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/munna.gif",
      "pokemon": "Munna",
      "rarity": "VR",
      "time": "🌑",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 BASE_HP",
      "place": "Route 5"
    }
  ],
  "Cherubi": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cherubi.gif",
      "pokemon": "Cherubi",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 SP_ATK",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cherubi.gif",
      "pokemon": "Cherubi",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_ATK",
      "place": "Route 11-C"
    }
  ],
  "Exeggcute": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/exeggcute.gif",
      "pokemon": "Exeggcute",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 DEF",
      "place": "Route 5-Lakefront"
    }
  ],
  "Karrablast": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/karrablast.gif",
      "pokemon": "Karrablast",
      "rarity": "VR",
      "time": "🌑",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 ATK",
      "place": "Route 5-Lakefront"
    }
  ],
  "Shelmet": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shelmet.gif",
      "pokemon": "Shelmet",
      "rarity": "VR",
      "time": "🌕",
      "method": "🍀",
      "level": "23-25",
      "ev": "1 DEF",
      "place": "Route 5-Lakefront"
    }
  ],
  "Tynamo": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tynamo.gif",
      "pokemon": "Tynamo",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "23-25",
      "ev": "1 SPEED",
      "place": "Route 5-Lakefront"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tynamo.gif",
      "pokemon": "Tynamo",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "49-53",
      "ev": "1 SPEED",
      "place": "Route 7-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tynamo.gif",
      "pokemon": "Tynamo",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tynamo.gif",
      "pokemon": "Tynamo",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SPEED",
      "place": "Cavity Cavern 2-A"
    }
  ],
  "Drowzee": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/drowzee.gif",
      "pokemon": "Drowzee",
      "rarity": "C",
      "time": "🌓",
      "method": "Waking",
      "level": "26-30",
      "ev": "1 SP_DEF",
      "place": "Grayroot Town - Northern Pass"
    }
  ],
  "Oricorio-Pau": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricoriopau.gif",
      "pokemon": "Oricorio-Pau",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "26-30",
      "ev": "2 SP_ATK",
      "place": "Grayroot Town - Northern Pass"
    }
  ],
  "Mudbray": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mudbray.gif",
      "pokemon": "Mudbray",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "28-30",
      "ev": "1 ATK",
      "place": "Grayroot Town - Northern Pass"
    }
  ],
  "Cutiefly": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cutiefly.gif",
      "pokemon": "Cutiefly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 SPEED",
      "place": "Nuzbar Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cutiefly.gif",
      "pokemon": "Cutiefly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 SPEED",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cutiefly.gif",
      "pokemon": "Cutiefly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 SPEED",
      "place": "Oozy Forest Northern Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cutiefly.gif",
      "pokemon": "Cutiefly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "36-40",
      "ev": "1 SPEED",
      "place": "Oozy Forest (Faunas)"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cutiefly.gif",
      "pokemon": "Cutiefly",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "1 SPEED",
      "place": "Drenched Forest"
    }
  ],
  "Joltik": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/joltik.gif",
      "pokemon": "Joltik",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "32-33",
      "ev": "1 SPEED",
      "place": "Nuzbar Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/joltik.gif",
      "pokemon": "Joltik",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "32-33",
      "ev": "1 SPEED",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/joltik.gif",
      "pokemon": "Joltik",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Restricted Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/joltik.gif",
      "pokemon": "Joltik",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Room 3"
    }
  ],
  "Kecleon": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kecleon.gif",
      "pokemon": "Kecleon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 SP_DEF",
      "place": "Nuzbar Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kecleon.gif",
      "pokemon": "Kecleon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "40-44",
      "ev": "1 SP_DEF",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kecleon.gif",
      "pokemon": "Kecleon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_DEF",
      "place": "Goldburn City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kecleon.gif",
      "pokemon": "Kecleon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SP_DEF",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kecleon.gif",
      "pokemon": "Kecleon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SP_DEF",
      "place": "Goldburn City Shores"
    }
  ],
  "Zarude": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zarude.gif",
      "pokemon": "Zarude",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "32-33",
      "ev": "",
      "place": "Nuzbar Village"
    }
  ],
  "Zarude-Dada": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zarude-dada.gif",
      "pokemon": "Zarude-Dada",
      "rarity": "L",
      "time": "🌓",
      "method": "🍀",
      "level": "32-33",
      "ev": "",
      "place": "Nuzbar Village"
    }
  ],
  "Roggenrola": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/roggenrola.gif",
      "pokemon": "Roggenrola",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-35",
      "ev": "1 DEF",
      "place": "Boulder Cavern - B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/roggenrola.gif",
      "pokemon": "Roggenrola",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-35",
      "ev": "1 DEF",
      "place": "Boulder Cavern - B2F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/roggenrola.gif",
      "pokemon": "Roggenrola",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 DEF",
      "place": "Scorched Desert"
    }
  ],
  "Corsola-Galar": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola-galar.gif",
      "pokemon": "Corsola-Galar",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-35",
      "ev": "1 SP_DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola-galar.gif",
      "pokemon": "Corsola-Galar",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "40-42",
      "ev": "1 SP_DEF",
      "place": "Cresemun Beach"
    }
  ],
  "Klefki": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/klefki.gif",
      "pokemon": "Klefki",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "34-35",
      "ev": "1 DEF",
      "place": "Underground Cavern"
    }
  ],
  "Corsola": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola.gif",
      "pokemon": "Corsola",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "32-35",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Underground Cavern"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola.gif",
      "pokemon": "Corsola",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "38-42",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola.gif",
      "pokemon": "Corsola",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "40-44",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola.gif",
      "pokemon": "Corsola",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Ochra Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola.gif",
      "pokemon": "Corsola",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Cavity Cavern 2-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/corsola.gif",
      "pokemon": "Corsola",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "64-67",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Cavity Cavern 3-A"
    }
  ],
  "Minior": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minior.gif",
      "pokemon": "Minior",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "30-33",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minior.gif",
      "pokemon": "Minior",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "29-31",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 6 Highway Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minior.gif",
      "pokemon": "Minior",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "34-38",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Scorched Desert"
    }
  ],
  "Drilbur": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/drilbur.gif",
      "pokemon": "Drilbur",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "36-38",
      "ev": "1 ATK",
      "place": "Scorched Desert"
    }
  ],
  "Kingler": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kingler.gif",
      "pokemon": "Kingler",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "38-40",
      "ev": "2 ATK",
      "place": "Sunshire Town"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kingler.gif",
      "pokemon": "Kingler",
      "rarity": "UC",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "2 ATK",
      "place": "Ochra Cliffs"
    }
  ],
  "Dunsparce": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dunsparce.gif",
      "pokemon": "Dunsparce",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "38-42",
      "ev": "1 BASE_HP",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dunsparce.gif",
      "pokemon": "Dunsparce",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "1 BASE_HP",
      "place": "Inferno-Moonshire Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dunsparce.gif",
      "pokemon": "Dunsparce",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 BASE_HP",
      "place": "Dragon Tower Floor 6"
    }
  ],
  "Baltoy": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/baltoy.gif",
      "pokemon": "Baltoy",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "38-42",
      "ev": "1 SP_DEF",
      "place": "Cresemun Beach"
    }
  ],
  "Fomantis": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/fomantis.gif",
      "pokemon": "Fomantis",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "38-42",
      "ev": "1 ATK",
      "place": "Cresemun Beach"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/fomantis.gif",
      "pokemon": "Fomantis",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "1 ATK",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/fomantis.gif",
      "pokemon": "Fomantis",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "1 ATK",
      "place": "Ochra Park-B"
    }
  ],
  "Solosis": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/solosis.gif",
      "pokemon": "Solosis",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "40-42",
      "ev": "1 SP_ATK",
      "place": "Cresemun Beach"
    }
  ],
  "Dhelmise": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dhelmise.gif",
      "pokemon": "Dhelmise",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "40-42",
      "ev": "2 ATK",
      "place": "Cresemun Beach"
    }
  ],
  "Alomomola": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/alomomola.gif",
      "pokemon": "Alomomola",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "40-42",
      "ev": "2 BASE_HP",
      "place": "Cresemun Beach"
    }
  ],
  "Komala": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/komala.gif",
      "pokemon": "Komala",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "40-44",
      "ev": "2 ATK",
      "place": "Amberwick Pass"
    }
  ],
  "Bounsweet": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bounsweet.gif",
      "pokemon": "Bounsweet",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "40-44",
      "ev": "1 BASE_HP",
      "place": "Amberwick Pass"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bounsweet.gif",
      "pokemon": "Bounsweet",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "1 BASE_HP",
      "place": "Inferno-Moonshire Pass"
    }
  ],
  "Oricorio": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio.gif",
      "pokemon": "Oricorio",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "44-46",
      "ev": "2 SP_ATK",
      "place": "Mt. Inferno"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio.gif",
      "pokemon": "Oricorio",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "46-48",
      "ev": "2 SP_ATK",
      "place": "Mt. Inferno Peak"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio.gif",
      "pokemon": "Oricorio",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "2 SP_ATK",
      "place": "Goldburn City"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio.gif",
      "pokemon": "Oricorio",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "2 SP_ATK",
      "place": "Goldburn City Shores"
    }
  ],
  "Turtonator": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/turtonator.gif",
      "pokemon": "Turtonator",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "45-47",
      "ev": "2 DEF",
      "place": "Mt. Inferno"
    }
  ],
  "Litwick": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/litwick.gif",
      "pokemon": "Litwick",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "45-47",
      "ev": "1 SP_ATK",
      "place": "Mt. Inferno"
    }
  ],
  "Salazzle": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/salazzle.gif",
      "pokemon": "Salazzle",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "47-49",
      "ev": "2 SPEED",
      "place": "Mt. Inferno Peak"
    }
  ],
  "Jangmo-o": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/jangmoo.gif",
      "pokemon": "Jangmo-o",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "47-49",
      "ev": "1 DEF",
      "place": "Mt. Inferno Peak"
    }
  ],
  "Wimpod": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wimpod.gif",
      "pokemon": "Wimpod",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "38-40",
      "ev": "1 SPEED",
      "place": "Oozy Forest (Faunas)"
    }
  ],
  "Ledian": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ledian.gif",
      "pokemon": "Ledian",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "2 SP_DEF",
      "place": "Route 7-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ledian.gif",
      "pokemon": "Ledian",
      "rarity": "C",
      "time": "🌕",
      "method": "🍀",
      "level": "49-53",
      "ev": "2 SP_DEF",
      "place": "Drenched Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ledian.gif",
      "pokemon": "Ledian",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "2 SP_DEF",
      "place": "Route 7-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ledian.gif",
      "pokemon": "Ledian",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_DEF",
      "place": "Dragon Tower Floor 1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/ledian.gif",
      "pokemon": "Ledian",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_DEF",
      "place": "Dragon Tower Floor 3"
    }
  ],
  "Beedrill": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/beedrill.gif",
      "pokemon": "Beedrill",
      "rarity": "UC",
      "time": "🌑",
      "method": "🍀",
      "level": "49-53",
      "ev": "1 SP_DEF, 2 ATK",
      "place": "Route 7-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/beedrill.gif",
      "pokemon": "Beedrill",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "1 SP_DEF, 2 ATK",
      "place": "Route 12-A"
    }
  ],
  "Mothim": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mothim.gif",
      "pokemon": "Mothim",
      "rarity": "UC",
      "time": "🌕",
      "method": "🍀",
      "level": "49-53",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 7-B"
    }
  ],
  "Parasect": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/parasect.gif",
      "pokemon": "Parasect",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "49-53",
      "ev": "2 ATK, 1 DEF",
      "place": "Drenched Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/parasect.gif",
      "pokemon": "Parasect",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "2 ATK, 1 DEF",
      "place": "Route 7-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/parasect.gif",
      "pokemon": "Parasect",
      "rarity": "C",
      "time": "🌑",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 ATK, 1 DEF",
      "place": "Cavity Cavern 1-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/parasect.gif",
      "pokemon": "Parasect",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "64-67",
      "ev": "2 ATK, 1 DEF",
      "place": "Cavity Cavern 2-B"
    }
  ],
  "Morelull": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/morelull.gif",
      "pokemon": "Morelull",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "1 SP_DEF",
      "place": "Drenched Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/morelull.gif",
      "pokemon": "Morelull",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "1 SP_DEF",
      "place": "Route 7-C"
    }
  ],
  "Charjabug": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/charjabug.gif",
      "pokemon": "Charjabug",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "2 DEF",
      "place": "Drenched Forest"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/charjabug.gif",
      "pokemon": "Charjabug",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "49-53",
      "ev": "2 DEF",
      "place": "Route 7-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/charjabug.gif",
      "pokemon": "Charjabug",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 DEF",
      "place": "Route 8-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/charjabug.gif",
      "pokemon": "Charjabug",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 DEF",
      "place": "Route 8-B"
    }
  ],
  "Dewpider": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dewpider.gif",
      "pokemon": "Dewpider",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "51-53",
      "ev": "1 SP_DEF",
      "place": "Drenched Forest"
    }
  ],
  "Shuckle": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/shuckle.gif",
      "pokemon": "Shuckle",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "51-53",
      "ev": "1 SP_DEF, 1 DEF",
      "place": "Drenched Forest"
    }
  ],
  "Kangaskhan": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/kangaskhan.gif",
      "pokemon": "Kangaskhan",
      "rarity": "VR",
      "time": "🌕",
      "method": "🍀",
      "level": "51-53",
      "ev": "2 BASE_HP",
      "place": "Route 7-C"
    }
  ],
  "Primeape": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/primeape.gif",
      "pokemon": "Primeape",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 ATK",
      "place": "Route 8-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/primeape.gif",
      "pokemon": "Primeape",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 ATK",
      "place": "Route 8-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/primeape.gif",
      "pokemon": "Primeape",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "2 ATK",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/primeape.gif",
      "pokemon": "Primeape",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "2 ATK",
      "place": "Ochra Park-B"
    }
  ],
  "Oranguru": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oranguru.gif",
      "pokemon": "Oranguru",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 SP_DEF",
      "place": "Route 8-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oranguru.gif",
      "pokemon": "Oranguru",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "52-54",
      "ev": "2 SP_DEF",
      "place": "Route 8-B"
    }
  ],
  "Smoochum": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/smoochum.gif",
      "pokemon": "Smoochum",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 SP_ATK",
      "place": "Glacier Cave-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/smoochum.gif",
      "pokemon": "Smoochum",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 SP_ATK",
      "place": "Glacier Cave-D"
    }
  ],
  "Spheal": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spheal.gif",
      "pokemon": "Spheal",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 BASE_HP",
      "place": "Glacier Cave-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spheal.gif",
      "pokemon": "Spheal",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 BASE_HP",
      "place": "Glacier Cave-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/spheal.gif",
      "pokemon": "Spheal",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "53-56",
      "ev": "1 BASE_HP",
      "place": "Glacier Cave-D"
    }
  ],
  "Wishiwashi": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wishiwashi.gif",
      "pokemon": "Wishiwashi",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "60-62",
      "ev": "1 BASE_HP",
      "place": "Ochra Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wishiwashi.gif",
      "pokemon": "Wishiwashi",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "60-62",
      "ev": "1 BASE_HP",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/wishiwashi.gif",
      "pokemon": "Wishiwashi",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "69-70",
      "ev": "1 BASE_HP",
      "place": "Goldburn City Shores"
    }
  ],
  "Sentret": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sentret.gif",
      "pokemon": "Sentret",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "1 ATK",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sentret.gif",
      "pokemon": "Sentret",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-62",
      "ev": "1 ATK",
      "place": "Ochra Park-B"
    }
  ],
  "Passimian": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/passimian.gif",
      "pokemon": "Passimian",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "60-62",
      "ev": "2 ATK",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/passimian.gif",
      "pokemon": "Passimian",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "60-62",
      "ev": "2 ATK",
      "place": "Ochra Park-B"
    }
  ],
  "Krabby": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/krabby.gif",
      "pokemon": "Krabby",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 ATK",
      "place": "Ochra Park-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/krabby.gif",
      "pokemon": "Krabby",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 ATK",
      "place": "Ochra Park-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/krabby.gif",
      "pokemon": "Krabby",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 ATK",
      "place": "Route 11-A"
    }
  ],
  "Pyukumuku": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pyukumuku.gif",
      "pokemon": "Pyukumuku",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "60-62",
      "ev": "2 SP_DEF",
      "place": "Ochra Park-B"
    }
  ],
  "Azurill": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/azurill.gif",
      "pokemon": "Azurill",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "58-62",
      "ev": "1 BASE_HP",
      "place": "Ochra Park-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/azurill.gif",
      "pokemon": "Azurill",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "1 BASE_HP",
      "place": "Route 9-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/azurill.gif",
      "pokemon": "Azurill",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "60-64",
      "ev": "1 BASE_HP",
      "place": "Route 9-B"
    }
  ],
  "Gumshoos": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gumshoos.gif",
      "pokemon": "Gumshoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "2 ATK",
      "place": "Route 9-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gumshoos.gif",
      "pokemon": "Gumshoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "2 ATK",
      "place": "Route 9-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gumshoos.gif",
      "pokemon": "Gumshoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gumshoos.gif",
      "pokemon": "Gumshoos",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 4"
    }
  ],
  "Arbok": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/arbok.gif",
      "pokemon": "Arbok",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "2 ATK",
      "place": "Route 9-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/arbok.gif",
      "pokemon": "Arbok",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "2 ATK",
      "place": "Route 9-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/arbok.gif",
      "pokemon": "Arbok",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Champions Road #6"
    }
  ],
  "Igglybuff": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/igglybuff.gif",
      "pokemon": "Igglybuff",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "1 BASE_HP",
      "place": "Route 9-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/igglybuff.gif",
      "pokemon": "Igglybuff",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "1 BASE_HP",
      "place": "Route 9-B"
    }
  ],
  "Meowth": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meowth.gif",
      "pokemon": "Meowth",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "1 SPEED",
      "place": "Route 9-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/meowth.gif",
      "pokemon": "Meowth",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "60-64",
      "ev": "1 SPEED",
      "place": "Route 9-B"
    }
  ],
  "Sigilyph": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sigilyph.gif",
      "pokemon": "Sigilyph",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "62-64",
      "ev": "2 SP_ATK",
      "place": "Route 9-B"
    }
  ],
  "Skiploom": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/skiploom.gif",
      "pokemon": "Skiploom",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "2 SPEED",
      "place": "Matti Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/skiploom.gif",
      "pokemon": "Skiploom",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "62-65",
      "ev": "2 SPEED",
      "place": "Matti Cliffs"
    }
  ],
  "Tauros": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/tauros.gif",
      "pokemon": "Tauros",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "64-65",
      "ev": "1 ATK, 1 SPEED",
      "place": "Matti Village"
    }
  ],
  "Stufful": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stufful.gif",
      "pokemon": "Stufful",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "64-65",
      "ev": "1 ATK",
      "place": "Matti Cliffs"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stufful.gif",
      "pokemon": "Stufful",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "67-68",
      "ev": "1 ATK",
      "place": "Route 10"
    }
  ],
  "Castform": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/castform.gif",
      "pokemon": "Castform",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 BASE_HP",
      "place": "Route 11-A"
    }
  ],
  "Quagsire": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/quagsire.gif",
      "pokemon": "Quagsire",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "2 BASE_HP",
      "place": "Route 11-A"
    }
  ],
  "Plusle": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/plusle.gif",
      "pokemon": "Plusle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Route 11-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/plusle.gif",
      "pokemon": "Plusle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Route 11-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/plusle.gif",
      "pokemon": "Plusle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/plusle.gif",
      "pokemon": "Plusle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Stairs B1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/plusle.gif",
      "pokemon": "Plusle",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Restricted Area"
    }
  ],
  "Minun": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minun.gif",
      "pokemon": "Minun",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Route 11-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minun.gif",
      "pokemon": "Minun",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 SPEED",
      "place": "Route 11-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minun.gif",
      "pokemon": "Minun",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Stairs 1F"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minun.gif",
      "pokemon": "Minun",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Restricted Area"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/minun.gif",
      "pokemon": "Minun",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "32-35",
      "ev": "1 SPEED",
      "place": "Old Power Plant - Generator Room"
    }
  ],
  "Gulpin": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gulpin.gif",
      "pokemon": "Gulpin",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 BASE_HP",
      "place": "Route 11-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/gulpin.gif",
      "pokemon": "Gulpin",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "68-70",
      "ev": "1 BASE_HP",
      "place": "Route 11-C"
    }
  ],
  "Sudowoodo": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sudowoodo.gif",
      "pokemon": "Sudowoodo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "2 DEF",
      "place": "Route 12-A"
    }
  ],
  "Rufflet": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rufflet.gif",
      "pokemon": "Rufflet",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "59-61",
      "ev": "1 ATK",
      "place": "Route 12-A"
    }
  ],
  "Trumbeak": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/trumbeak.gif",
      "pokemon": "Trumbeak",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "58-61",
      "ev": "2 ATK",
      "place": "Route 12-B"
    }
  ],
  "MimeJr.": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mimejr.gif",
      "pokemon": "MimeJr.",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "59-61",
      "ev": "1 SP_DEF",
      "place": "Route 12-B"
    }
  ],
  "Zigzagoon": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zigzagoon.gif",
      "pokemon": "Zigzagoon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zigzagoon.gif",
      "pokemon": "Zigzagoon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Dragon Tower Floor 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/zigzagoon.gif",
      "pokemon": "Zigzagoon",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Dragon Tower Floor 5"
    }
  ],
  "Oricorio-Sensu": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio-sensu.gif",
      "pokemon": "Oricorio-Sensu",
      "rarity": "R",
      "time": "🌕",
      "method": "🍀",
      "level": "72-75",
      "ev": "",
      "place": "Jannat Village"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricoriosensu.gif",
      "pokemon": "Oricorio-Sensu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "",
      "place": "Dragon Tower Floor 4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/oricorio-sensu.gif",
      "pokemon": "Oricorio-Sensu",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "",
      "place": "Dragon Tower Floor 7"
    }
  ],
  "Bewear": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/bewear.gif",
      "pokemon": "Bewear",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "2 ATK",
      "place": "Jannat Village"
    }
  ],
  "Litten": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/litten.gif",
      "pokemon": "Litten",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 SPEED",
      "place": "Jannat Village"
    }
  ],
  "Rowlet": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rowlet.gif",
      "pokemon": "Rowlet",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 BASE_HP",
      "place": "Jannat Village"
    }
  ],
  "Popplio": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/popplio.gif",
      "pokemon": "Popplio",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "74-75",
      "ev": "1 SP_ATK",
      "place": "Jannat Village"
    }
  ],
  "Drampa": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/drampa.gif",
      "pokemon": "Drampa",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "69-70",
      "ev": "2 SP_ATK",
      "place": "Goldburn City Shores"
    }
  ],
  "Druddigon": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/druddigon.gif",
      "pokemon": "Druddigon",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "69-70",
      "ev": "2 ATK",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/druddigon.gif",
      "pokemon": "Druddigon",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 7"
    }
  ],
  "Durant": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/durant.gif",
      "pokemon": "Durant",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "69-70",
      "ev": "2 DEF",
      "place": "Goldburn City Shores"
    }
  ],
  "Skrelp": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/skrelp.gif",
      "pokemon": "Skrelp",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "69-70",
      "ev": "1 SP_DEF",
      "place": "Goldburn City Shores"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/skrelp.gif",
      "pokemon": "Skrelp",
      "rarity": "UR",
      "time": "🌓",
      "method": "🎣",
      "level": "66-67",
      "ev": "1 SP_DEF",
      "place": "Cavity Cavern 2-A"
    }
  ],
  "Abomasnow": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/abomasnow.gif",
      "pokemon": "Abomasnow",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 13-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/abomasnow.gif",
      "pokemon": "Abomasnow",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "1 ATK, 1 SP_ATK",
      "place": "Route 13-C"
    }
  ],
  "Sealeo": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 BASE_HP",
      "place": "Route 13-B"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 BASE_HP",
      "place": "Route 13-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 BASE_HP",
      "place": "Route 13-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Champions Villa #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Champions Road #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Champions Road #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Champions Road #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/sealeo.gif",
      "pokemon": "Sealeo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 BASE_HP",
      "place": "Champions Road #5"
    }
  ],
  "Klink": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/klink.gif",
      "pokemon": "Klink",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "1 DEF",
      "place": "Route 13-B"
    }
  ],
  "Cryogonal": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cryogonal.gif",
      "pokemon": "Cryogonal",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "70-72",
      "ev": "2 SP_DEF",
      "place": "Route 13-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cryogonal.gif",
      "pokemon": "Cryogonal",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_DEF",
      "place": "Champions Villa #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cryogonal.gif",
      "pokemon": "Cryogonal",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_DEF",
      "place": "Champions Villa #2"
    }
  ],
  "Delibird": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/delibird.gif",
      "pokemon": "Delibird",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Champions Road #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/delibird.gif",
      "pokemon": "Delibird",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Champions Road #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/delibird.gif",
      "pokemon": "Delibird",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Champions Road #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/delibird.gif",
      "pokemon": "Delibird",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Champions Road #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/delibird.gif",
      "pokemon": "Delibird",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 SPEED",
      "place": "Champions Road #5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/delibird.gif",
      "pokemon": "Delibird",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "58-60",
      "ev": "1 SPEED",
      "place": "Gym 7"
    }
  ],
  "Stantler": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stantler.gif",
      "pokemon": "Stantler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #1"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stantler.gif",
      "pokemon": "Stantler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #2"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stantler.gif",
      "pokemon": "Stantler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stantler.gif",
      "pokemon": "Stantler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/stantler.gif",
      "pokemon": "Stantler",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #5"
    }
  ],
  "Cufant": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cufant.gif",
      "pokemon": "Cufant",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 ATK",
      "place": "Champions Road #2"
    }
  ],
  "Cubchoo": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cubchoo.gif",
      "pokemon": "Cubchoo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #3"
    }
  ],
  "Golett": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golett.gif",
      "pokemon": "Golett",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 ATK",
      "place": "Champions Road #3"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/golett.gif",
      "pokemon": "Golett",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "1 ATK",
      "place": "Champions Road #6"
    }
  ],
  "Lairon": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lairon.gif",
      "pokemon": "Lairon",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "2 DEF",
      "place": "Champions Road #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/lairon.gif",
      "pokemon": "Lairon",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "2 DEF",
      "place": "Champions Road #5"
    }
  ],
  "Pawniard": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pawniard.gif",
      "pokemon": "Pawniard",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 ATK",
      "place": "Champions Road #4"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/pawniard.gif",
      "pokemon": "Pawniard",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 ATK",
      "place": "Champions Road #5"
    }
  ],
  "Foongus": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/foongus.gif",
      "pokemon": "Foongus",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 BASE_HP",
      "place": "Champions Road #6"
    }
  ],
  "Mienfoo": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/mienfoo.gif",
      "pokemon": "Mienfoo",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 ATK",
      "place": "Champions Road #7"
    }
  ],
  "Rotom-Wash": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/rotom-wash.gif",
      "pokemon": "Rotom-Wash",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 SP_ATK, 1 SPEED",
      "place": "Champions Road #7"
    }
  ],
  "Abra": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/abra.gif",
      "pokemon": "Abra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 SP_ATK",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/abra.gif",
      "pokemon": "Abra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 SP_ATK",
      "place": "Cavity Cavern 2-C"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/abra.gif",
      "pokemon": "Abra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 SP_ATK",
      "place": "Cavity Cavern 2-D"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/abra.gif",
      "pokemon": "Abra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 SP_ATK",
      "place": "Cavity Cavern 1-B"
    }
  ],
  "Cleffa": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cleffa.gif",
      "pokemon": "Cleffa",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 SP_DEF",
      "place": "Cavity Cavern 3-A"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/cleffa.gif",
      "pokemon": "Cleffa",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "66-67",
      "ev": "1 SP_DEF",
      "place": "Cavity Cavern 1-B"
    }
  ],
  "Raticate": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/raticate.gif",
      "pokemon": "Raticate",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Dragon Tower Floor 2"
    }
  ],
  "Furret": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/furret.gif",
      "pokemon": "Furret",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Dragon Tower Floor 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/furret.gif",
      "pokemon": "Furret",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SPEED",
      "place": "Dragon Tower Floor 7"
    }
  ],
  "Banette": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/banette.gif",
      "pokemon": "Banette",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/banette.gif",
      "pokemon": "Banette",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 ATK",
      "place": "Dragon Tower Floor 7"
    }
  ],
  "Flaaffy": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/flaaffy.gif",
      "pokemon": "Flaaffy",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_ATK",
      "place": "Dragon Tower Floor 5"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/flaaffy.gif",
      "pokemon": "Flaaffy",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_ATK",
      "place": "Dragon Tower Floor 6"
    },
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/flaaffy.gif",
      "pokemon": "Flaaffy",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "72-75",
      "ev": "2 SP_ATK",
      "place": "Dragon Tower Floor 7"
    }
  ],
  "Falinks": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/falinks.gif",
      "pokemon": "Falinks",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75 ",
      "ev": "1 SP_DEF, 2 ATK",
      "place": "Dragon Tower Floor 6"
    }
  ],
  "Dreepy": [
    {
      "sprite": "https://play.pokemonshowdown.com/sprites/ani/dreepy.gif",
      "pokemon": "Dreepy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "74-75",
      "ev": "1 SPEED",
      "place": "Dragon Tower Floor 7"
    }
  ]
}

export const SPECIAL_SPAWNS_BY_POKEMON: {[key: string]: SpecialSpawn[]} = {
  "Nidoran-F": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/nidoran-f.gif",
      "pokemon": "Nidoran-F",
      "rarity": "UC",
      "method": "Swarm"
    }
  ],
  "Nidoran-M": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/nidoran.gif",
      "pokemon": "Nidoran-M",
      "rarity": "UC",
      "method": "Swarm"
    }
  ],
  "Litleo": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/litleo.gif",
      "pokemon": "Litleo",
      "rarity": "UC",
      "method": "Swarm"
    }
  ],
  "Pikipek": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/pikipek.gif",
      "pokemon": "Pikipek",
      "rarity": "UC",
      "method": "Swarm"
    }
  ],
  "Yamper": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/yamper.gif",
      "pokemon": "Yamper",
      "rarity": "UC",
      "method": "Swarm"
    }
  ],
  "Snubbull": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/snubbull.gif",
      "pokemon": "Snubbull",
      "rarity": "UC",
      "method": "Swarm"
    }
  ],
  "Flabébé-Orange": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/flabebe-orange.gif",
      "pokemon": "Flabébé-Orange",
      "rarity": "R",
      "method": "Swarm"
    }
  ],
  "Bounsweet": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/bounsweet.gif",
      "pokemon": "Bounsweet",
      "rarity": "R",
      "method": "Swarm"
    }
  ],
  "Comfey": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/comfey.gif",
      "pokemon": "Comfey",
      "rarity": "R",
      "method": "Swarm"
    }
  ],
  "Cottonee": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/cottonee.gif",
      "pokemon": "Cottonee",
      "rarity": "R",
      "method": "Swarm"
    }
  ],
  "Lillipup": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/lillipup.gif",
      "pokemon": "Lillipup",
      "rarity": "R",
      "method": "Swarm"
    }
  ],
  "Teddiursa": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/teddiursa.gif",
      "pokemon": "Teddiursa",
      "rarity": "R",
      "method": "Swarm"
    }
  ],
  "Sandile": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/sandile.gif",
      "pokemon": "Sandile",
      "rarity": "VR",
      "method": "Swarm"
    }
  ],
  "Tangela": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/tangela.gif",
      "pokemon": "Tangela",
      "rarity": "VR",
      "method": "Swarm"
    }
  ],
  "Slowpoke": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/slowpoke.gif",
      "pokemon": "Slowpoke",
      "rarity": "VR",
      "method": "Swarm"
    }
  ],
  "Swinub": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/swinub.gif",
      "pokemon": "Swinub",
      "rarity": "VR",
      "method": "Swarm"
    }
  ],
  "Abra": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/abra.gif",
      "pokemon": "Abra",
      "rarity": "VR",
      "method": "Swarm"
    }
  ],
  "Indeedee": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/indeedee.gif",
      "pokemon": "Indeedee",
      "rarity": "VR",
      "method": "Swarm"
    }
  ],
  "Farfetch'd": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/farfetchd.gif",
      "pokemon": "Farfetch'd",
      "rarity": "VR",
      "method": "Swarm"
    }
  ],
  "Sandshrew-Alola": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/sandshrew-alola.gif",
      "pokemon": "Sandshrew-Alola",
      "rarity": "VR",
      "method": "Swarm"
    }
  ],
  "Sneasel": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/sneasel.gif",
      "pokemon": "Sneasel",
      "rarity": "UR",
      "method": "Swarm"
    }
  ],
  "Toxel": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/toxel.gif",
      "pokemon": "Toxel",
      "rarity": "UR",
      "method": "Swarm"
    }
  ],
  "Vulpix-Alola": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/vulpix-alola.gif",
      "pokemon": "Vulpix-Alola",
      "rarity": "UR",
      "method": "Swarm"
    }
  ],
  "Scyther": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/scyther.gif",
      "pokemon": "Scyther",
      "rarity": "UR",
      "method": "Swarm"
    }
  ],
  "Noibat": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/noibat.gif",
      "pokemon": "Noibat",
      "rarity": "UR",
      "method": "Swarm"
    }
  ],
  "Farfetch'd-Galar": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/farfetchd-galar.gif",
      "pokemon": "Farfetch'd-Galar",
      "rarity": "UR",
      "method": "Swarm"
    }
  ],
  "Zigzagoon-Galar": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/zigzagoon-galar.gif",
      "pokemon": "Zigzagoon-Galar",
      "rarity": "UR",
      "method": "Swarm"
    }
  ],
  "Dratini": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/dratini.gif",
      "pokemon": "Dratini",
      "rarity": "UR",
      "method": "Fishing during the Fishing Contest or in Fisherman's box"
    }
  ],
  "Larvesta": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/larvesta.gif",
      "pokemon": "Larvesta",
      "rarity": "UR",
      "method": "Walking during the Bug Catching Contest or in Bug box"
    }
  ],
  "Chewtle": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/chewtle.gif",
      "pokemon": "Chewtle",
      "rarity": "--",
      "method": "Box Pokemon (In Fisherman's Box)"
    }
  ],
  "Tympole": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/tympole.gif",
      "pokemon": "Tympole",
      "rarity": "--",
      "method": "Box Pokemon (In Fisherman's Box)"
    }
  ],
  "Venipede": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/venipede.gif",
      "pokemon": "Venipede",
      "rarity": "--",
      "method": "Box Pokemon (In Bug box)"
    }
  ],
  "Blipbug": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/blipbug.gif",
      "pokemon": "Blipbug",
      "rarity": "--",
      "method": "Box Pokemon (In Bug box)"
    }
  ],
  "Bulbasaur": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/bulbasaur.gif",
      "pokemon": "Bulbasaur",
      "rarity": "--",
      "method": "Box Pokemon (Dynamax Prize Store)"
    }
  ],
  "Charmander": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/charmander.gif",
      "pokemon": "Charmander",
      "rarity": "--",
      "method": "Box Pokemon (Dynamax Prize Store)"
    }
  ],
  "Squirtle": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/squirtle.gif",
      "pokemon": "Squirtle",
      "rarity": "--",
      "method": "Box Pokemon (Dynamax Prize Store)"
    }
  ],
  "Skarmory": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/skarmory.gif",
      "pokemon": "Skarmory",
      "rarity": "--",
      "method": "Box Pokemon (Dynamax Prize Shore)"
    }
  ],
  "Hattena": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/hatenna.gif",
      "pokemon": "Hattena",
      "rarity": "--",
      "method": "Box Pokemon (Dynamax Prize Store)"
    }
  ],
  "Vullaby": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/vullaby.gif",
      "pokemon": "Vullaby",
      "rarity": "--",
      "method": "Trader Pokemon (Monthly Trader)"
    }
  ],
  "Growlithe": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/growlithe.gif",
      "pokemon": "Growlithe",
      "rarity": "--",
      "method": "Trader Pokemon (Monthly Trader)"
    }
  ],
  "Timburr": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/timburr.gif",
      "pokemon": "Timburr",
      "rarity": "--",
      "method": "Trader Pokemon (Monthly Trader)"
    }
  ],
  "Corphish": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/corphish.gif",
      "pokemon": "Corphish",
      "rarity": "--",
      "method": "Trader Pokemon (Monthly Trader)"
    }
  ],
  "Rockruff": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/rockruff.gif",
      "pokemon": "Rockruff",
      "rarity": "--",
      "method": "One off free Pokemon (Talk to Cynthia in Eterna Pass, must have free space in party)"
    }
  ],
  "Uxie": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/uxie.gif",
      "pokemon": "Uxie",
      "rarity": "--",
      "method": "Box Pokemon (Chance from Legendary Caverns)"
    }
  ],
  "Azelf": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/azelf.gif",
      "pokemon": "Azelf",
      "rarity": "--",
      "method": "Box Pokemon (Chance from Legendary Caverns)"
    }
  ],
  "Mesprit": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/mesprit.gif",
      "pokemon": "Mesprit",
      "rarity": "--",
      "method": "Box Pokemon (Chance from Legendary Caverns)"
    }
  ],
  "Porygon": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/porygon.gif",
      "pokemon": "Porygon",
      "rarity": "--",
      "method": "Box Pokemon (Battle Tokens Shop)"
    }
  ],
  "Togepi": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/togepi.gif",
      "pokemon": "Togepi",
      "rarity": "--",
      "method": "Box Pokemon (Battle Tokens Shop)"
    }
  ],
  "Axew": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/axew.gif",
      "pokemon": "Axew",
      "rarity": "--",
      "method": "Box Pokemon (Battle Tokens Shop)"
    }
  ],
  "Heatran": [
    {
      "sprite": "http://play.pokemonshowdown.com/sprites/ani/heatran.gif",
      "pokemon": "Heatran",
      "rarity": "--",
      "method": "Roaming Pokemon"
    }
  ]
}

export const HALLOWEEN_PLACES = [
  "Route 1 (Parallel)",
  "Route 1 North (Parallel)",
  "Rockshore City (Parallel)",
  "Oozy Forest (Parallel)",
  "Route 2 (Parallel)",
  "Boulder Cavern - 1F (Parallel)",
  "Patthar Village (Parallel)",
  "Boulder Cavern : Route 3 (Parallel)",
  "Route 3 Cliffs (Parallel)",
  "Power Lane (Parallel)",
  "Route 3 (Parallel)",
  "Route 4 (Parallel)",
  "Route 4 Shores (Parallel)",
  "Boulder Cavern - B1F (Parallel)",
  "Underground Cavern (Parallel)",
  "Old Power Plant - Room 1 (Parallel)",
  "Old Power Plant - Stairs 1F (Parallel)",
  "Old Power Plant - Stairs B1F (Parallel)",
  "Old Power Plant - Restricted Area (Parallel)",
  "Lost World - 1",
  "Lost World - 2",
  "Lost World - 3",
  "Twisted Forest"
]

export const HALLOWEEN_POKEMON_NAMES = [
  "Gastly",
  "Shuppet",
  "Purrloin",
  "Houndour",
  "Shuppet-H2",
  "Poochyena",
  "Duskull",
  "Phantump",
  "Murkrow",
  "Abra",
  "Alakazam-H",
  "Espurr",
  "Yamask-Galar",
  "Cubchoo",
  "Beartic-H",
  "Kangaskhan",
  "Kangaskhan-H",
  "Golett",
  "Pancham",
  "Stunky",
  "Pikipek",
  "Toucannon-H",
  "Grimer-Alola",
  "Absol",
  "Absol-H2",
  "Pumpkaboo",
  "Slowpoke",
  "Slowpoke-H",
  "Misdreavus",
  "Sinistea",
  "Sinistea-Antique",
  "Cubone",
  "Cubone-H",
  "Inkay",
  "Joltik",
  "Pawniard",
  "Elekid",
  "Electabuzz-H",
  "Rotom-Heat",
  "Rotom-Fan",
  "Rotom-Mow",
  "Rotom",
  "Impidimp",
  "Gible",
  "Garchomp-H",
  "Gengar-H2",
  "Blacephalon",
  "Suicune-H2",
  "Skorupi",
  "Dreepy",
  "Dragapult-H",
  "Raikou-H2",
  "Poliwag",
  "Goldeen",
  "Magikarp",
  "Magikarp-H2",
  "Lapras",
  "Shellos",
  "Wailmer",
  "Squirtle-H",
  "Conkeldurr-H",
  "Shellder-H",
  "Spiritomb",
  "Hatenna-H",
  "Bulbasaur-H",
  "Mawile-H",
  "Mew-H",
  "Eevee-H",
  "Keldeo-H2",
  "Keldeo-Resolute-H2",
  "Entei-H2",
  "Charmander-H",
  "Scyther-H2",
  "Bagon-H"
]

export const HALLOWEEN_BY_PLACE: {[key: string]: NormalSpawn[]} = {
  "Route 1 (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/purrloin.png",
      "pokemon": "Purrloin",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 (Parallel)"
    }
  ],
  "Route 1 North (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 North (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 North (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/purrloin.png",
      "pokemon": "Purrloin",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 North (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 North (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 North (Parallel)"
    }
  ],
  "Rockshore City (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "2-4",
      "place": "Rockshore City (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-4",
      "place": "Rockshore City (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "2-4",
      "place": "Rockshore City (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "2-4",
      "place": "Rockshore City (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "2-4",
      "place": "Rockshore City (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/duskull.png",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "2-4",
      "place": "Rockshore City (Parallel)"
    }
  ],
  "Oozy Forest (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/phantump.png",
      "pokemon": "Phantump",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/murkrow.png",
      "pokemon": "Murkrow",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/abra.png",
      "pokemon": "Abra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/alakazamh.png",
      "pokemon": "Alakazam-H",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    }
  ],
  "Route 2 (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "place": "Route 2 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "place": "Route 2 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "place": "Route 2 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "place": "Route 2 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "place": "Route 2 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/espurr.png",
      "pokemon": "Espurr",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "place": "Route 2 (Parallel)"
    }
  ],
  "Boulder Cavern - 1F (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "4-6",
      "place": "Boulder Cavern - 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-6",
      "place": "Boulder Cavern - 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "4-6",
      "place": "Boulder Cavern - 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "4-6",
      "place": "Boulder Cavern - 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "4-6",
      "place": "Boulder Cavern - 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/yamaskgalar.png",
      "pokemon": "Yamask-Galar",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-6",
      "place": "Boulder Cavern - 1F (Parallel)"
    }
  ],
  "Patthar Village (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Patthar Village (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Patthar Village (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Patthar Village (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Patthar Village (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Patthar Village (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/cubchoo.png",
      "pokemon": "Cubchoo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Patthar Village (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/beartich.png",
      "pokemon": "Beartic-H",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Patthar Village (Parallel)"
    }
  ],
  "Boulder Cavern : Route 3 (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/kangaskhan.png",
      "pokemon": "Kangaskhan",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/kangaskhanh.png",
      "pokemon": "Kangaskhan-H",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/golett.png",
      "pokemon": "Golett",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    }
  ],
  "Route 3 Cliffs (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Route 3 Cliffs (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Route 3 Cliffs (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Route 3 Cliffs (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Route 3 Cliffs (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Route 3 Cliffs (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/pancham.png",
      "pokemon": "Pancham",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Route 3 Cliffs (Parallel)"
    }
  ],
  "Power Lane (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Power Lane (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Power Lane (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Power Lane (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/stunky.png",
      "pokemon": "Stunky",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Power Lane (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Power Lane (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/pikipek.png",
      "pokemon": "Pikipek",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Power Lane (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/toucannonh.png",
      "pokemon": "Toucannon-H",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Power Lane (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/grimeralola.png",
      "pokemon": "Grimer-Alola",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Power Lane (Parallel)"
    }
  ],
  "Route 3 (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/absol.png",
      "pokemon": "Absol",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/absolh2.png",
      "pokemon": "Absol-H2",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Route 3 (Parallel)"
    }
  ],
  "Route 4 (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/pumpkaboo.png",
      "pokemon": "Pumpkaboo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/murkrow.png",
      "pokemon": "Murkrow",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/slowpoke.png",
      "pokemon": "Slowpoke",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/slowpokeh.png",
      "pokemon": "Slowpoke-H",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    }
  ],
  "Route 4 Shores (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "10-14",
      "place": "Route 4 Shores (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "10-14",
      "place": "Route 4 Shores (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/misdreavus.png",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "10-14",
      "place": "Route 4 Shores (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "10-14",
      "place": "Route 4 Shores (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "10-14",
      "place": "Route 4 Shores (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/sinistea.png",
      "pokemon": "Sinistea",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "10-14",
      "place": "Route 4 Shores (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/sinisteaantique.png",
      "pokemon": "Sinistea-Antique",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "10-14",
      "place": "Route 4 Shores (Parallel)"
    }
  ],
  "Boulder Cavern - B1F (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/cubone.png",
      "pokemon": "Cubone",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/cuboneh.png",
      "pokemon": "Cubone-H",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/inkay.png",
      "pokemon": "Inkay",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    }
  ],
  "Underground Cavern (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Underground Cavern (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Underground Cavern (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Underground Cavern (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Underground Cavern (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Underground Cavern (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/joltik.png",
      "pokemon": "Joltik",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Underground Cavern (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/pawniard.png",
      "pokemon": "Pawniard",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Underground Cavern (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/elekid.png",
      "pokemon": "Elekid",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Underground Cavern (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/electabuzzh.png",
      "pokemon": "Electabuzz-H",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Underground Cavern (Parallel)"
    }
  ],
  "Old Power Plant - Room 1 (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Old Power Plant - Room 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Old Power Plant - Room 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Old Power Plant - Room 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Old Power Plant - Room 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/phantump.png",
      "pokemon": "Phantump",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Old Power Plant - Room 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/rotomheat.png",
      "pokemon": "Rotom-Heat",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Old Power Plant - Room 1 (Parallel)"
    }
  ],
  "Old Power Plant - Stairs 1F (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "place": "Old Power Plant - Stairs 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "place": "Old Power Plant - Stairs 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "place": "Old Power Plant - Stairs 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "place": "Old Power Plant - Stairs 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/pumpkaboo.png",
      "pokemon": "Pumpkaboo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "place": "Old Power Plant - Stairs 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/rotomfan.png",
      "pokemon": "Rotom-Fan",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "place": "Old Power Plant - Stairs 1F (Parallel)"
    }
  ],
  "Old Power Plant - Stairs B1F (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-19",
      "place": "Old Power Plant - Stairs B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-19",
      "place": "Old Power Plant - Stairs B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-19",
      "place": "Old Power Plant - Stairs B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/phantump.png",
      "pokemon": "Phantump",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-19",
      "place": "Old Power Plant - Stairs B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-19",
      "place": "Old Power Plant - Stairs B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/rotommow.png",
      "pokemon": "Rotom-Mow",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Old Power Plant - Stairs B1F (Parallel)"
    }
  ],
  "Old Power Plant - Restricted Area (Parallel)": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "17-20",
      "place": "Old Power Plant - Restricted Area (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "17-20",
      "place": "Old Power Plant - Restricted Area (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "17-20",
      "place": "Old Power Plant - Restricted Area (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "17-20",
      "place": "Old Power Plant - Restricted Area (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/pumpkaboo.png",
      "pokemon": "Pumpkaboo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "17-20",
      "place": "Old Power Plant - Restricted Area (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/rotom.png",
      "pokemon": "Rotom",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "17-20",
      "place": "Old Power Plant - Restricted Area (Parallel)"
    }
  ],
  "Lost World - 1": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "place": "Lost World - 1"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "place": "Lost World - 1"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "place": "Lost World - 1"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/absol.png",
      "pokemon": "Absol",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "place": "Lost World - 1"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/absolh2.png",
      "pokemon": "Absol-H2",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "place": "Lost World - 1"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/murkrow.png",
      "pokemon": "Murkrow",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "place": "Lost World - 1"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/impidimp.png",
      "pokemon": "Impidimp",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "place": "Lost World - 1"
    }
  ],
  "Lost World - 2": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/absol.png",
      "pokemon": "Absol",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/absolh2.png",
      "pokemon": "Absol-H2",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/murkrow.png",
      "pokemon": "Murkrow",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gible.png",
      "pokemon": "Gible",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/garchomph.png",
      "pokemon": "Garchomp-H",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    }
  ],
  "Lost World - 3": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gengarh2.png",
      "pokemon": "Gengar-H2",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/murkrow.png",
      "pokemon": "Murkrow",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/blacephalon.png",
      "pokemon": "Blacephalon",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/suicuneh2.png",
      "pokemon": "Suicune-H2",
      "rarity": "L",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    }
  ],
  "Twisted Forest": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/skorupi.png",
      "pokemon": "Skorupi",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/dreepy.png",
      "pokemon": "Dreepy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/dragapulth.png",
      "pokemon": "Dragapult-H",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/raikouh2.png",
      "pokemon": "Raikou-H2",
      "rarity": "L",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poliwag.png",
      "pokemon": "Poliwag",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/goldeen.png",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/magikarp.png",
      "pokemon": "Magikarp",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/magikarph2.png",
      "pokemon": "Magikarp-H2",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/lapras.png",
      "pokemon": "Lapras",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poliwag.png",
      "pokemon": "Poliwag",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/goldeen.png",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shellos.png",
      "pokemon": "Shellos",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/lapras.png",
      "pokemon": "Lapras",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/wailmer.png",
      "pokemon": "Wailmer",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/squirtleh.png",
      "pokemon": "Squirtle-H",
      "rarity": "UR",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ]
}

export const HALLOWEEN_BY_POKEMON: {[key: string]: NormalSpawn[]} = {
  "Gastly": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 North (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "2-4",
      "place": "Rockshore City (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "place": "Route 2 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "4-6",
      "place": "Boulder Cavern - 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Patthar Village (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Route 3 Cliffs (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Power Lane (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "10-14",
      "place": "Route 4 Shores (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Underground Cavern (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Old Power Plant - Room 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "place": "Old Power Plant - Stairs 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-19",
      "place": "Old Power Plant - Stairs B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "17-20",
      "place": "Old Power Plant - Restricted Area (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "place": "Lost World - 1"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gastly.png",
      "pokemon": "Gastly",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Shuppet": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 North (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "2-4",
      "place": "Rockshore City (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "place": "Route 2 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-6",
      "place": "Boulder Cavern - 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Patthar Village (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Route 3 Cliffs (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Power Lane (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "10-14",
      "place": "Route 4 Shores (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Underground Cavern (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Old Power Plant - Room 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "place": "Old Power Plant - Stairs 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "16-19",
      "place": "Old Power Plant - Stairs B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "17-20",
      "place": "Old Power Plant - Restricted Area (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "place": "Lost World - 1"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppet.png",
      "pokemon": "Shuppet",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Purrloin": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/purrloin.png",
      "pokemon": "Purrloin",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/purrloin.png",
      "pokemon": "Purrloin",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 North (Parallel)"
    }
  ],
  "Houndour": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 North (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "2-4",
      "place": "Rockshore City (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "place": "Route 2 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "4-6",
      "place": "Boulder Cavern - 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Patthar Village (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Route 3 Cliffs (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "10-14",
      "place": "Route 4 Shores (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Underground Cavern (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/houndour.png",
      "pokemon": "Houndour",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Shuppet-H2": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Route 1 North (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "2-4",
      "place": "Rockshore City (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "place": "Route 2 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "4-6",
      "place": "Boulder Cavern - 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Patthar Village (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Route 3 Cliffs (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Power Lane (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "10-14",
      "place": "Route 4 Shores (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Underground Cavern (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Old Power Plant - Room 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "place": "Old Power Plant - Stairs 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-19",
      "place": "Old Power Plant - Stairs B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "17-20",
      "place": "Old Power Plant - Restricted Area (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shuppeth2.png",
      "pokemon": "Shuppet-H2",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Poochyena": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "2-4",
      "place": "Rockshore City (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "place": "Route 2 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "4-6",
      "place": "Boulder Cavern - 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Patthar Village (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Route 3 Cliffs (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Power Lane (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Underground Cavern (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Old Power Plant - Room 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "place": "Old Power Plant - Stairs 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "16-19",
      "place": "Old Power Plant - Stairs B1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "17-20",
      "place": "Old Power Plant - Restricted Area (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "place": "Lost World - 1"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poochyena.png",
      "pokemon": "Poochyena",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Duskull": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/duskull.png",
      "pokemon": "Duskull",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "2-4",
      "place": "Rockshore City (Parallel)"
    }
  ],
  "Phantump": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/phantump.png",
      "pokemon": "Phantump",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/phantump.png",
      "pokemon": "Phantump",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Old Power Plant - Room 1 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/phantump.png",
      "pokemon": "Phantump",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "16-19",
      "place": "Old Power Plant - Stairs B1F (Parallel)"
    }
  ],
  "Murkrow": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/murkrow.png",
      "pokemon": "Murkrow",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/murkrow.png",
      "pokemon": "Murkrow",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/murkrow.png",
      "pokemon": "Murkrow",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "place": "Lost World - 1"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/murkrow.png",
      "pokemon": "Murkrow",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/murkrow.png",
      "pokemon": "Murkrow",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    }
  ],
  "Abra": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/abra.png",
      "pokemon": "Abra",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    }
  ],
  "Alakazam-H": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/alakazamh.png",
      "pokemon": "Alakazam-H",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "1-2",
      "place": "Oozy Forest (Parallel)"
    }
  ],
  "Espurr": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/espurr.png",
      "pokemon": "Espurr",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "3-5",
      "place": "Route 2 (Parallel)"
    }
  ],
  "Yamask-Galar": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/yamaskgalar.png",
      "pokemon": "Yamask-Galar",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-6",
      "place": "Boulder Cavern - 1F (Parallel)"
    }
  ],
  "Cubchoo": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/cubchoo.png",
      "pokemon": "Cubchoo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Patthar Village (Parallel)"
    }
  ],
  "Beartic-H": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/beartich.png",
      "pokemon": "Beartic-H",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Patthar Village (Parallel)"
    }
  ],
  "Kangaskhan": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/kangaskhan.png",
      "pokemon": "Kangaskhan",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    }
  ],
  "Kangaskhan-H": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/kangaskhanh.png",
      "pokemon": "Kangaskhan-H",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    }
  ],
  "Golett": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/golett.png",
      "pokemon": "Golett",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "5-8",
      "place": "Boulder Cavern : Route 3 (Parallel)"
    }
  ],
  "Pancham": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/pancham.png",
      "pokemon": "Pancham",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "7-11",
      "place": "Route 3 Cliffs (Parallel)"
    }
  ],
  "Stunky": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/stunky.png",
      "pokemon": "Stunky",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Power Lane (Parallel)"
    }
  ],
  "Pikipek": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/pikipek.png",
      "pokemon": "Pikipek",
      "rarity": "C",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Power Lane (Parallel)"
    }
  ],
  "Toucannon-H": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/toucannonh.png",
      "pokemon": "Toucannon-H",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Power Lane (Parallel)"
    }
  ],
  "Grimer-Alola": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/grimeralola.png",
      "pokemon": "Grimer-Alola",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Power Lane (Parallel)"
    }
  ],
  "Absol": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/absol.png",
      "pokemon": "Absol",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/absol.png",
      "pokemon": "Absol",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "place": "Lost World - 1"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/absol.png",
      "pokemon": "Absol",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    }
  ],
  "Absol-H2": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/absolh2.png",
      "pokemon": "Absol-H2",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "9-12",
      "place": "Route 3 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/absolh2.png",
      "pokemon": "Absol-H2",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "place": "Lost World - 1"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/absolh2.png",
      "pokemon": "Absol-H2",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    }
  ],
  "Pumpkaboo": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/pumpkaboo.png",
      "pokemon": "Pumpkaboo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/pumpkaboo.png",
      "pokemon": "Pumpkaboo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "place": "Old Power Plant - Stairs 1F (Parallel)"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/pumpkaboo.png",
      "pokemon": "Pumpkaboo",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "17-20",
      "place": "Old Power Plant - Restricted Area (Parallel)"
    }
  ],
  "Slowpoke": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/slowpoke.png",
      "pokemon": "Slowpoke",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    }
  ],
  "Slowpoke-H": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/slowpokeh.png",
      "pokemon": "Slowpoke-H",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "10-13",
      "place": "Route 4 (Parallel)"
    }
  ],
  "Misdreavus": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/misdreavus.png",
      "pokemon": "Misdreavus",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "10-14",
      "place": "Route 4 Shores (Parallel)"
    }
  ],
  "Sinistea": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/sinistea.png",
      "pokemon": "Sinistea",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "10-14",
      "place": "Route 4 Shores (Parallel)"
    }
  ],
  "Sinistea-Antique": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/sinisteaantique.png",
      "pokemon": "Sinistea-Antique",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "10-14",
      "place": "Route 4 Shores (Parallel)"
    }
  ],
  "Cubone": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/cubone.png",
      "pokemon": "Cubone",
      "rarity": "UC",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    }
  ],
  "Cubone-H": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/cuboneh.png",
      "pokemon": "Cubone-H",
      "rarity": "R",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    }
  ],
  "Inkay": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/inkay.png",
      "pokemon": "Inkay",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "12-15",
      "place": "Boulder Cavern - B1F (Parallel)"
    }
  ],
  "Joltik": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/joltik.png",
      "pokemon": "Joltik",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Underground Cavern (Parallel)"
    }
  ],
  "Pawniard": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/pawniard.png",
      "pokemon": "Pawniard",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Underground Cavern (Parallel)"
    }
  ],
  "Elekid": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/elekid.png",
      "pokemon": "Elekid",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Underground Cavern (Parallel)"
    }
  ],
  "Electabuzz-H": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/electabuzzh.png",
      "pokemon": "Electabuzz-H",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Underground Cavern (Parallel)"
    }
  ],
  "Rotom-Heat": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/rotomheat.png",
      "pokemon": "Rotom-Heat",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Old Power Plant - Room 1 (Parallel)"
    }
  ],
  "Rotom-Fan": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/rotomfan.png",
      "pokemon": "Rotom-Fan",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "15-18",
      "place": "Old Power Plant - Stairs 1F (Parallel)"
    }
  ],
  "Rotom-Mow": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/rotommow.png",
      "pokemon": "Rotom-Mow",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "14-17",
      "place": "Old Power Plant - Stairs B1F (Parallel)"
    }
  ],
  "Rotom": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/rotom.png",
      "pokemon": "Rotom",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "17-20",
      "place": "Old Power Plant - Restricted Area (Parallel)"
    }
  ],
  "Impidimp": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/impidimp.png",
      "pokemon": "Impidimp",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "18-22",
      "place": "Lost World - 1"
    }
  ],
  "Gible": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gible.png",
      "pokemon": "Gible",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    }
  ],
  "Garchomp-H": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/garchomph.png",
      "pokemon": "Garchomp-H",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "19-23",
      "place": "Lost World - 2"
    }
  ],
  "Gengar-H2": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/gengarh2.png",
      "pokemon": "Gengar-H2",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    }
  ],
  "Blacephalon": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/blacephalon.png",
      "pokemon": "Blacephalon",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    }
  ],
  "Suicune-H2": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/suicuneh2.png",
      "pokemon": "Suicune-H2",
      "rarity": "L",
      "time": "🌓",
      "method": "🍀",
      "level": "20-24",
      "place": "Lost World - 3"
    }
  ],
  "Skorupi": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/skorupi.png",
      "pokemon": "Skorupi",
      "rarity": "VR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Dreepy": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/dreepy.png",
      "pokemon": "Dreepy",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Dragapult-H": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/dragapulth.png",
      "pokemon": "Dragapult-H",
      "rarity": "UR",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Raikou-H2": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/raikouh2.png",
      "pokemon": "Raikou-H2",
      "rarity": "L",
      "time": "🌓",
      "method": "🍀",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Poliwag": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poliwag.png",
      "pokemon": "Poliwag",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/poliwag.png",
      "pokemon": "Poliwag",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Goldeen": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/goldeen.png",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/goldeen.png",
      "pokemon": "Goldeen",
      "rarity": "C",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Magikarp": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/magikarp.png",
      "pokemon": "Magikarp",
      "rarity": "R",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Magikarp-H2": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/magikarph2.png",
      "pokemon": "Magikarp-H2",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Lapras": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/lapras.png",
      "pokemon": "Lapras",
      "rarity": "VR",
      "time": "🌓",
      "method": "🎣",
      "level": "4-12",
      "place": "Twisted Forest"
    },
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/lapras.png",
      "pokemon": "Lapras",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Shellos": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/shellos.png",
      "pokemon": "Shellos",
      "rarity": "R",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Wailmer": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/wailmer.png",
      "pokemon": "Wailmer",
      "rarity": "VR",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ],
  "Squirtle-H": [
    {
      "sprite": "https://f003.backblazeb2.com/file/forums-uploads/halloween-2023/squirtleh.png",
      "pokemon": "Squirtle-H",
      "rarity": "UR",
      "time": "🌓",
      "method": "🌊",
      "level": "4-12",
      "place": "Twisted Forest"
    }
  ]
}

export const HALLOWEEN_SPECIAL_BY_POKEMON: {[key: string]: SpecialSpawn[]} = {
  "Conkeldurr-H": [
    {
      "pokemon": "Conkeldurr-H",
      "rarity": "UR",
      "method": "Box - 750 Soul Shards"
    }
  ],
  "Shellder-H": [
    {
      "pokemon": "Shellder-H",
      "rarity": "UR",
      "method": "Box - 750 Soul Shards"
    }
  ],
  "Spiritomb": [
    {
      "pokemon": "Spiritomb",
      "rarity": "VR",
      "method": "Box - 250 Soul Shards"
    }
  ],
  "Hatenna-H": [
    {
      "pokemon": "Hatenna-H",
      "rarity": "UR",
      "method": "Box - 150 Cursed Ores"
    }
  ],
  "Bulbasaur-H": [
    {
      "pokemon": "Bulbasaur-H",
      "rarity": "VR",
      "method": "Box - 150 Cursed Ores"
    }
  ],
  "Mawile-H": [
    {
      "pokemon": "Mawile-H",
      "rarity": "UR",
      "method": "Box - 150 Cursed Ores"
    }
  ],
  "Mew-H": [
    {
      "pokemon": "Mew-H",
      "rarity": "L",
      "method": "Box - 1000 Spirit Token"
    }
  ],
  "Eevee-H": [
    {
      "pokemon": "Eevee-H",
      "rarity": "UR",
      "method": "Box - 500 Spirit Token"
    }
  ],
  "Keldeo-H2": [
    {
      "pokemon": "Keldeo-H2",
      "rarity": "L",
      "method": "Ladder Box - Rating 2 ~ 10"
    }
  ],
  "Keldeo-Resolute-H2": [
    {
      "pokemon": "Keldeo-Resolute-H2",
      "rarity": "L",
      "method": "Ladder Box - Rating 1"
    }
  ],
  "Entei-H2": [
    {
      "pokemon": "Entei-H2",
      "rarity": "L",
      "method": "Swarm"
    }
  ],
  "Charmander-H": [
    {
      "pokemon": "Charmander-H",
      "rarity": "UR",
      "method": "Swarm"
    }
  ],
  "Scyther-H2": [
    {
      "pokemon": "Scyther-H2",
      "rarity": "UR",
      "method": "Swarm"
    }
  ],
  "Bagon-H": [
    {
      "pokemon": "Bagon-H",
      "rarity": "UR",
      "method": "Swarm"
    }
  ]
}