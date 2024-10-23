import { Navigator } from "@widgets/Navigator/Navigator";
import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";

import '@pages/style.scss';
import { PopularTags } from "@widgets/PopularTags/PopularTags";
import { BestMembers } from "@widgets/BestMembers/BestMembers";

export const Layout: React.FC = (): React.ReactElement => {
    const location = useLocation();
    
    return (
        <>
            <Navigator isAuthorised={!location.pathname.includes('login') && !location.pathname.includes('register')} />
            
            <main className='app-main container'>
                <hr className='hr-line' />
                <div className='app-main__wrapper'>
                    <div className='app-main__content'>
                        <Outlet />
                    </div>
                    <aside className='app-main__aside'>
                        <PopularTags />
                        <BestMembers />
                    </aside>
                </div>
            </main>

            <footer className='app-footer'>
                Nodthar1107, 2024
            </footer>
        </>
    )
}