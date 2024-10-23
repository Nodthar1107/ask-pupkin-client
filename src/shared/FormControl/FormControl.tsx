import { clsx } from "clsx";
import { cloneElement, FC, HTMLProps, ReactElement } from "react";

import '@shared/FormControl/style.scss';

interface IFormControlProps {
    control: ReactElement;
    label?: string;
    labelPosition?: 'left' | 'right';
    minLabelWidth?: number;
    fullWidth?: boolean;
}

export const FormControl: FC<IFormControlProps & HTMLProps<HTMLElement>> = ({
    label, control, labelPosition = 'left', minLabelWidth = 20, fullWidth = false, ...props
}): ReactElement => {
    const { className } = props;
    
    return (
        <label className={clsx(
                'form-control',
                labelPosition === 'right' && 'form-control_reverese-order',
                className
            )}>
            {label && (
                <span className='form-control__label' style={{ minWidth: `${minLabelWidth}px` }}>
                    {label}
                </span>
            )}
            {fullWidth &&
                cloneElement(
                    control, {
                    ...control.props,
                    className: 'form-control__control_full-width'
                })
            || control}
        </label>
    )
}