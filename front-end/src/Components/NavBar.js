import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='flex-nav'>
      <div className='navbtn-grp'>
        {/* <p>TunerApp</p> */}
        <button style={{ background: '#20B2AA', margin: '0.5rem' }}>
          <Link style={{ color: 'black', textDecoration: 'none' }} to='/'>
            Home
          </Link>
        </button>
        <button style={{ background: '#20B2AA', margin: '0.5rem' }}>
          <Link style={{ color: 'black', textDecoration: 'none' }} to='/songs'>
            Index
          </Link>
        </button>
        <button style={{ background: '#20B2AA', margin: '0.5rem' }}>
          <Link
            style={{ color: 'black', textDecoration: 'none' }}
            to='/songs/new'
          >
            New
          </Link>
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
