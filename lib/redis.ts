import { createClient } from 'redis';

const redisClient = createClient({
  password: process.env.REDIS_CLIENT_PASSWORD,
  socket: {
    host: process.env.REDIS_CLIENT_HOST,
    port: Number(process.env.REDIS_CLIENT_PORT),
  },
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

if (!redisClient.isOpen) {
  redisClient.connect();
}

export { redisClient };

export const createRedisHash = async (id: string, question: string, answer: string) => {
  return await redisClient.hSet(`chatai:${id}`, {
    question: question,
    answer: answer,
  });
};
