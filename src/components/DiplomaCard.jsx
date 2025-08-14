import { Link } from 'react-router-dom'

function DiplomaCard({ diploma }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        {/* Diploma Preview */}
        <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden">
          {diploma.previewImage ? (
            <img 
              src={diploma.previewImage} 
              alt={diploma.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-indigo-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{diploma.title}</h3>
              <p className="text-sm text-gray-600">{diploma.institution}</p>
              <p className="text-sm text-gray-500">{diploma.year}</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Card Footer */}
      <div className="p-4">
        <h4 className="font-semibold text-gray-800 mb-1">{diploma.title}</h4>
        <p className="text-sm text-gray-600">{diploma.institution}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-sm text-gray-500">{diploma.year}</span>
          <Link 
            to={`/diploma/${diploma.id}`}
            className="text-indigo-600 text-sm font-medium flex items-center"
          >
            View Details 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DiplomaCard
