import Image from "next/image";

export default function CartPage() {
    return (
        <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-orange-800 lg:flex-row'>
            <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>

                <div className='flex items-center justify-between mb-4 '>
                    <Image src='/temporary/p1.png' alt='' width={100} height={100}/>
                    <div className=''>
                        <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>Price</h2>
                    <span className='cursor-pointer'>X</span>
                </div>


                <div className='flex items-center justify-between mb-4 '>
                    <Image src='/temporary/p1.png' alt='' width={100} height={100}/>
                    <div>
                        <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>Price</h2>
                    <span className='cursor-pointer'>X</span>
                </div>

                <div className='flex items-center justify-between mb-4 '>
                    <Image src='/temporary/p1.png' alt='' width={100} height={100}/>
                    <div>
                        <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>Price</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
            </div>
            {/*SUM*/}
            <div className='h-1/2 p-4 bg-orange-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
                <div className='flex justify-between'>
                    <span>Subtotalt (3 items)</span>
                    <span>90,-</span>
                </div>
                <div className='flex justify-between'>
                    <span>Levering</span>
                    <span className='text-green-500'>FREE</span>
                </div>
                <hr className='my-2'/>
                <div className='flex justify-between'>
                    <span>Totalt</span>
                    <span className=''>90,-</span>
                </div>
                <button className='bg-orange-800 text-white rounded-md p-3 w-1/2 self-end'>CHECKOUT</button>
            </div>
        </div>
    )
}