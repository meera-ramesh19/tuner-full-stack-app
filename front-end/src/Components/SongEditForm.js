import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
  let { id } = useParams();

  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: 0,
    is_favorite: false,
  });

  useEffect(() => {
    axios
      .get(`${API}/api/songs/${id}`)
      .then((response) => {
        setSong(response.data.payload);
      })
      .catch((e) => console.error(e));
  }, [id]);

  const updateSong = (song) => {
    console.log('in update', song);
    axios
      .put(`${API}/api/songs/${id}`, song)
      .then(() => {
        // setSong(response.data);
        navigate(`/songs/${id}`);
      })
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    console.log(event.target.value);
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    console.log(song.is_favorite);
    const favorite = event.target.checked ? true : false;
    setSong({ ...song, is_favorite: favorite });
  };

  const handleSubmit = (event) => {
    console.log('in edit', song);
    event.preventDefault();
    updateSong(song);
    setSong('');
  };

  return (
    <div className='Edit'>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Song Name</Form.Label>
          <Form.Control
            id='name'
            value={song.name}
            type='text'
            name='name'
            onChange={handleTextChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Artist: </Form.Label>
          <Form.Control
            id='artist'
            type='text'
            name='artist'
            value={song.artist}
            onChange={handleTextChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Album Name:</Form.Label>
          <Form.Control
            id='album'
            type='text'
            name='album'
            value={song.album}
            onChange={handleTextChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Song Time:</Form.Label>
          <Form.Control
            id='time'
            type='number'
            name='time'
            value={song.time}
            onChange={handleTextChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Is_Favorite</Form.Label>
          <Form.Check
            id='is_favorite'
            type='checkbox'
            checked={song.is_favorite}
            onChange={handleCheckboxChange}
            value={song.is_favorite}
          />
        </Form.Group>

        <br />
        <Button
          style={{ textAlign: 'center' }}
          variant='outline-success'
          type='submit'
        >
          Submit
        </Button>
      </Form>
      <Link to={`/songs/${id}`}>
        <Button variant='outline-success'>Back</Button>
      </Link>
    </div>
  );
}

export default SongEditForm;
