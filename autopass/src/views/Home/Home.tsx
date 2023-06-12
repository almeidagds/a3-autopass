import React from "react";
import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import ITransaction from "../../interfaces/ITransaction";
import axios from "axios";
import ICard from "../../interfaces/ICard";

export default function Home() {
    
    const api = "https://localhost:7175/api";
    const navigate = useNavigate();

    async function getSelectedCard(cardNumber: string): Promise<ICard[]> {
        const response = await axios({
            method: "get",
            url: `${api}/card/getByCardNumber/${cardNumber}`,
            responseType: "json",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Credentials": "true"
            }
            
        });
        return response.data;
    }

    async function requestCardNumber() {
        const cardNumber: string = window.prompt("Insira o número do seu cartão:") || "";
        const cards: ICard[] = await getSelectedCard(cardNumber);
        if (cards?.length > 0) {
            navigateToBuyType(cards);
        } else {
            window.alert("Nenhum cartão com esse número foi encontrado");
        }
    }

    function navigateToBuyType(state: ICard[]) {
        navigate("/buytype", { state: state, replace: true});
    }
    
    function navigateToQuantity() {        
        navigate("/quantity"); 
    }


    return (
        <div className={styles.home}>
            <div className={styles.home__text} >Seja bem-vindo!</div>
            <div className={styles.home__text} >selecione o produto</div>
            <div className={styles.home__buttons}>
                <button className={styles.home__buttons__button} type="button" onClick={() => navigateToQuantity()}>
                    <div className={styles.home__buttons__button__image}><img src="./assets/images/qrcode-icon.png"/></div>
                    <div>Bilhete QRCode</div>
                </button>
                <button className={styles.home__buttons__button} type="button" onClick={() => requestCardNumber()}>
                    <div className={styles.home__buttons__button__image}><img src="./assets/images/cartao-top-icon.png"/></div>
                    <div>Cartão TOP</div>
                </button>
                <button className={styles.home__buttons__button} type="button" onClick={() => requestCardNumber()}>
                    <div className={styles.home__buttons__button__image}><img src="./assets/images/bilhete-unico-icon.png"/></div>
                    <div>Bilhete Único</div>
                </button>
            </div>
            <div className={styles.home__text} >ou continue através do nosso app</div>
            <div className={styles.home__app}>
                <div className={styles.home__app__qrcode}>
                    <img src="./assets/images/app-top.png"/>
                    <div className={styles.home__app__qrcode__box}>
                        <img src="./assets/images/qrcode-app.png"/>
                        <div className={styles.home__app__qrcode__box__text}>Use sua câmera para escanear!</div>
                    </div>
                </div>
                <div className={styles.home__app__info}>
                    <ul>
                        <li>consulta de saldo</li>
                        <li>recarga de créditos</li>
                        <li>integração</li>
                    </ul>
                    <ul>
                        <li>conta digital</li>
                        <li>cartão de crédito</li>
                        <li>bilhete QRCode</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}