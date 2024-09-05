import React, { useContext, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { TbMessage2, TbTools } from "react-icons/tb";
import { Context } from "./Context";
import { MdOutlineElectricBolt } from "react-icons/md";

interface ActiveContextType {
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
}
export default function BottomNav() {
    const { active, setActive } = useContext<ActiveContextType>(Context);
    console.log("🚀 ~ BottomNav ~ active:", active);
    const tabs = [
        {
            img: <IoHomeOutline size={23} />,
            title: "Home",
        },
        {
            img: <TbTools size={23} />,
            title: "Mine",
        },
        {
            img: <AiOutlineUsergroupAdd size={23} />,
            title: "Referrals",
        },
        {
            img: <TbMessage2 size={23} />,
            title: "FAQ",
        },
    ];
    return (
        <div className="flex justify-center relative w-full">
            <div className="fixed bottom-0 w-full px-2">
                {active === "Home" && (
                    <div className="flex items-center justify-start gap-2 mb-4">
                        <MdOutlineElectricBolt color="#259F7B" size={20} />
                        <p className={`text-black`}>1000</p>
                        <p className={`text-black`}>/</p>
                        <p className={`text-black`}>1000</p>
                    </div>
                )}
                <div className="flex justify-between items-center gap-1 bg-[#EEF5F3] p-2 rounded-lg mx-2 w-[95vw]">
                    {tabs.map((item, idx) => (
                        <div
                            key={idx}
                            className={`${
                                active === item?.title ? "bg-[#259F7B] text-[#FFFFFF]" : "bg-white text-[#C2C7C5]"
                            } rounded-lg flex flex-col items-center px-4 py-2 cursor-pointer text-sm  hover:bg-[#259F7B] hover:text-white w-full`}
                            onClick={() => setActive(item.title)}
                        >
                            {item.img}
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
