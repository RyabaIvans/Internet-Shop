import React from 'react';
import style from './notFoundBlock.module.scss'
const NotFoundBlock = () => {
    return (
        <div>
            <h1 className={style.root}>
                Произошла ошибка 😕
            </h1>
        </div>
    );
};

export default NotFoundBlock;