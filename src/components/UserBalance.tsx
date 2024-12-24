'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

const coinImage = "/assets/coin.png";

export default function UserBalance () {
    const [airdrop, setAirdrop] = useState<number[]>([589480]);
    const [points, setPoints] = useState<number[]>([50300000]);
<<<<<<< HEAD
=======

>>>>>>> 02c39fa92e6bb50a24036b2a8589cd3f9632260c
    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/user-balance');
                const result = await response.json();

                setAirdrop(result.map((item: { airdrop: number }) => item.airdrop));
                setPoints(result.map((item: { points: number }) => item.points));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const formatNumber = (num: number): string => {
        if (num >= 1_000_000_000) {
            return (num / 1_000_000_000).toFixed(num % 1_000_000_000 === 0 ? 0 : 1) + "B";
        } else if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1) + "M";
        } else if (num >= 10_000) {
            return (num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 1) + "K";
        } else {
            return num.toString();
        }
    };
    
    
    return (
        <div>
            <div className="balance-card">
                <div className="balance-box">
                    {airdrop.map((airdrop, index) => (
                        <div key={index} className="airdrop">
                            <p className="balance-title">QuestMill Token</p>
                            <Image className="coin-image" src={coinImage} alt="" width={24} height={24} />
                            <span>{formatNumber(airdrop)}</span>
                        </div>
                    ))}

                    {points.map((points, index) => (
                        <div key={index} className="points">
                            <p className="balance-title">QuestMill Points</p>
                            <Image className="coin-image" src={coinImage} alt="" width={24} height={24} />
                            <span>{formatNumber(points)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
