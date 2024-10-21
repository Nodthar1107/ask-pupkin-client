import { QuestionCard } from "@widgets/QuestionCard/QuestionCard"
import '@widgets/QuestionList/style.scss';

export const QuestionCardList = () => {
    return (
        <div className='question-card-list'>
            <div className='question-card-list__container'>
                <QuestionCard
                    cardId={0}
                    title='Тестовый вопрос ооооооооооооооооооооооооооооооооочень длинный'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laudantium delectus? Animi cum, voluptates ipsam accusantium nemo id modi et reiciendis perferendis dolore alias beatae distinctio vero aut molestiae enim!'
                    answersCount={3}
                    rate={10}
                    tags={['Тег1', 'Тег2']}
                />
                <QuestionCard
                    cardId={0}
                    title='Тестовый вопрос ооооооооооооооооооооооооооооооооочень длинный'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laudantium delectus? Animi cum, voluptates ipsam accusantium nemo id modi et reiciendis perferendis dolore alias beatae distinctio vero aut molestiae enim!'
                    answersCount={3}
                    rate={10}
                    tags={['Тег1', 'Тег2']}
                />
                <QuestionCard
                    cardId={0}
                    title='Тестовый вопрос ооооооооооооооооооооооооооооооооочень длинный'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laudantium delectus? Animi cum, voluptates ipsam accusantium nemo id modi et reiciendis perferendis dolore alias beatae distinctio vero aut molestiae enim!'
                    answersCount={1000}
                    rate={10}
                    tags={['Тег1', 'Тег2']}
                />
                <QuestionCard
                    cardId={0}
                    title='Тестовый вопрос ооооооооооооооооооооооооооооооооочень длинный'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laudantium delectus? Animi cum, voluptates ipsam accusantium nemo id modi et reiciendis perferendis dolore alias beatae distinctio vero aut molestiae enim!'
                    answersCount={3}
                    rate={10}
                    tags={['Тег1', 'Тег2']}
                />
            </div>
        </div>
    );
}