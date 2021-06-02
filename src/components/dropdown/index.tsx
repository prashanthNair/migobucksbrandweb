import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import styles from './Dropdown.module.scss';

export type optionValue = string | number;
export interface IDropdownOptionData {
    value: optionValue;
    label: string;
}

export interface IDropdownProps {
    placeholder?: string;
    value?: optionValue;
    options: IDropdownOptionData[];
    onSelect?: (value: IDropdownOptionData) => void;

    style?: React.CSSProperties;
}

const Dropdown: React.FC<IDropdownProps> = (props) => {
    const { placeholder, options, value, onSelect, style } = props;
    const [isActive, setActive] = useState<boolean>(false);

    const dropDownContainerRef = useRef<HTMLDivElement>(null);

    const selectedItem = useMemo<IDropdownOptionData | undefined>(
        () => options.find(e => e.value === value),
        [options, value]
    );
    const toggleDropdown = useCallback(() => { setActive(!isActive) }, [isActive]);

    const handleSelect = useCallback((val: IDropdownOptionData) => {
        if (onSelect) {
            onSelect(val);
            setActive(false);
        }
    }, [onSelect]);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (isActive) {
            if (
                event.target instanceof Node
                && dropDownContainerRef.current
                && !dropDownContainerRef.current.contains(event.target)
            ) {
                setActive(false);
            }
        }
    }, [isActive]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
        
    }, [handleClickOutside]);


    return (
        <div style={style} ref={dropDownContainerRef} className={styles['container']}>
            <div onClick={toggleDropdown} className={styles['default']}>
                <span>{ selectedItem ? selectedItem.label : placeholder }</span>
                <span className={styles['arrow-container']}>{ isActive ? <UpOutlined /> : <DownOutlined /> }</span>
            </div>
            { isActive && 
                <div className={styles['options-container']}>
                    { !!options && options.map(el => <div id={el.value.toString()} onClick={() => handleSelect(el)} className={`${styles['option']} ${el.value === value && styles['active']}`} key={el.value}>{el.label}</div>) }
                </div> 
            }
        </div>
    )
}

export default Dropdown;