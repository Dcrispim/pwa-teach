import React from 'react';
import { CardFooter } from '../ui/card';
import { cn } from '@/lib/utils';


type CardSectionFooterProps = {
  children: React.ReactNode,
  
  className?: string
} & React.ComponentProps<typeof CardFooter>

const CardSectionFooter: React.FC<CardSectionFooterProps> = ({ children, className, ...props }) => {

  return (

    <CardFooter className={cn('flex justify-between', className)} {...props}>
      {children}
    </CardFooter>


  );
};

export default CardSectionFooter;