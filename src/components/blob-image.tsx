import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import ParticleIcons from './particle-container';
type BlobImageProps = {
    src?: string
    bgUrl?: string
    imgClassName?: string
    className?: string
    size?: number
    particleColor?: 'orange' | 'yellow'
    orientation?: 'left' | 'right'
}
const BlobImage: React.FC<BlobImageProps> = ({ src,
    bgUrl,
    orientation = 'left',
    imgClassName,
    particleColor,
    className
}) => {

    return (
        <div
            className={cn(
                'flex relative h-full w-full justify-center',
                orientation === 'right' ? 'items-end' : 'items-start',
                className)}
            style={{
                backgroundImage: `url("${bgUrl}")`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `${orientation} ${orientation === 'right' ? 'bottom' : 'top'}`,
            }}
        >


            <ParticleIcons
                className={cn('absolute top-0', orientation === 'left' ? 'left-0' : 'right-0')}
                iconClassName={cn(particleColor === 'orange' ? 'fill-orange-400 text-orange-400' : 'fill-yellow-400 text-yellow-400')}
                w={167}
                h={248}
                icons={['PlusIcon', 'Circle', 'StarIcon', 'X']}
                count={2}
                iconSize={15}
                animationOut={{ delay: 3 }}
                duration={1}
            />
            <Image
            width={167}
            height={248}
            objectFit='bottom center'
                className={cn(' w-full h-fit rounded-b-full relative', imgClassName)}
                alt='image-1'
                
                src={src || '/assets/image-2.png'}
            />
        </div>
    );
};

export default BlobImage;