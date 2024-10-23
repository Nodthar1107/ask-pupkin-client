import { translations } from '@shared/i18n';
import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import '@pages/QuestionsPage/style.scss';
import { CardList } from '@widgets/CardList/CardList';
import { withPagination } from '@shared/hocs/withPagination/withPagination';
import { Card } from '@widgets/Card/Card';
import { QuestionBody } from '@widgets/QuestionBody/QuestionBody';

const Questions = withPagination(CardList);

const questions = [
    {
        id: 0,
        title: 'Очень длинный вопроооооооооооооооооооооооооооооооооооос',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing' +
            'elit. Eligendi, laudantium delectus? Animi cum, voluptates ' +
            'ipsam accusantium nemo id modi et reiciendis perferendis ' +
            'dolore alias beatae distinctio vero aut molestiae enim!',
        answersCount: 3,
        tags: ['Тег1', 'Тег2']
    },
    {
        id: 1,
        title: 'Очень длинный вопроооооооооооооооооооооооооооооооооооос',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing' +
            'elit. Eligendi, laudantium delectus? Animi cum, voluptates ' +
            'ipsam accusantium nemo id modi et reiciendis perferendis ' +
            'dolore alias beatae distinctio vero aut molestiae enim!',
        answersCount: 3,
        tags: ['Тег1', 'Тег2']
    },
    {
        id: 2,
        title: 'Очень длинный вопроооооооооооооооооооооооооооооооооооос',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing' +
            'elit. Eligendi, laudantium delectus? Animi cum, voluptates ' +
            'ipsam accusantium nemo id modi et reiciendis perferendis ' +
            'dolore alias beatae distinctio vero aut molestiae enim!',
        answersCount: 3,
        tags: ['Тег1', 'Тег2']
    },
    {
        id: 3,
        title: 'Очень длинный вопроооооооооооооооооооооооооооооооооооос',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing' +
            'elit. Eligendi, laudantium delectus? Animi cum, voluptates ' +
            'ipsam accusantium nemo id modi et reiciendis perferendis ' +
            'dolore alias beatae distinctio vero aut molestiae enim!',
        answersCount: 3,
        tags: ['Тег1', 'Тег2']
    }
];

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
                <Questions pagesCount={5}>
                        {questions.map((question) => {
                            return (
                                <Card className='question-card'>
                                    <QuestionBody
                                        headerElement={(
                                            <Link to={`/questions/${question.id}`}>
                                                {question.title}
                                            </Link>
                                        )}
                                        description={question.description}
                                        limitMaxDescriptionLines
                                        answersCount={question.answersCount}
                                        shortenTitle
                                        tags={question.tags}
                                    />
                                </Card>
                            );
                        })}
                </Questions>
            </div>
        </div>
    );
}
