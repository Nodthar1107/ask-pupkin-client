import { clsx } from "clsx";
import { ReactElement, HTMLProps, FC, useRef } from "react";

import "@shared/DecoratedInputControl/style.scss";

interface IInputProps {
    beforeIcon?: ReactElement;
}

export const DecoratedInputControl: FC<IInputProps & HTMLProps<HTMLInputElement>> = ({ beforeIcon, ...props }): ReactElement => {
    const { value, placeholder, className, onChange, ...others } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <span
            className={clsx('input-component', className)}
            onClick={onClick}
            {...others}>
            {beforeIcon && beforeIcon}
            <input
                className={'input-component__input'}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </span>
    );
}