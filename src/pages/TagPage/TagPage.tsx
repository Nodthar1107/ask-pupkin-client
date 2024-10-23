import { FC, ReactElement } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CardList } from '@widgets/CardList/CardList';
import { withPagination } from '@shared/hocs/withPagination/withPagination';
import { translations } from '@shared/i18n';
import { Card } from '@widgets/Card/Card';
import { QuestionBody } from '@widgets/QuestionBody/QuestionBody';

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

const Questions = withPagination(CardList);

export const TagPage: FC = (): ReactElement => {
    const [params] = useSearchParams();
    
    return (
        <div className='tag-page'>
            <h2 className='tag-page__title'>
                {translations.tagPage_ask}: {params.get('tag')}
            </h2>
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