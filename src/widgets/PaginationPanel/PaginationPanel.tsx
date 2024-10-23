import { clsx } from "clsx";
import { FC, HTMLProps, ReactElement } from "react";
import { Button } from "@shared/Button/Button";

import '@widgets/PaginationPanel/style.scss';

interface IPaginationPanelProps {
    pagesCount: number;
}

export const PaginationPanel: FC<IPaginationPanelProps & HTMLProps<HTMLElement>> = ({
    pagesCount, ...props
}): ReactElement => {
    const { className } = props;
    
    return (
        <div className={clsx('pagination-panel', className)}>
            {new Array(pagesCount).fill(0).map((_, index) => {
                return (
                    <Button
                        className={clsx(
                            'pagination-panel__page-button',
                            index === 0 && 'pagination-panel__page-button_active'
                        )}
                        color='secondary'
                        key={index}>
                        {index + 1}
                    </Button>
                );
            })}
        </div>
    );
}