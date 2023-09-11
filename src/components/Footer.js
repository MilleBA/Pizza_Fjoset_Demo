import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div className='h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-orange-800 bg-black text-center flex items-center justify-between gap-8 uppercase ' >
            <Link href='/' className='font-bold text-xl '><Image src='/pizzaFjoset/xx.jpg' width={100} height={100} className='w-full'/> </Link>
            <p className='text-orange-200'>@2023 HER SOSIAL INFO</p>
        </div>
    )
}