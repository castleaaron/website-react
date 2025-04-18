import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(mongoose => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default async function handler(req, res) {
  await connectToDatabase();

  const Quote = mongoose.models.Quote || mongoose.model('Quote', new mongoose.Schema({
    quote: String,
    author: String,
  }));

  try {
    const quote = await Quote.findOne().sort({ _id: -1 }).exec();
    if (!quote) {
      return res.status(404).json({ message: 'No quotes found' });
    }
    res.status(200).json(quote);
  } catch (error) {
    console.error('Error getting quote:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
