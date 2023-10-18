import Image from 'next/image'
import React from 'react'
import map from '../../../../public/img/Map.svg'

const Map = () => {
  return (
    <>
        <div className=" no-flex lg:flex justify-around items-center my-10 mx-auto max-w-7xl px-10 lg:px-20">
            <div className='w-full lg:w-1/2'>
                <h3 className='font-extrabold '>Naše Prodejny</h3>
                <h1 className='text-4xl text-sea-green font-bold'>Jedenáct vzorkoven a patnáct výhradních prodejců v rámci ČR</h1>
                <p className='text-md font-medium text-gray-700 my-5'>V rámci ČR provozujeme jedenáct vzorkoven, ve kterých si můžete prohlédnout naše nejnovější modely a v případě objednávky zajistíme nejrychlejší možné vyřízení. Celkem si produkty můžete koupit ve více než stovce prodejen.</p>
                <button className='border-2 border-sea-green rounded-3xl py-2 px-6 text-sea-green font- semibold'>Všechny prodejny</button>
            </div>
            <div className='w-full lg:w-1/2 xs:my-5'>
                <Image src={map} alt="map" height={500} width={700}/>
            </div>
        </div>
    </>
  )
}

export default Map