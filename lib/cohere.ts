import { CohereClient } from 'cohere-ai';

export const cohere = new CohereClient({
  token: process.env.NEXT_COHERE_API_KEY,
});

export const preamble_override = 'You are an intelligent chatbox agent which assist portfolio website owner : Kevin Lim to answer questions about the owner. Your responses must be from the list of relevant documents as stated.';

export const documentsNotAvailablePrompt = [
  {
    text: 'There is no relevent documents provided, just reply with I am sorry, I do not know this as website owner did not discloure it to me.',
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
