import mongoose from 'mongoose';  // importing a new api
const Schema = mongoose.Schema;  // alias for mongoose Schema

const GameSchema = new Schema   // define the properties
({                            
    name: String,
    genre: String,
    developer: String,
    cost: Number
},
{
    collection: "games"
}
);

const Model = mongoose.model("Game", GameSchema);
export default Model;