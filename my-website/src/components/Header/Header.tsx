import React from "react";
import styles from './styles.module.css';

export default function Header() {
    return (
        <header>
            <div className={styles.logo}>Liza Biryukova</div>
            {/* <div>кнопка переключения темы</div> */}
            тест phpstorm
            <nav>
                <ul>
                    <li>Info</li>
                    <li>Projects</li>
                    <li>Contacts</li>
                </ul>
            </nav>
        </header>
    )
}