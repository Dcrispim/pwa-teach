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




const FirstSectionCard: React.FC = async () => {
    const i18n = await getI18n();


    return (
        <CardSectionModal role="article" aria-labelledby="mainCardTitle">

            <CardSectionTitle
                label={i18n("_Teach_ students worldwide")}
                id="mainCardTitle"
                aria-level="1"
            />

            <CardSectionBody itemProp="description">
                {i18n('teach-students-worldwide-description')}
            </CardSectionBody>

            <CardSectionBody role="group" aria-label="Call to Action Buttons">
                <SignButton aria-label={i18n("Sign up for free")} />
                <Button
                    variant="ghost"
                    className='text-blue-600 font-semibold capitalize'
                    aria-label={i18n("Watch platform demo")}
                >
                    <PlayCircle aria-hidden="true" />
                    {i18n('view demo')}
                </Button>
            </CardSectionBody>

            <CardSectionFooter
                className='h-fit flex-col sm:flex-row'
                role="contentinfo"
            >
                <div
                    className='py-4 flex flex-row md:flex-col w-full md:w-fit text-xs text-gray-600'
                    itemScope
                    itemType="https://schema.org/Organization"
                >
                    <span className='capitalize'>{i18n('trusted by')}</span>
                    <span className='w-fit block' itemProp="name">
                        {i18n("leading companies")}
                    </span>
                </div>

                <div
                    className='flex w-full md:w-[70%] h-11 justify-center overflow-hidden'
                    role="list"
                    aria-label="Trusted companies"
                >
                    {/* Add aria-labels to logos */}
                    <LogoOne aria-label="Company One" role="listitem" />
                    <LogoTwo aria-label="Company Two" role="listitem" />
                    <LogoThree aria-label="Company Three" role="listitem" />
                    <LogoFour aria-label="Company Four" role="listitem" />
                    <LogoFive aria-label="Company Five" role="listitem" />
                </div>
            </CardSectionFooter>
        </CardSectionModal>
    );
};

export default FirstSectionCard;