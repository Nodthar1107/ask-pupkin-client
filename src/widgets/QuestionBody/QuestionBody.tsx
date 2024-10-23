import { clsx } from "clsx";
import { cloneElement, FC, HTMLProps, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import { translations } from "@shared/i18n";

import '@widgets/QuestionBody/style.scss';

interface IQuestionBody {
    headerElement: ReactElement | string;
    answersCount?: number;
    description?: string;
    limitMaxDescriptionLines?: boolean
    shortenTitle?: boolean;
    tags?: string[];
}

export const QuestionBody: FC<IQuestionBody & HTMLProps<HTMLElement>> = ({
    headerElement, answersCount, description, limitMaxDescriptionLines, shortenTitle,  tags, ...props
}): ReactElement => {
    const { className } = props;
    
    const headerClassName = 'question-body__question-title';

    let header = headerElement;
    if (typeof headerElement === 'string') {
        header = <h1 className={headerClassName}>{headerElement}</h1>;
    } else if (typeof headerElement === 'object') {
        header = cloneElement(headerElement as ReactElement, {
            ...(headerElement as ReactElement).props,
            className: clsx(
                headerClassName,
                shortenTitle && 'question-body__question-title_shorten'
            )
        });
    }

    return (
        <div className={clsx('question-body', className)}>
            <div className='question-body__question'>
                {header}
                <div className={clsx(
                    'question-body__description',
                    limitMaxDescriptionLines && 'question-body__description_limited'
                )}>
                    {description}
                </div>
            </div>
            <div className='question-body__additional-info'>
                {answersCount && (
                    <Link className='question-body__answers' to='#'>
                        {translations.questionsPage_answers}
                        {answersCount > 99 ? '(99+)' : `(${answersCount})`}
                    </Link>
                )}
                {tags && tags.length > 0 && (
                    <span className='question-body__tags-list'>
                        {tags.map((tag, index) => {
                            return <Link to='#' key={index}>{tag}</Link>;
                        })}
                    </span>
                )}
            </div>
        </div>
    )
}