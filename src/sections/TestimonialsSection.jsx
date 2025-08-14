import { useState, useEffect } from 'react'

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. הטיפול היה מקצועי ויעיל במיוחד.",
      name: "שרה כהן",
      title: "מטופלת"
    },
    {
      id: 2,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. הרגשתי שיפור משמעותי כבר לאחר מספר טיפולים.",
      name: "דוד לוי",
      title: "מטופל"
    },
    {
      id: 3,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. שיר מקצועית ואכפתית, הטיפול עזר לי מאוד עם כאבי הגב הכרוניים.",
      name: "מרים אברהם",
      title: "מטופלת"
    },
    {
      id: 4,
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum. הגישה המקצועית והחמה של שיר עזרה לי להתמודד עם הכאבים בצוואר.",
      name: "יוסי רוזן",
      title: "מטופל"
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. התוצאות מדהימות! חזרתי לפעילות ספורטיבית בזכות הטיפול המדויק.",
      name: "רחל גולדברג",
      title: "מטופלת"
    }
  ]

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="w-full">
        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Testimonial Content */}
          <div className="text-center px-8 py-12 max-w-4xl mx-auto">
            {/* Testimonial Text */}
            <p className="text-2xl md:text-xl text-gray-700 leading-relaxed mb-8 font-light italic">
              "{testimonials[currentIndex].text}"
            </p>
            
            {/* Author Info */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-blue-700 mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-500">{testimonials[currentIndex].title}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div
            onClick={goToPrevious}
            className="absolute left-8 top-1/2 -translate-y-1/2 cursor-pointer text-blue-600 hover:text-blue-700 transition-colors duration-200 z-10 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <div
            onClick={goToNext}
            className="absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer text-blue-600 hover:text-blue-700 transition-colors duration-200 z-10 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600' 
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
