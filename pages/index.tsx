import Image from "next/image";
import { Inter } from "next/font/google";
import BottomNav from "@/components/BottomNav";
import { useContext } from "react";
import { Context } from "@/components/Context";
import LandingPage from "@/components/LandingPage";
import MinePage from "@/components/MinePage";
import ReferralPage from "@/components/ReferralPage";
import FAQPage from "@/components/FAQPage";

const inter = Inter({ subsets: ["latin"] });

interface ActiveContextType {
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
}

export default function Home() {
    const { active } = useContext<ActiveContextType>(Context);
    return (
        <div className="bg-white flex flex-col h-screen pt-16">
            {active === "Home" ? (
                <LandingPage />
            ) : active === "Mine" ? (
                <MinePage />
            ) : active === "Referrals" ? (
                <ReferralPage />
            ) : (
                <FAQPage />
            )}
            <BottomNav />
        </div>
    );
}
