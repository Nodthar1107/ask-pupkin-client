import { clsx } from "clsx";
import { ReactElement, useCallback, MouseEvent } from "react";
import { translations } from "@shared/i18n";
import { InputControl } from "@shared/InputControl/InputControl";

import '@widgets/NewQuestionForm/style.scss';
import { FormControl } from "@shared/FormControl/FormControl";
import { TagsControl } from "@shared/TagsControl/TagsControl";
import { Button } from "@shared/Button/Button";

export const NewQuestionForm = (): ReactElement => {
    const onFormSubmit = useCallback((event: MouseEvent) => {
        event.preventDefault();
    }, []);
    
    return (
        <form className='new-question-form'>
            <FormControl
                label={translations.newQuestionPage_title}
                control={<InputControl />}
                minLabelWidth={100}
                fullWidth
            />
            <FormControl
                label={translations.newQuestionPage_text}
                control={
                    <InputControl
                        className={clsx(
                            'new-question-form__control',
                            'new-question-form__title-input'
                        )}
                        rows={10}
                        mutiline
                    />
                }
                minLabelWidth={100}
                fullWidth
            />
            <FormControl
                label={translations.newQuestionPage_tags}
                control={<TagsControl />}
                minLabelWidth={100}
                fullWidth
            />
            <Button color="secondary"
            style={{
                width: 'fit-content'
            }}
            onClick={onFormSubmit}>
                {translations.newQuestionPage_ask}
            </Button>
        </form>
    );
}