import { FC, ReactElement, useCallback } from 'react';

import '@pages/QuestionPage/style.scss';
import { Card } from '@widgets/Card/Card';
import { QuestionBody } from '@widgets/QuestionBody/QuestionBody';
import { Link, useNavigate } from 'react-router-dom';
import { CardList } from '@widgets/CardList/CardList';
import { FormControl } from '@shared/FormControl/FormControl';
import { CheckboxControl } from '@shared/CheckboxControl/CheckboxControl';
import { InputControl } from '@shared/InputControl/InputControl';
import { translations } from '@shared/i18n';
import { Button } from '@shared/Button/Button';

const question = {
    id: 0,
    title: 'Очень длинный вопроооооооооооооооооооооооооооооооооооос',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing' +
        'elit. Eligendi, laudantium delectus? Animi cum, voluptates ' +
        'ipsam accusantium nemo id modi et reiciendis perferendis ' +
        'dolore alias beatae distinctio vero aut molestiae enim!',
    answers: [
        'Lorem ipsum dolor sit amet consectetur adipisicing' +
        'elit. Eligendi, laudantium delectus? Animi cum, voluptates ' +
        'ipsam accusantium nemo id modi et reiciendis perferendis ' +
        'dolore alias beatae distinctio vero aut molestiae enim!',
        'Lorem ipsum dolor sit amet consectetur adipisicing' +
        'elit. Eligendi, laudantium delectus? Animi cum, voluptates ' +
        'ipsam accusantium nemo id modi et reiciendis perferendis ' +
        'dolore alias beatae distinctio vero aut molestiae enim!',
    ],
    tags: ['Тег1', 'Тег2']
}

export const QuestionPage: FC = (): ReactElement => {
    const navigate = useNavigate();

    const goToQuestionsPage = useCallback(() => {
        navigate('/')
    }, [])
    
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
            <CardList className='answers-list'>
                {question.answers.map((comment) => {
                    return (
                        <Card className='answers-list__answer-block'>
                            <div className='answers-list__answer-wrapper'>
                                <div className='answers-list__answer'>
                                    {comment}
                                </div>
                                <FormControl
                                    className='answers-list__correct-flag'
                                    label='Correct'
                                    control={<CheckboxControl />}
                                    labelPosition='right'
                                    minLabelWidth={72}
                                />
                            </div>
                        </Card>
                    );
                })}
            </CardList>
            <FormControl
                className='question-page__answer-control'
                fullWidth
                control={
                    <InputControl
                        placeholder={translations.questionPage_enterYourAnswer}
                        mutiline
                        rows={10}
                    />
                }
            />
            <Button color='secondary' onClick={goToQuestionsPage}>
                {translations.questionPage_Answer}
            </Button>
        </div>
    );
}