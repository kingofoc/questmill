import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";

const coinImage = "/assets/coin.png";
const copyIcon = "/assets/copy.svg";

export default function ReferralPage () {
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
        <div className="container">
            <main>
                <div className="invite-rule">
                    <div className="inviterule-card">
                        <div className="text-card">
                            <h2>INVITE FRIENDS</h2>
                            <p>Earn <span className="highlight">10000</span> Points for each invite, while your friend receives <span className="highlight">5000</span> Points for using your invite link. You also earn <span className="highlight">Keys</span> based on how many friends you invited
                            </p>
                        </div>
                        <div className="invite-rewards">
                            <span>Total Earned:</span>
                            <div className="invite-points">
                                <Image className="coin-image" src={coinImage} alt="" width={24} height={24} />
                                <span>{formatNumber(280000)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="invite-button">
                    <div>
                        <button className="invitebtn-first">
                            <span>Send an Invitation</span>
                        </button>
                        <button className="invitebtn-second">
                            <Image src={copyIcon} alt="" width={16} height={16} />
                        </button>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    )
}