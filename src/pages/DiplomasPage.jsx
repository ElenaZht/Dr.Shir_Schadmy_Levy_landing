import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
// import DiplomaCard from '../components/DiplomaCard'
import { diplomas } from '../data/diplomas'


function DiplomasPage() {
  const navigate = useNavigate()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  const viewDiploma = (diplomaId) => {
    navigate(`/diploma/${diplomaId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Go Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/#about')}
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
            <span className="font-medium">חזור לדף הבית</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            הסמכות ותעודות
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            צפו בתעודות ההסמכה המקצועיות שלי
          </p>
        </div>

        {/* Diplomas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diplomas.map((diploma) => (
            <div 
              key={diploma.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => viewDiploma(diploma.id)}
            >
              {/* Simple Image Display */}
              <div className="w-full h-80 bg-gray-100">
                <img 
                  src={diploma.previewImage} 
                  alt={diploma.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card Footer */}
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-1">{diploma.title}</h4>
                <p className="text-sm text-gray-600">{diploma.institution}</p>
                <div className="flex justify-end items-center mt-3">
                  <span className="text-indigo-600 text-sm font-medium flex items-center">
                    לחץ להגדלה
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DiplomasPage
