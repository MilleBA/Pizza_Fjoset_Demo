import Menu from "@/components/Menu";
import Link from "next/link";
import CartIcon from "@/components/CartIcon";

export default function Navbar() {
    const user = false;

    return (
        <div
            className="relative h-12 text-orange-300 bg-black p-4 flex items-center justify-between border-b-2 border-orange-800 uppercase md:h-24 lg:px-20 xl:px-40"
            style={{
                backgroundImage: "url('/pizzaFjoset/xx.jpg')",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/*Left Links*/}
            <div className="hidden md:flex gap-4 flex-1 z-10">
                <Link href="/">Hjem</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/contact">Kontakt</Link>
            </div>

            {/*Mobile Menu*/}
            <div className="md:hidden z-10">
                <Menu />
            </div>

            {/*Right Links*/}
            <div className="hidden md:flex gap-4 items-center justify-end flex-1 z-10">
                <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
                    <img src="/phone.png" alt="phone" width={20} height={20} />
                    <span className="text-orange-800">123 456 7</span>
                </div>
                {!user ? (
                    <Link href="/login">Login</Link>
                ) : (
                    <Link href="/orders">Bestillinger</Link>
                )}
                <Link href="/cart">
                    <CartIcon />
                </Link>
            </div>
        </div>
    );
}
