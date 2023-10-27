import { Request, Response } from "npm:express@4.18.2";
import PersonModel from "../db/tierramedia.ts";

const addPerson = async (req: Request, res: Response) => {
  try {
    const { name,race,description,specialAbility } = req.body;
    if (!name || !race || !description || !specialAbility) {
      res.status(400).send("Name, race, description and specialAbility are required");
      return;
    }

    const alreadyExists = await PersonModel.findOne({ id }).exec();
    if (alreadyExists) {
      res.status(400).send("Character already exists");
      return;
    }

    const newCharacter = new PersonModel({ name, race, description, specialAbility });
    await newCharacter.save();

    res.status(200).send({
      name: newCharacter.name,
      age: newCharacter.race,
      dni: newCharacter.description,
      specialAbility: newCharacter.specialAbility,
      id: newCharacter._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addPerson;