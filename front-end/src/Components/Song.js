import { Link } from 'react-router-dom';

function Tuner({ song,index }) {
  const favorites = song.is_favorite ? (
    <span>🌟</span>
  ) : (
    <span>&nbsp; &nbsp; &nbsp;</span>
  );
  return (
    <tr className='Tuner'>
      <td>{`${index}`}</td>
      <td>{favorites}</td>
      <td>
        <Link to={`/songs/${index}`}>{song.spanname}</Link>
      </td>
      <td>
        {/* <a href={log.captainName} target='_blank' rel='noreferrer'> */}
        {song.artist}
        {/* </a> */}
      </td>
      <td>{song.time}</td>
    </tr>
  );
}

export default Tuner;
