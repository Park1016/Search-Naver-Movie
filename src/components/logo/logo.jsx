import React, { useRef } from 'react';
import styles from './logo.module.css';
import './logo.css';

const Logo = (props) => {
    const logo = useRef();
    
    const onClick = () => {
        window.location.reload();
    }

    return (
        <>
            <div className={styles.back}>
                <div ref={logo} className={styles.logoDiv} onClick={onClick}>
                    <i className="fas fa-video"></i>
                    <h1 className={styles.logo}>Search<br/>Naver Movie</h1>
                </div>
            </div>
        </>
    )
}

export default Logo;