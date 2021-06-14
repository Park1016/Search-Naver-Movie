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
        <form>
            <input onKeyDown={(e)=>onKeyDown(e)} type='text' placeholder='무엇을 검색하시겠습니까?'></input>
            <button onClick={(e)=>onClick(e)}>검색</button>
        </form>
    )
})

export default Input;