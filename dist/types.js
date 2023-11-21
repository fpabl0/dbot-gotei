"use strict";
// ===============================================================
// Discord Command
// ===============================================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandOptionType = exports.CommandType = void 0;
var CommandType;
(function (CommandType) {
    CommandType[CommandType["CharInput"] = 1] = "CharInput";
    CommandType[CommandType["User"] = 2] = "User";
    CommandType[CommandType["Message"] = 3] = "Message";
})(CommandType = exports.CommandType || (exports.CommandType = {}));
;
var CommandOptionType;
(function (CommandOptionType) {
    CommandOptionType[CommandOptionType["String"] = 3] = "String";
    CommandOptionType[CommandOptionType["Integer"] = 4] = "Integer";
    CommandOptionType[CommandOptionType["Boolean"] = 5] = "Boolean";
    CommandOptionType[CommandOptionType["User"] = 6] = "User";
    CommandOptionType[CommandOptionType["Number"] = 10] = "Number";
})(CommandOptionType = exports.CommandOptionType || (exports.CommandOptionType = {}));
;
//# sourceMappingURL=types.js.map