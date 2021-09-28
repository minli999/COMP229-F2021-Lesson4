"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose")); // importing a new api
const Schema = mongoose_1.default.Schema; // alias for mongoose Schema
const GameSchema = new Schema // define the properties
({
    name: String,
    genre: String,
    developer: String,
    cost: Number
}, {
    collection: "games"
});
const Model = mongoose_1.default.model("Game", GameSchema);
exports.default = Model;
//# sourceMappingURL=game.js.map