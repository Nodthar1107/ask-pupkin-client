import { Button } from '@shared/Button/Button';
import { ErrorPanel } from '@shared/ErrorPanel/ErrorPanel';
import { FormControl } from '@shared/FormControl/FormControl';
import { translations } from '@shared/i18n';
import { InputControl } from '@shared/InputControl/InputControl';
import { ChangeEvent, FC, ReactElement, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '@pages/RegisterPage/style.scss';

export const RegisterPage: FC = (): ReactElement => {
    const navigate = useNavigate();
    const [errorMessages, setErrorMessages] = useState([]);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const filterErrors = (message: string): string[] => {
        return errorMessages.slice().filter((v) => {
            return v !== message;
        });
    }
    
    const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);

        if (event.target.value.length < 8) {
            setErrorMessages([translations.registerPage_passwordLengthError]);
        } else {
            setErrorMessages(filterErrors(translations.registerPage_passwordLengthError));
        }
    }

    const onRepeatPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(event.target.value);
        
        if (event.target.value !== password) {
            if (!errorMessages.includes(translations.registerPage_passwordUnmatched)) {
                const errors = errorMessages.slice();
                errors.push(translations.registerPage_passwordUnmatched);
                setErrorMessages(errors);
            }
        } else {
            setErrorMessages(filterErrors(translations.registerPage_passwordUnmatched));
        }
    }

    const onSubmitHandler = useCallback(() => {
        navigate('/');
    }, [])
    
    return (
        <div className='register-page'>
            <h2 className='register-page__header'>
                {translations.registerPage_header}
            </h2>
            <form className='register-page__register-form'>
                <ErrorPanel messages={errorMessages} />
                <FormControl
                    minLabelWidth={170}
                    label={translations.registerPage_loginFieldLabel}
                    control={<InputControl />}
                />
                <FormControl
                    minLabelWidth={170}
                    label={translations.registerPage_emailFieldLabel}
                    control={<InputControl />}
                />
                <FormControl
                    minLabelWidth={170}
                    label={translations.registerPage_nickNameFieldLabel}
                    control={<InputControl />}
                />
                <FormControl
                    minLabelWidth={170}
                    label={translations.registerPage_passwordFieldLabel}
                    control={<InputControl type='password' value={password} onChange={onPasswordChange} />}
                />
                <FormControl
                    minLabelWidth={170}
                    label={translations.registerPage_repeatPasswordFieldLabel}
                    control={<InputControl type='password' value={repeatPassword} onChange={onRepeatPasswordChange} />}
                />
                <FormControl
                    label=''
                    minLabelWidth={170}
                    control={(
                        <Button onClick={onSubmitHandler}>
                            {translations.registerPage_registerButton}
                        </Button>
                    )}
                />
            </form>
        </div>
    );
}