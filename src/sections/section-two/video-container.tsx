'use client'
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";


type ImageSliderProps = {
    images: string[]
}
export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {


    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [isFading, setIsFading] = React.useState(false);

    React.useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(() => {
                setIsFading(true);
                setTimeout(() => {
                    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                    setIsFading(false);
                }, 500); // Duration of fade-out
            }, 3000); // Change image every 3 seconds
            return () => clearInterval(interval);
        }
    }, [images]);
    return (
        <Image
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex}`}
            fill
            className={cn(
                "w-full h-full object-cover rounded-2xl transition-opacity duration-500",
                isFading ? "opacity-0" : "opacity-100"
            )}
        />
    );
};

