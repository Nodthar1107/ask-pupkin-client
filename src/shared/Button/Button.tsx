import { translations } from "@shared/i18n";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, FC, ReactElement } from "react";

import '@shared/Button/style.scss';

interface IButtonProps {
    color?: 'primary' | 'secondary' | 'default';
} 

export const Button: FC<IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({color = 'default', ...props}): ReactElement => {
    const { className, children, ...others } = props;

    return (
        <button
            className={clsx(
                'nodthar-ui-kit-button',
                `nodthar-ui-kit-button_${color}`,
                className
            )}
            {...others}>
            {children}
        </button>
    )
}