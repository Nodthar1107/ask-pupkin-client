import { clsx } from "clsx";
import { FC, HTMLProps, ReactElement } from "react";
import { Link } from "react-router-dom";
import { translations } from "@shared/i18n";

import '@widgets/BestMembers/style.scss';

const bestMembers: { id: number, userName: string }[] = [
    {
        id: 0,
        userName: 'Nodthar1107'
    },
    {
        id: 1,
        userName: 'Nordok1107'
    },
    {
        id: 2,
        userName: 'Mr. Freeman'
    },
    {
        id: 3,
        userName: 'Dr. House'
    },
    {
        id: 4,
        userName: 'And my sword'
    },
    {
        id: 5,
        userName: 'And my bowl!'
    },
    {
        id: 6,
        userName: 'And my AXE!!!'
    }
]

export const BestMembers: FC<HTMLProps<HTMLElement>> = ({
    className, ...props
}): ReactElement => {
    return (
        <div className={clsx('best-members', className)}>
            <h3 className='best-members__header'>
                {translations.questionPage_bestMembers}
            </h3>
            <div className='best-members__list'>
                {bestMembers.map((member: { id: number, userName: string }) => {
                    return (
                        <Link className='best-members__member-link' to='#'>
                            {member.userName}
                        </Link>
                    );
                })}
            </div>
        </div>
    )    
}