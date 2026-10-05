import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import Message from './models/Message.js';

const app = express();
const port = process.env.PORT || 5000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, methods: ['GET', 'POST'] }));
app.use(express.json({ limit: '10kb' }));
app.get('/api/health', (_request, response) => response.json({ ok: true }));
const contactLimiter = rateLimit({ windowMs: 60 * 60 * 1000, limit: 5, standardHeaders: 'draft-7', legacyHeaders: false, message: { error: 'Too many messages. Please try again later.' } });
app.post('/api/contact', contactLimiter, async (request, response, next) => {
  const name = typeof request.body.name === 'string' ? request.body.name.trim() : '';
  const email = typeof request.body.email === 'string' ? request.body.email.trim().toLowerCase() : '';
  const message = typeof request.body.message === 'string' ? request.body.message.trim() : '';
  const website = typeof request.body.website === 'string' ? request.body.website.trim() : '';
  if (website) return response.status(200).json({ ok: true });
  const errors = {};
  if (name.length < 2 || name.length > 80) errors.name = 'Name must be between 2 and 80 characters.';
  if (!emailPattern.test(email) || email.length > 254) errors.email = 'Enter a valid email address.';
  if (message.length < 10 || message.length > 2000) errors.message = 'Message must be between 10 and 2000 characters.';
  if (Object.keys(errors).length) return response.status(400).json({ errors });
  try { await Message.create({ name, email, message }); return response.status(201).json({ ok: true }); } catch (error) { return next(error); }
});
app.use((error, _request, response, _next) => { console.error('Request failed:', error.name); response.status(500).json({ error: 'Unable to send the message.' }); });
async function start() { if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is required'); await mongoose.connect(process.env.MONGODB_URI); app.listen(port, () => console.log(`API listening on port ${port}`)); }
start().catch((error) => { console.error('Startup failed:', error.message); process.exit(1); });
