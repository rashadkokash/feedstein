import { MongoClient } from 'mongodb';

import { MONGO_URL, DB_NAME } from '../config';

const client = new MongoClient(MONGO_URL);

export async function getMongoDBClient() {
  await client.connect();
  return client;
}

export async function getDB() {
  const client = await getMongoDBClient();
  return client.db(DB_NAME);
}
