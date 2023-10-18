import Image from 'next/image'
import Navbar from './components/Navbar/page'
import Hero from './components/Hero/page'
import Box from './components/box/page'
import Map from './components/map/page'
import Banner from './components/banner/page'
import VideoSection from './components/videoSection/page'
import LogoSlider from './components/LogoSlider/page'
import MySlider from './components/slider/page'
import Card from './components/card/page'
import Footer from './components/footer/page'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Box />
      <Map />
      <Banner />
      <VideoSection />
      <MySlider />
      <Card />
      <LogoSlider />
      <Footer />
    </>
  )
}
