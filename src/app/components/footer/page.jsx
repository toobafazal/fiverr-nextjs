import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    const links = [
        {
            id: 1,
            link: "Proč s námi",
        },
        {
            id: 2,
            link: "Interiérové dveře",
        },
        {
            id: 3,
            link: "Zárubně",
        },
        {
            id: 4,
            link: "Dveřní doplňky",
        },
        {
            id: 5,
            link: "Fotogalerie",
        },
        {
            id: 6,
            link: "Průvodce výběrem dveří",
        },
    ];
    return (
        <>
            <div className='px-20 bg-sea-green text-white flex items-center '>
                <div>
                    <Image src="/img/Logo.svg" alt='logo' height={80} width={80} className='py-5 px-5' />
                </div>
                <div>
                    <ul className="hidden md:flex flex1">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className={`nav-links text-xs px-4 py-5 cursor-pointer capitalize  hover:scale-105 hover:duration-200 link-underline
                }`}
                            >
                                <Link href="#">
                                    {link}
                                </Link>
                            </li>

                        ))}
                    </ul>
                    <div className='border border-gray'></div>
                    <div className='flex list-none	'>
                        <li className='nav-links text-xs px-4 py-5 cursor-pointer capitalize  hover:scale-105 hover:duration-200 link-underline'>Ochrana osobních údajů</li>
                        <li className='nav-links text-xs px-4 py-5 cursor-pointer capitalize  hover:scale-105 hover:duration-200 link-underline'>Obchodní podmínky</li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer