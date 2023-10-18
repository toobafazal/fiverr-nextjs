import Image from 'next/image'
import React from 'react'

const Card = () => {
    return (
        <>
            <div className=' my-20 mx-auto max-w-7xl  px-10 lg:px-20'>
                <h3 className='font-extrabold '>Novinky</h3>
                <h1 className='text-4xl text-sea-green font-bold'>
                    Co je v naší firmě nového
                </h1>
            </div>
            <div className=" no-flex lg:flex justify-around items-center my-8 mx-auto max-w-7xl  px-10 lg:px-20">

                <div className='no-flex my-5 lg:flex lg:mr-10'>
                    <div>
                        <Image src="/img/card1.svg" alt="img" height={1000} width={1000} />
                    </div>
                    <div className='bg-[#CCE6E380] p-3'>
                        <button className='bg-white text-xs border-2 border-white  py-1 px-4 text-sea-green font-semibold'>Novinky</button>
                        <h3 className='font-extrabold my-2'>Naše Prodejny</h3>
                        <p className='text-xs font-medium text-gray-700 my-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt coventant amet pastum...
                        </p>
                    </div>
                </div>
                <div className='no-flex  my-5 lg:flex lg:ml-10'>
                    <div>
                        <Image src="/img/card2.svg" alt="img" height={1000} width={1000} />
                    </div>
                    <div className='bg-[#CCE6E380] p-3'>
                        <button className='bg-white text-xs border-2 border-white  py-1 px-4 text-sea-green font-semibold'>Tipy a Triky</button>
                        <h3 className='font-extrabold my-2'>Tipy pro co nejlepší zateplení domácnosti</h3>
                        <p className='text-xs font-medium text-gray-700 my-3'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt coventant amet pastum...
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button className=' border-2 border-sea-green rounded-3xl py-2 px-6 text-sea-green font- semibold my-5'>Všechny prodejny</button>
            </div>
        </>
    )
}

export default Card