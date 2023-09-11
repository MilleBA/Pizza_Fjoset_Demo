import Image from "next/image";
import {featuredProducts} from "../../data";

export default function Featured() {
    return (
        <div className='w-screen overflow-x-scroll text-orange-800'>
            {/*Wrapper*/}
            <div className='w-max flex'>
                {/*Single item*/}
                {featuredProducts.map(item => (
                    <div
                        className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-orange-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
                        {/*Image container*/}
                        {item.img && (
                            <div key={item.id}
                                 className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                                <Image
                                    src={item.img}
                                    alt='product'
                                    fill
                                    className='object-contain'/>
                            </div>
                        )}
                        {/*Text container*/}
                        <div className='flex-1 flex flex-col items-center justify-center text-center gap-4'>
                            <h1 className='text-xl font-bold uppercase xl:2xl 2xl:text-3xl'>
                                {item.title}
                            </h1>
                            <p className='p-4 2xl:p-8 '>
                                {item.desc}
                            </p>
                            <span className='text-xl font-bold'>
                           {item.price},-
                        </span>
                            <button className='bg-orange-800 text-white p-2 rounded-md'>
                                Velg
                            </button>

                        </div>
                    </div>))}
            </div>
        </div>
    )
}