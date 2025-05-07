import React from 'react';
import { CardContent } from '../ui/card';

type CardSectionBodyProps = {
  children: React.ReactNode,
  className?: string
}

const CardSectionBody: React.FC<CardSectionBodyProps> = ({ children, className }) => {

  return (

    <CardContent className='w-full text-24'>
      <p className={className}>{children}</p>
    </CardContent>


  );
};

export default CardSectionBody;