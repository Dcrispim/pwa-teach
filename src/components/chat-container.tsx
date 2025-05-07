'use client'
import React, { useEffect, useRef } from 'react';
import ChatInput from './chat-input';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

type ChatContainerProps = {
    message: [string, 'send' | 'receive'][];
    className?: string;
};

const ChatContainer: React.FC<ChatContainerProps> = ({ message, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const chatItems = Array.from(containerRef.current.querySelectorAll('.chat-item'));

            const animateMessage = (index: number) => {
                if (index >= chatItems.length) return;

                const item = chatItems[index];


                gsap.fromTo(
                    item,
                    { opacity: 0, scale: 0.8, repeat: 0 },
                    { opacity: 1, scale: 1, duration: 0.3, repeat: 0 }

                );


                setTimeout(() => animateMessage(index + 1), 1000); // Wait for the animation to complete before starting the next
            };

            animateMessage(0); // Start animating the first message
        }
    }, [message]);

    return (
        <div ref={containerRef} className={cn('flex flex-col gap-5 bg-transparent sm:w-full', className)}>
            {message.map(([message, type], index) => {
                return (
                    <ChatInput
                        key={`${index}-${message}`}
                        id={index.toString()}
                        text={message}
                        type={type}
                        className="chat-item opacity-0"
                    />
                );
            })}
        </div>
    );
};

export default ChatContainer;