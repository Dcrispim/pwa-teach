
import React from 'react';
import SectionTwoCard from './section-two-card';
import SectionTwoVideo from './section-two-video';
const SectionTwo: React.FC = () => {

  return (
    <section className='flex py-8 justify-between flex-col md:flex-row mb-60'>
      <SectionTwoCard />
      <SectionTwoVideo />
    </section>
  );
};

export default SectionTwo;