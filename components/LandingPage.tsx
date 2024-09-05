import React from "react";
import Score from "./Score";
import { IoPersonOutline } from "react-icons/io5";
import TapButton from "./TapButton";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function LandingPage() {
    return (
        <div className="bg-[#259F7B] pt-[5px] rounded-t-[36px]">
            <div className="bg-white rounded-t-[36px] pt-1 px-2">
                <div className="flex justify-between px-2 mt-4">
                    <div className="flex gap-2 items-center">
                        <IoPersonOutline color="black" size={25} />
                        <p className="text-black text-sm font-semibold">AFA</p>
                    </div>
                    <div>
                        <button className="text-[#4cbd9b] rounded-full px-4 py-1 text-sm bg-[#ebfcf7] font-semibold">
                            Deposit / Withdraw
                        </button>
                    </div>
                    <TonConnectButton />
                </div>
                <Score />
                <TapButton />
            </div>
        </div>
    );
}
