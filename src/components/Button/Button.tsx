import React, { useCallback } from 'react';

import styles from './Button.module.scss';

export interface IButtonProps {
    label?: string;
    variant?: "plan-button" | "product-submit" | "product-add" | "auth-head-reg" | "auth-head-login";
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = (props) => {
    const { className, variant, label, onClick, type } = props;

    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (onClick) {
            return onClick(event);
        }
    }, [onClick]);

    return (
        <button
            className={`${variant && styles[variant]} ${className}`}
            onClick={handleClick}
            type={type ? type : "button"}
        >
            { label }
        </button>
    )
}

export default Button;