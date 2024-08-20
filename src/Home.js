import React, { useEffect, useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import Stars from './Stars';
import quotes from './quotes/quotes.json';

const Home = () => {
  const [quote, setQuote] = useState('');

  const text = "Hello! I am Aaron";
  const [formData, setFormData] = useState({
    to_name: 'Aaron',
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const fetchData = () => {
      const today = new Date().toISOString().split('T')[0];
      const storedQuoteData = localStorage.getItem('quoteData');
      if (storedQuoteData) {
        const { date, quote, author } = JSON.parse(storedQuoteData);
        if (date === today) {
          setQuote(`${quote} - ${author}`);
          return;
        }
      }

      let quoteIndex = localStorage.getItem('quoteIndex');
      if (quoteIndex === null) {
        quoteIndex = 0;
      }
      else {
        quoteIndex = parseInt(quoteIndex);
        quoteIndex++;
      }

      if(quoteIndex >= quotes.length) {
        quoteIndex = 0;
      }
  
      const randomQuote = quotes[quoteIndex];
      setQuote(`${randomQuote.quote} - ${randomQuote.author}`);
      localStorage.setItem('quoteData', JSON.stringify({ date: today, quote: randomQuote.quote, author: randomQuote.author }));
    };
  
    const setNextUpdate = () => {
      const now = new Date();
      const nextUpdate = new Date();
      nextUpdate.setUTCHours(12, 0, 0, 0);
      if (now >= nextUpdate) {
        nextUpdate.setUTCDate(nextUpdate.getUTCDate() + 1);
      }
      const timeUntilNextUpdate = nextUpdate - now;
      setTimeout(() => {
        fetchData();
        setNextUpdate();
      }, timeUntilNextUpdate);
    };
  
    fetchData();
    setNextUpdate();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_vy3ksei', 'template_spxm8i5', {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      to_name: formData.to_name
    }, '8IWxddpXuzVXYi6jP')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message.');
      });
  };

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
      <div className="Contact">
        <h2 className = "Contact-Header">Contact Me</h2>
        <form className = "Contact-Form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} style={{height: '100px', resize:'none'}}required />
          <button type="submit">Send</button>
        </form>
        </div>

        
    </div>
  );
};

export default Home;