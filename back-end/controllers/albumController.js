const express = require('express');
const albums = express.Router({ mergeParams: true });

const {
  getAllAlbums,
  getAlbum,
  deleteAlbum,
  createAlbum,
  updateAlbum,
} = require('../queries/reviews');

albums.get('/', async (req, res) => {
  const { song_id } = req.params;
  const allAlbums = await getAllAlbums(song_id);
  if (allAlbums) {
    res.status(200).json(allAlbums);
  } else {
    console.error(allAlbums);
    res.status(404).json({ error: 'Albums does not exist in the database' });
  }
});

albums.get('/:id', async (req, res) => {
  console.log('GET to /albums/:id');
  const { id } = req.params;
  const oneAlbum = await getAlbum(id);
  if (oneAlbum) {
    res.status(200).json(oneAlbum);
  } else {
    res.status(404).json({ error: 'Album not found' });
  }
});

// Create
albums.post('/', async (req, res) => {
  console.log('POST to /albums/new');
  try {
    const newAlbum = await createAlbum(req.params.song_id, req.body);
    res.status(200).json(newAlbum);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// UPDATE
albums.put('/:id', async (req, res) => {
  console.log('PUT to /albums/:id/edit');
  console.log(req.params);
  try {
    const review = await updateAlbum(
      req.params.id,
      req.params.song_id,
      req.body
    );
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//DELETE
albums.delete('/:id', async (req, res) => {
  console.log('DELETE to /albums/:id');
  const { id } = req.params;
  const deletedAlbum = await deleteAlbum(id);
  if (deletedAlbum) {
    if (deletedAlbum.id) {
      res.status(200).json(deleteAlbum);
    } else {
      res.status(404).json({ error: 'Album not found' });
    }
  } else {
    console.error(deletedAlbum);
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = albums;
