import { ReactElement } from "react";

import '@pages/NewQuestion/style.scss';
import { translations } from "@shared/i18n";
import { NewQuestionForm } from "@widgets/NewQuestionForm/NewQuestionForm";

export const NewQuestion = (): ReactElement => {
    return (
        <div className='new-question-page'>
            <h2 className='news-question-page__header'>
                {translations.newQuestionPage_header}
            </h2>
            <NewQuestionForm />
        </div>
    );
}