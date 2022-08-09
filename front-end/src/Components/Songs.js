import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
const API = process.env.REACT_APP_API_URL;

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/songs`)
      .then((res) => {
        setSongs(res.data.payload);
      })
      .catch((e) => console.error('catch', e));
  }, []);

  return (
    <section>
      {/* <div> */}
      <button>
        <a href="/songs/new">New Song</a>
      </button>
        <Table stripped='true' bordered hover responsive='sm'>
          <thead>
            <tr style={{ textAlign: 'center' }}>
              <th>Fav</th>
              <th>Song</th>
              <th>Artist</th>
              {/* <th>Album</th> */}
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {console.log(songs)}
            {songs.map((song, index) => {
              return (
                <tr className='Song Songs' key={song.id}>
                  <td>
                    {song.is_favorite ? (
                      <span>&#11088;</span>
                    ) : (
                      <span>
                        {/* &#10060; */}
                        {/* &nbsp; &nbsp; &nbsp;*/}
                      </span>
                    )}
                  </td>
                  <td>
                    <Link to={`/songs/${song.id}`}>{song.name}</Link>
                  </td>
                  <td>
                    {/* <Link to={`/songs/${song.id}`}> */}
                      {song.artist}
                      {/* </Link> */}
                  </td>
                  {/* <td>
                    <Link to={`/songs/${song.id}`}>
                      {song.album}
                      </Link>
                  </td> */}
                  <td>{song.time}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </Table>
      {/* </div> */}
    </section>
  );
};

export default Songs;
