import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav'>
      <p>TunerApp</p>
      <button>
        <Link to='/'>Home</Link>
      </button>
      <button>
        <Link to='/songs'>Index</Link>
      </button>
      <button>
        <Link to='/songs/new'>New Songs</Link>
      </button>
    </nav>
  );
};
export default NavBar;
