import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Stars from './Stars';

const Home = () => {
  const [quote, setQuote] = useState('');

  const text = "Hello! I am Aaron";

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date().toISOString().split('T')[0];
      const storedData = localStorage.getItem('quoteData');
      if (storedData && JSON.parse(storedData).date === today) {
        setQuote(JSON.parse(storedData).quote);
      } else {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: {
            'X-Api-Key': 'nsfj+GViXFNzjihnnLXxPA==XhEydN2S8ZdohBmo'
          }
        });
        setQuote(response.data[0].quote + ' - ' + response.data[0].author);
        localStorage.setItem('quoteData', JSON.stringify({ date: today, quote: response.data[0].quote }));
      }
    };
    
    
    

    fetchData();

  }, []);

  return (
    <div className="App-header">
      <Stars />

      <img src={require('./images/aaron_castle.jpeg')} className="App-logo" alt="logo" />
      <p className = "Intro">
      <p className = "letter">
      {text.split('').map((letter, index) => (
      <span key={index} className="letter" style={{ animationDelay: `${index * 0.05}s` }}>
        {letter === ' ' ? '\u00A0' : letter}
      </span>
      
    ))}
    <span className="hand">👋</span>
    </p>
      </p>

      <p className = "Quote-header">Quote of the day:</p>
      <p className = "Quote">{quote}</p>
    </div>
  );
};

export default Home;