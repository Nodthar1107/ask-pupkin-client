import { FC, ReactElement } from 'react';
import '@widgets/Logo/style.scss';
import { Link } from 'react-router-dom';

export const Logo: FC = ({ ...props }): ReactElement => {
    return (
        <Link to={'/'} className='logo'>
            <div className='logo__content' {...props}>
                AskPupkin
            </div>
        </Link>
    )
}