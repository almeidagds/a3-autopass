import React, { useState, useEffect } from "react";
import styles from "./Loading.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { create } from "domain";

export default function Loading() {

    interface IStep {
        image: string,
        description: string
    }

    const navigate = useNavigate();
    const location = useLocation();
    const isDebit: boolean = location?.state;
    const steps: IStep[] = [];
    if (steps.length === 0) createSteps();
    let timeToCancel = 50;
    const [timer, setTimer] = useState<number>(timeToCancel);
    const [step, setStep] = useState<IStep>(steps[0]);

    useEffect(() => {
        const timerId = setInterval(updateTimer, 1000);
        const stepsId = setInterval(nextStep, 3000);
        return function cleanup() {
            clearInterval(timerId);
            clearInterval(stepsId);
        };
    }, [timeToCancel]);

    async function updateTimer() {
        if (timeToCancel > 0) {
            timeToCancel = timeToCancel - 1;
            await setTimer(timeToCancel);
        } else {
            navigateToHome();
        }
    }

    function navigateToHome() {
        navigate("/");
    }

    function createSteps() {
        if (isDebit) {
            steps.push({ image: "./assets/images/pin-pad.png", description: "Insira seu cartão de débito..."});
            steps.push({ image: "./assets/images/debit-card.png", description: "Cartão de débito selecionado..."});
            steps.push({ image: "./assets/images/password.png", description: "Insira a senha do cartão..."});
            steps.push({ image: "./assets/images/approved.png", description: "Sua compra foi aprovada..."});
        } else {
            steps.push({ image: "./assets/images/approved.png", description: "Sua compra foi aprovada..."});
        }
    }

    function nextStep() {
        if (steps.length > 1) {
            steps.shift();
            setStep(steps[0]);
            setTimeout(() => nextStep(), 3000);
        } else {
            navigateToHome();
        }
    }
    
    return (
        <div className={styles.loading}>
            <div className={styles.loading__info}>
                <div className={styles.loading__info__image}>
                    <img src={step.image} />
                </div>
                <div className={styles.loading__info__text}>
                    {step.description}
                </div>
            </div>
            <div className={styles.loading__buttons}>
                <div className={styles.loading__buttons__timer}>{timer}</div>
                <div className={styles.loading__buttons__cancel} onClick={() => navigateToHome()}>Cancelar</div>
            </div>
        </div>
    );
}