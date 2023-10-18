import React from 'react'
import Image from 'next/image';
import door1 from '../../../../public/img/door.png'
import door2 from '../../../../public/img/door1.svg'
import door3 from '../../../../public/img/door2.svg'
import door4 from '../../../../public/img/door3.svg'
import Link from 'next/link';

const Box = () => {
    const data = [
        {
            id: 1,
            title: "Dveře podle dekoru",
            img: door1,
            desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."

        },
        {
            id: 2,
            title: "Dveře podle dekoru",
            img: door2,
            desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
        },
        {
            id: 3,
            title: "Dveře podle dekoru",
            img: door3,
            desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
        },
        {
            id: 4,
            title: "Dveře podle dekoru",
            img: door4,
            desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
        },
    ];
    return (
        <>
            <div className=" no-flex lg:flex justify-around items-center my-10 mx-auto max-w-7xl px-20 my-20">
                {data.map((dt) => {
                    const words = dt.title.split(' ');
                    return (
                        <div key={dt.id} className='mx-5'>
                            <h3 className='text-center font-bold text-lg my-5'>
                                <span className="text-black">{words[0]}</span>{' '}
                                <span className="text-sea-green">{words[1]}</span>{' '}
                                <span className="text-sea-green">{words[2]}</span>
                            </h3>
                            <Image src={dt.img} alt="door" height={200} width={200}
                                className='mx-auto'
                            />
                            <p className='text-center text-md font-medium text-gray-700 my-5'>{dt.desc}</p>
                            <div className="flex justify-center items-center">

                                <Link href="#" className='text-sea-green font-medium m-auto'>
                                    Všechny dekory {'>'}
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Box