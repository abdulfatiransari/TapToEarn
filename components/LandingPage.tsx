import React from "react";
import Score from "./Score";
import { IoPersonOutline } from "react-icons/io5";
import TapButton from "./TapButton";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function LandingPage() {
    return (

        <div className="bg-[#341355] pt-[5px] rounded-t-[36px] h-full">
            <div
                style={{
                    background: "radial-gradient(circle, rgba(90, 0, 150, 0.8) 40%, rgba(0, 0, 0, 1) 100%)",
                }}
                className=" rounded-t-[36px] pt-1 px-2">
                <div className="flex justify-between px-2 mt-4">
                    <div className="flex gap-2 items-center">
                        <IoPersonOutline className=" text-white" size={25} />
                        <p className=" text-white text-sm font-semibold">AFA</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <button className=" text-white rounded-full px-4 py-1 text-sm shadow-xl  bg-[#341355] font-semibold">
                            Deposit / Withdraw
                        </button>

                    </div>
                    <TonConnectButton />
                </div>
                <Score />
                <TapButton />
            </div>
        </div >
    );
}
