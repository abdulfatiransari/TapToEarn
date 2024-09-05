import Image from "next/image";
import React, { useState } from "react";
import BottomModal from "./BottomModal";
import { RxCross2 } from "react-icons/rx";

export default function UpgradeProfit() {
    const [tabActive, setTabActive] = useState<string>("Flippers");
    const [isOpen, setOpen] = useState<boolean>(false);
    const tabs = [
        {
            title: "Flippers",
        },
        {
            title: "Degens",
        },
        {
            title: "Holders",
        },
        {
            title: "Whales",
        },
    ];

    const flippersData = [
        {
            img: "",
            title: "Airdroplandia",
            profit: "25",
            profitPoints: "250",
            value: "10",
        },
        {
            img: "",
            title: "Taplandia",
            profit: "75",
            profitPoints: "750",
            value: "25",
        },
        {
            img: "",
            title: "Memelandia",
            profit: "150",
            profitPoints: "1500",
            value: "50",
        },
        {
            img: "",
            title: "Bountylandia",
            profit: "190",
            profitPoints: "1900",
            value: "100",
        },
        {
            img: "",
            title: "Retrodroplandia",
            profit: "475",
            profitPoints: "4750",
            value: "250",
        },
        {
            img: "",
            title: "Whitelistlandia",
            profit: "760",
            profitPoints: "7600",
            value: "400",
        },
        {
            img: "",
            title: "Hamsterdam",
            profit: "950",
            profitPoints: "9500",
            value: "500",
        },
    ];
    const degensData = [
        {
            img: "",
            title: "GPU Mining",
            profit: "1,575",
            profitPoints: "15,750",
            value: "750",
        },
        {
            img: "",
            title: "ASIC Miner",
            profit: "2,100",
            profitPoints: "21,000",
            value: "1,000",
        },
        {
            img: "",
            title: "ICO Investor",
            profit: "3,150",
            profitPoints: "31,500",
            value: "1,500",
        },
        {
            img: "",
            title: "IDO Investor",
            profit: "4,200",
            profitPoints: "42,000",
            value: "2,000",
        },
        {
            img: "",
            title: "Shitcoin Shilling",
            profit: "5,250",
            profitPoints: "52,500",
            value: "2,500",
        },
        {
            img: "",
            title: "PoS Mining",
            profit: "6,300",
            profitPoints: "63,500",
            value: "3000",
        },
        {
            img: "",
            title: "Liquid Staking",
            profit: "7,350",
            profitPoints: "73,500",
            value: "3,500",
        },
        {
            img: "",
            title: "Seed Funding",
            profit: "8,400",
            profitPoints: "84,000",
            value: "4,000",
        },
    ];
    const holdersData = [
        {
            img: "",
            title: "DEX Swap",
            profit: "11,750",
            profitPoints: "117,500",
            value: "5,000",
        },
        {
            img: "",
            title: "Liquidity Provider",
            profit: "17,625",
            profitPoints: "176,250",
            value: "7,500",
        },
        {
            img: "",
            title: "DeFi Trader",
            profit: "23,500",
            profitPoints: "235,000",
            value: "10,000",
        },
        {
            img: "",
            title: "Arbitrage Bot",
            profit: "29,375",
            profitPoints: "293,750",
            value: "12,500",
        },
        {
            img: "",
            title: "Bridge Asset",
            profit: "35,250",
            profitPoints: "352,500",
            value: "15,000",
        },
        {
            img: "",
            title: "Cold Wallet",
            profit: "41,125",
            profitPoints: "411,250",
            value: "17,500",
        },
        {
            img: "",
            title: "GameFi",
            profit: "47,000",
            profitPoints: "470,000",
            value: "20,000",
        },
        {
            img: "",
            title: "P2P Trading",
            profit: "52,875",
            profitPoints: "528,750",
            value: "22,500",
        },
    ];
    const whalesData = [
        {
            img: "",
            title: "51% Attack",
            profit: "87,000",
            profitPoints: "117,500",
            value: "30,000",
        },
        {
            img: "",
            title: "Double Spending",
            profit: "101,500",
            profitPoints: "1,015,000",
            value: "35,000",
        },
        {
            img: "",
            title: "Mt.Gox Hack",
            profit: "116,000",
            profitPoints: "1,160,000",
            value: "40,000",
        },
        {
            img: "",
            title: "Silk Road",
            profit: "130,500",
            profitPoints: "1,305,000",
            value: "45,000",
        },
        {
            img: "",
            title: "Coin Mixer",
            profit: "145,000",
            profitPoints: "1,450,000",
            value: "50,000",
        },
    ];

    return (
        <div className="pb-[100px]">
            <p className="text-black text-sm font-semibold mt-4">Upgrade Profit</p>
            <div className="flex justify-between bg-[#EEF5F3] rounded-lg p-2 mt-4">
                {tabs.map((item, idx) => (
                    <div key={idx} className="cursor-pointer" onClick={() => setTabActive(item?.title)}>
                        <p
                            className={`${
                                tabActive === item?.title ? "bg-[#259F7B] text-[#FFFFFF]" : " text-[#C2C7C5]"
                            } px-4 py-1 rounded-lg font-bold text-sm`}
                        >
                            {item?.title}
                        </p>
                    </div>
                ))}
            </div>
            <div>
                <div className=" flex flex-col gap-1 mt-4">
                    {(tabActive === "Flippers"
                        ? flippersData
                        : tabActive === "Degens"
                        ? degensData
                        : tabActive === "Holders"
                        ? holdersData
                        : whalesData
                    ).map((item, idx) => (
                        <div
                            key={idx}
                            className="flex justify-between items-center bg-[#EEF5F3] p-2 rounded-lg"
                            onClick={() => setOpen(true)}
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-2 rounded-lg">
                                    <Image src={"/img/usdt-logo.png"} alt="" width={20} height={20} />
                                </div>
                                <div>
                                    <p className="text-black font-semibold text-sm">{item?.title}</p>

                                    <p className="text-black flex items-center gap-1 text-xs">
                                        Profit <Image src={"/img/usdt-logo.png"} alt="" width={15} height={15} />
                                        {item?.profit}
                                    </p>

                                    <p className="text-black flex items-center gap-1 text-xs">
                                        Profit <Image src={"/img/usdt-gold.png"} alt="" width={15} height={15} />
                                        {item?.profitPoints}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button className="flex gap-1 items-center text-black text-xs border border-[#259F7B] py-1 px-4 rounded-lg">
                                    Buy - {item?.value}{" "}
                                    <Image src={"/img/usdt-logo.png"} alt="" width={15} height={15} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <BottomModal isOpen={isOpen} setOpen={setOpen}>
                    <div className="bg-[#259F7B] pt-[5px] rounded-t-[36px]">
                        <div className="bg-white rounded-t-[36px] pt-1 px-2 flex flex-col gap-4 pb-4">
                            <div className="px-2">
                                <div className="bg-[#EEF5F3] flex flex-col justify-center items-center rounded-lg py-4 mt-2 gap-4 relative">
                                    <div
                                        className="border border-gray-200 hover:border-gray-500 rounded-lg p-1 cursor-pointer text-gray-200 hover:text-gray-500 absolute top-3 right-3"
                                        onClick={() => setOpen(false)}
                                    >
                                        <RxCross2 size={10} />
                                    </div>
                                    <Image
                                        src={"/img/usdt-logo.png"}
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="bg-white p-2 rounded-lg"
                                    />
                                    <p className="text-black text-2xl font-bold">Airdroplandia</p>
                                    <p className="text-gray-400 text-sm">
                                        A generous upgrade for all crypto enthusiasts!
                                    </p>
                                </div>

                                <div className="flex flex-col gsp-4 mt-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-400">Upgrade period:</p>
                                        <p className="text-black">10 days</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-400">Max profit</p>
                                        <p className="text-black text-sm flex items-center gap-1">
                                            <Image src={"/img/usdt-logo.png"} alt="" width={15} height={15} />
                                            10 days / <Image src={"/img/usdt-gold.png"} alt="" width={15} height={15} />
                                            10 days
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-400">Profit per hour</p>
                                        <p className="text-black text-sm flex items-center gap-1">
                                            + <Image src={"/img/usdt-logo.png"} alt="" width={15} height={15} />
                                            10 days / <Image src={"/img/usdt-gold.png"} alt="" width={15} height={15} />
                                            10 days
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-400">Profit per click</p>
                                        <p className="text-black text-sm flex items-center gap-1">
                                            + <Image src={"/img/usdt-logo.png"} alt="" width={15} height={15} />
                                            10 days / <Image src={"/img/usdt-gold.png"} alt="" width={15} height={15} />
                                            10 days
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-between mt-4">
                                    <button
                                        className="text-white text-sm font-semibold bg-[#259F7B] rounded-lg
                                    px-4 py-2 w-full max-h-12"
                                    >
                                        Buy(10 USDT) Ton
                                    </button>
                                    <button
                                        className="text-white text-sm font-semibold bg-[#259F7B] rounded-lg
                                    px-4 py-2 w-full max-h-12 leading-4 whitespace-pre-wrap"
                                    >
                                        {`Buy (10 USDT)\nInternal balance`}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </BottomModal>
            </div>
        </div>
    );
}
