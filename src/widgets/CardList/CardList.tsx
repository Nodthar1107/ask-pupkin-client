import { clsx } from "clsx";
import { FC, HTMLProps } from "react";

import '@widgets/CardList/style.scss';

export const CardList: FC<HTMLProps<HTMLElement>> = ({ ...props }) => {
    const { className, children } = props;
    
    return (
        <div className={clsx('card-list', className)}>
            {children}
        </div>
    );
}