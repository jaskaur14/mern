const express = require("express");
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const JokeRoutes = require("./routes/jokes.routes");
JokeRoutes(app);

app.listen(port, () => console.log(`Express running on port 8000`));