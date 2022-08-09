// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const API = process.env.REACT_APP_API_URL;

// const SongNewForm = () => {
//   const [song, setSong] = useState({
//     name: '',
//     artist: '',
//     album: '',
//     time: '',
//     is_favorite: false,
//   });
//   const navigate = useNavigate();

//   const addNewSong = async (newSong) => {
//     try {
//       await axios.post(`${API}/api/songs`, newSong);
//       navigate(`/songs`);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleTextChange = (event) => {
//     setSong({ ...song, [event.target.id]: event.target.value });
//   };

//   const handleCheckboxChange = () => {
//     setSong({ ...song, is_favorite: !song.is_favorite });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addNewSong(song);
//   };

//   return (
//     <div className='NewSong'>
//       <form className='NewSongForm' onSubmi={handleSubmit}>
//         <h1 className='NewSongHeader'>Add a New Song</h1>
//         <div>
//           <label htmlFor='name'>Song Name</label>
//           <input
//             id='name'
//             value={song.name}
//             type='text'
//             onChange={handleTextChange}
//             placeholder='Name'
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor='artist'>Artist</label>
//           <input
//             id='artist'
//             type='text'
//             value={song.artist}
//             placeholder='Artist'
//             onChange={handleTextChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor='album'>Album</label>
//           <input
//             id='album'
//             type='text'
//             name='album'
//             value={song.album}
//             placeholder='Album'
//             onChange={handleTextChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor='time'>Time</label>
//           <input
//             id='time'
//             type='text'
//             name='time'
//             value={song.time}
//             placeholder='Time'
//             onChange={handleTextChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor='is_favorite'>Favorite</label>
//           <input
//             id='is_favorite'
//             type='checkbox'
//             onChange={handleCheckboxChange}
//             checked={song.is_favorite}
//           />
//         </div>
//         <br />
//         <input type='submit' />
//       </form>
//     </div>
//   );
// };

// export default SongNewForm;

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

const SongNewForm = () => {
  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: 0,
    is_favorite: false,
  });

  const navigate = useNavigate();

  const addNewSong = async(newSong) => {
    console.log(newSong);
    try{
    await axios
      .post(`${API}/api/songs`, newSong)
      // .then(() => {
        navigate(`/songs`);
      // })
      // .catch((c) => console.error('catch', c));
    }catch(err){
      console.log(err)
    }
  };

  const handleTextChange = (event) => {
    console.log('event', event.target.value);
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    console.log(song.is_favorite);
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(song);
    addNewSong(song);
  };

  return (
    <div className='NewSong'>
      <form className='NewSongForm' onSubmit={handleSubmit}>
      <h1 className='NewSongHeader'>Add a New Song</h1>
        <div>
          <label htmlFor='name'>Song Name:</label>
          <input
            id='name'
            // name='name'
            value={song.name}
            type='text'
            onChange={handleTextChange}
            placeholder='Song Name'
            required
          />
        </div>
        <div>
          <label htmlFor='artist'>Artist:</label>
          <input
            id='artist'
            // name='artist'
            type='text'
            value={song.artist}
            placeholder='artist'
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label htmlFor='album'>Album:</label>
          <input
            id='album'
            type='text'
            // name='album'
            value={song.album}
            placeholder='Album Name...'
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label htmlFor='time'>Total Song Time:</label>
          <input
            id='time'
            type='number'
            // name='time'
            value={song.time}
            placholder='time in secs'
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label htmlFor='is_favorite'>Is it a favorite?</label>
          <input
            id='is_favorite'
            type='checkbox'
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
          />
        </div>
        <br />
        <input type='submit' />
      </form>
    </div>
  );
};

export default SongNewForm;
