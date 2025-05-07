'use client'
import { SquareGrid } from "@/components/shapes/square-grid";
import { CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, MessageCircle, QuoteIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect } from "react";

export type CorouselMessageType = {
    message: string;
    author: string;
    company: string;
}

export const SectionCarousel: React.FC<{ messages: CorouselMessageType[] }> = ({ messages }) => {
    const i18n = useTranslations('default');
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    useEffect(() => {
        if (!api) {
            return
        }
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])
    return (

        <Carousel setApi={setApi} className='w-full h-full'>
            <CarouselContent className='flex md:pl-10 py-0 md:h-150 h-180'>
                {messages.map((data, index) => {
                    return <CarouselItem key={index}
                        className="basis-full flex relative h-full p-0 w-full justify-between items-start md:items-center">
                        <div className='flex w-full flex-col md:flex-row h-140 md:h-full pt-10 md:pt-0'>
                            <div className='flex flex-col w-full h-full justify-center text-lg md:text-2xl gap-4 md:px-0 md:pr-20 px-4'>
                                <p>
                                    {i18n(data.message)}
                                </p>
                                <p className='flex flex-col'>
                                    {data.author}
                                    <span className='font-semibold'>
                                        {data.company}
                                    </span>
                                </p>
                                <IndexViewer size={messages.length} currentIndex={current} api={api} />
                            </div>

                            <div className='relative w-full flex justify-center md:h-full items-center'>
                                <div className='absolute w-70 h-60 md:w-100 top-20 left-12 md:left-5 md:h-80 bg-blue-900 rotate-50 md:top-35 rounded-4xl' />
                                <div className='flex w-[80%] h-[55%] overflow-hidden items-center rounded-2xl border-4 border-blue-900'>
                                    <Image width={1000} height={2000} alt='image-6' className='w-full transform -scale-x-100 filter brightness-150 contrast-100 hue-rotate-300' src={'/assets/image-4.jpg'} />
                                </div>
                                <MessageIcon />
                                <SquareGrid className='absolute left-0 bottom-0' />
                            </div>
                        </div>
                    </CarouselItem>
                })}

            </CarouselContent>
            <CarouselPrevious className='' variant={'ghost'} size={'default'}>
                <ChevronLeft className='hidden md:flex text-white opacity-100 scale-300' />
            </CarouselPrevious>
            <CarouselNext className='border-none' >
                <ChevronRight className='text-blue-900 opacity-100 scale-300' />
            </CarouselNext>
        </Carousel>

    );
};


const MessageIcon: React.FC = ({ }) => {

    return (
        <div className='absolute flex justify-center items-center top-5 md:top-10 right-10 md:right-40  text-white'>
            <MessageCircle size={60} className='text-white' />
            <QuoteIcon size={25} className='absolute top-[30%] left-[30%] text-white fill-white' />
        </div>
    );
};

type IndexViewerProps = {
    currentIndex?: number
    size: number
    api: CarouselApi
}


const IndexViewer: React.FC<IndexViewerProps> = ({ currentIndex, size, api }) => {

    return (
        <div className="flex gap-2 items-center ">
            {Array.from({ length: size }).map((_, index) => (
                <div
                    key={index}
                    onClick={() => { api?.scrollTo?.(index) }}
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                        ? "w-4 bg-blue-900"
                        : "w-2 bg-white"
                        }`}
                />
            ))}
        </div>
    );
};