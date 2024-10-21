import { FC, ReactElement } from 'react';
import '@widgets/Navigator/style.scss';
import { Logo } from '@widgets/Logo/Logo';
import { SearchBar } from '@widgets/Search/SearchBar';
import { Avatar } from '@shared/Avatar/Avatar';

export const Navigator: FC = (): ReactElement => {
    return (
        <nav className='app-navigator container'>
            <Logo />
            <SearchBar className='app-navigator__search-bar' />
            <div className='actions-panel'>
                <Avatar className='app-navigator__avatar' />
            </div>
        </nav>
    );
}