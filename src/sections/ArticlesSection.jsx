import { Link } from 'react-router-dom'
import { articles } from '../data/articles'

function ArticlesSection() {
  return (
    <section id="articles" className="py-20 px-5 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold mb-4 text-gray-800">
            מאמרים אחרונים
          </h2>
          <p className="text-xl md:text-lg text-gray-600 max-w-3xl mx-auto">
            מאמרים מקצועיים ועדכונים בתחום הפיזיותרפיה המתקדמת
          </p>
        </div>

        {/* Articles Grid */}
        <div className="flex flex-wrap gap-8 justify-start" dir="ltr">
          {articles.map((article) => (
            <Link 
              key={article.id}
              to={`/article/${article.id}`}
              className="group block relative overflow-hidden rounded-xl aspect-square bg-gray-100 cursor-pointer w-80 h-80 hover:shadow-xl"
            >
              {/* Background Image */}
              <img 
                src={article.image} 
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors duration-300"></div>
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-lg font-bold leading-tight group-hover:text-blue-200 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticlesSection
