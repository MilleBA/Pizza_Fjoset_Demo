'use client'
import {useEffect, useState} from "react";

export default function Price(props) {

    const [total, setTotal] = useState(props.price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setTotal(
            quantity * (props.options ? props.price + props.options[selected].additionalPrice : props.price)
        );
    }, [quantity, selected, props.options, props.price])

    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>{total.toFixed(2)},-</h2>
            {/*Options container*/}
            <div className='flex gap-4'>
                {props.options.map((option, index) => (
                    <button
                        key={option.title}
                        className='min-w-[6rem] p-2 ring-1 ring-orange-500 rounded-md'
                        style={{
                            background: selected === index ? "rgb(248 113 113)" : "white",
                            color: selected === index ? "white" : "red"

                        }}
                        onClick={() => setSelected(index)}
                    >
                        {option.title}
                    </button>
                ))}
            </div>
            {/*Quantity and add button container*/}
            <div className='flex justify-between items-center'>
                {/*Quantity*/}
                <div className='flex justify-between w-full p-3 ring-1 ring-orange-500'>
                    <span>Antall</span>
                    <div className='flex gap-4'>
                        <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>{'<'}</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(prev => (prev < 9 ? prev + 1 : 9))}>{'>'}</button>
                        {/*MAX 9 PIZZAER*/}
                    </div>
                </div>
                {/*Cart*/}
                <button className='uppercase w-56 bg-orange-800 text-white p-3 ring-1 ring-orange-500'>Velg</button>
            </div>
        </div>
    )
}