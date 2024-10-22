import { clsx } from 'clsx';
import { FC, HTMLProps, ReactElement } from 'react';
import { translations } from '@shared/i18n';

import '@shared/Avatar/style.scss';

export const Avatar: FC<HTMLProps<HTMLImageElement>> = ({...props}): ReactElement => {
    const { src, alt, className, ...others } = props;
    
    if (!src) {
        return (
            <div className={clsx('empty-avatar', className)} {...others}>
                <div className='empty-avatar__line-horizontal_1' />
                <div className='empty-avatar__line-horizontal_2' />
                <span className='empty-avatar__title'>
                    {alt ? alt : translations.emptyAvatar_Placeholder}
                </span>
            </div>
        )
    }

    return (
        <img
            className={clsx('avatar', className)}
            src={src}
            alt={alt}
            {...others}
        />
    );
} 