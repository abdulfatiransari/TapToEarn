import React from "react";
import Score from "./Score";
import UpgradeProfit from "./UpgradeProfit";

export default function MinePage() {
    return (
        <div className="bg-[#259F7B] pt-[5px] rounded-t-[36px]">
            <div className="bg-white rounded-t-[36px] pt-1 px-2 flex flex-col gap-4">
                <div className="px-2">
                    <Score />
                    <UpgradeProfit />
                </div>
            </div>
        </div>
    );
}
