import React from 'react'
import HeroContent from  '../sub/HeroContent'
const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full' id='about-me'>
    
      <video
      autoPlay
      muted 
      loop
      className='rotate-180 absolute top-[-340px] h-full left-0 z-[1] w-full object-cover'
      >
        <source  src="/blackhole.webm" type="video/webm"/>
      </video>
      <HeroContent/>
    </div>
  )
}

 
export default Hero
