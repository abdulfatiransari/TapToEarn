import Image from 'next/image'
import React from 'react'
import { BiBitcoin, BiDollarCircle } from 'react-icons/bi'
interface PrTeamProps {
    img: string;
    ppr: number;
    lvl: number;
    dollar: number;
    pprDollar: number;
    title: string;
}
const PrTeam: React.FC<PrTeamProps> = ({ img, ppr, lvl, dollar, pprDollar, title }) => {
    return (
        <div className=' rounded-2xl shadow-xl bg-[#ffffff35] text-white'>
            <div className='flex justify-center gap-x-2 sm:gap-x-4 items-center  sm:p-2 p-1'>
                <div>
                    <Image src={`/img/${img}`} alt="" width={70} height={70} />
                </div>
                <div>
                    <span className='uppercase font-semibold text-[9px] sm:text-sm '>{title}</span>
                    <div className='flex flex-col'>
                        <span className='text-xs sm:text-sm capitalize '>{ppr}</span>
                        <span className='uppercase font-semibold text-xs sm:text-sm text-white '>{pprDollar}k</span>
                    </div>
                </div>
            </div>
            <div className='bg-white/5 w-full h-0.5' />
            <div className='sm:p-2 p-1 flex justify-center gap-x-2 sm:gap-x-4 items-center '>
                <div>
                    <span>lvl{lvl}</span>
                </div>
                <div className='flex items-center gap-x-1' >
                    <BiDollarCircle />
                    <span>{dollar}k</span>
                </div>
            </div>
        </div>
    )
}

export default PrTeam