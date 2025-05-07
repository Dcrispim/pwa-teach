'use client'
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import * as Lucide from 'lucide-react';
import React, { JSXElementConstructor, useLayoutEffect, useRef } from 'react';
import { CloudReload } from './icons/cloud-reload';
const Icons = { ...Lucide, CloudReload }
export type ParticleIconsType = (keyof typeof Icons)[]
interface ParticleContainerProps extends React.ComponentProps<'div'> {
    icons: ParticleIconsType;
    w: number;
    h: number;
    count?: number;
    iconSize?: number
    iconClassName?: string
    duration?: number;
    animationIn?: gsap.TweenVars;
    animationOut?: gsap.TweenVars;
}

const ParticleIcons: React.FC<ParticleContainerProps> = ({
    icons,
    w,
    h,
    animationIn,
    animationOut,
    iconClassName,
    className,
    iconSize = 24,
    count = 1,
    duration = 0.5,
    ...props }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const timeoutsRef = useRef<number[]>([]);

    useLayoutEffect(() => {
        const elements = containerRef.current?.children;
        if (!elements) return;

        Array.from(elements).forEach((element) => {
            const animate = () => {
                if (gsap.isTweening(element)) {

                    const timeoutId = window.setTimeout(animate, Math.random() * duration * 1000);
                    timeoutsRef.current.push(timeoutId);
                    return;
                }

                const startX = Math.random() * w - iconSize;
                const startY = Math.random() * h - iconSize;

                const timeline = gsap.timeline({
                    onComplete: () => {
                        const timeoutId = window.setTimeout(animate, Math.random() * duration * 1000);
                        timeoutsRef.current.push(timeoutId);
                    },
                });

                timeline
                    .fromTo(
                        element,
                        {
                            scale: 0,
                            left: `${startX}px`,
                            top: `${startY}px`,
                            ...animationIn,
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            duration,
                            ease: 'power1.inOut',
                            ...animationOut,
                        }
                    )
                    .to(element, {
                        scale: 0,
                        duration,
                        ease: 'power1.inOut',
                        ...animationIn,
                    });
            };

            const timeoutId = window.setTimeout(animate, duration * 1000);
            timeoutsRef.current.push(timeoutId);
        });

        return () => {

            timeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
            timeoutsRef.current = [];
        };
    }, [icons, w, h, duration, animationIn, animationOut, iconSize]);

    return (
        <div
            ref={containerRef}
            className={cn("relative", className)}
            style={{ width: w, height: h }}
            {...props}
        >
            {Array.from({ length: icons.length * count }).map((_, index) => {
                const iconIndex = index % icons.length;
                const Icon = Icons[icons[iconIndex] as keyof typeof Lucide] as JSXElementConstructor<Record<string, unknown>>;

                if (!Icon) {
                    console.warn(`Icon "${icons[iconIndex]}" not found in Lucide icons. Skipping this icon.`);
                    return null;
                }

                return (
                    <div key={index} className="absolute scale-0">
                        <Icon size={iconSize} className={iconClassName} />
                    </div>
                );
            })}
        </div>
    );
};

export default ParticleIcons;
