'use client'
import Image from "next/image";
import {useState} from "react";

export default function Slider() {
    const data = [
        {id: 1, title: 'Tilbud ut uken! Stor Pizza + 1,5L brus - 199 kroner!!!', image: '/pizzaFjoset/pizza.png'},
        {id: 2, title: 'Lunsj 85 kroner!!!', image: '/slide2.png'},
        {id: 3, title: 'Pizza Buffe - 200 kroner!!!', image: '/slide3.jpg'}
    ]
    const [currentSlide, setCurrentSlide] = useState(0);
    /*
        useEffect(() => {
                const interval = setInterval(() => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)), 5000);
                return () => clearInterval(interval);
            }
            ,
            []
        )
        ;
    */
    return (
        <div className=' flex flex-col h-[calc(100vh-6rem)] md:h-[calv(100 vh-9rem)] lg:flex-row'>


            <div
                className='flex-1 flex items-center justify-center flex-col gap-8 text-orange-800 font-bold bg-orange-50'>

                <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7x'>
                    {data[currentSlide].title}
                </h1>
                <button className='bg-orange-800 text-white py-4 px-8'>Bestill nå</button>
            </div>

            <div className='w-full flex-1 relative'>
                <Image src={data[currentSlide].image} alt='slide' key={data[currentSlide].id} fill
                       className='object-cover'/>
            </div>

        </div>
    )
}