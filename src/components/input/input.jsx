import React, { memo, useRef } from 'react';
import styles from './input.module.css';

const Input = memo(({input}) => {
    const inputValue = useRef();
    const onInput = () => {
        if(!inputValue.current.value){
            inputValue.current.placeholder = '검색값을 입력하세요!!';
            return;
        }
        input(inputValue.current.value);
        inputValue.current.value = '';
    }

    const onKeyDown = (e) => {
        if(e === 'Enter'){
            onInput();
        }
    }

    const onClick = (e) => {
        e.preventDefault();
        onInput();
    }


    return (
        <form className={styles.form}>
            <input ref={inputValue} className={styles.input} onKeyDown={(e)=>onKeyDown(e)} type='text' placeholder='검색할 영화제목을 입력해주세요'></input>
            <button className={styles.btn} onClick={(e)=>onClick(e)} type="submit">검색</button>
        </form>
    )
})

export default Input;