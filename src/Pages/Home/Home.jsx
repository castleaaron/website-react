import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import './Home.css';
import quotes from '../../quotes.json'
const Home = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');


  useEffect(() => {
    const getQuote = async () => {
      try {
        // Fetch a random quote from the quotes.json file
        const now = new Date();
        const startOfYear = new Date(now.getFullYear(), 0, 1); // January 1st of current year
        const daysPastJan1 = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));
        const dailyIndex = daysPastJan1 % quotes.length;
        console.log('Daily Index:', dailyIndex); // Log the index for debugging
        const randomQuote = quotes[dailyIndex];
        
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    }
  
    getQuote();
  }, []);
  
      
  return (
    <div className="App-header">
      <img src={require('../../images/aaron_castle.jpeg')} className="App-logo" alt="logo" />
      <p className="Intro">
          Hello! I am Aaron
          <span className="hand">👋</span>
      </p>

      <p className="Quote-header">Quote of the day:
      <p className="Quote">{quote} - {author}</p></p>

    </div>
  );
};

export default Home;