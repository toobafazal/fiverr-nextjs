'use client'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const LogoSlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <div className=" my-20 max-w-7xl px-20 overflow-x-none">
                <Slider {...settings}>
                    <div>
                        <Image src="/img/LogoEU.svg" alt="logo" height={200} width={200} className='mx-10' />
                    </div>
                    <div>
                        <Image src="/img/LogoMPO.svg" alt="logo" height={200} width={200} className='mx-10'/>
                    </div>
                    <div>
                        <Image src="/img/LogoEasyDoor.svg" alt="logo" height={150} width={150} className='px-5'/>
                    </div>
                    <div>
                        <Image src="/img/LogoCesky.svg" alt="logo" height={70} width={90} className='px-5'/>
                    </div>
                    <div>
                        <Image src="/img/LogoEU.svg" alt="logo" height={200} width={200} className='px-5'/>
                    </div>
                    <div>
                        <Image src="/img/LogoMPO.svg" alt="logo" height={200} width={200} className='px-5'/>
                    </div>
                    <div>
                        <Image src="/img/LogoEasyDoor.svg" alt="logo" height={150} width={150} className='px-5'/>
                    </div>
                    <div>
                        <Image src="/img/LogoCesky.svg" alt="logo" height={90} width={90} className='px-5'/>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default LogoSlider