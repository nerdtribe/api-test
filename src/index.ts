import express from 'express';
import {rootHandler, helloHandler, tmdbHandler, tmdbMovieSearchHandler} from './handlers';

const app = express();
const port = process.env.PORT || '8000';

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);
app.get('/search/movies/:query', tmdbMovieSearchHandler);
app.get('/trending', tmdbHandler);

app.listen(port, err => {
    if (err) return console.error(err);
    return console.log(`Server is listening on ${port}`);
});
