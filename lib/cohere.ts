import { CohereClient } from 'cohere-ai';

export const cohere = new CohereClient({
  token: process.env.NEXT_COHERE_API_KEY,
});

export const knownPrompt = [
  {
    text: 'You are an intelligent chatbox for answering the user questions, your responses must be from the list of relevant documents as stated',
  },
];

export const unknownPrompt = [
  {
    text: 'You do have the information to answer this question, just reply with - I am sorry, I do not know this',
  },
];

export const createEmbedding = async (data: string[]) => {
  // Create Cohere Embedding
  return await cohere.embed({
    texts: data,
    model: 'embed-multilingual-light-v3.0',
    inputType: 'search_document',
  });
};
