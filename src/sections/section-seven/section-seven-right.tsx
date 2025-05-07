import LessonCard from '@/components/lesson-card';
import ParticleIcons from '@/components/particle-container';
import { BlobSeven } from '@/components/shapes/blob-seven';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';



const SectionSevenRight: React.FC = ({ }) => {

    return (
        
        <div className='w-full md:w-[50%] flex justify-center'>
            
            <div className='flex justify-center w-full h-full max-h-100 relative t-0 l-0 -z-10'>
                
                <BlobSeven className=' absolute top-0 left-0 scale-80  -z-10' />
                <ParticleIcons
                className={cn('absolute top-0 -z-9')}
                    iconClassName={cn('fill-yellow-400 text-yellow-400')}
                    w={400}
                    h={500}
                    icons={['PlusIcon', 'Circle', 'StarIcon', 'X']}
                    count={10}
                    iconSize={15}
                    animationOut={{ delay: 3 }}
                    duration={1}
                />
                
                <div className='flex w-full flex-wrap gap-4 p-4'>
                    <div className='flex gap-4 w-full'>
                        <LessonCard
                        className='w-full h-fit'
                            title='Design for how people think'
                            description='Aliquam ut euismod condimentum elementum ultricies volutpat sit non.'
                            type='popular'
                        />
                        
                        <div className='flex items-end w-140  relative'>
                            <Image width={1000} height={1000} className='rounded-2xl border-4 w-60 border-white' src={'/assets/image-17.jpg'} alt={'/assets/image-17.jpg'} />
                            <Image width={1000} height={1000} className='hidden md:flex absolute bottom-10 right-0 rounded-full size-20 object-cover border-4 border-yellow-400' src={'/assets/image-18.jpg'} alt={'/assets/image-18.jpg'} />

                        </div>
                    </div>
                    <div className='flex gap-4 w-full'>
                        
                        <div className='flex items-end'>
                            <Image width={1000} height={1000} className='rounded-2xl border-4 border-white' src={'/assets/image-19.jpg'} alt={'/assets/image-19.jpg'} />
                        </div>
                        
                        <div className='flex items-end'>
                            <Image width={1000} height={1000} className='rounded-2xl border-4 border-white' src={'/assets/image-20.jpg'} alt={'/assets/image-20.jpg'} />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};





export default SectionSevenRight;