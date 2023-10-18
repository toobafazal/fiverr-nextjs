import React from 'react'
import icon1 from '../../../../public/img/icon1.svg'
import icon2 from '../../../../public/img/icon2.svg'
import icon3 from '../../../../public/img/icon3.svg'
import icon4 from '../../../../public/img/icon4.svg'
import ellipse from '../../../../public/img/Ellipse.svg'
import Image from 'next/image'

const VideoSection = () => {
    const data = [
        {
            id: 1,
            title: "Individuální přístup",
            icon: icon1,
            desc: "Každý zákazník je pro nás výjimečný. Díky komplexu služeb Easy Door si vyberete rychle a bez starostí."

        },
        {
            id: 2,
            title: "Zdravé dveře",
            icon: icon2,
            desc: "Záleží nám na tom, aby naše dveře byly nejen kvalitní, ale i maximálně bezpečné a zdravotně nezávadné."
        },
        {
            id: 3,
            title: "Český výrobek",
            icon: icon3,
            desc: "Naše dveře se vyrábějí výhradně v České republice. Dodavatelé jsou jak z ČR, tak západních zemí EU."
        },
        {
            id: 4,
            title: "Kvalitní servis",
            icon: icon4,
            desc: "Každý zákazník je pro nás výjimečný. Díky komplexu služeb Easy Door si vyberete rychle a bez starostí."
        },
    ];
    return (
        <>
            <div className='bg-gradient py-10 my-10 px-10 lg:px-20'>
                <div className="max-w-7xl py-5 ">
                    <div>
                        <h3 className='font-extrabold'>Naše přednosti</h3>
                        <h1 className='text-4xl text-sea-green font-bold'>
                            Proč pořídit dveře od CAG?
                        </h1>
                    </div>
                </div>
                <div className=" no-flex lg:flex justify-around items-center my-8 mx-auto max-w-7xl my-20 ">
                    {data.map((dt) => {
                        return (
                            <div key={dt.id} className='border-l border-grey px-5'>
                                <div className='relative'>
                                    <Image src={ellipse} alt="icon" height={60} width={60}
                                        className='m-auto'
                                    />
                                    <Image src={dt.icon} alt="icon" height={30} width={30}
                                        className='m-auto absolute top-4 left-[8.2rem] lg:left-[6.3rem] '
                                    />
                                </div>
                                <h3 className='text-center font-bold text-md my-5'>{dt.title}</h3>
                                <p className='text-center text-sm font-medium text-gray-700 my-5'>{dt.desc}</p>
                            </div>
                        )
                    })}

                </div>
                <div className='border-b-2 border-sea-green my-5 text-gray my-10'></div>
                <div className='no-flex lg:flex justify-around items-center mx-auto max-w-7xl my-20'>
                    <div className='w-full pr-10 lg:w-1/2'>
                        <h1 className='text-4xl text-sea-green font-bold'>
                            Již více než 25 let s vámi.
                        </h1>
                        <p className='text-md font-medium text-gray-700 my-5'>
                            Před dvaceti lety jsme byli drobným výrobcem lakovaných zárubní. Na úvěr jsme si koupili malou výrobní halu a zkusili najít své podnikatelské štěstí. Začínali jsme doslova od píky, jen se třemi zaměstnanci. Teď se můžeme považovat za významného výrobce dveří v České republice.
                        </p>
                        <div className='bg-white flex justify-center items-center border-b-4 border-sea-green'>
                            <div className='text-center p-2 w-1/3	'>
                                <h1 className='text-xl text-sea-green font-bold lg:text-3xl'>1998</h1>
                                <p className='font-bold text-xs lg:text-sm '>Rok založení</p>
                            </div>
                            <div className='text-center border-l-2 p-2 w-1/3	'>
                                <h1 className='text-xl text-sea-green font-bold lg:text-3xl'>48 000</h1>
                                <p className='font-bold text-xs lg:text-sm '>Vyrobených dveří</p>
                            </div>
                            <div className='text-center border-l-2 p-2 w-1/3 '>
                                <h1 className='text-xl text-sea-green font-bold lg:text-3xl'>110 000</h1>
                                <p className='font-bold text-xs lg:text-sm '>ZÁKAZNÍKŮ</p>
                            </div>
                        </div>
                    </div>
                    <div  className='w-full lg:w-1/2 my-10'>
                    {/* <video src="" autoPlay muted loop playsInline />                     */}
                    <Image src="/img/Video.svg" alt="icon" height={1000} width={1000} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default VideoSection