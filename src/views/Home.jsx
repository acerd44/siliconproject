import React from 'react'
import ShowcaseSection from './sections/ShowcaseSection'
import BrandsSection from './sections/BrandsSection'
import FeaturesSection from './sections/FeaturesSection'
import HowSection from './sections/HowSection'
import MoreFeaturesSection from './sections/MoreFeaturesSection'
import TestimonialsSection from './sections/TestimonialsSection'
import FAQSection from './sections/FAQSection'
import SubscribeSection from './sections/SubscribeSection'
import FooterSection from './sections/FooterSection'

const Home = () => {
  return (
    <main>
      <ShowcaseSection />
      <BrandsSection />
      <FeaturesSection />
      <HowSection />
      <MoreFeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <SubscribeSection />
      <FooterSection />
    </main>
  )
}

export default Home