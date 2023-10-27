import mongoose from "npm:mongoose@7.6.3";
import { character } from "../character.ts";

const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    name: { type: String, required: true },
    race: { type: String, required: true, unique: true },
    description: { type: Number, required: true },
    specialAbility: { type: String, required: true },
  },
  { timestamps: true }
);

export type PersonModelType = mongoose.Document & Omit<character, "id">;

export default mongoose.model<PersonModelType>("Character", characterSchema);