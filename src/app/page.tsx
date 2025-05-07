
import { getLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';
import React from 'react';

const Page: React.FC = async ({ }) => {
    const locale = await getLocale()
    redirect(locale)
};

export default Page;