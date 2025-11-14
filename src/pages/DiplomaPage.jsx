import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { diplomas } from '../data/diplomas'


function DiplomaPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const diploma = diplomas.find(d => d.id === parseInt(id))
  const currentIndex = diplomas.findIndex(d => d.id === parseInt(id))
  
  const goToPrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : diplomas.length - 1
    navigate(`/diploma/${diplomas[prevIndex].id}`)
  }
  
  const goToNext = () => {
    const nextIndex = currentIndex < diplomas.length - 1 ? currentIndex + 1 : 0
    navigate(`/diploma/${diplomas[nextIndex].id}`)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Add keyboard navigation
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      } else if (e.key === 'Escape') {
        navigate('/diplomas')
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [currentIndex])

  if (!diploma) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">תעודה לא נמצאה</h1>
          <button
            onClick={() => navigate('/diplomas')}
            className="text-indigo-600 hover:text-indigo-800"
          >
            חזור לתעודות
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Go Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/diplomas')}
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200 group"
          >
            <svg 
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">חזור לתעודות</span>
          </button>
        </div>

        {/* Diploma Carousel */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Previous Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 group"
          >
            <svg 
              className="w-6 h-6 text-gray-700 group-hover:text-indigo-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Diploma Image */}
          <img 
            src={diploma.fullImage} 
            alt="Diploma"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
            style={{ maxHeight: '90vh' }}
          />

          {/* Next Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 group"
          >
            <svg 
              className="w-6 h-6 text-gray-700 group-hover:text-indigo-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Diploma Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {diplomas.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiplomaPage
