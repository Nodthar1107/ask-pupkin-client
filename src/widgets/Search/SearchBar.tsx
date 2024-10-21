import { clsx } from 'clsx';
import { ChangeEvent, FC, HTMLProps, ReactElement, useState } from 'react';
import { localizations } from '@shared/i18n';
import { InputControl } from '@shared/InputControl/InputControl';
import { LoupIcon } from '@shared/icons/LoupIcon';

import '@widgets/Search/style.scss';
import { Button } from '@shared/Button/Button';

export const SearchBar: FC<HTMLProps<HTMLDivElement>> = ({ ...props }): ReactElement => {
    const { className, ...others } = props;
    const [searchText, setSearchText] = useState<string>('');
    
    const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    }

    const submitHandler = () => {
        // Nothing
    }

    return (
        <div className={clsx('search-bar', className)} {...others}>
            <InputControl
                className='search-bar__input'
                beforeIcon={<LoupIcon />}
                value={searchText}
                onChange={changeEventHandler}
            />
            <Button
                className='search-bar__submit-button'
                color='primary'
                onClick={submitHandler}>
                {localizations.commons_askButton_text}
            </Button>
        </div>
    );
}