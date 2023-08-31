'use client'
import Countdown from "react-countdown";
export default function Count() {
    const endingDate = new Date('2023-10-01')
    return (
        <div>
            <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
        </div>
    )
}