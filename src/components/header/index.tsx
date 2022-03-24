import useGlobalStyle from '../../styles';
import useStyles from './style';
import React from 'react';

export default function Header() {
    const globalStyle = useGlobalStyle(); 
    const styles = useStyles();
    return (
        <header className={styles.container}>
            <div className={`${globalStyle.container} ${styles.messageContainer}`}>
                <h1 className={styles.message}>Watch something incredible</h1>
            </div>
        </header>
    )
}