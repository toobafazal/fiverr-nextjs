import React from 'react'
import Navbar from '../Navbar/page'

const Hero = () => {
	return (
		<>
			<div className='hero'>
				<div className='relative'>
					<div className=' absolute left-16 top-56 w-2/3'>
						<h1 className='text-white  text-4xl font-extrabold uppercase sm:text-7xl'>
							Kvalitní české <br />
							<span className='text-sea-green my-8'>dveře na míru</span>
						</h1>
						<button className="bg-sea-green text-white rounded-full my-10 py-5 px-8 font-bold text-lg">Přizpůsobit si dveře</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero