import ParticleIcons, { ParticleIconsType } from '@/components/particle-container';
import ParticleImages from '@/components/particle-images';
import SignButton from '@/components/sign-button';
import { getI18n } from '@/i18n/translation';
import { cn } from '@/lib/utils';
import React from 'react';


const SectionEight: React.FC = async ({ }) => {
  const i18n = await getI18n()
  const Icons = [
    'CloudLightning',
    'Terminal',
    'TerminalSquare',
    'MessageCircleMore',
    'SquareMousePointer',
    'CloudDownload',
    'BellDot',
    'CloudReload'
  ] as ParticleIconsType

  const W = 400
  const H = 400
  const iconClassName = cn('text-white stroke-1')
  const particleClassName = 'absolute  w-70 h-50 md:h-100'
  const In = { delay: 5 }
  const Out = { delay: 5 }
  const duration = 5
  const iconSize = 40
  return (
    <section className='flex w-full h-ful relative'>

      <div className='flex relative flex-col w-full h-200 md:h-120 justify-center items-center bg-yellow-400 p-10 gap-10 '>


        <ParticleIcons
          className={cn(particleClassName, 'md:top-10 top-0  right-10 ', 'md:right-0')}
          iconClassName={iconClassName}
          w={W}
          h={H}
          style={{ width: undefined, height: undefined }}
          icons={Icons}
          count={1}
          iconSize={iconSize}
          animationIn={In}
          animationOut={Out}
          duration={duration}
        />
        <ParticleImages
          images={[
            '/assets/image-avatar-1.jpg',
            '/assets/image-avatar-2.jpg',
            '/assets/image-avatar-3.jpg',
            '/assets/image-avatar-4.jpg',
            '/assets/image-avatar-5.jpg',


          ]}
          h={H}
          w={W}
          style={{ width: undefined, height: undefined }}
          className={cn(particleClassName, 'md:top-10 top-0  right-10 ', 'md:right-0')}
          imgClassName='size-10 rounded-full'
          animationOut={Out}
          duration={duration}
        />
        <ParticleImages
          images={[

            '/assets/image-avatar-6.jpg',
            '/assets/image-avatar-7.jpg',
            '/assets/image-avatar-8.jpg',
            '/assets/image-avatar-9.jpg',
            '/assets/image-avatar-10.jpg',
            '/assets/image-avatar-11.jpg',

          ]}
          h={H}
          w={W}
          style={{ width: undefined, height: undefined }}
          className={cn(particleClassName, 'md:bottom-10 bottom-0 md:left-0 left-10')}
          imgClassName='size-10 rounded-full'
          animationIn={{ duration:1 }}
          animationOut={Out}
          duration={duration}
        />
        <ParticleIcons
          className={cn(particleClassName, 'md:bottom-10 bottom-0 md:left-0 left-10')}
          iconClassName={iconClassName}
          w={W}
          h={H}
          style={{ width: undefined, height: undefined }}
          icons={Icons}
          count={1}
          iconSize={iconSize}
          animationIn={In}
          animationOut={Out}
          duration={duration}
        />



        <div className='flex flex-col z-10 gap-10 w-full md:w-fit bg-yellow-400 shadow-2xs rounded-2xl shadow-yellow-400'>
          <h1 className='text-2xl md:text-6xl text-center z-10'>{i18n('join-world-learning')}</h1>
          <div className='text-center flex flex-col justify-center items-center gap-3'>
            <p>
              {i18n('malesuada-description')}
            </p>
            <p>
              {i18n('risus-elit-description')}
            </p>
          </div>
        </div>
        <SignButton size={'lg'} />
      </div>

    </section>
  );
};

export default SectionEight;