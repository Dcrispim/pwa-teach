import LessonCard from '@/components/lesson-card';
import { cn } from '@/lib/utils';
import { PlayIcon } from 'lucide-react';
import React from 'react';

const SectionfiveVideo: React.FC = ({ }) => {

    return (
        <div className='relative w-[50%] flex justify-center'>
            <div className='flex justify-center w-full h-auto relative t-0 l-0 -z-10'>
                
                <VideoContainer />
                <div className='flex w-full gap-4 absolute top-[50%] -left-15 '>
                    <LessonCard
                        title='The map of mathematics'
                        description='Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
                        type='featured' />
                    <LessonCard
                        title='Design for how people think'
                        description='Aliquam ut euismod condimentum elementum ultricies volutpat sit non. '
                        type='popular' />
                    <LessonCard
                        title='International & commercial law'
                        description='Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui. '
                        type='new' />
                </div>
            </div>

        </div>
    );
};


const VideoContainer: React.FC = ({ }) => {
    const buttonPlayer = 'rounded-full bg-red-600 w-2 h-2'
    const flexCenter = 'flex justify-center items-center'

    return (
        <div className={cn(
            flexCenter,
            'flex-col',
            'items-center shadow-2xl',
            'border border-gray-200',
            'w-100 h-fit relative',
            'rounded-2xl relative'
        )}>
            <div className={cn(
                'flex justify-start',
                'gap-1 p-4 top-0 left-0',
                'bg-white w-full h-10',
                'rounded-2xl relative rounded-b-none'
            )
            }>
                <div className={cn(buttonPlayer, 'bg-red-600')} />
                <div className={cn(buttonPlayer, 'bg-yellow-400')} />
                <div className={cn(buttonPlayer, 'bg-green-400')} />
            </div>
            <div className={cn(
                flexCenter,

                ' w-full h-53 bg-white rounded-2xl',
                'rounded-t-none relative'
            )}>

                <div className='p-5 flex  shadow-2xl shadow-black justify-center items-center text-white bg-gray-400 opacity-50 rounded-full '>

                    <PlayIcon size={60} className='' />
                </div>
            </div>
        </div>
    );
};

export default SectionfiveVideo;