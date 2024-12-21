import UserTGData from "@/components/UserTGData";
import UserBalance from "@/components/UserBalance";
import Spin from "@/components/Spin";
import Footer from "@/components/Footer";

export default function Home () {
  return (
    <div className="container">
      <header>
        <UserTGData />
      </header>

      <main>
        <div className="user-balance">
          <UserBalance />
        </div>

        <div className="spin-container">
          <Spin />
        </div>
      </main>

      <Footer />
    </div>
  )
}
