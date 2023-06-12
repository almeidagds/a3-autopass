import React from "react";
import styles from "./BuyType.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import ICard from "../../interfaces/ICard";

export default function BuyType() {

    const api = "https://localhost:7175/api";
    const navigate = useNavigate();
    const location = useLocation();
    const cards: ICard[] = location?.state;

    function navigateBack() {
        navigate(-1);
    }

    function navigateToPayment(card: ICard) {
        navigate("/paymenttype", { state: card, replace: true });
    }

    const cardTypes: string[] = ["Comum", "Vale Transporte", "Estudante"];

    return (
        <div className={styles.buytype}>
            <div className={styles.buytype__title}>Selecione o tipo de compra</div>
            <div className={styles.buytype__options}>
                {
                    cards.map((card, index) => {
                        return (
                            <div className={styles.buytype__options__option} key={index} onClick={() => navigateToPayment(card)}>
                                <div className={styles.buytype__options__option__text}>{card.type}</div>
                                <div className={styles.buytype__options__option__info}>
                                    <div className={styles.buytype__options__option__info__balance}>Saldo: RS${card.balance.toFixed(2).toLocaleString()}</div>
                                    <div className={styles.buytype__options__option__info__limit}>Limite: R${card.balanceLimit.toFixed(2).toLocaleString()}</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className={styles.buytype__buttons}>
                <div className={styles.buytype__buttons__button} onClick={() => navigateBack()}>Voltar</div>
            </div>
        </div>
    );
}