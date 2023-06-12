import React, { useState, useEffect } from "react";
import styles from "./Footer.module.scss";

export default function Footer() {

    const [datetime, setDatetime] = useState(new Date());

    function refreshDatetime() {
        setDatetime(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshDatetime, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    
    return (
        <footer className={styles.footer}>
            <span>
                <img className={styles.footer__logo} 
                    src="/assets/images/logo-top.png"></img>
                <div className={styles.footer__terminal_info}>
                    <span>Terminal: 40001</span>
                    <span>Versão: 23.2.0.3</span>
                </div>
            </span>
            <span>
                <div className={styles.footer__datetime}>
                    <span>{new Date().toLocaleDateString()}</span>
                    <span>{datetime.toLocaleTimeString()}</span>
                </div>
            </span>
            <span>
                <img className={styles.footer__logo} 
                    src="/assets/images/logo-mastercard.png"></img>
                <img className={styles.footer__logo} 
                    src="/assets/images/logo-visa.png"></img>
                <img className={styles.footer__logo} 
                    src="/assets/images/logo-elo.png"></img>
            </span>
        </footer>
    );
}