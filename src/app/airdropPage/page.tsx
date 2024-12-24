import Footer from "@/components/Footer";
import Image from "next/image";

const coinImage = "/assets/coin.png";

export default function AirdropPage () {

    return (
        <div className="container">
            <header>
                <div className="airdrop-header">
                    <Image className="coin-image" src={coinImage} alt="" width={60} height={60} />
                    <p>Listing date</p>
                    <h2>November, 2025</h2>
                </div>
            </header>

            <main>
                <div className="airdrop-info">
                    <h3>What you need to know</h3>
                    <p>55% of our total supply will be distributed. Your earning depends on how many QM Token you unlock. Earn more keys to unlock as many as possible to maximize your rewards!</p>

                    <p>You can only withdraw 80% of your earned token during Listing. 20% of your earned token will be locked in our platform. These tokens will be used to participate in platform activities and will be available for withdrawal after 3 months.</p>
                </div>

                <div className="withdraw">
                    <button className="withdraw-btn"><span>Withdrawal</span></button>
                </div>
            </main>
            
            <Footer />
        </div>
    )
}