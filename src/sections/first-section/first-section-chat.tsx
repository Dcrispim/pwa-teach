'use server'
import ChatContainer from '@/components/chat-container';
import React from 'react';
import BackgroundGroupOne from './background-group-one';
import BackgroundGroupTwo from './background-group-two';
import ParticleIcons from '@/components/particle-container';
import { cn } from '@/lib/utils';
import { getI18n } from '@/i18n/translation';




const FirstSectionChat: React.FC = async ({ }) => {
    const i18n = await getI18n()
    return (
        <div className='relative  md:w-156 w-full px-4  h-80 md:h-120 flex justify-center'>
            <div className='flex w-full  justify-between'>
                <BackgroundGroupOne />
                <BackgroundGroupTwo />

                <ParticleIcons
                    className={cn('absolute bottom-20 right-40')}
                    iconClassName={cn('text-gray-300 fill-white')}
                    w={150}
                    h={150}
                    icons={['CloudLightning', 'Terminal', 'Box']}
                    count={1}
                    iconSize={40}
                    animationIn={{ delay: 2, scale:0.9}}
                    animationOut={{ delay: 2, scale:1}}
                    duration={1}
                />
            </div>
            <ChatContainer
                className='absolute flex justify-center w-full pl-20 pr-30 md:pl-30 md:pr-60 text-xs md:text-lg'
                message={[
                    [i18n('Nunc, at libero neque'), 'send'],
                    [i18n('Viverra sed'), 'send'],
                    [i18n('Turpis platea nunc mattis'), 'receive'],
                    [i18n('Vitae viverra ut non'), 'receive'],
                ]} />
        </div>
    );
};

export default FirstSectionChat;