import { PaginationPanel } from "@widgets/PaginationPanel/PaginationPanel";
import { ComponentType, HTMLProps, ReactElement } from "react";

import '@shared/hocs/withPagination/style.scss';

interface IAdditionalProperties {
    pagesCount: number;
}

export function withPagination<P extends IAdditionalProperties & HTMLProps<HTMLElement>>(Component: ComponentType){
    return (props: P) => {
        const { pagesCount, ...others } = props;
        
        return (
            <div className='pagination-container'>
                <Component {...others} />
                <PaginationPanel className='pagination-container__pagination' pagesCount={pagesCount} />
            </div>
        );
    }
}