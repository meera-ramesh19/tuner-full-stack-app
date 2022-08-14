//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const songs = express.Router();
//import db
const db = require('../db/dbConfig');
//import validation

const { checkBoolean, checkName } = require('../validations/checkSongs');

const {
  getAllSongs,
  getASong,
  createSongs,
  updateSong,
  deleteSong,
  orderBy,
  check_is_favorite,
} = require('../queries/songs');

//any() coming from the pg promise, first argument is sql command,
//.any can be used when it is returning all or none
//Index
songs.get('/', async (req, res) => {
  console.log('get all /');
  const { order, is_favorite } = req.query;
  try {
    if (order) {
      const ordered = await orderBy(order);
      if (ordered) {
        res.status(200).json({ success: true, payload: ordered });
      } else {
        res.status(404).json({
          success: false,
          message:
            'Sorry Wrong query request -The order query does not have  an ascending or descending value',
        });
      }
    } else if (is_favorite) {
      const favorite = await check_is_favorite(is_favorite);
      if (favorite) {
        res.status(200).json({ success: true, payload: favorite });
      } else {
        res.status(404).json({
          success: false,
          message:
            'Sorry Wrong query search - The favorites query search can only have true or false values',
        });
      }
    } else {
      const allSongs = await getAllSongs();
      if (allSongs) {
        res.status(200).json({ success: true, payload: allSongs });
      } else {
        res.status(404).json({ success: false, message: 'No songs found' });
      }
    }
  } catch {
    res.status(404).json({ success: false, message: 'Something went wrong' });
  }
});

//Show
songs.get('/:id', async (req, res) => {
  console.log('get one /:id');
  const { id } = req.params;
  // try {
  const song = await getASong(id);
  if (song) {
    res.status(200).json({ success: true, payload: song });
  } else {
    res
      .status(404)
      .send({ success: false, message: `No song found with id of ${id}` });
  }
  // } catch {
  //   res.status(404).json({ error: error.message || error });
  // }
});

//CREATE
songs.post('/new', checkName, checkBoolean, async (req, res) => {
  console.log(req.body);
  // const newSong = {
  //   name: req.body.name,
  //   artist: req.body.artist,
  //   album: req.body.album,
  //   time: req.body.time,
  //   is_favorite: req.body.is_favorite,
  // };
  // console.log(newSong);
  // try {
  console.log('post /new');
  const createSong = await createSongs(req.body);
  if (createSong) {
    res.status(200).json(createSong);
  } else {
    res.status(404).send('Sorry!!Enter all required fields in valid format ');
  }
  // } catch (error) {
  //   res.status(404).json({ error: error.message || error });
  // }
});

//DELETE
songs.delete('/:id', async (req, res) => {
  console.log('Delete /:id',req.body,req.params);
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json(`No song exists with the ID(${id})`);
  }
});

//update
songs.put('/:id', checkName, checkBoolean, async (req, res) => {
  console.log('Put /:id');
  const { id } = req.params;
  // const { name, artist, album, time, is_favorite } = req.body;
  // const editSong = {
  //   name: name,
  //   artist: artist,
  //   album: album,
  //   time: time,
  //   is_favorite: is_favorite,
  // };

  // if (!name || !artist || !album || !time) {
  //   res.status(404).json({
  //     success: false`Either the fields were entered correctly? or  No song exists with the id ${id}`,
  //   });
  // } else {
  //   const updatedSong = await updateSong(editSong, id);
  //   res.status(200).json({ success: true, payload: updatedSong });
  // }
  try {
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json({ success: true, payload: updatedSong });
  } catch (error) {
    res.status(404).json({ error: 'Cannot update the song' });
  }
});

module.exports = songs;
