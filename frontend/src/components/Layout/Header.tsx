import React from 'react';
import styles from '../../styles/Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="Logo" />
                <span>Vee</span>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="#">Social media</a></li>
                    <li className={styles.active}><a href="#">Grants</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
