//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const songs = express.Router();
//import db
const db = require('../db/dbConfig');
//import validation

const {
  checkBoolean,
  checkName,
  checkForNoAdditionalParams,
} = require('../validations/checkSongs');

const {
  getAllSongs,
  getASong,
  createNewSongs,
  updateSong,
  deleteSong,
  orderBy,
  check_is_favorite,
} = require('../queries/songs');

//any() coming from the pg promise, first argument is sql command,
//.any can be used when it is returning all or none
//Index
songs.get('/', async (req, res) => {
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
        // res.status(200).json(allSongs);
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
  console.log('in rhe route');
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
songs.post(
  '/',
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
  async (req, res) => {
    const newSong = {
      name: req.body.name,
      artist: req.body.artist,
      album: req.body.album,
      time: req.body.time,
      is_favorite: req.body.is_favorite,
    };
    console.log(newSong);
    // try {
    const song = await createNewSongs(newSong);
    if (song) {
      res.status(200).json(song);
    } else {
      res.status(404).send('Sorry!!Enter all required fields in valid format ');
    }
    // } catch (error) {
    //   res.status(404).json({ error: error.message || error });
    // }
  }
);

//DELETE
songs.delete('/:id', async (req, res) => {
  console.log('Delete /:id');
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json(`No song exists with the ID(${id})`);
  }
});

//update
songs.put(
  '/:id',
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
  async (req, res) => {
    console.log('Put /:id');
    const { id } = req.params;
    console.log(req.body);
    const editSong = {
      name: req.body.name,
      artist: req.body.artist,
      album: req.body.album,
      time: req.body.time,
      is_favorite: req.body.is_favorite,
    };
    // try {
    const updatedSong = await updateSong(editSong, id);
    if (updatedSong) {
      res.status(200).json({ success: true, payload: updatedSong });
    } else {
      res
        .status(404)
        .send(
          `Either the fields were entered correctly? or  No song exists with the id ${id}`
        );
    }
    // } catch (error) {
    //   res.status(404).json({ error: 'Cannot update the song' });
    // }
  }
);

module.exports = songs;

// //controls the routes the way it goes for
// const express = require('express');
// //access to being able to things like get or set, update or delete
// const songs = express.Router();

// const db = require('../db/dbConfig');
// const {
//   getAllSongs,
//   getASong,
//   createNewSongs,
//   updateSong,
//   deleteSong,
// } = require('../queries/songs');

// songs.get('/', async (req, res) => {
//   const allSongs = await getAllSongs();
//   console.log(allSongs);
//   if (allSongs) {
//     res.json({ success: true, payload: allSongs });
//   } else {
//     res.status(404).json({ success: false, message: 'Something went wrong' });
//   }
// });

// songs.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   const song = await getASong(id);

//   if (song) {
//     res.status(200).json({ success: true, payload: song });
//   } else {
//     res.status(404).send(`No song found with id of ${id}`);
//   }
// });

// songs.post('/new', async (req, res) => {
//   const newSong = req.body;
//   console.log(newSong);
//   const song = await createNewSongs(newSong);
//   // const newSongs=await db.any('INSERT INTO song (name,artist,album,time,is_favorite) values($1,$2,$3,$4,$5) RETURNING *',[req.body.name, req.body.artist,req.body.artist,req.body.time,req.body.is_favorite]);
//   if (song) {
//     res.status(200).json({ success: true, payload: song });
//   } else {
//     res.status(404).send(`No song found with id of ${id}`);
//   }

//   //
// });
// songs.delete('/:id', async (req, res) => {
//   console.log('Delete /:id');
//   const { id } = req.params;
//   const song = await deleteSong(id);
//   res.status(200).json(song);
// });

// songs.put('/:id', async (req, res) => {
//   console.log('Put /:id');
//   const { id } = req.params;
//   console.log(req.body);
//   const song = await updateSong(req.body, id);
//   res.status(200).json(song);
// });

// module.exports = songs;
