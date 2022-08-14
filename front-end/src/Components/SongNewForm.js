import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
const API = process.env.REACT_APP_API_URL;

const SongNewForm = () => {
  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false,
  });
  const navigate = useNavigate();

  const addNewSong = async (newSong) => {
    await axios
      .post(`${API}/api/songs/new`, newSong)
      .then(() => {
        setSong({
          name: '',
          artist: '',
          album: '',
          time: '',
          is_favorite: false,
        });
        navigate(`/songs`);
      })
      .catch((err) => console.log(err));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    const favorite = event.target.checked ? true : false;
    setSong({ ...song, is_favorite: favorite });
    // setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    console.log('in new', song);
    event.preventDefault();
    addNewSong(song);
  };

  return (
    <div className='NewSong'>
      <Form className='NewSongForm' onSubmit={handleSubmit}>
        <h1 className='NewSongHeader'>Add a New Song</h1>
        <Form.Group>
          <Form.Label>Song Name</Form.Label>
          <Form.Control
            id='name'
            value={song.name}
            name='name'
            type='text'
            onChange={handleTextChange}
            placeholder='Name'
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Artist</Form.Label>
          <Form.Control
            id='artist'
            type='text'
            value={song.artist}
            placeholder='Artist'
            onChange={handleTextChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Album</Form.Label>
          <Form.Control
            id='album'
            type='text'
            name='album'
            value={song.album}
            placeholder='Album'
            onChange={handleTextChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Time</Form.Label>
          <Form.Control
            id='time'
            type='text'
            name='time'
            value={song.time}
            placeholder='Time'
            onChange={handleTextChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Favorite</Form.Label>
          <Form.Check
            id='is_favorite'
            type='checkbox'
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
            value={song.is_favorite}
          />
        </Form.Group>
        <br />
        <Button vaariant='outline-success' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SongNewForm;
