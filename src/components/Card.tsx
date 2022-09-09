import React, { FC, useState } from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps {
    width: string;
    height?: string;
    name?: string;
    age?: number;
    variant?: CardVariant;
    children?: React.ReactNode;
    onClick: (num: number) => void;
}

// Тайпскрипт создает жесткую типизацию. Чтобы мы всегда знали какого типа получаем данные. Также можно
// сделать данные необязательные для компонента. Для этого в height я поставил ?. Тогда тс не будет ругаться.

const Card: FC<CardProps> =
    ({
        width,
        height,
        variant,
        children,
        onClick
    }) => {
        const [state, setState] = useState(0);

        return (
            <div style={{
                width, height,
                border: variant === CardVariant.outlined ? '1px solid #000' : 'none',
                backgroundColor: variant === CardVariant.primary ? 'lightgrey' : 'none'
            }} onClick={() => onClick(state)}>
                {children}
            </div>
        )
    }

export default Card;