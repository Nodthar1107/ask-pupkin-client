import { clsx } from "clsx";
import { FC, HTMLProps, ReactElement } from "react";
import { withRate } from "@shared/hocs/withRate/withRate";
import { localizations } from "@shared/i18n";

import '@widgets/PopularTags/style.scss';
import { Link } from "react-router-dom";

const tags = [
    {
        tagName: 'perl',
        popularityRate: 1
    },
    {
        tagName: 'python',
        popularityRate: 10
    },
    {
        tagName: 'TechnoPark',
        popularityRate: 1
    },{
        tagName: 'MySQL',
        popularityRate: 10
    },
    {
        tagName: 'django',
        popularityRate: 5
    },
    {
        tagName: 'Mail.Ru',
        popularityRate: 1
    },
    {
        tagName: 'Voloshin',
        popularityRate: 1
    },
    {
        tagName: 'Firefox',
        popularityRate: 1
    }
];

export const PopularTags: FC<HTMLProps<HTMLElement>> = ({ ...props }): ReactElement => {
    return (
        <div className='popular-tags'>
            <h3 className='popular-tags__header'>
                {localizations.questionsPage_popularTags}
            </h3>
            <div className='popular-tags__tags-list'>
                {tags.map((tag) => {
                    return (
                        <Link className='popular-tags__link' to='#'>
                            <Tag
                                className='popular-tags__tag'
                                rate={tag.popularityRate}>
                                {tag.tagName}
                            </Tag>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

const PopularTag: FC<HTMLProps<HTMLElement>> = ({ ...props }): ReactElement => {
    const { className, children } = props;
    
    return (
        <span className={clsx('popular-tag', className)}>
            {children}
        </span>
    )
}

const Tag = withRate(PopularTag, (rate: number) => {
    if (rate < 5) {
        return 'low';
    }

    if (rate < 10) {
        return 'middle';
    }

    return 'high';
})
