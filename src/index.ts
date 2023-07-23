import express from 'express';
import router from './routes/task.route';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = 8080;

app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});