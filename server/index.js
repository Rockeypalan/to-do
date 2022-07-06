import express from 'express';
import tasks from './routes/tasks.js';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//http://localhost:5000/tasks
app.use('/tasks', tasks);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send(`Welcome...`);
});

(async () => {
    try {
        await connectDB(process.env.CONNECT_URI);
        app.listen(PORT, () => {
            console.log(`Server is running in : http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
})();