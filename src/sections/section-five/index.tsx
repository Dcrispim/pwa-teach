import { Cap } from '@/components/shapes/cap';
import { Diamont } from '@/components/shapes/diamont';
import { HeartCircle } from '@/components/shapes/heart-circle';
import { getI18n } from '@/i18n/translation';
import * as Lucide from 'lucide-react';
import React, { JSXElementConstructor } from 'react';

const ExtendedIcons = {
    ...Lucide,
    Cap,
    HeartCircle,
    Diamont
}

const SectionFive: React.FC = async () => {
    const i18n = await getI18n()
    return (
        <section className='flex w-full flex-col md:flex-row py-8 justify-around items-center h-fit md:h-90 bg-blue-900 gap-10 md:gap-0 '>
            <IconNumber icon='HeartCircle' value='195' label={i18n('user-countries')} />
            <IconNumber icon='Diamont' value='1M' label={i18n('valued-teachers')} />
            <IconNumber icon='Cap' value='17M' label={i18n('happy-students')} />
        </section>
    );
};

type IconNumberProps = {
    icon: keyof typeof ExtendedIcons
    value: string
    label: string
}


const IconNumber: React.FC<IconNumberProps> = ({
    icon,
    value,
    label,
}) => {

    const Icon = ExtendedIcons[icon] as JSXElementConstructor<Record<string, unknown>>
    return (
        <div className='flex flex-col  justify-center items-center text-yellow-300 gap-3'>
            <Icon className='' />
            <label className='w-full text-center text-7xl font-bold'>
                {value}
            </label>
            <span className='w-full text-center'>
                {label}
            </span>
        </div>
    );
};


export default SectionFive;