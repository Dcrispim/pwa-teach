import { getI18n } from '@/i18n/translation';
import { cn } from '@/lib/utils';
import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardTitle } from './ui/card';
type LessonCardProps = {
  title: string
  description: string
  type: 'featured' | 'popular' | 'new',
  className?: string
}
const badgeColor = {
  'featured': 'bg-purple-100 text-purple-800',
  'popular': 'bg-blue-100 text-blue-800',
  'new': 'bg-green-100 text-green-800',
}
//<div className='flex flex-col w-50 bg-white p-4 shadow-2xl rounded-xl gap-4'>
const LessonCard: React.FC<LessonCardProps> = async ({ title, description, type, className }) => {
  const i18n = await getI18n()
  return (
    <Card className={cn('flex flex-col justify-between p-4 bg-white border-gray-100 h-full', className)}>

      <CardTitle className='p-0 flex flex-col gap-2 h-fit text-sm md:text-lg'>
        <Badge variant="secondary" className={
          cn(badgeColor[type], 'capitalize')
        }>

          {type}
        </Badge>

        {i18n(title)}
      </CardTitle>

      <CardContent className='flex p-0 text-xs md:text-lg text-gray-600 leading-5 m-0 items-center justify-center h-full'>

        <span>
          {description}
        </span>

      </CardContent>
      <Button variant={'outline'} className='text-blue-600 font-bold border-2 border-blue-600 capitalize'>
        {i18n('take lesson')}
      </Button>
    </Card>
  );
};

export default LessonCard;

