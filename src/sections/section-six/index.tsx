'use client'
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useTranslations } from '@/i18n/translation';

import { ArrowLeftCircleIcon, ArrowRightCircle } from 'lucide-react';
import Image from 'next/image';

import React, { useEffect } from 'react';

type CardData = {
    name: string;
    role: string;
    description: string;
    image: string; 
};



const SectionSix: React.FC = ({ }) => {
    const i18n = useTranslations();

    const cards = [
        {
            name: 'Hellen Jummy',
            role: 'Financial Counselor',
            description: i18n('carousel_card_1_description'),
            image: '/assets/image-avatar-1.jpg', 
        },
        {
            name: 'Ralph Edwards',
            role: 'Math Teacher',
            description: i18n('carousel_card_2_description'),
            image: '/assets/image-avatar-2.jpg', 
        },
        {
            name: 'Hellena John',
            role: 'Psychology Student',
            description: i18n('carousel_card_3_description'),
            image: '/assets/image-avatar-3.jpg', 
        },
        {
            name: 'Hellena John',
            role: 'Psychology Student',
            description: i18n('carousel_card_3_description'),
            image: '/assets/image-avatar-4.jpg', 
        },
    ] as CardData[];

    return (
        <section className='flex flex-col w-full py-8 justify-around items-center h-full'>
            <Cards cards={cards} />
        </section>
    );
};

type CardsProps = {
    cards: CardData[]
}
const Cards: React.FC<CardsProps> = ({ cards }) => {
    const i18n = useTranslations()
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <Carousel setApi={setApi} className='w-full h-full'>
            <div className='flex justify-between flex-col md:flex-row pl-4'>
                <label className='text-2xl md:text-6xl font-semibold'>
                    {i18n('What everyone says')}
                </label>
                <div className='hidden md:flex items-center h-full gap-5'>
                    <ArrowLeftCircleIcon size={40} onClick={() => api?.scrollTo(current-1)} strokeWidth={1} className='text-orange-600' />
                    <ArrowRightCircle size={40} onClick={() => api?.scrollTo(current+1)} strokeWidth={1} className='text-orange-600' />
                </div>
            </div>
            <CarouselContent className='p-0 py-8 flex gap-0 w-full h-full'>
                {cards.map((card, index) => (
                    <CarouselItem key={index} className='basis-1/1 md:basis-1/3 flex h-full '>
                        <Card className='border-gray-100 shadow-xl w-fit h-80 flex-col justify-between'>
                            <CardContent className='p-8 pb-4'>
                                {card.description}
                            </CardContent>
                            <CardFooter className='flex w-full h-full justify-start items-center gap-2'>
                                <Image width={100} height={100} 
                                    src={card.image} 
                                    alt={`${card.name}'s profile`} 
                                    className='w-16 h-16 rounded-full object-cover mb-4' 
                                />
                               <div className='flex flex-col justify-center h-full'>
                               <label className='font-semibold w-full'>
                                    {card.name}
                                </label>
                                <span className='w-full text-gray-600'>
                                    {card.role}
                                </span>
                               </div>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};



export default SectionSix;

