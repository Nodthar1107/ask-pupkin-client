import { clsx } from "clsx";
import { FC, HTMLProps, ReactElement } from "react";
import { Avatar } from "@shared/Avatar/Avatar";
import { NumberControl } from "@shared/NumberControl/NumberControl";

import '@widgets/Card/style.scss';

interface ICardProps {
    noBorders?: boolean;
}

export const Card: FC<ICardProps & HTMLProps<HTMLElement>> = ({
    noBorders, ...props
}): ReactElement => {
    const { className, children } = props
    
    return (
        <article className={clsx(
                'card',
                noBorders && 'card_no-borders',
                className
            )}>
            <div className='card__left'>
                <Avatar className='card__user-avatar' />
                <NumberControl />
            </div>
            <div className='card__right'>
                {children}
            </div>
        </article>
    );
}