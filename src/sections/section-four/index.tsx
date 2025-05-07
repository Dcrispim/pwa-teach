import React from 'react';
import SectionFourCard from './section-four-card';
import { ImageCol } from './section-four-images';

const SectionFour: React.FC = () => {
    const colSize = 'w-[20%]'


    return (
        <section className='relative flex py-8 w-full flex-col-reverse md:flex-row justify-between items-center md:h-100  md:px-20 my-20'>
            <ImageGrid colSize={colSize} images={[
                '/assets/image-5.jpg',
                '/assets/image-6.jpg',
                '/assets/image-7.jpg',
                '/assets/image-8.jpg',
                '/assets/image-9.jpg',
                '/assets/image-10.jpg',
                '/assets/image-11.jpg',
                '/assets/image-12.jpg',
                '/assets/image-13.jpg',
                '/assets/image-14.jpg',
                '/assets/image-15.jpg',
                '/assets/image-16.jpg',
            ]} />
            <SectionFourCard />
        </section>
    );
};


type ImageGridProps = {
    colSize: string
    images: string[]
}
const ImageGrid: React.FC<ImageGridProps> = ({ colSize, images }) => {

    return (
        <div className='w-full  md:w-[50%] flex justify-center items-center gap-4'>
            <ImageCol className={colSize} images={images} count={2} id={0} />
            <ImageCol className={colSize} images={images} count={3} id={1} />
            <ImageCol className={colSize} images={images} count={3} id={2} />
            <ImageCol className={colSize} images={images} count={2} id={3} />

        </div>
    );
};



export default SectionFour;