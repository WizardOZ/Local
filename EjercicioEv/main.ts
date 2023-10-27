import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import getCharacter from "./api/get.ts";
import newCharacter from "./api/post.ts";

await mongoose.connect(
  "mongodb+srv://jero:<umLxHqoVN5txE4DW>@cluster0.tjc2oqv.mongodb.net/mydatabase?retryWrites=true&w=majorit"
);
const app = express();
app.use(express.json());
app
  .get("/getPerson/:id", getCharacter)
  .post("/addPerson", newCharacter)
  

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});