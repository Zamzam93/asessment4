const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune} = require('./controller')
const { getCake, deleteCake, addCake, updateCake} = require('./controller')
//const { updateCake} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/cake", getCake);
app.delete("/api/cake/:id", deleteCake)
app.post("/api/cake", addCake)
//app.put("/api/cake", updateCake)

app.listen(4000, () => console.log("Server running on 4000"));
