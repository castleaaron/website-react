const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const MONGODB = process.env.MONGODB

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const quoteSchema = new mongoose.Schema({
  quote: String,
  author: String,
});

const Quote = mongoose.model('Quote', quoteSchema);

let dailyQuote = null;

// Function to fetch a random quote
const fetchRandomQuote = async () => {
  try {
    const count = await Quote.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomQuote = await Quote.findOne().skip(randomIndex);
    dailyQuote = randomQuote;
    console.log('Fetched new daily quote:', dailyQuote);
  } catch (error) {
    console.error('Error fetching random quote:', error);
  }
};

// Schedule the task to run at 0 GMT every day
cron.schedule('0 0 * * *', () => {
  fetchRandomQuote();
});

// Initial fetch
fetchRandomQuote();

// API endpoint to get the daily quote
app.get('/api/quote', (req, res) => {
  if (dailyQuote) {
    res.json(dailyQuote);
  } else {
    res.status(404).json({ message: 'No quote available' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});