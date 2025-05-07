'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useTranslations } from '@/i18n/translation';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

type Inputs = z.infer<typeof formSchema>;

const SectionNine: React.FC = () => {
  const i18n = useTranslations();
  const { handleSubmit, register, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });
  const [modalContent, setModalContent] = useState<string | null>(null);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const dataParsed = formSchema.safeParse(data)
    if(!dataParsed.success) return
    const firstPartOfEmail = data.email.split('@')[0].replace(/[.,\-_]/g, ' ');
    const formattedMessage = `${i18n('by')}: ${data.email}\n${i18n('hi_teach')}\n${i18n('im')} ${firstPartOfEmail}, ${i18n('and_i_would_say')} ${data.message.trim()}`;
    setModalContent(formattedMessage);
  };

  const closeModal = () => setModalContent(null);

  return (
    <>
      <section className='w-full h-full bg-orange-500 py-16 px-4 z-50'>
        <div className='flex flex-col h-full justify-center items-center text-white space-y-8'>
          <h1 className='text-3xl font-bold text-center'>{i18n('section_nine_title')}</h1>
          <div className='flex flex-col justify-center items-center space-y-6 max-w-lg text-center'>
            <p className='text-xl font-thin'>
              {i18n('section_nine_description')}
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className='grid space-y-4'>
            <InputGroup
              placeholder={i18n('email_placeholder')}
              className='bg-white rounded-md w-100 md:w-80 text-black'
              label={i18n('email_label')}
              error={errors.email?.message}
              {...register('email')}
            />
            <TextAreaGroup
              placeholder={i18n('message_placeholder')}
              className='bg-white rounded-md w-full md:w-80'
              label={i18n('message_label')}
              error={errors.message?.message}
              {...register('message')}
            />
              
              <div>
                <Button className='bg-blue-900 w-fit self-center text-white py-5 rounded-md hover:bg-blue-800'>
                  {i18n('request_demo')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {modalContent && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-md shadow-md max-w-md w-full '>
            <pre className='text-black whitespace-pre-wrap'>{modalContent}</pre>
            <button onClick={closeModal} className='mt-4 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800'>
              {i18n('Close')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

type InputGroupProps = {
  label?: string;
  error?: string;
  name: string;
} & React.ComponentProps<'input'>;

const InputGroup: React.FC<InputGroupProps> = ({ name, label, error, className, ...props }) => {
  return (
    <div className='w-fit md:w-full space-y-2'>
      {label && <Label htmlFor={name} className='text-sm font-medium text-white'>
        {label}
      </Label>}
      <Input 
        name={name} 
        {...props} 
        className={cn(
          'md:w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder:text-gray-400',
          className,
          error && 'border-red-500 focus:ring-red-500'
        )} 
      />
      {error && <span className="text-red-900 text-sm block mt-1">{error}</span>}
    </div>
  );
};

type TextAreaGroupProps = {
  label?: string;
  error?: string;
  name: string;
} & React.ComponentProps<'textarea'>;

const TextAreaGroup: React.FC<TextAreaGroupProps> = ({ name, label, error, className, ...props }) => {
  return (
    <div className='w-full space-y-2'>
      {label && <Label htmlFor={name} className='text-sm font-medium text-white'>
        {label}
      </Label>}
      <Textarea 
        name={name} 
        {...props} 
        className={cn(
          'text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder:text-gray-400',
          className,
          error && 'border-red-500 focus:ring-red-500'
        )} 
      />
      {error && <span className="text-red-900 text-sm block mt-1">{error}</span>}
    </div>
  );
};

export default SectionNine;