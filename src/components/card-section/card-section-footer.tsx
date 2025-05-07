import React from 'react';
import { CardFooter } from '../ui/card';
import { cn } from '@/lib/utils';


type CardSectionFooterProps = {
  children: React.ReactNode,
  
  className?: string
}

const CardSectionFooter: React.FC<CardSectionFooterProps> = ({ children, className }) => {

  return (

    <CardFooter className={cn('flex justify-between',className)}>
      {children}
    </CardFooter>


  );
};

export default CardSectionFooter;