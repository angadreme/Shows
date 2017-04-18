import * as mongoose from 'mongoose';

export interface Character extends mongoose.Document {
  name: string;
  actor: string;
  age: number;
  rating: number;
  onSet: boolean;
}

let characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  actor: {
    type: String,
    required: true
  },
  age: Number,
  rating: Number,
  onSet: Boolean
});

export default characterSchema;
