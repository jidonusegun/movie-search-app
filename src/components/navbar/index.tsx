import React from 'react';
import useStyles from './style';
import useGlobalStyle from '../../styles'

export default function Navbar() {
    const styles = useStyles();
    const globalStyle = useGlobalStyle();
    return (
        <nav className={styles.container}>
            <div className={`${globalStyle.container} ${styles.logoContainer}`}>
                <span className={styles.logo}>MyTestApp</span>
            </div>
        </nav>
    )
}