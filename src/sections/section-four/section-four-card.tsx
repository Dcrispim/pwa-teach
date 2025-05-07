import CardSectionBody from '@/components/card-section/card-section-body';
import CardSectionFooter from '@/components/card-section/card-section-footer';
import CardSectionModal from '@/components/card-section/card-section-modal';
import CardSectionTitle from '@/components/card-section/card-section-title';
import { Button } from '@/components/ui/button';
import { getI18n } from '@/i18n/translation';

import { ArrowRight } from 'lucide-react';
import React from 'react';
import Plane from './plane';


const SectionFourCard: React.FC= async ({ }) => {
    const i18n = await getI18n()
    return (
        <CardSectionModal>

            <CardSectionTitle className='relative' label={i18n("Meet international students & teachers")} />
            <Plane />
            <CardSectionBody>
                {i18n(
                    'meet-international-students-teachers-description'
                )}
            </CardSectionBody>

            <CardSectionFooter className='h-fit flex-row'>
                <Button variant={"ghost"} className='text-blue-600 font-semibold'>
                    {i18n('Explore teachers and students')}<ArrowRight />
                </Button>
            </CardSectionFooter>
        </CardSectionModal >
    );
};

export default SectionFourCard;