import React from "react";
import InviteFriend from "./InviteFriend";

export default function ReferralPage() {
    return (
        <div className="bg-[#259F7B] pt-[5px] rounded-t-[36px] h-full">
            <div className="bg-white rounded-t-[36px] pt-1 px-2 flex flex-col gap-4 h-full">
                <div className="px-2 h-full">
                    <InviteFriend />
                </div>
            </div>
        </div>
    );
}
