const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000;

app.use(cors({origin:"http://localhost:5173"})); 

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
    
require("./routes/product.routes")(app);

    
app.listen(port, () => console.log("Listening on port: 8000") );
