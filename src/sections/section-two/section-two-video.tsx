import LessonCard from '@/components/lesson-card';
import ParticleIcons from '@/components/particle-container';
import { BlobThree } from '@/components/shapes/blob-three';
import { cn } from '@/lib/utils';
import { PlayIcon } from 'lucide-react';
import React from 'react';
import { ImageSlider } from './video-container';


const SectionTwoVideo: React.FC= ({ }) => {

    return (
        <div className='relative w-full px-4 md:w-[50%] flex justify-center'>
            <BlobThree className='absolute md:-top-20 md:-left-30 md:scale-80 rotate-15 -z-10 ' />
            <ParticleIcons
                className={cn('absolute top-0', '-left-30')}
                iconClassName={cn('fill-yellow-400 text-yellow-400')}
                w={300}
                h={300}
                icons={['PlusIcon', 'Circle', 'StarIcon', 'X']}
                count={2}
                iconSize={15}
                animationOut={{ delay: 3 }}
                duration={1}
            />
            <VideoContainer images={[
                '/assets/image-video-1.jpg',
                '/assets/image-video-2.jpg',
                '/assets/image-video-3.jpg',

            ]}

            />

            <div className='absolute md:w-full px-6 grid grid-cols-2 md:grid-cols-3 gap-3 h-60 w-100 top-[80%]'>
                <LessonCard
                    title='The map of mathematics'
                    description='Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
                    type='featured' />
                <LessonCard
                    title='Design for how people think'
                    description='Aliquam ut euismod condimentum elementum ultricies volutpat sit non.'
                    type='popular' />
                <LessonCard
                    title='International & commercial law'
                    description='Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.'
                    type='new'
                    className='hidden md:flex' />
            </div>

        </div>
    );
};

/*

 <CarouselItem className='basis-1/2 basis-'>
                                <LessonCard
                                    title='The map of mathematics'
                                    description='Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
                                    type='featured' />
                            </CarouselItem>
                            <CarouselItem className='basis-1/2 basis-'>
                                <LessonCard
                                    title='Design for how people think'
                                    description='Aliquam ut euismod condimentum elementum ultricies volutpat sit non. '
                                    type='popular' />
                            </CarouselItem>
                            <CarouselItem className='basis-1/2 basis-'>
                                <LessonCard
                                    title='International & commercial law'
                                    description='Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui. '
                                    type='new' />
                            </CarouselItem>
*/

type VideoContainerProps = {
    images: string[]
}
export const VideoContainer: React.FC<VideoContainerProps> = ({ images }) => {
    
    const buttonPlayer = 'rounded-full bg-red-600 w-2 h-2';
    const flexCenter = 'flex justify-center items-center';



    return (
        <div className={cn(
            flexCenter,
            'flex-col',
            'items-center shadow-2xl',
            'border border-gray-200',
            'w-150 h-70 md:h-88 relative',
            'rounded-2xl relative'
        )}>
            <div className={cn(
                'flex justify-start',
                'gap-1 p-4 top-0 left-0',
                'bg-white w-full h-10',
                'rounded-2xl relative rounded-b-none'
            )}>
                <div className={cn(buttonPlayer, 'bg-red-600')} />
                <div className={cn(buttonPlayer, 'bg-yellow-400')} />
                <div className={cn(buttonPlayer, 'bg-green-400')} />
            </div>
            <div className={cn(
                flexCenter,
                'w-full h-full bg-white rounded-2xl',
                'rounded-t-none relative'
            )}>

                <ImageSlider images={images} />
                <div className='absolute p-5 self-center flex shadow-2xl shadow-black justify-center items-center text-white bg-gray-400 opacity-50 rounded-full'>
                    <PlayIcon size={60} className='' />
                </div>
            </div>
        </div>
    );
};



export default SectionTwoVideo;

