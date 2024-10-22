import { translations } from '@shared/i18n';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import '@pages/QuestionsPage/style.scss';
import { QuestionCardList } from '@widgets/QuestionList/QuestionCardList';
import { PopularTags } from '@widgets/PopularTags/PopularTags';
import { BestMembers } from '@widgets/BestMembers/BestMembers';
import { withPagination } from '@shared/hocs/withPagination/withPagination';

const Questions = withPagination(QuestionCardList);

export const QuestionsPage: FC = () => {
    return (
        <div className='quiestion-page'>
            <div className='question-page__header'>
                <h2 className='question-page__title'>
                    {translations.questionsPage_header}
                </h2>
                <Link to='#'>
                    {translations.questionsPage_hotQuestionsLink}
                </Link>
            </div>
            <div className='question-page__content'>
                <Questions pagesCount={5} />
            </div>
        </div>
    )
}