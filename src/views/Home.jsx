import React from 'react'
import ShowcaseSection from './sections/ShowcaseSection'
import BrandsSection from './sections/BrandsSection'
import FeaturesSection from './sections/FeaturesSection'
import HowSection from './sections/HowSection'
import MoreFeaturesSection from './sections/MoreFeaturesSection'
import TestimonialsSection from './sections/TestimonialsSection'
import FAQSection from './sections/FAQSection'
import SubscribeSection from './sections/SubscribeSection'

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
    </main>
  )
}

export default Home