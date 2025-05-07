import BlobImage from '@/components/blob-image';
import React from 'react';


const BackgroundGroupTwo: React.FC = () => {
    return (
        <div className='flex w-full h-full  justify-end m-0 p-0'>
            <BlobImage
                bgUrl='/assets/blob-two.svg'
                src='/assets/image-2.png'
            
                className='w-30 md:w-50'
                imgClassName='w-full top-5'
            />

        </div>
    );
};

export default BackgroundGroupTwo;
