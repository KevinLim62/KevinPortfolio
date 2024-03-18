'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useChat } from 'ai/react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { PiChatsCircleFill } from 'react-icons/pi';

const variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

type ChatboxProps = {
  className?: string;
  animationDelay?: number;
};

const Chatbox: React.FC<ChatboxProps> = ({ className, animationDelay = 5 }) => {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Popover>
      <PopoverTrigger className={cn('fixed bottom-[120px] right-[30px] z-50', className)}>
        <motion.div variants={variants} initial='initial' animate='animate' transition={{ delay: animationDelay, duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}>
          <PiChatsCircleFill size={30} className='transition-all hover:scale-110 hover:opacity-70' />
        </motion.div>
      </PopoverTrigger>
      <PopoverContent className='p-0 min-w-[400px] min-h-[300px]'>
        <Card className='p-4'>
          <CardHeader className='m-0 pb-2'>
            <h1 className='text-md text-center font-bold'>Any queries? ask my chatbox</h1>
          </CardHeader>
          <CardContent className='m-0 p-0'>
            <div className='flex flex-col justify-between w-full max-w-md mx-auto relative'>
              <div ref={chatContainerRef} className='flex-grow h-[270px] overflow-y-auto space-y-2 mb-5'>
                {messages.map((m) => (
                  <div key={m.id} className={`whitespace-pre-wrap text-justify ${m.role === 'user' ? 'text-foreground' : 'text-sky-500/70'}`}>
                    {m.role === 'user' ? 'Question: ' : 'Answer: '}
                    {m.content}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit}>
                <input className='mt-auto w-full p-1 border border-gray-300 rounded shadow-xl' value={input} placeholder='Say something...' onChange={handleInputChange} />
              </form>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default Chatbox;
