import Image from "next/image";
import React, { useState } from "react";
import BottomModal from "./BottomModal";
import { RxCross2 } from "react-icons/rx";
import { degensData, flippersData, holdersData, Speclals, tabs, whalesData } from "@/constant/MinTab";
import PrTeam from "./Mine/PrTeam";
import { prTeamData } from "@/constant/MineData/PrTeam";
import { Web3Data } from "@/constant/MineData/Web3";
import { MarketData } from "@/constant/MineData/Markets";
import { LegalData } from "@/constant/MineData/Legal";
import SpeclalsSection from "./Mine/specials";
import { SpecialData } from "@/constant/MineData/Specials";

export default function UpgradeProfit() {
    const [tabActive, setTabActive] = useState<string>("PR&Team");
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <div className="pb-[100px]">
            <p className="text-xs sm:text-lg font-semibold mt-4 text-white">Upgrade Profit</p>
            <div className="flex justify-between bg-[#ffffff35] rounded-lg py-2 px-1 mt-4">
                {tabs.map((item, idx) => (
                    <div key={idx} className="cursor-pointer" onClick={() => setTabActive(item?.title)}>
                        <p
                            className={`${tabActive === item?.title ? "bg-[#341355] text-[#FFFFFF]" : " text-[#C2C7C5]"
                                } px-[0.4rem] py-1 rounded-lg font-bold text-xs sm:text-lg`}
                        >
                            {item?.title}
                        </p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 sm:gap-5 gap-2 xs:grid-cols-3 sm:grid-cols-4 h-full py-4">
                {tabActive == "PR&Team" &&
                    <>
                        {
                            prTeamData?.map((item: any, key: any) => {
                                const { img, ppr, lvl, dollar, pprDollar, title } = item;
                                return (
                                    <div key={key}>
                                        <PrTeam img={img} ppr={ppr} lvl={lvl} dollar={dollar} pprDollar={pprDollar} title={title} />
                                    </div>

                                )
                            })
                        }
                    </>
                }
                {tabActive == "Markets" &&
                    <>
                        {
                            MarketData?.map((item: any, key: any) => {
                                const { img, ppr, lvl, dollar, pprDollar, title } = item;
                                return (
                                    <div key={key}>
                                        <PrTeam img={img} ppr={ppr} lvl={lvl} dollar={dollar} pprDollar={pprDollar} title={title} />
                                    </div >

                                )
                            })
                        }
                    </>
                }
                {tabActive == "Legal" &&
                    <>
                        {
                            LegalData?.map((item: any, key: any) => {
                                const { img, ppr, lvl, dollar, pprDollar, title } = item;
                                return (
                                    <div key={key}>
                                        <PrTeam img={img} ppr={ppr} lvl={lvl} dollar={dollar} pprDollar={pprDollar} title={title} />
                                    </div>

                                )
                            })
                        }
                    </>
                }
                {tabActive == "Web3" &&
                    <>
                        {
                            Web3Data?.map((item: any, key: any) => {
                                const { img, ppr, lvl, dollar, pprDollar, title } = item;
                                return (
                                    <div key={key}>
                                        <PrTeam img={img} ppr={ppr} lvl={lvl} dollar={dollar} pprDollar={pprDollar} title={title} />
                                    </div>

                                )
                            })
                        }
                    </>
                }
                {tabActive == "Speclals" &&
                    <>
                        {
                            SpecialData?.map((item: any, key: any) => {
                                const { img, ppr, lvl, dollar, pprDollar, title, tokenLaunch } = item;
                                return (
                                    <div key={key}>
                                        <SpeclalsSection img={img} ppr={ppr} lvl={lvl} dollar={dollar} pprDollar={pprDollar} title={title} tokenLaunch={tokenLaunch} />
                                    </div>

                                )
                            })
                        }
                    </>
                }

                {/* <div className=" flex flex-col gap-1 mt-4">
                    {(tabActive === "PR&Team"
                        ? flippersData
                        : tabActive === "Markets"
                            ? degensData
                            : tabActive === "Legal"
                                ? holdersData : tabActive === "Legal" ? Speclals
                                    : whalesData
                    ).map((item, idx) => (
                        <div
                            key={idx}
                            className="flex justify-between items-center bg-[#ffffff35] p-2 rounded-lg"
                            onClick={() => setOpen(true)}
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-[#ffffff35] p-2 rounded-lg">
                                    <Image src={"/img/usdt-logo.png"} alt="" width={20} height={20} />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">{item?.title}</p>

                                    <p className="text-white flex items-center gap-1 text-xs">
                                        Profit <Image src={"/img/usdt-logo.png"} alt="" width={15} height={15} />
                                        {item?.profit}
                                    </p>

                                    <p className="text-white flex items-center gap-1 text-xs">
                                        Profit <Image src={"/img/usdt-gold.png"} alt="" width={15} height={15} />
                                        {item?.profitPoints}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button className="flex gap-1 items-center text-white text-xs border  py-1 px-4 rounded-lg">
                                    Buy - {item?.value}{" "}
                                    <Image src={"/img/usdt-logo.png"} alt="" width={15} height={15} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div> */}

                {/* <BottomModal isOpen={isOpen} setOpen={setOpen}>
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
                                    <p className="text-white text-2xl font-bold">Airdroplandia</p>
                                    <p className="text-gray-400 text-sm">
                                        A generous upgrade for all crypto enthusiasts!
                                    </p>
                                </div>

                                <div className="flex flex-col gsp-4 mt-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-400">Upgrade period:</p>
                                        <p className="text-white">10 days</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-400">Max profit</p>
                                        <p className="text-white text-sm flex items-center gap-1">
                                            <Image src={"/img/usdt-logo.png"} alt="" width={15} height={15} />
                                            10 days / <Image src={"/img/usdt-gold.png"} alt="" width={15} height={15} />
                                            10 days
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-400">Profit per hour</p>
                                        <p className="text-white text-sm flex items-center gap-1">
                                            + <Image src={"/img/usdt-logo.png"} alt="" width={15} height={15} />
                                            10 days / <Image src={"/img/usdt-gold.png"} alt="" width={15} height={15} />
                                            10 days
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-400">Profit per click</p>
                                        <p className="text-white text-sm flex items-center gap-1">
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
                </BottomModal> */}
            </div>
        </div>
    );
}
