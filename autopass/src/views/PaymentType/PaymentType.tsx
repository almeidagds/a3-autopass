import React from "react";
import styles from "./PaymentType.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import ICard from "../../interfaces/ICard";

export default function PaymentType() {
    
    interface IInfo {
        card: ICard,
        paymentType: string
    }

    const navigate = useNavigate();
    const location = useLocation();
    const card = location?.state;
    function navigateBack() {
        navigate(-1);
    }

    function navigateToQuantity(info: IInfo) {
        navigate("/quantity", { state: info, replace: true });
    }

    return (
        <div className={styles.payment}>
            <div className={styles.payment__title}>
                Selecione a forma de pagamento
            </div>
            <div className={styles.payment__options}>
                <div className={styles.payment__options__option} onClick={() => navigateToQuantity({card: card, paymentType: "money"})}>
                    <div className={styles.payment__options__option__image}>
                        <img src="./assets/images/money-option.png" />
                    </div>
                    <div className={styles.payment__options__option__description}>Dinheiro</div>
                </div>
                <div className={styles.payment__options__option} onClick={() => navigateToQuantity({card: card, paymentType: "debit"})}>
                    <div className={styles.payment__options__option__image}>
                        <img src="./assets/images/debit-option.png" />
                    </div>
                    <div className={styles.payment__options__option__description}>Débito</div>
                </div>
            </div>
            <div className={styles.payment__buttons}>
                <div className={styles.payment__buttons__button} onClick={() => navigateBack()}>Voltar</div>
            </div>
        </div>
    );
}