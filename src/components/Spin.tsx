'use client'
import Image from "next/image"
import React, { useState } from "react"

const coinImage = "/assets/coin.png";

const rewards: { [key: number]: string} = {
    1: "10 Keys",
    2: "10,000 QM Points",
    3: "2 Keys",
    4: "50,000 QM Points",
    5: "100,000 QM Points",
    6: "5 Keys",
    7: "5 keys",
    8: "1000 QM Points",
    9: "500,000 QM Points",
    10: "2 Keys",
    11: "10,000 QM Points",
    12: "50,000 QM Points",
};

export default function SpinCoin () {
    const [reward, setReward] = useState<string>('');
    const [isRotating, setIsRotating] = useState(false);
    const [spinCount, setSpinCount] = useState(0);
    const [isFloating, setIsFloating] = useState(false);

    const generatedReward = () => {

        if (spinCount < 6) {
            handleRotate();
            setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * 6) + 1;
                const handleAnimationEnd = () => {
                    setReward(rewards[randomNumber]);
                    setIsFloating(true);
                    setTimeout(() => setIsFloating(false), 3000);
                };

                handleAnimationEnd();
                setSpinCount(spinCount + 1);
            }, 2000);
        }
    };

    const handleRotate = () => {
        setIsRotating(true);
        setTimeout(() => setIsRotating(false), 2000);
    };

    return (
        <div>
            <div className={isRotating ? "rotate" : ''} style={{ marginTop: '20px' }}>
                <Image className="spin-icon" src={coinImage} alt="" width={300} height={300} />
            </div>
            <div className={`reward-display ${isFloating ? "float-reward" : ''}`}>
                {reward}
            </div>
            <div>
                <button onClick={generatedReward} className={spinCount < 12 ? "spin-button" : "spin-cool"}>
                    <span>{spinCount < 6 ? 'Spin to earn' : 'Next spin in 24:58:45'}</span>
                </button>
            </div>
        </div>
    )
}