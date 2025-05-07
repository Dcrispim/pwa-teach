'use client'
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import Image from 'next/image';
import React, { useLayoutEffect, useRef } from 'react';

interface ParticleImagesProps extends React.ComponentProps<'div'> {
    images: string[];
    w: number;
    h: number;
    count?: number;
    duration?: number;
    animationIn?: gsap.TweenVars;
    animationOut?: gsap.TweenVars;
    imgClassName?: string
}

const ParticleImages: React.FC<ParticleImagesProps> = ({
    images,
    w,
    h,
    animationIn,
    animationOut,
    className,
    count = 1,
    duration = 0.5,
    imgClassName,
    ...props
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const timeoutsRef = useRef<number[]>([]);

    useLayoutEffect(() => {
        const elements = containerRef.current?.children;
        if (!elements) return;

        Array.from(elements).forEach((element) => {
            const animate = () => {
                const _duration =  Math.random()*duration * 1000
                if (gsap.isTweening(element)) {
                    const timeoutId = window.setTimeout(animate, _duration);
                    timeoutsRef.current.push(timeoutId);
                    return;
                }

                const startX = Math.random() * w;
                const startY = Math.random() * h;

                const timeline = gsap.timeline({
                    onComplete: () => {
                        const timeoutId = window.setTimeout(animate, _duration);
                        timeoutsRef.current.push(timeoutId);
                    },
                });

                timeline
                    .fromTo(
                        element,
                        {
                            opacity: 0,
                            left: `${startX}px`,
                            top: `${startY}px`,
                            rotationY: 0,
                            ...animationIn,
                        },
                        {
                            opacity: 1,
                            rotationY: 180, // Flip animation
                            duration,
                            ease: 'power1.inOut',
                            ...animationOut,
                        }
                    )
                    .to(element, {
                        opacity: 0,
                        rotationY: 360, // Complete flip
                        duration,
                        ease: 'power1.inOut',
                        ...animationIn,
                    });
            };

            const timeoutId = window.setTimeout(animate, Math.random()*duration * 1000);
            timeoutsRef.current.push(timeoutId);
        });

        return () => {
            timeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
            timeoutsRef.current = [];
        };
    }, [images, w, h, duration, animationIn, animationOut]);

    return (
        <div
            ref={containerRef}
            className={cn("relative", className)}
            style={{ width: w, height: h }}
            {...props}
        >
            {Array.from({ length: images.length * count }).map((_, index) => {
                const imageIndex = index % images.length;
                const imageSrc = images[imageIndex];

                return (

                    <Image height={24} width={24} key={index} src={imageSrc} alt={`avatar-${index}`} className={cn(" absolute w-full h-full object-cover", imgClassName)} />

                );
            })}
        </div>
    );
};

export default ParticleImages;
