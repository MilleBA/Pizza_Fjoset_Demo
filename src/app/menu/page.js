import {menu} from '../../../data';
import Link from 'next/link';
import Image from 'next/image';

export default function MenuPage() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 p-8 lg:px-20 xl:px-40 min-h-screen'>
            {menu.map((category) => (
                <div key={category.id}
                     className='flex flex-col items-center bg-white p-8 rounded-md h-full transition-all ease-in-out duration-300 transform hover:bg-orange-50 hover:-translate-y-2'>
                    <div className='relative h-40 w-full mb-4'>
                        <Image src={category.img} layout='fill' objectFit='cover' className='rounded-t-md'
                               alt={`${category.title} image`}/>
                    </div>
                    <h1 className='text-center uppercase font-bold text-3xl mb-4'>{category.title}</h1>
                    <p className='text-center text-sm mb-8'>{category.desc}</p>
                    <div className='mt-auto'>
                        <Link href={`/menu/${category.slug}`}>
                            <button className='bg-orange-800 text-white py-2 px-4 rounded-md'>
                                Explore
                            </button>
                        </Link>
                    </div>
                </div>
            ))}

        </div>
    );
}

