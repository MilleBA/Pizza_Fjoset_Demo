import Link from "next/link";
import Image from "next/image";

export default function CartIcon() {
    return (
        <Link href='/cart' className='flex items-center gap-4'>
            <div className='relative w-8 h-8 md:h-5'>
                <Image src='/cart.png' alt='cart' fill />
            </div>
            <span>Handlekurv (3)</span>
        </Link>
    )
}