import CardSectionBody from '@/components/card-section/card-section-body';
import CardSectionFooter from '@/components/card-section/card-section-footer';
import CardSectionModal from '@/components/card-section/card-section-modal';
import CardSectionTitle from '@/components/card-section/card-section-title';
import { LogoFive } from '@/components/icons/logo-five';
import { LogoFour } from '@/components/icons/logo-four';
import { LogoOne } from '@/components/icons/logo-one';
import { LogoThree } from '@/components/icons/logo-three';
import { LogoTwo } from '@/components/icons/logo-two';
import SignButton from '@/components/sign-button';
import { Button } from '@/components/ui/button';
import { getI18n } from '@/i18n/translation';
import { PlayCircle } from 'lucide-react';

import React from 'react';

const FirstSectionCard: React.FC = async ({ }) => {
    const i18n = await getI18n()
    return (
        <CardSectionModal>
            <CardSectionTitle label={i18n("_Teach_ students worldwide")} />


            <CardSectionBody>
                {i18n('teach-students-worldwide-description')}
            </CardSectionBody>
            <CardSectionBody>
                <SignButton />
                <Button variant={"ghost"} className='text-blue-600 font-semibold capitalize'>
                    <PlayCircle />{i18n('view demo')}
                </Button>
            </CardSectionBody>
            <CardSectionFooter className='h-fit flex-col sm:flex-row'>
                <div className='py-4 flex flex-row md:flex-col w-full md:w-fit text-xs text-gray-600'>
                    <span className='capitalize'>{i18n('trusted by')}</span>
                    <span className='w-fit block'>{i18n("leading companies")} </span>
                </div>

                <div className='flex w-full md:w-[70%] h-11 justify-center overflow-hidden'>
                    <LogoOne />
                    <LogoTwo />
                    <LogoThree />
                    <LogoFour />
                    <LogoFive />
                </div>
            </CardSectionFooter>
        </CardSectionModal >
    );
};

export default FirstSectionCard;