import Hero from './Hero/page'
import About from './About/page'
import MarqueeSlider1 from './MarqueeSlider1/page'
import WorkBanner from './Work_Banner/page'
import Expertise from './Our-Expertise/page'
import Testimonial from './Testimonial/page'
import Faqs from './Faqs/page'
export default function Index () {
  return (
    <>
      <Hero />
      <MarqueeSlider1 />
    <About />
    <WorkBanner />
    <Expertise />
    <Testimonial />
    <Faqs />
    </>
  )
}
