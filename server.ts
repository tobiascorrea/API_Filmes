import express from 'express';
import { MovieController } from './src/controllers/movieController';

const app = express();
const port = 3000;

app.use(express.json());

const movieController = new MovieController();

app.post('/movies', movieController.createMovie.bind(movieController));
app.get('/movies', movieController.getAllMovies.bind(movieController));
app.get('/movies/:id', movieController.getMovie.bind(movieController));
app.put('/movies/:id', movieController.updateMovie.bind(movieController));
app.delete('/movies/:id', movieController.deleteMovie.bind(movieController));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
