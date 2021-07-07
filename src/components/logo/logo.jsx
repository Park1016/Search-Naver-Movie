import React from 'react';
import styles from './logo.module.css';
import './logo.css';

const Logo = (props) => {
    return (
        <div className={styles.logoDiv}>
            <i className="fas fa-video"></i>
            <h1 className={styles.logo}>Search<br/>Naver Movie</h1>
        </div>
    )
}

export default Logo;