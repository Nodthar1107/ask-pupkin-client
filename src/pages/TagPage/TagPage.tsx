import { FC, ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QuestionCardList } from '@widgets/QuestionList/QuestionCardList';
import { withPagination } from '@shared/hocs/withPagination/withPagination';
import { translations } from '@shared/i18n';

const Questions = withPagination(QuestionCardList);

export const TagPage: FC = (): ReactElement => {
    const [params] = useSearchParams();
    
    return (
        <div className='tag-page'>
            <h2 className='tag-page__title'>
                {translations.tagPage_ask}: {params.get('tag')}
            </h2>
            <div className='question-page__content'>
                <Questions pagesCount={5} />
            </div>
        </div>
    )ж
}