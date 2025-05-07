import CardSectionBody from '@/components/card-section/card-section-body';
import CardSectionFooter from '@/components/card-section/card-section-footer';
import CardSectionModal from '@/components/card-section/card-section-modal';
import CardSectionTitle from '@/components/card-section/card-section-title';
import { Button } from '@/components/ui/button';
import { getI18n } from '@/i18n/translation';
import { ArrowRight } from 'lucide-react';
import React from 'react';


const SectionSevenCard: React.FC = async ({ }) => {
    const i18n = await getI18n()
    return (
        <CardSectionModal>
            <CardSectionTitle className='text-2xl md:text-6xl' label={i18n("All the cool _features_")} />


            <CardSectionBody className='flex gap-x-2'>
                {i18n('all-the-cool-features-description')}
            </CardSectionBody>


            <CardSectionFooter className='h-fit flex-row'>
                <Button variant={"ghost"} className='text-blue-600 font-semibold'>
                    {i18n('View all the features')}<ArrowRight />
                </Button>
            </CardSectionFooter>
        </CardSectionModal >
    );
};

export default SectionSevenCard;