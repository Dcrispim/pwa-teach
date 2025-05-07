'use client'
import { PlaneFlying } from '@/components/shapes/plane-flying';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Plane: React.FC = ({ }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const startRef = useRef<HTMLDivElement>(null);
    const planeRef = useRef<SVGSVGElement>(null);

    useLayoutEffect(() => {
        
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(divRef.current, {
            x: 200, 
            scrollTrigger: {
                trigger: startRef.current,
                start: 'top 50%', 
                end: 'bottom 20%', 
                scrub: true, 
            },
        });

        
        gsap.to(planeRef.current, {
            y: -50, 
            x: 200, 
            scrollTrigger: {
                trigger: divRef.current,
                start: 'top 0%',
                end: 'bottom 20%',

                scrub:true, 
            },
            ease: "power1.inOut", 

        });
    }, []);
    return (
        <div>
            <div ref={startRef} className='absolute top-50'/>
            <div
            ref={divRef}
            className="absolute border-b-4  h-5 md:h-12 w-16   border-yellow-400 top-0 right-50 md:right-100"
        >
            
            <PlaneFlying
                ref={planeRef}
                
                className="absolute -top-7 md:top-0"
            />
        </div>
        </div>
    );
};

export default Plane;