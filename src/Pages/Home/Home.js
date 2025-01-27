import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import './Home.css';



const Home = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // const text = "Hello! I am Aaron";
  // const [formData, setFormData] = useState({
  //   to_name: 'Aaron',
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };



  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs.send('service_vy3ksei', 'template_spxm8i5', {
  //     name: formData.name,
  //     email: formData.email,
  //     message: formData.message,
  //     to_name: formData.to_name
  //   }, '8IWxddpXuzVXYi6jP')
  //     .then((result) => {
  //       console.log(result.text);
  //       alert('Message sent successfully!');
  //     }, (error) => {
  //       console.log(error.text);
  //       alert('Failed to send message.');
  //     });
  // };

    useEffect(() => {
      fetch('http://localhost:5000/api/quote')
        .then((response) => response.json())
        .then((data) => {
          setQuote(data.quote);
          setAuthor(data.author);
        })
        .catch((error) => {
          console.error('Error fetching quote:', error);
        });
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