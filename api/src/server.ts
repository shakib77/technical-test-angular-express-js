import express from 'express';

const app = express();
const port = 8000;
const cors = require("cors");
const db = require("./models");

const corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

console.log('db.sequelize.->', db.sequelize);

db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

app.get('/', (req, res) => {
    res.send('Server is up and running!');
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
