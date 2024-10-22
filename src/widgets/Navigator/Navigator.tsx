import { Link, useNavigate } from 'react-router-dom';
import { FC, ReactElement, useCallback } from 'react';
import { Logo } from '@widgets/Logo/Logo';
import { SearchBar } from '@widgets/Search/SearchBar';
import { Avatar } from '@shared/Avatar/Avatar';
import { translations } from '@shared/i18n';

import '@widgets/Navigator/style.scss';

export const Navigator: FC = (): ReactElement => {
    const navigate = useNavigate();
    const goToNewQuestion = useCallback(() => {
        navigate('/new-question');
    }, []);

    return (
        <nav className='app-navigator container'>
            <Logo />
            <SearchBar
                className='app-navigator__search-bar'
                onSearchSubmit={goToNewQuestion}
            />
            <div className='app-navigator__actions-panel'>
                <Avatar className='app-navigator__avatar' />
                <div className='app-navigator__actions-panel-right'>
                    <div className='app-navigator__user-name'>
                        Mr. Pupkin
                    </div>
                    <div className='app-navigator__actions'>
                        <Link to='#'>{translations.commons_setting}</Link>
                        <Link to='#'>{translations.commons_logOut}</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}