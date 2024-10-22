import { translations } from '@shared/i18n';
import { FC, ReactElement } from 'react';

const currentTag = 'bender'

export const TagPage: FC = (): ReactElement => {
    return (
        <div className='tag-page'>
            <h2 className='tag-page__title'>
                {translations.tagPage_ask}
            </h2>
        </div>
    )
}