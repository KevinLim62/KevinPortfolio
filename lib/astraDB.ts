import { AstraDB } from '@datastax/astra-db-ts';
import { FindOptions } from '@datastax/astra-db-ts/dist/collections';

export type vectorDocumentType = {
  _id: string;
  text: string;
  $vector: number[];
};

const { ASTRA_DB_APPLICATION_TOKEN, ASTRA_DB_API_ENDPOINT } = process.env;
const db = new AstraDB(ASTRA_DB_APPLICATION_TOKEN, ASTRA_DB_API_ENDPOINT, 'kevinPortfolio');

export default function conectAstraDB() {
  try {
    return db;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export const createCollection = async (collectionName: string, option?: any) => {
  // Create collections
  await db.createCollection('chat_ai', {
    vector: {
      dimension: 384,
      metric: 'cosine',
    },
  });
};

export const insertDocuments = async (collectionName: string, data: vectorDocumentType) => {
  const collection = await db.collection(collectionName);
  const result = await collection.insertOne(data);

  return result;
};

// Define the search options
//   const options = {
//     sort: {
//       $vector: [0.15, 0.1, 0.1, 0.35, 0.55],
//     },
//     limit: 5,
//   };

export const retrieveDocumentsBySimilarity = async (collectionName: string, searchOption: FindOptions) => {
  const collection = await db.collection(collectionName);

  // Perform a similarity search
  return await collection.find({}, searchOption).toArray();
};
