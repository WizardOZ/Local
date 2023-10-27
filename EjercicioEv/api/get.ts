import { Request, Response } from "npm:express@4.18.2";
import PersonModel from "../db/tierramedia.ts";

const get = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const character = await PersonModel.findOne({ id }).exec();
    if (!character) {
      res.status(404).send("Character not found");
      return;
    }
    res.status(200).send({
        name: character.name,
        race: character.race,
        description: character.description,
        specialAbility: character.specialAbility,
        id: character._id.toString(),
    });
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default get;