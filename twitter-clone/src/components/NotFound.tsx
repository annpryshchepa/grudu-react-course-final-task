import { Link } from 'react-router-dom';
import '../styles/not-found.css';

export const NotFound = () => {
  return (
    <div className='center'>
    <div className='wrapper'>
    <p>
    Oops, looks like this page doesn&apos;t exist
    </p>
    <Link to='/'>Back to Home</Link>
    </div>
      </div>
  )
}