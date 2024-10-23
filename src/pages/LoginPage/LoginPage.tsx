import { translations } from '@shared/i18n';
import { FC, ReactElement } from 'react';

export const LoginPage: FC = (): ReactElement => {
    return (
        <div className='login-page'>
            <h2 className='login-page__header'>{translations.loginPage_header}</h2>
        </div>
    );
}