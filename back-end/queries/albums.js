const db = require('../db/dbConfig');

// GET ALL
const getAllAlbums = async (song_id) => {
  try {
    const allAlbums = await db.any(
      `SELECT * FROM albums WHERE song_id = ${song_id}`
    );
    return allAlbums;
  } catch (error) {
    return error;
  }
};

const getAlbum = async (id) => {
    try {
      const oneAlbum = await db.one('SELECT * FROM albums WHERE id=$1', id);
      return oneAlbum;
    } catch (error) {
      return error;
    }
  };

const createAlbum = async (
  song_id,
  { albumName, releaseDate, is_favorite }
) => {
  try {
    const newAlbum = await db.one(
      'INSERT INTO albums (albumName, releaseDate, is_favorite) VALUES($1, $2, $3) RETURNING *',
      [albumName, releaseDate, is_favorite, song_id]
    );
    return newAlbum;
  } catch (error) {
    return error;
  }
};



const deleteAlbum = async (id) => {
  try {
    const oneAlbum = await db.one(
      'DELETE FROM albums WHERE id=$1 RETURNING *',
      id
    );
    return oneAlbum;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const updateAlbum = async (
  id,
  song_id,
  { albumName, releaseDate, is_favorite }
) => {
  try {
    const updateAlbum = await db.one(
      'UPDATE albums SET albumName=$1, releaseDate=$2, is_favorite=$3, , song_id=$4 where id=$5 RETURNING *',
      [albumName, releaseDate, is_favorite, song_id, id]
    );
    return updateAlbum;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllAlbums,
  createAlbum,
  deleteAlbum,
  getAlbum,
  updateAlbum,
};
