import React, {useCallback, useState} from 'react';
import s from './search.module.scss'
import {useDispatch} from "react-redux";
import {setSearchValue} from "../redux/slice/filterSlice";


const Search = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const debounce = require('lodash.debounce');
    

    const updateSearchValue = useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str))
        }, 800)
        , [])
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }

    return (
        <>
            <input

                value={value}
                onChange={onChangeInput}
                className={s.root}
                placeholder='Поиск пиццы'/>


        </>

    );
};

export default Search;