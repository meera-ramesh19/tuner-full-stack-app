import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
// import _ from 'lodash';
import Table from 'react-bootstrap/Table';
const API = process.env.REACT_APP_API_URL;
// const pageSize=4;

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [fave,setFave]=useState(false);
  // const [paginatedSongs, setPaginatedSongs] = useState();
  const [currentPage,setCurrentPage]=useState(1)
  const [songsPerPage] = useState(4);

 

  useEffect(() => {
    axios
      .get(`${API}/api/songs`)
      .then((res) => {
        setSongs(res.data.payload);
        // setPaginatedSongs(_(res.data.payload).slice(0).take(pageSize).value())
      })
      .catch((e) => console.error('catch', e));
  }, []);


  // const pageCount=songs? Math.ceil(songs.length/pageSize):0;
  // if(pageCount===1) return null;
  // const pages = _.range(1, pageCount+1);
 
  // Get current posts
  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);

  // // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  
  return (
    <section style={{overflowY:'auto', 
    overflowX:'auto',height:'300px'}}>
      <Table 
      stripped='true' bordered hover 
      responsive='sm'>
        <thead style={{position:'sticky',
        top: '0'}}>
          <tr style={{ textAlign: 'center' }}>
            <th style={{position:'sticky',
        top: '0'}}>Favorite</th>
            <th style={{position:'sticky',
        top: '0'}}>Song</th>
            <th style={{position:'sticky',
        top: '0'}}>Artist</th>
            <th style={{position:'sticky',
        top: '0'}}>Album</th>
            <th style={{position:'sticky',
        top: '0'}}>Time</th>
          </tr>
        </thead>
        <tbody >
          {console.log(songs)}
          {currentSongs.map((song) => {
            return (
              <tr className='Song Songs' key={song.id}>
                <td>
               
                  {song.is_favorite ? (
                    <span>&#11088;</span>
                  ) : (
                    <span>
                      &#10060;
                      {/* &nbsp; &nbsp; &nbsp; */}
                    </span>
                  )} 
             
                </td>
                <td>
                  <Link
                    style={{ color: 'black', textDecoration: 'none' }}
                    to={`/songs/${song.id}`}
                  >
                    {song.name}
                  </Link>
                </td>
                <td>
                  <Link
                    style={{ color: 'black', textDecoration: 'none' }}
                    to={`/songs/${song.id}`}
                  >
                    {song.artist}
                  </Link>
                </td>
                <td>
                  <Link
                    style={{ color: 'black', textDecoration: 'none' }}
                    to={`/songs/${song.id}`}
                  >
                    {song.album}
                  </Link>
                </td>
                <td>{(song.time / 60).toFixed(2).replace('.', ':')}</td>
              </tr>
            );
          })}
        </tbody>
       
      </Table>
      {/* <nav className='d-flex justify-content-center'>
        <ul className='pagination'>
          {pages.map((page)=>(
            <li className='(page===currentPage?')'>{page}</li>
          ))
        }     
        </ul>
      </nav> */}
      <Pagination
        songsPerPage={songsPerPage}
        totalSongs={songs.length}
        paginate={paginate}
      />
    </section>
  );
};

export default Songs;
