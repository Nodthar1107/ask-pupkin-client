import { clsx } from 'clsx';
import { ChangeEvent, FC, HTMLProps, ReactElement, useState } from 'react';
import { translations } from '@shared/i18n';
import { DecoratedInputControl } from '@shared/DecoratedInputControl/DecoratedInputControl';
import { LoupIcon } from '@shared/icons/LoupIcon';

import '@widgets/Search/style.scss';
import { Button } from '@shared/Button/Button';

interface ISearchBarProps {
    onSearchSubmit: VoidFunction;
    placeholder?: string;
    useAskButton?: boolean
}

export const SearchBar: FC<ISearchBarProps & HTMLProps<HTMLDivElement>> = ({
    onSearchSubmit, placeholder, useAskButton = true, ...props
}): ReactElement => {
    const { className, ...others } = props;
    const [searchText, setSearchText] = useState<string>('');
    
    const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    }

    return (
        <div className={clsx('search-bar', className)} {...others}>
            <DecoratedInputControl
                placeholder={placeholder}
                className='search-bar__input'
                beforeIcon={<LoupIcon />}
                value={searchText}
                onChange={changeEventHandler}
            />
            {useAskButton && (
                <Button
                    className='search-bar__submit-button'
                    color='primary'
                    onClick={onSearchSubmit}>
                    {translations.commons_askButton_text}
                </Button>
            )}
        </div>
    );
}