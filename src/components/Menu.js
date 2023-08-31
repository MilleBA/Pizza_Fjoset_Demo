'use client'

import Image from "next/image";
import {useState} from "react";
import Link from "next/link";
import CartIcon from "@/components/CartIcon";


export default function Menu() {
    const [open, setOpen] = useState(false);
    const user = false;
    const links = [
        {id: 1, title: "Hjem", url: '/'},
        {id: 2, title: "Menu", url: '/menu'},
        {id: 3, title: "Åpningstider", url: '/'},
        {id: 4, title: "Kontakt", url: '/'}
    ]
    return (
        <div>
            {!open ? (<Image src='/open.png' alt='' width={20} height={20} onClick={() => setOpen(true)}/>) : (
                <Image src='/close.png' alt='' width={20} height={20} onClick={() => setOpen(false)}/>
            )}
            {open && (<div
                className='bg-orange-800 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
                {links.map(item => (
                    <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>
                ))}
                {!user ? (<Link href='/login' onClick={() => setOpen(false)}>Login</Link>) :
                    (<Link href='/orders' onClick={() => setOpen(false)}>Bestillinger</Link>)}
                <Link href='/cart' onClick={() => setOpen(false)}>
                    <CartIcon/>
                </Link>
            </div>)}
        </div>
    );
};
