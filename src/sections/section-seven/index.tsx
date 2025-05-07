
import React from 'react';
import SectionSevenCard from './section-seven-left';
import SectionSevenRight from './section-seven-right';
const SectionSeven: React.FC = () => {

  return (
    <section className='flex flex-col md:flex-row py-8 justify-between mb-20'>
      <SectionSevenCard />
      <SectionSevenRight />
    </section>
  );
};

export default SectionSeven;