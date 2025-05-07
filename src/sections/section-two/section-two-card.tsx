import CardSectionBody from '@/components/card-section/card-section-body';
import CardSectionFooter from '@/components/card-section/card-section-footer';
import CardSectionModal from '@/components/card-section/card-section-modal';
import CardSectionTitle from '@/components/card-section/card-section-title';
import { Button } from '@/components/ui/button';
import { getI18n } from '@/i18n/translation';
import { ArrowRight, Check } from 'lucide-react';
import React from 'react';

const SectionTwoCard: React.FC = async ({ }) => {
    const i18n = await getI18n()
    return (
        <CardSectionModal>
            <CardSectionTitle label={i18n("An _all-in-one_ app that makes it easier")} />


            <CardSectionBody className='flex gap-x-2'>

                <Check /> {
                i18n('Est et in pharetra magna adipiscing ornare aliquam')}



            </CardSectionBody>
            <CardSectionBody className='flex gap-x-2'>
                <Check /> {i18n('Tellus arcu sed consequat ac velit ut eu blandit')}
            </CardSectionBody>
            <CardSectionBody className='flex gap-x-2'>
                <Check /> {i18n('Ullamcorper ornare in et egestas dolor orci')}
            </CardSectionBody>


            <CardSectionFooter className='h-fit flex-row'>
                <Button variant={"ghost"} className='text-blue-600 font-semibold'>
                    {i18n('Find more about the app')}<ArrowRight />
                </Button>
            </CardSectionFooter>
        </CardSectionModal >
    );
};

export default SectionTwoCard;