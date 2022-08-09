import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
    axios
      .put(`${API}/api/songs/${id}`, song)
      .then((response) => {
        setSong(response.data);
        navigate(`/songs/${id}`);
      })
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song);
  };

  return (
    <div className='Edit'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='Name'>Song Name</label>
        <input
          id='name'
          value={song.name}
          type='text'
          onChange={handleTextChange}
          placeholder='Song Name'
          required
        />

        <label htmlFor='artist'>Artist:</label>
        <input
          id='artist'
          type='text'
          required
          value={song.artist}
          placeholder='Artist Name'
          onChange={handleTextChange}
        />

        <label htmlFor='album'>Album Name:</label>
        <input
          id='album'
          type='text'
          name='album'
          value={song.album}
          placeholder=' album name ...'
          onChange={handleTextChange}
        />

        <label htmlFor='time'>Total Song Time:</label>
        <input
          id='time'
          type='number'
          value={song.time}
          onChange={handleTextChange}
        />

        <label htmlFor='is_favorite'>Is it a favorite?:</label>
        <input
          id='is_favorite'
          type='checkbox'
          checked={song.is_favorite}
          onChange={handleCheckboxChange}
        />

        <br />
        <input type='submit' />
      </form>

      <Link to={`/songs/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default SongEditForm;
