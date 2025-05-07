import LogoIcon from '@/components/logo-icon';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { routing } from '@/i18n/routing';
import { getI18n } from '@/i18n/translation';

import { cn } from '@/lib/utils';

import { ArrowRight, Euro, Globe, PersonStandingIcon } from 'lucide-react';
import { getLocale } from 'next-intl/server';
import Link from 'next/link';
import React from 'react';



const SectionFooter: React.FC = async ({ }) => {
  const i18n = await getI18n()
  const locales = routing.locales;
  const locale = await getLocale();
  const localeIndex = locales.indexOf(locale as typeof locales[0]);
  const nextLocale = locales[(localeIndex + 1) % locales.length];
  return (
    <section className='flex flex-col md:h-100 h-fit md:p-16 p-4 pb-0 items-center text-white bg-blue-900 gap-y-10'>
      <div className='flex flex-col md:flex-row h-full items-center w-full'>
        <div className='flex w-full md:w-fit md:mr-15 justify-start items-start h-full my-10'>

          <LogoIcon variant='dark' />
        </div>
        <div className='flex flex-col md:flex-row md:gap-y-2 gap-y-5 justify-between w-full items-start h-full'>
          <ColumnFooter title={i18n('product')}>

            <LinkFooter title={i18n('pricing')} link='/' />
            <LinkFooter title={i18n('overview')} link='/' />
            <LinkFooter title={i18n('browse')} link='/' />
            <LinkFooter link='/' className='flex gap-x-4' >
              {i18n('accessibility')}
              <Badge className='uppercase bg-purple-100 text-purple-600 rounded-sm'>
                beta
              </Badge>
            </LinkFooter>
          </ColumnFooter>
          <ColumnFooter title={i18n('solutions')}>

            <LinkFooter title={i18n('brainstorming')} link='/' />
            <LinkFooter title={i18n('ideation')} link='/' />
            <LinkFooter title={i18n('wireframing')} link='/' />
            <LinkFooter title={i18n('research')} link='/' />
          </ColumnFooter>
          <ColumnFooter title={i18n('resources')}>

            <LinkFooter title={i18n('help center')} link='/' />
            <LinkFooter title={i18n('blog')} link='/' />
            <LinkFooter title={i18n('tutorials')} link='/' />
            <LinkFooter alt={i18n('Frequently Asked Questions')} title={i18n('FAQs')} link='/' />
          </ColumnFooter>
          <ColumnFooter title={i18n('Support')}>

            <LinkFooter title={i18n('contact us')} link='/' />
            <LinkFooter title={i18n('developers')} link='/' />
            <LinkFooter title={i18n('documentation')} link='/' />
            <LinkFooter title={i18n('integrations')} link='/' />
          </ColumnFooter>
          <ColumnFooter title={i18n('Company')}>

            <LinkFooter title={i18n('About')} link='/' />
            <LinkFooter title={i18n('Press')} link='/' />
            <LinkFooter title={i18n('Events')} link='/' />
            <LinkFooter link='/' className='flex gap-x-1 items-center'>
              {i18n('request demo')}<ArrowRight />
            </LinkFooter>
          </ColumnFooter>
        </div>
      </div>
      <div className='flex flex-col md:flex-row w-full justify-between pt-4 border-t-1 border-gray-500 py-8 md:gap-y-5 gap-y-5'>

        <div className='flex md:full w-fit'>
          <span className='w-full md:text-lg text-sm'>
            uteach @ 2023. All rights reserved.
          </span>
        </div>
        <div className='flex justify-between md:w-fit w-full md:text-lg text-sm h-full items-center md:gap-x-10'>
          <LinkFooter title={i18n('terms')} link='/' />
          <LinkFooter title={i18n('privacy')} link='/' />
          <LinkFooter title={i18n('contact')} link='/' className='hidden md:flex'/>
          <LinkFooter link={`/${nextLocale}`} className='flex flex-row items-center gap-x-1 uppercase' >
            <Globe />{locale}
          </LinkFooter>

          <LinkFooter link='/' className='flex items-center gap-1'>
            <Euro />EUR
          </LinkFooter>
          <LinkFooter link='/' className='flex items-center gap-1 border-2 rounded-full'>
            <PersonStandingIcon />
          </LinkFooter>
        </div>
      </div>
    </section>
  );
};

type ColumnFooterProps = {
  title?: string
  children: React.ReactNode

}
const ColumnFooter: React.FC<ColumnFooterProps> = ({ title, children }) => {

  return (
    <div className='flex flex-col justify-start items-start h-full gap-6'>
      {title && <Label className='text-lg font-semibold capitalize'>
        {title}
      </Label>}

      {
        children
      }


    </div>
  );
};

type LinkFooterProps = {
  title?: string
  link: string
  children?: React.ReactNode
  className?: string
  alt?: string
} & React.ComponentProps<'a'>
const LinkFooter: React.FC<LinkFooterProps> = ({ title, link, children, className, alt, ...props }) => {

  return (<Link title={alt || title} className={cn('text-sm font-light capitalize', className)} href={link} {...props}>
    {title ? title : children}
  </Link>

  );
};



export default SectionFooter;