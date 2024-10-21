import { clsx } from "clsx";
import { ComponentType, HTMLProps } from "react";

import '@shared/hocs/withRate/style.scss';

export type TRate = 'low' | 'middle' | 'high';

export type TRateFunc = (rate: number) => TRate;

interface IAddtionaProperties {
    rate: number;
}

export function withRate<P extends IAddtionaProperties>(Component: ComponentType<HTMLProps<HTMLElement>>, rateResolver: TRateFunc) {
    return (props: P & HTMLProps<HTMLElement>) => {
        const { className, ...others } = props;

        let rateClass = '';
        switch (rateResolver(props.rate)) {
            case 'high':
                rateClass = 'rate_high';
                break;
            case 'middle':
                rateClass = 'rate_middle';
                break;
            case 'low':
            default:
                rateClass = 'rate_low'
        }
        
        return <Component className={clsx(className, rateClass)} {...others} />;
    }
}