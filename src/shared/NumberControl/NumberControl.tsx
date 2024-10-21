import { FC, HTMLProps, ReactElement, useEffect, useRef, useState } from 'react';
import '@shared/NumberControl/style.scss';

interface NumberControl {
    value?: number;
    onIncrement?: VoidFunction;
    onDecrement?: VoidFunction;
}

export const NumberControl: FC<NumberControl & HTMLProps<HTMLElement>> = ({ 
    value = undefined, onIncrement = undefined, onDecrement = undefined, className = undefined
 }): ReactElement => {
    const [counter, setCounter] = useState(value || 0);
    const counterRef = useRef(value);

    const incrementHandler = onIncrement || function() {
        setCounter(counter + 1);
    }

    const decrementHandler = onDecrement || function() {
        setCounter(counter - 1);
    }

    useEffect(() => {
        if (!!counterRef.current) {
            setCounter(counterRef.current);
        }
    }, [value]);
    
    return (
        <span className='nodthar-ui-lit-number-control'>
            <input
                className='nodthar-ui-lit-number-control__input'
                readOnly
                value={counter}
            />
            <div className='nodthar-ui-lit-number-control__buttons'>
                <button
                    className='nodthar-ui-lit-number-control__button nodthar-ui-lit-number-control__button_increment'
                    onClick={incrementHandler}>
                    +
                </button>
                <button
                    className='nodthar-ui-lit-number-control__button nodthar-ui-lit-number-control__button_decrement'
                    onClick={decrementHandler}>
                    -
                </button>
            </div>
        </span>
    )
}
