import React, { useEffect, useRef } from 'react';
import styles from './guidance.module.css';

const Guidance = ({query, movie}) => {
    let text = useRef();
    const onCheck = () => {
        if(query){
            if(movie != undefined){
                // console.log(movie.length);
                if(movie.length != 0){
                    text.current.textContent = `"${query}" 의 검색결과입니다`;
                    return;
                }
                if(movie.length == 0){
                    text.current.textContent = `"${query}" 의 검색결과가 없습니다`;
                    return;
                }
            }
        }else{
            text.current.textContent = '영화 제목을 검색해보세요!';
            return;
        }
    };

    useEffect(()=>{
        onCheck();
    }, [movie]);

    return (
        <h1 className={styles.guidance} ref={text} className={styles.guidance}> </h1>
    )
}

export default Guidance;