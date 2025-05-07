import BlobImage from '@/components/blob-image';
import React from 'react';


const BackgroundGroupOne: React.FC = () => {
  return (
    <div className='flex relative w-full h-full md:h-full md:scale-100'>
      <BlobImage
        bgUrl='/assets/blob-one.svg'
        src='/assets/image-1.png'
        orientation='right'
        className='w-30 md:w-60'
        particleColor='orange'
      />
    </div>
  );
};

export default BackgroundGroupOne;
