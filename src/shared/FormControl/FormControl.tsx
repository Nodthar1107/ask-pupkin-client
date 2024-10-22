import { clsx } from "clsx";
import { cloneElement, FC, HTMLProps, ReactElement } from "react";

import '@shared/FormControl/style.scss';

interface IFormControlProps {
    control: ReactElement;
    label: string;
    minLabelWidth?: number;
    fullWidth?: boolean;
}

export const FormControl: FC<IFormControlProps & HTMLProps<HTMLElement>> = ({
    label, control, minLabelWidth = 20, fullWidth = false, ...props
}): ReactElement => {
    const { className } = props;
    
    return (
        <label className={clsx('form-control', className)}>
            <span className='form-control__label' style={{ minWidth: `${minLabelWidth}px` }}>
                {label}
            </span>
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