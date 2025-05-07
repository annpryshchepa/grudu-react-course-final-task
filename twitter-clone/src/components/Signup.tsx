import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/login.css';
import { emailRegexp } from '../constants';

export const Signup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!!name.trim() && email.trim().match(emailRegexp) && !!password.trim() && !!username.trim())
    {
      localStorage.setItem('user', JSON.stringify({ name, email }));
      navigate('/');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const storedItem = localStorage.getItem('user');
    const userObject = storedItem ? JSON.parse(storedItem) : null;
    if (userObject?.name && userObject?.email) {
      navigate('/');
    }
  }, [])

  return (
    <div className= "login-page">
      <form onSubmit={handleSubmit}>
        <h3 className="login-header"> Sign up </h3>
        <div>
          <input type='text' placeholder='Your full name' onChange={(e) => setName(e.target.value)}/>
          <input type='text' placeholder='Your user name' onChange={(e) => setUsername(e.target.value)}/>
          <input type='email' placeholder='Your email'  onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Your password' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type='submit' disabled={ isLoading }> Signup { isLoading && '...' } </button>
      </form>
      <p> Already have an account ? <Link to="/login"> Login </Link></p>
    </div>
  )
}