import { translations } from '@shared/i18n';
import { FC, ReactElement } from 'react';

export const RegisterPage: FC = (): ReactElement => {
    return (
        <div className='register-page'>
            <h2 className='register-page__header'>
                {translations.registerPage_header}
            </h2>
        </div>
    );
}