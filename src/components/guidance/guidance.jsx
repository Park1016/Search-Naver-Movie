import React from 'react';
import styles from './guidance.module.css';

const Guidance = ({query}) => {
    return (
        <h1 className={styles.guidance}>{query ? `"${query}" 의 검색결과입니다` : '영화 제목을 검색해보세요!'}</h1>
    )
}

export default Guidance;