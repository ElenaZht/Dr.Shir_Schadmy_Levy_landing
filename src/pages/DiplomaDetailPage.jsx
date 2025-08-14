import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function DiplomaDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Diploma data - same as in DiplomasPage
  const diplomas = [
    {
      id: 1,
      title: 'Professional Certificate',
      institution: 'Healthcare Institution',
      previewImage: '/diplomas/4b4e7714.png',
      fullImage: '/diplomas/4b4e7714.png'
    },
    {
      id: 2,
      title: 'Advanced Certification',
      institution: 'Medical Academy',
      previewImage: '/diplomas/70fca7ab.png',
      fullImage: '/diplomas/70fca7ab.png'
    },
    {
      id: 3,
      title: 'Professional Qualification',
      institution: 'Training Institute',
      previewImage: '/diplomas/diploma3.jpeg',
      fullImage: '/diplomas/diploma3.jpeg'
    },
    {
      id: 4,
      title: 'Specialized Training',
      institution: 'Professional Academy',
      previewImage: '/diplomas/diploma4.jpeg',
      fullImage: '/diplomas/diploma4.jpeg'
    },
    {
      id: 5,
      title: 'Professional Development',
      institution: 'Continuing Education Center',
      previewImage: '/diplomas/diploma5.jpeg',
      fullImage: '/diplomas/diploma5.jpeg'
    },
    {
      id: 6,
      title: 'BPT Advanced Certification',
      institution: 'Therapy Institute',
      previewImage: '/diplomas/diploma6.jpg',
      fullImage: '/diplomas/diploma6.jpg'
    },
    {
      id: 7,
      title: 'Clinical Training Certificate',
      institution: 'Medical Center',
      previewImage: '/diplomas/diploma.jpg',
      fullImage: '/diplomas/diploma.jpg'
    },
    {
      id: 8,
      title: 'Certification Document',
      institution: 'Professional Board',
      previewImage: '/diplomas/diploma8.jpg',
      fullImage: '/diplomas/diploma8.jpg'
    },
    {
      id: 9,
      title: 'Therapeutic Certification',
      institution: 'Health Sciences Institute',
      previewImage: '/diplomas/diploma9.jpg',
      fullImage: '/diplomas/diploma9.jpg'
    }
  ]

  const diploma = diplomas.find(d => d.id === parseInt(id))

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
    <div className="min-h-screen bg-gray-50 py-20">
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

        {/* Diploma Detail */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{diploma.title}</h1>
            <p className="text-lg text-gray-600">{diploma.institution}</p>
          </div>

          {/* Full Size Image */}
          <div className="p-6">
            <div className="w-full max-w-full mx-auto">
              <img 
                src={diploma.fullImage} 
                alt={diploma.title}
                className="w-full h-auto object-contain rounded-lg shadow-lg"
                style={{ maxHeight: '80vh' }}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800">{diploma.title}</h3>
                <p className="text-sm text-gray-600">{diploma.institution}</p>
              </div>
              <button
                onClick={() => navigate('/diplomas')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                חזור לכל התעודות
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiplomaDetailPage
