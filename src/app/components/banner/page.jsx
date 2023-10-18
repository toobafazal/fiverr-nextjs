import React from 'react'
import Image from 'next/image';
import banner from '../../../../public/img/banner.svg'

const Banner = () => {
  return (
    <>
      <div className=" no-flex lg:flex justify-around items-center my-10 mx-auto max-w-7xl my-20 px-10 lg:px-20">
        <Image src={banner}  alt = "banner" width={1200} height={1200}/>
      </div>
    </>
  )
}

export default Banner 