import Image from "next/image";
import Count from "@/components/CountDown";

export default function Offer() {
    return (
        <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh] ">
            {/*Text container*/}
            <div className='flex-1 flex flex-col items-center justify-center text-center gap-8 p-6'>
                <h1 className='text-white text-5xl font-bold xl:text-6xl'>
                    En Smakfull Deal Du Ikke Vil Gå Glipp Av!
                </h1>
                <p className='text-white xl:text-xl'>Kom inn og nyt vår saftige, flammegrillede burger som er toppet med ferske ingredienser og hjemmelaget saus! Bestiller du burgeren vår i dag, får du en gratis porsjon med pommes frites! Dette tilbudet
                    varer kun en begrenset periode, så ikke gå glipp av sjansen til å smake på burgerlykken med litt ekstra på siden – helt gratis!</p>
                <Count/>
                <button className='bg-orange-800 text-white rounded-md py-3 px-6'>Bestill nå</button>
            </div>
            {/*Image container container*/}
            <div className='flex-1 w-full relative md:h-full '>
                <Image src='/pizzaFjoset/burger.png' alt='offer' fill className='object-cover rounded-md'/>
            </div>
        </div>
    )
}