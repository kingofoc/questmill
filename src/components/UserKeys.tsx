'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

const platinumKeyIcon = "/assets/platinum-key.svg";

export default function UserKeys () {
    const [platinumKey, setPlatinumKey] = useState<number[]>([587]);

    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/user-balance');
                const result = await response.json();

                setPlatinumKey(result.map((item: { platinumKey: number }) => item.platinumKey));
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
        <div className="keys">
            {platinumKey.map((platinumKey, index) => (
                <div key={index} className="key">
                    <div className="key-card">
                        <Image className="platinum-key key-icon" src={platinumKeyIcon} alt="" width={15} height={15} />
                    </div>
                    <span>{formatNumber(platinumKey)}</span>
                </div>
            ))}
        </div>
    )
}