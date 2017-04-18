import * as express from 'express';
import Show from '../models/shows';

let router = express.Router();

router.get('/', (req, res) => {
  Show.find().then((foundShows) => res.json(foundShows));
});

router.post('/', (req, res) => {
  let show = new Show();
  show.title = req.body.title;
  show.network = req.body.network;
  show.genre = req.body.genre;
  show.stillOnAir = req.body.stillOnAir;
  show.numberOfCharacters = req.body.numberOfCharacters;
  show.characters = req.body.characters;
  show.save().then((savedShow) => res.json(savedShow));
});

export default router;
