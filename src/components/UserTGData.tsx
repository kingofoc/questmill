'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

const statsIcon = "/assets/stats.svg";
const walletIcon = "/assets/wallet.svg";

export default function UserTGData () {
    const [user, setUser] = useState({ username: '', photoUrl: ''});
    const [isClient, setIsClient] = useState(false);

    // Set isClient to true only on the client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && typeof window !== 'undefined' && window.Telegram?.WebApp) {
            // Retrieve user data from Telegram WebApp SDK
            const tgUser = window.Telegram.WebApp.initDataUnsafe?.user;

            if (tgUser) {
                setUser({
                    username: tgUser.username.length > 25
                        ? `${tgUser.username.slice(0,15)}...${tgUser.username.slice(-10)}`
                        : tgUser.username,
                    photoUrl: tgUser.photo_url || ''
                });
            }

            // Open WebApp
            window.Telegram.WebApp.ready();
        }
    }, [isClient]);

    return (
        <div className="user-card">
            <div className="user-profile">
                {user.photoUrl && <Image className="user-photo" src={user.photoUrl} alt=""/>}
                <p>{user.username}</p>
            </div>
            <div className="usercard-icon-container">
                <Image className="usercard-icon" src={statsIcon} alt="" width={24} height={24} />
                <Image className="usercard-icon" src={walletIcon} alt="" width={24} height={24} />
            </div>
        </div>
    )
}
