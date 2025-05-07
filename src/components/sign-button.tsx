import { getI18n } from '@/i18n/translation';
import React from 'react';
import { Button } from './ui/button';

const SignButton:React.FC = async (props) => {
    const i18n = await getI18n()
    return (
        <Button variant={"default"} className='capitalize text-white font-semibold' {...props}>
            { i18n('sign up now')}
        </Button>
    );
};

export default (SignButton as unknown  as typeof Button);