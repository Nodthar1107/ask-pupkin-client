import { FC, ReactElement } from 'react';

import '@pages/QuestionPage/style.scss';
import { Card } from '@widgets/Card/Card';
import { QuestionBody } from '@widgets/QuestionBody/QuestionBody';
import { Link } from 'react-router-dom';

const question = {
    id: 0,
    title: 'Очень длинный вопроооооооооооооооооооооооооооооооооооос',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing' +
        'elit. Eligendi, laudantium delectus? Animi cum, voluptates ' +
        'ipsam accusantium nemo id modi et reiciendis perferendis ' +
        'dolore alias beatae distinctio vero aut molestiae enim!',
    answersCount: 3,
    tags: ['Тег1', 'Тег2']
}

export const QuestionPage: FC = (): ReactElement => {
    return (
        <div className='question-page'>
            <Card noBorders>
                <QuestionBody
                    headerElement={question.title}
                    description={question.description}
                    tags={question.tags}
                />
            </Card>

            <hr className='question-page__horizontal-line' />
        </div>
    );
}