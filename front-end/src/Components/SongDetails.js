import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Card, Button } from "react-bootstrap";
const API = process.env.REACT_APP_API_URL;

const SongDetails = () => {
  const [song, setSong] = useState([]);

  let navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/api/songs/${id}`)
      .then((response) => setSong(response.data.payload))
      .catch(() => navigate('/not-found'));
    // .catch((error) => console.error("catch", error));
  }, [id, navigate]);


 //Delete functions


 var toastMixin = Swal.mixin({
  toast: true,
  icon: 'success',
  title: 'General Title',
  animation: false,
  position: 'top-right',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});


  const deleteConfirmationBox = () => {
    document.querySelector('.second').addEventListener('click', function () {
      toastMixin.fire({
        animation: true,
        title: 'Successfully Deleted',
      });
    });
  };


  const handleDelete = () => {
    axios
      .delete(`${API}/api/songs/${id}`)
      .then(() => {
        deleteConfirmationBox();
        navigate(`/songs`);
      })
      .catch((e) => console.error(e));
  };

  const confirmDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
      }
    });
  };


  return (
    <Card style={{ width: "25rem",backgroundColor: '#00beb2', padding: '1rem'  }} className="m-auto mt-5">
    <Card.Body>
      <Card.Title>{song.is_favorite ? (
            <span>&#11088;</span>
          ) : (
            <span className='X'> &#10060;</span>
          )}
          {song.name}- By {song.artist}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{song.album}</Card.Subtitle>
      <Card.Text>
      Time:{(song.time / 60).toFixed(2).replace('.', ':')}
      </Card.Text>
      <div className='showNavigation'>
        <div>
          {' '}
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {' '}
          <Link to={`/songs/${id}/edit`}>
            {/* //edited song.id to id */}
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {' '}
          <Link to={`/songs`}>
          
            <button onClick={confirmDelete}>Delete</button>
          </Link>
        </div>
      </div>
    </Card.Body>
  </Card>
    //  <article >
    
    //   <div className="text-center" style={{width: "25rem"}} > 
    //   <div style={{ backgroundColor: '#00beb2', padding: '1rem' }}>
    //     <h3>
    //       {song.is_favorite ? (
    //         <span>&#11088;</span>
    //       ) : (
    //         <span className='X'> &#10060;</span>
    //       )}
    //       {song.name}- By {song.artist}
    //     </h3>
    //     <h5>{song.album}</h5>
    //     <h6>Time:{(song.time / 60).toFixed(2).replace('.', ':')}</h6>
    //   </div>
    //   <div className='showNavigation'>
    //     <div>
    //       {' '}
    //       <Link to={`/songs`}>
    //         <button>Back</button>
    //       </Link>
    //     </div>
    //     <div>
    //       {' '}
    //       <Link to={`/songs/${id}/edit`}>
    //         {/* //edited song.id to id */}
    //         <button>Edit</button>
    //       </Link>
    //     </div>
    //     <div>
    //       {' '}
    //       <Link to={`/songs`}>
          
    //         <button onClick={confirmDelete}>Delete</button>
    //       </Link>
    //     </div>
    //   </div>
    //   </div>
   
    //  </article>
  );
};

export default SongDetails;
