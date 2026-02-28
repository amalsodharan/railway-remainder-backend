import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

import gettrain from "./routes/getTrains.js";

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/trains", gettrain);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
