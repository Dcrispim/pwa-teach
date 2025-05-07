'use client'
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import SectionfiveVideo from '../section-five/section-five-chat';

export const ImageCol: React.FC<{ count?: number; images: string[]; className?: string, id?: number }> = ({ images, className, count, id = 0 }) => {
    const colRef = useRef<HTMLDivElement>(null);


    return (
        <div ref={colRef} className={cn('flex flex-col space-y-4', className)}>
            {Array.from({ length: count || images.length }).map((_, index) => (
                <AnimatedImageItem key={index} id={id + index+1} images={images} />
            ))}
        </div>
    );
};

const AnimatedImageItem = ({ images, id }: { images: string[], id: number }) => {
    const [currentImage, setCurrentImage] = useState(images[id]);
    const itemRef = useRef<HTMLDivElement>(null);

    const intervalRef = useRef<NodeJS.Timeout>(null);

    useEffect(() => {
        // Configurar intervalo para mudança de imagem
        intervalRef.current = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * images.length);
            setCurrentImage(images[randomIndex]);
        }, 3000 + Math.random() * 2000); // Intervalo aleatório entre 3-5s

        // Animação de entrada/saída
        gsap.fromTo(itemRef.current,
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 4,
                ease: "power2.inOut",
                onComplete: () => {
                    gsap.to(itemRef.current, {
                        opacity: 0.9,
                        duration: 5,
                        yoyo: true,
                        repeat: -1
                    });
                }
            }
        );

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (itemRef.current) gsap.killTweensOf(itemRef.current);
        };
    }, [images]);

    return (
        <div
            ref={itemRef}
            className="image-item w-full h-32 bg-cover bg-center border-2 border-blue-900 rounded 
                      transform transition-all duration-1000"
            style={{
                backgroundImage: `url(${currentImage})`,
            }}
        />
    );
};

export default SectionfiveVideo;