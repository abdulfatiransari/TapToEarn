import Image from 'next/image'
import React from 'react'
import { BiBitcoin, BiDollarCircle } from 'react-icons/bi'
interface SpeclalsProps {
    img: string;
    ppr: number;
    lvl: number;
    dollar: number;
    pprDollar: number;
    title: string;
    tokenLaunch: string;
}
const SpeclalsSection: React.FC<SpeclalsProps> = ({ img, ppr, lvl, dollar, pprDollar, title, tokenLaunch }) => {
    return (
        <div className=' rounded-2xl shadow-xl bg-[#ffffff35] text-white'>
            <div className='flex flex-col justify-center gap-y-1 items-center  px-2 py-4'>
                {/* <div > */}
                <Image src={`/img/${img}`} alt="" width={70} height={70} />
                <span className='uppercase font-semibold text-xs sm:text-sm '>{title}</span>
                <span className='uppercase font-semibold text-xs sm:text-sm '>{tokenLaunch}</span>
                <div className='flex gap-x-2 '>
                    <span className='text-xs sm:text-sm capitalize '>{ppr}</span>
                    <span className='uppercase font-semibold text-xs sm:text-sm text-white flex justify-center items-center '><BiDollarCircle /> {pprDollar}k</span>
                    {/* </div> */}
                </div>
            </div>
            <div className='bg-white/5 w-full h-0.5' />
            <div className='px-2 py-4 flex justify-center gap-x-4 items-center '>
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

export default SpeclalsSection