import React, { useState } from "react";
import styles from "./Quantity.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineBackspace } from "react-icons/hi";
import { MdClear } from "react-icons/md";
import ICard from "../../interfaces/ICard";
import axios from "axios";
import { create } from "domain";

export default function Quantity() {

    interface IBuyInfo {
        quantity: number,
        price: number
    }

    interface IInfo {
        card: ICard,
        paymentType: string
    }

    const api = "https://localhost:7175/api";
    const navigate = useNavigate();
    const location = useLocation();
    const info: IInfo = location?.state;
    const card: ICard = info.card;
    const pricePerTicket = 4.4;
    const maxTickets = card ? Math.floor((card.balanceLimit - card.balance) / pricePerTicket) : 50;
    
    const [buyInfo, setBuyInfo] = useState<IBuyInfo>({ quantity: 0, price: 0 });

    async function updateQuantity(value: number) {
        let quantityDigitsArray: string[] = String(buyInfo.quantity).split("");
        switch (value) {
        case -2:
            quantityDigitsArray = ["0"];
            break;
        case -1:
            quantityDigitsArray.pop();
            break;
        default:
            quantityDigitsArray.push(String(value));
            break;
        }
        let newTicketsQuantity = convertStringArrayToNumber(quantityDigitsArray);
        newTicketsQuantity = newTicketsQuantity > maxTickets ?  buyInfo.quantity : newTicketsQuantity;
        await setBuyInfo({
            quantity: newTicketsQuantity,
            price: pricePerTicket * newTicketsQuantity
        });
    }

    function convertStringArrayToNumber(stringArray: string[]) {
        const value = Number(stringArray.join(""));
        return value;
    }

    function navigateBack() {
        navigate(-1);
    }

    async function navigateToLoading() {
        if (card) {
            await createTransaction(card.id, buyInfo.price);
        }
        navigate("/loading", { state: !!card, replace: true });
    }

    async function createTransaction(cardId: number, transactionValue: number) {
        const requestJson = {
            cardId: cardId,
            transactionValue: transactionValue,
            paymentType: info.paymentType
        };
        await axios.put(`${api}/transaction/create`, requestJson);
    }



    return (
        <div className={styles.quantity}>
            <div className={styles.quantity__title}>Entre com a quantidade de bilhetes</div>
            <div className={styles.quantity__select}>
                <div className={styles.quantity__select__keyboard}>
                    <span className={styles.quantity__select__keyboard__key} onClick={() => updateQuantity(1)}>1</span>
                    <span className={styles.quantity__select__keyboard__key} onClick={() => updateQuantity(2)}>2</span>
                    <span className={styles.quantity__select__keyboard__key} onClick={() => updateQuantity(3)}>3</span>
                    <span className={styles.quantity__select__keyboard__key} onClick={() => updateQuantity(4)}>4</span>
                    <span className={styles.quantity__select__keyboard__key} onClick={() => updateQuantity(5)}>5</span>
                    <span className={styles.quantity__select__keyboard__key} onClick={() => updateQuantity(6)}>6</span>
                    <span className={styles.quantity__select__keyboard__key} onClick={() => updateQuantity(7)}>7</span>
                    <span className={styles.quantity__select__keyboard__key} onClick={() => updateQuantity(8)}>8</span>
                    <span className={styles.quantity__select__keyboard__key} onClick={() => updateQuantity(9)}>9</span>
                    <span className={styles.quantity__select__keyboard__key} onClick={() => updateQuantity(-2)}><MdClear/></span>
                    <span className={styles.quantity__select__keyboard__key} onClick={() => updateQuantity(0)}>0</span>
                    <span className={styles.quantity__select__keyboard__key} onClick={() => updateQuantity(-1)}><HiOutlineBackspace/></span>
                </div>
                <div className={styles.quantity__select__info}>
                    <div className={styles.quantity__select__info__quantity}>Quantidade selecionada: {buyInfo.quantity}</div>
                    <div className={styles.quantity__select__info__price}>Valor total: R${buyInfo.price.toFixed(2).toLocaleString()}</div>
                    <div className={styles.quantity__select__info__text}>
                        <ul>
                            <li>Valor unitário: R${pricePerTicket.toFixed(2).toLocaleString()}</li>
                            <li>Quantidade máxima permitida: {maxTickets}</li>
                            <li>Para compra de QRCodes, apenas pagamento em débito é aceito</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.quantity__buttons}>
                <span className={styles.quantity__buttons__button} onClick={() => navigateBack()}>&lt; Voltar</span>
                <span className={styles.quantity__buttons__button} onClick={() => navigateToLoading()}>Continuar &gt;</span>
            </div>
        </div>
    );
}