import React from 'react';
import { CardHeader, CardTitle } from '../ui/card';
import { cn } from '@/lib/utils';

type CardSectionTitleProps = {
  label?: string
  className?: string
}

const CardSectionTitle: React.FC<CardSectionTitleProps> = ({ label, className }) => {
  const formattedChildren = label?.toString().split(/(_.*?_)/g).map((part, index) => {
    if (part.startsWith('_') && part.endsWith('_')) {
      return (
        <span key={index} className="card-underline w-fit h-fit">
          {part.slice(1, -1).trim()}
        </span>
      );
    }
    return part;
  });

  return (
    <CardHeader>
      <CardTitle>
        <h1 className={cn(`text-5xl`, className, 'gap-x-2')}>
          {formattedChildren}
        </h1>
      </CardTitle>
    </CardHeader>
  );
};

export default CardSectionTitle;