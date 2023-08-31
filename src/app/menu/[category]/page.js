import {pizzas} from "../../../../data";
import Link from "next/link";
import Image from "next/image";

export default function CategoryPage() {
    return (
        <div className='flex flex-wrap text-orange-800'>
            {pizzas.map(item =>
                (
                    <Link
                        className='w-full h-[60vh] border-r-2 border-b-2 border-orange-800 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-orange-50'
                        href={`/product/${item.id}`} key={item.id}>
                        {/*Image container*/}
                        {item.img &&
                            <div className='relative h-[80%]'>
                                <Image src={item.img} alt='' fill className='object-contain'/>
                            </div>}
                        {/*Text container*/}
                        <div className='flex items-center justify-between font-bold '>
                            <h1 className='text-2xl uppercase p-2 '>{item.title}</h1>
                            <h2 className='group-hover:hidden text-xl'>{item.price},-</h2>
                            <button className='hidden group-hover:block uppercase bg-orange-800 text-white p-2 rounded-md'>Velg</button>
                        </div>
                    </Link>
                ))}
        </div>
    );
}