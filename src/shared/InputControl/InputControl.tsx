import { clsx } from "clsx";
import { ChangeEvent, FC, HTMLProps, ReactElement, useCallback, useEffect, useState } from "react";

import '@shared/InputControl/style.scss';

interface IInputControlProps {
    value?: string;
    mutiline?: boolean;
    rows?: number;
    cols?: number;
    placeholder?: string;
    onChange?: (event: ChangeEvent) => void;
}

export const InputControl: FC<IInputControlProps & HTMLProps<HTMLElement>> = ({
    value, mutiline, rows, cols, placeholder, className, onChange, ...props
}): ReactElement => {
    const { type } = props;
    
    const [inputValue, setInputValue] = useState(value || '');

    const TagName = mutiline ? 'textarea' : 'input';
    const onChangeHandler = onChange || useCallback((event: ChangeEvent) => {
        const target = mutiline
            ? event.target as HTMLTextAreaElement
            : event.target as HTMLInputElement;

        setInputValue(target.value);
    }, [onChange, mutiline]);

    useEffect(() => {
        setInputValue(value);
    }, [value])

    return (
        <TagName
            className={clsx(
                'nodthar-ui-kit-input-control',
                mutiline && 'nodthar-ui-kit-input-control_multiline',
                className
            )}
            value={inputValue}
            rows={rows}
            cols={cols}
            placeholder={placeholder}
            onChange={onChangeHandler}
            type={type}
        />
    );
}