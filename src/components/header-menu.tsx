import { getI18n } from '@/i18n/translation';
import { ChevronDown, Menu } from 'lucide-react';
import React from 'react';
import LogoIcon from './logo-icon';
import { Button } from './ui/button';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from './ui/menubar';

const HeaderMenu: React.FC = async () => {
    const i18n = await getI18n();
    return (
        <div className="w-full flex justify-between border-none">
            <Menubar className='border-none shadow-none capitalize'>
                <MenubarMenu>
                    <MenubarTrigger>
                        <LogoIcon />
                    </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className=' capitalize hidden md:flex'>{i18n("products")}</MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className=' capitalize hidden md:flex'>{i18n("solutions")}</MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className=' capitalize hidden md:flex'>{i18n("pricing")}</MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className=' capitalize hidden md:flex'>{i18n("resources")} <ChevronDown size={16} /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            {i18n("resources")}
                        </MenubarItem>

                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

            <Menubar className="border-none shadow-none md:flex hidden">
                <MenubarMenu>
                    <MenubarTrigger className="capitalize w-full justify-end">

                        {i18n('log in')}

                    </MenubarTrigger>
                    <MenubarTrigger asChild>
                        <Button variant="outline" className="capitalize">
                            {i18n("sign up now")}
                        </Button>
                    </MenubarTrigger>
                </MenubarMenu>




            </Menubar>

            <Menubar className='border-none shadow-none md:hidden'>
                <MenubarMenu>
                    <MenubarTrigger className="capitalize w-full justify-end">
                        <Menu />
                    </MenubarTrigger>
                    <MenubarContent className='bg-white'>
                        <MenubarItem className='capitalize'>{i18n("products")}</MenubarItem>
                        <MenubarItem className='capitalize'>{i18n("solutions")}</MenubarItem>
                        <MenubarItem className='capitalize'>{i18n("pricing")}</MenubarItem>
                        <MenubarSub>
                            <MenubarSubTrigger className='capitalize'>
                                {i18n("resources")}
                            </MenubarSubTrigger>
                            <MenubarSubContent className='bg-white'>
                                <MenubarItem className='capitalize'>{i18n("pricing")}</MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
    );
};

export default HeaderMenu;