import { PaginationPanel } from "@widgets/PaginationPanel/PaginationPanel";
import { ComponentType } from "react";

import '@shared/hocs/withPagination/style.scss';

interface IAdditionalProperties {
    pagesCount: number
}

export function withPagination<P extends IAdditionalProperties>(Component: ComponentType){
    return (props: P) => {
        return (
            <div className='pagination-container'>
                <Component />
                <PaginationPanel className='pagination-container__pagination' pagesCount={props.pagesCount} />
            </div>
        );
    }
}