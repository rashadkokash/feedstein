import { MongoClient } from 'mongodb';

import { MONGO_URL } from '../config';

const client = new MongoClient(MONGO_URL);

export async function getMongoDBClient() {
  await client.connect();
  return client;
}
