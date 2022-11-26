import React from "react";
// @ts-ignore
import Logo from "../../assets/logo.svg";
// @ts-ignore
import Profile from "../../assets/profile.jpg";

import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={ styles[ "container" ] } >
            <img aria-label="Logo" src={ Logo } alt="logo" />

            <div className={styles.welcome}>
                <img aria-label="Profile" src={ Profile } alt="foto fo perfil" />

                <span aria-label="Welcome" >
                    Bem-vindo, fulano de tal!
                </span>
            </div>
        </header>
    );
};
