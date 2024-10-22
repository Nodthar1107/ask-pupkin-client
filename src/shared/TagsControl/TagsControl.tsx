import { CrossIcon } from "@shared/icons/CrossIcon";
import { ChangeEvent, FC, HTMLProps, ReactElement, useCallback, useRef, useState, KeyboardEvent as KbEvent, useReducer } from "react";

import '@shared/TagsControl/style.scss';
import { clsx } from "clsx";

interface ITagsControlProps {
    tagsList?: string[];
    onTagAdded?: (newTag: string) => void;
    onTagRemoved?: (index: string) => void;
}

export const TagsControl: FC<ITagsControlProps & HTMLProps<HTMLElement>> = ({
    tagsList, className, ...props
}): ReactElement => {
    const [tags, setTagsList] = useState(tagsList || []);
    const [inputValue, setInputValue] = useState('');
    const valueRef = useRef(inputValue);
    const tagsRef = useRef(tags);
    valueRef.current = inputValue;
    tagsRef.current = tags; 
    
    const handleTagRemove = useCallback((index: number) => {
        const updatedList = tagsRef.current.slice();
        updatedList.splice(index, 1);

        setTagsList(updatedList);
    }, []);

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value.includes(' ')) {
            const splitedTags = value.split(' ').filter(Boolean);
            const updatedTagsList = tagsRef.current.slice();
            updatedTagsList.push(...splitedTags);
            
            setTagsList(updatedTagsList);
            setInputValue('');

            return;
        }

        setInputValue(value);
    }, []);

    const handleKeyPress = useCallback((event: KbEvent) => {
        if (event.key === 'Backspace' && valueRef.current === '') {
            const updatedList = tagsRef.current.slice();
            updatedList.splice(tags.length - 1, 1);

            setTagsList(updatedList);
        }
    }, [])

    return (
        <span className={clsx('tags-control', className)}>
            {tags.map((tag: string, index: number) => {
                return <Tag label={tag} index={index} onRemove={handleTagRemove} />
            })}
            <input
                className='tags-control__input'
                value={inputValue}
                onKeyDown={handleKeyPress}
                onChange={handleInputChange}
            />
        </span>
    );
}

interface ITagProps {
    label: string;
    onRemove: (index: number) => void,
    index: number
}

const Tag: FC<ITagProps> = ({ label, index, onRemove }): ReactElement => {
    const removeHandler = useCallback(() => {
        onRemove(index);
    }, [index]);
    
    return (
        <span className='tags-control__tag'>
            {label}
            <CrossIcon
                className='tags-control__remove-tag-button'
                onClick={removeHandler}    
            />
        </span>
    );
}
