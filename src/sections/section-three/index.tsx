import React from 'react';
import { SectionCarousel } from './section-three-carousel';




const TEXT_VALUES = {
    message: 'marie-pairot-bigapp',
    author: 'Marie Poirot,',
    company: 'Bigapp',
};


const SectionThree: React.FC = ({ }) => {

    return (
        <section className='flex py-0 justify-between items-center  md:h-150 bg-yellow-400 px-4 md:px-20'>

            <SectionCarousel messages={[TEXT_VALUES, TEXT_VALUES, {
                message: 'marie-pairot-bigapp',
                author: 'Marie Poirot,',
                company: 'Bigapps',
            }]} />



        </section>
    );
};








export default SectionThree;


