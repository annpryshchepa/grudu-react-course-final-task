import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/home-page.css"

import { tweets } from '../constants';
import { getInitials } from '../helper';

export const HomePage = () => {
  const navigate = useNavigate();
  const [tweet, setTweet] = useState('');

  const storedItem = localStorage.getItem('user');
  const userObject = storedItem ? JSON.parse(storedItem) : null;


  useEffect(() => {
    if ((!userObject?.name && !userObject?.email) || !userObject) {
      navigate('/login');
    }
  }, [])
    

    const handleAddTweet = () => {
      tweets.unshift({ user: userObject?.name, content: tweet});
      setTweet('');
    };

  return (
   <div className="app">
      <header className="header">
        <div className="logo">🐦 Another Twitter Clone</div>
        <div className="user-info">
          {userObject.name} <span className="avatar">{getInitials(userObject.name)}</span>
        </div>
      </header>
      <main className="main">
        <textarea
          className="tweet-box"
          placeholder="What&apos;s happening?"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />
        <button className="tweet-button" onClick={handleAddTweet}>Tweet</button>
        <div className="feed">
          {tweets.map((t, index) => (
            <div key={index} className="tweet">
              <div className="avatar">{getInitials(t.user)}</div>
              <div className="tweet-content">
                <strong>{t.user}</strong>
                <p>{t.content}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}