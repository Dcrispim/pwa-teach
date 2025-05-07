import React from 'react';
import FirstSectionCard from './first-section-card';
import FirstSectionChat from './first-section-chat';

const Index: React.FC = ({}) => {

  


  return (
     <section className='flex my-20 justify-between h-full  w-full flex-col md:flex-row'>
      <FirstSectionCard />
      <FirstSectionChat />
     </section>
  );
};

export default Index;