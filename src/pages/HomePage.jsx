import { useEffect } from 'react'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import SpecializationsSection from '../sections/SpecializationsSection'
import ArticlesSection from '../sections/ArticlesSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import AppointmentSection from '../sections/AppointmentSection'


function HomePage() {
  useEffect(() => {
    // Handle hash navigation when component mounts
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <AppointmentSection />
      <SpecializationsSection />
      <ArticlesSection />
      <TestimonialsSection />
    </>
  )
}

export default HomePage
