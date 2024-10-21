import { Avatar } from "@shared/Avatar/Avatar";
import { NumberControl } from "@shared/NumberControl/NumberControl";
import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

import '@widgets/QuestionCard/style.scss';
import { localizations } from "@shared/i18n";

interface IQuestionCardProps {
    cardId: number;
    title: string;
    description: string;
    rate: number;
    answersCount: number;
    tags: string[];
    userAvatarUrl?: string;
}

export const QuestionCard: FC<IQuestionCardProps> = ({
    cardId, title, description, rate, answersCount, tags, userAvatarUrl, ...props
}): ReactElement => {
    return (
        <article className='question-card'>
            <div className='question-card__left'>
                <Avatar className='question-card__user-avatar' src={userAvatarUrl} />
                <NumberControl />
            </div>
            <div className='question-card__right'>
                <div className='question-card__question'>
                    <Link className='question-card__question-title' to='#'>{title}</Link>
                    <div className='question-card__description'>
                        {description}
                    </div>
                </div>
                <div className='question-card__additional-info'>
                    <Link className='question-card__answers' to='#'>
                        {localizations.questionsPage_answers}
                        {answersCount > 99 ? '(99+)' : `(${answersCount})`}
                    </Link>
                    {tags && tags.length > 0 && (
                        <span className='question-card__tags-list'>
                            {tags.map((tag, index) => {
                                return <Link to='#' key={index}>{tag}</Link>;
                            })}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}