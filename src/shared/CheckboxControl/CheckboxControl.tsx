import { clsx } from "clsx";
import { FC, HTMLProps, ReactElement, useCallback, useRef, useState } from "react";
import { CheckedIcon } from "@shared/icons/CheckedIcon";

import '@shared/CheckboxControl/style.scss';

interface ICheckboxControlProps {
    checked?: boolean;
}

export const CheckboxControl: FC<ICheckboxControlProps & HTMLProps<HTMLElement>> = ({
    checked, ...props
}): ReactElement => {
    const { className, onClick } = props;
    const [ checkedValue, setCheckedValue ] = useState(checked || false);
    const valueRef = useRef(checkedValue);
    valueRef.current = checkedValue;

    const clickHandler = onClick || useCallback(() => {
        setCheckedValue(!valueRef.current);
    }, []);

    return (
        <span className={clsx(
            'nodthar-ui-kit-number-control',
            className
        )}
        onClick={clickHandler}>
            {checkedValue && (
                <CheckedIcon
                    className='nodthar-ui-kit-number-control__checked-icon'
                />
            )}
        </span>
    )
}