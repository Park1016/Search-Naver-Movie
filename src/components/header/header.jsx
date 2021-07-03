﻿import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => {
    return(
        <>
            <header className={styles.header}>
            {onLogout && (
            <button className={styles.button} onClick={onLogout}>
                Logout
            </button>
            )}
            </header>
        </>
    )
    
}

export default Header;