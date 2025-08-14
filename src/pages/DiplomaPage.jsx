import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function DiplomaPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Diploma data - same as in DiplomasPage
  const diplomas = [
    {
      id: 1,
      title: 'Professional Certificate',
      institution: 'Healthcare Institution',
      previewImage: '/diplomas/design1.png',
      fullImage: '/diplomas/design1.png'
    },
    {
      id: 2,
      title: 'Advanced Certification',
      institution: 'Medical Academy',
      previewImage: '/diplomas/design2.png',
      fullImage: '/diplomas/design2.png'
    },
    {
      id: 3,
      title: 'Professional Qualification',
      institution: 'Training Institute',
      previewImage: '/diplomas/design3.png',
      fullImage: '/diplomas/design3.png'
    },
    {
      id: 4,
      title: 'Specialized Training',
      institution: 'Professional Academy',
      previewImage: '/diplomas/design4.png',
      fullImage: '/diplomas/design4.png'
    },
    {
      id: 5,
      title: 'Professional Development',
      institution: 'Continuing Education Center',
      previewImage: '/diplomas/design5.png',
      fullImage: '/diplomas/design5.png'
    },
    {
      id: 6,
      title: 'BPT Advanced Certification',
      institution: 'Therapy Institute',
      previewImage: '/diplomas/design6.png',
      fullImage: '/diplomas/design6.png'
    },
    {
      id: 7,
      title: 'Clinical Training Certificate',
      institution: 'Medical Center',
      previewImage: '/diplomas/certificate7.jpg',
      fullImage: '/diplomas/certificate7.jpg'
    },
    {
      id: 8,
      title: 'Certification Document',
      institution: 'Professional Board',
      previewImage: '/diplomas/certificate8.jpg',
      fullImage: '/diplomas/certificate8.jpg'
    },
    {
      id: 9,
      title: 'Therapeutic Certification',
      institution: 'Health Sciences Institute',
      previewImage: '/diplomas/certificate9.png',
      fullImage: '/diplomas/certificate9.png'
    }
  ]

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
