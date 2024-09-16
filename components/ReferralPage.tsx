import React from "react";
import InviteFriend from "./InviteFriend";

export default function ReferralPage() {
    return (
        <div className="bg-[#341355] pt-[5px] rounded-t-[36px] h-full">
            <div style={{
                background: "radial-gradient(circle, rgba(90, 0, 150, 0.8) 40%, rgba(0, 0, 0, 1) 100%)",
            }} className=" rounded-t-[36px] pt-1 px-2 flex flex-col gap-4 h-full">
                <div className="px-2 h-full">
                    <InviteFriend />
                </div>
            </div>
        </div>
    );
}
