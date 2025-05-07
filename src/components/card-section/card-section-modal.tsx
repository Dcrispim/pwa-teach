import React from 'react';
import { Card } from '../ui/card';
const CardSectionModal: React.FC<{ children: React.ReactNode } & React.ComponentProps<typeof Card>> = ({ children, ...props }) => {

  return (
    <Card className='md:w-[50%] sm:w-full max-w-140 border-0 shadow-none' {...props}>
      {children}
    </Card>

  );
};

export default CardSectionModal;