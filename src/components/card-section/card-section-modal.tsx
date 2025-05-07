import React from 'react';
import { Card } from '../ui/card';
const CardSectionModal: React.FC<{children:React.ReactNode}> = ({children}) => {

  return (
    <Card className='md:w-[50%] sm:w-full max-w-140 border-0 shadow-none'>
      {children}
    </Card>

  );
};

export default CardSectionModal;