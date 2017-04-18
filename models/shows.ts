import * as mongoose from 'mongoose';
import CharacterModel from './characters';
import {Character} from './characters';

interface Show extends mongoose.Document {
  title: string;
  network: string;
  numberOfCharacters: number;
  genre: string;
  stillOnAir: boolean;
  characters: Character[];
}

let showSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  network: String,
  numberOfCharacters: Number,
  genre: String,
  stillOnAir: Boolean,
  characters: [CharacterModel]
});

export default mongoose.model<Show>('Show', showSchema); //shows collection
