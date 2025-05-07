import React from 'react';
import { CardContent } from '../ui/card';

type CardSectionBodyProps = {
  children: React.ReactNode,
  className?: string
} & React.ComponentProps<typeof CardContent>

const CardSectionBody: React.FC<CardSectionBodyProps> = ({ children, className, ...props }) => {

  return (

    <CardContent className='w-full text-24' {...props}>
      <p className={className}>{children}</p>
    </CardContent>


  );
};

export default CardSectionBody;