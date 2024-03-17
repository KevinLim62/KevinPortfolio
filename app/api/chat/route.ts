import { retrieveDocumentsBySimilarity } from '@/lib/astraDB';
import { cohere, createEmbedding, knownPrompt, unknownPrompt } from '@/lib/cohere';
import { FindOptions } from '@datastax/astra-db-ts/dist/collections';
import { Cohere } from 'cohere-ai';
import { CohereStream, StreamingTextResponse } from 'ai';
import crypto from 'crypto';
import os from 'os';

// export const runtime = 'edge';

// IMPORTANT! Set the dynamic to force-dynamic
// Prevent nextjs to cache this route
export const dynamic = 'force-dynamic';

const toCohereRole = (role: string): Cohere.ChatMessageRole => {
  if (role === 'user') {
    return Cohere.ChatMessageRole.User;
  }
  return Cohere.ChatMessageRole.Chatbot;
};

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();
  const chatHistory = messages.map((message: any) => ({
    message: message.content,
    role: toCohereRole(message.role),
  }));
  const lastMessage = chatHistory.pop();

  try {
    const embedding = await createEmbedding([lastMessage.message]);
    const searchOptions: FindOptions = {
      sort: {
        // @ts-ignore
        $vector: embedding.embeddings[0],
      },
      limit: 2,
      includeSimilarity: true,
    };
    const documents = (await retrieveDocumentsBySimilarity('chat_ai', searchOptions)).map((doc) => {
      if (doc.$similarity > 0.65) {
        return {
          id: doc._id,
          title: doc.text,
        };
      } else {
        return undefined;
      }
    });
    const chatStreamDocuments: any[] = documents.filter((doc) => doc !== undefined);
    console.log(chatStreamDocuments);

    const response = await cohere.chatStream({
      message: lastMessage.message,
      chatHistory: chatHistory.slice(-5),
      documents: chatStreamDocuments.length >= 1 ? chatStreamDocuments : unknownPrompt,
    });

    const stream = new ReadableStream({
      async start(controller) {
        for await (const event of response) {
          if (event.eventType === 'text-generation') {
            controller.enqueue(event.text);
          }
        }
        controller.close();
      },
    });

    return new Response(stream);
  } catch (error) {
    console.log(error);
  }
}
