import { clsx } from "clsx";
import { FC, HTMLProps, ReactElement } from "react";

import '@shared/ErrorPanel/style.scss';

interface IErrorPanelProps {
    messages?: string[];
}

export const ErrorPanel: FC<IErrorPanelProps & HTMLProps<HTMLElement>> = ({
    messages, ...props
}): ReactElement => {
    const { className } = props;
    
    return (
        <div className={clsx(
            'error-panel',
            className
        )}>
            {messages.map((message) => {
                return (
                    <div className='error-panel__message'>
                        {message}
                    </div>
                );
            })}
        </div>
    )
}