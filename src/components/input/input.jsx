import React, { memo } from 'react';
import styles from './input.module.css';

const Input = memo(({input}) => {

    const onKeyDown = (e) => {
        const target = e.target;
        if(e === 'Enter'){
            if(!target.value){
                target.placeholder = '검색값을 입력하세요!!';
                return;
            }
            input(target.value);
            target.value = '';
        }
    }

    const onClick = (e) => {
        e.preventDefault();
        const target = e.target.previousElementSibling;
        if(!target.value){
            target.placeholder = '검색값을 입력하세요!!';
            return;
        }
        input(target.value);
        target.value = '';
    }

    return (
        <form className={styles.form}>
            <input className={styles.input} onKeyDown={(e)=>onKeyDown(e)} type='text' placeholder='검색할 영화제목을 입력해주세요'></input>
            <button className={styles.btn} onClick={(e)=>onClick(e)} type="submit">검색</button>
        </form>
    )
})

export default Input;