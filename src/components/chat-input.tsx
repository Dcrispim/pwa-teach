import { cn } from '@/lib/utils';
import React, { ComponentProps } from 'react';

type ChatInputProps = {
    text?: string;
    type?: 'send' | 'receive';
} & ComponentProps<'div'>;

const ChatInput: React.FC<ChatInputProps> = ({ text, type, className, ...props }) => {
    return (
        <div
            className={cn(
                'shadow-md w-fit p-2 px-4 border border-gray-200',
                'rounded-2xl rounded-br-none rounded-bl-2xl bg-white self-end',
                type === 'receive' && 'bg-gray-700 text-white rounded-bl-none rounded-br-xl self-start',
                className // Include custom className for animations
            )}
            {...props}
        >
            <span className=".chat-item">{text}</span>
        </div>
    );
};

export default ChatInput;