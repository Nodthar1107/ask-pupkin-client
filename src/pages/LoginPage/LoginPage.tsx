import { ChangeEvent, FC, ReactElement, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@shared/Button/Button';
import { ErrorPanel } from '@shared/ErrorPanel/ErrorPanel';
import { FormControl } from '@shared/FormControl/FormControl';
import { translations } from '@shared/i18n';
import { InputControl } from '@shared/InputControl/InputControl';

import '@pages/LoginPage/style.scss';

export const LoginPage: FC = (): ReactElement => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessages] = useState([]);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = useCallback(() => {
        navigate('/');
    }, [])

    const onLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }

    const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);

        if (event.target.value.length === 0) {
            setErrorMessages([translations.loginPage_emptyPasswordFieldError]);
        } else {
            setErrorMessages([]);
        }
    }

    return (
        <div className='login-page'>
            <h2 className='login-page__header'>{translations.loginPage_header}</h2>
            <form className='login-page__login-form'>
                <ErrorPanel messages={errorMessage} />
                <FormControl
                    minLabelWidth={100}
                    label={translations.loginPage_loginFieldLabel}
                    control={<InputControl onChange={onLoginChange} />}
                />
                <FormControl
                    minLabelWidth={100}
                    label={translations.loginPage_passwordFieldLabel}
                    control={<InputControl type='password' onChange={onPasswordChange} />}
                />
                <FormControl
                    label=''
                    minLabelWidth={100}
                    control={(
                        <Button className='login-page__log-in-button' onClick={onSubmitHandler}>
                            {translations.loginPage_logInButton}
                        </Button>
                    )}
                />
                <FormControl
                    label=''
                    minLabelWidth={100}
                    control={(
                        <Link to='/register'>
                            {translations.loginPage_createNewAccount}
                        </Link>
                    )}
                />
            </form>
        </div>
    );
}