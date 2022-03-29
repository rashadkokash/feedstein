export const MONGO_URL =
  process.env.MONGO_URL || 'mongodb://localhost:27017/feedstein';
export const DB_NAME = process.env.DB_NAME || 'feedstein';
export const PORT = process.env.PORT || 7000;
export const SMTP_USER = process.env.SMTP_USER;
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
export const SMTP_HOST = process.env.SMTP_HOST;
export const SMTP_PORT = Number.parseInt(process.env.SMTP_PORT, 10) || 587;
export const SMTP_FROM = process.env.SMTP_FROM;
export const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
