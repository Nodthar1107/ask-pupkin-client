import { clsx } from "clsx";
import { FC, HTMLProps, ReactElement } from "react";
import { withRate } from "@shared/hocs/withRate/withRate";
import { translations } from "@shared/i18n";

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
                {translations.questionsPage_popularTags}
            </h3>
            <div className='popular-tags__tags-list'>
                {tags.map((tag) => {
                    return (
                        <Tag
                            className='popular-tags__tag'
                            rate={tag.popularityRate}
                            label={tag.tagName}
                            key={tag.tagName}
                        />
                    );
                })}
            </div>
        </div>
    )
}

const PopularTag: FC<HTMLProps<HTMLElement>> = ({ ...props }): ReactElement => {
    const { className, label } = props;
    
    return (
        <Link className={clsx('popular-tag', className)} to={`/questions?tag=${label}`}>
            {label}
        </Link>
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
