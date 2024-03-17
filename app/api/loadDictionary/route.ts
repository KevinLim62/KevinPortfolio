import { insertDocuments, vectorDocumentType } from '@/lib/astraDB';
import { createEmbedding } from '@/lib/cohere';
import { createRedisHash } from '@/lib/redis';
import { randomUUID } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import os from 'os';

type chataiType = {
  question: string;
  answer: string;
};

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  try {
    body.data.forEach(async (el: chataiType) => {
      const id = randomUUID();
      //await createRedisHash(id, el.question, el.answer);
      const embedding = await createEmbedding([`${el.question} : ${el.answer}`]);
      const payload: vectorDocumentType = {
        _id: id,
        text: `${el.question} : ${el.answer}`,
        // @ts-ignore
        $vector: embedding.embeddings[0],
      };
      const result = await insertDocuments('chat_ai', payload);
      console.log('Database result: ', result);
    });
  } catch (error: any) {
    return NextResponse.json(`${error.message}`, {
      status: 500,
    });
  }

  return NextResponse.json('Successfully inserted documents', {
    status: 200,
  });
}
