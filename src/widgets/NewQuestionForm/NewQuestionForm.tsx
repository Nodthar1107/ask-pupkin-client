import { clsx } from "clsx";
import { ReactElement, useCallback, MouseEvent, useState, ChangeEvent } from "react";
import { translations } from "@shared/i18n";
import { InputControl } from "@shared/InputControl/InputControl";

import '@widgets/NewQuestionForm/style.scss';
import { FormControl } from "@shared/FormControl/FormControl";
import { TagsControl } from "@shared/TagsControl/TagsControl";
import { Button } from "@shared/Button/Button";
import { ErrorPanel } from "@shared/ErrorPanel/ErrorPanel";

export const NewQuestionForm = (): ReactElement => {
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState('');

    const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
        
        if (event.target.value === '') {
            setErrors([translations.newQuestionPage_emptyTitleError]);
        } else {
            setErrors([]);
        }
    }

    const onFormSubmit = useCallback((event: MouseEvent) => {
        event.preventDefault();
    }, []);
    
    return (
        <form className='new-question-form'>
            <ErrorPanel messages={errors} />
            <FormControl
                label={translations.newQuestionPage_title}
                control={<InputControl value={title} onChange={titleChangeHandler} />}
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