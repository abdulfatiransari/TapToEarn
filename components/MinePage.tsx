import React from "react";
import Score from "./Score";
import UpgradeProfit from "./UpgradeProfit";

export default function MinePage() {
    return (
        <div className="bg-[#341355] pt-[5px] rounded-t-[36px] ">
            <div style={{
                background: "radial-gradient(circle, rgba(90, 0, 150, 0.8) 40%, rgba(0, 0, 0, 1) 100%)",
                height: "100vh",
            }} className=" rounded-t-[36px] pt-1 px-2 flex flex-col gap-4">
                <div className="px-2">
                    <UpgradeProfit />
                </div>
            </div>
        </div>
    );
}
