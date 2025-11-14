import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { Helmet } from 'react-helmet'; // Add this import

function ArticleDetail() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const article = articles.find(article => article.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Calculate reading time (assuming 200 words per minute for Hebrew)
  const calculateReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime;
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">מאמר לא נמצא</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            חזרה לעמוד הראשי
          </button>
        </div>
      </div>
    );
  }

  // Copy link handler
  const handleCopyLink = () => {
    // Build the production article URL
    const baseUrl = 'https://dr-shir-schadmy-levy-landing.onrender.com';
    const articlePath = `/article/${article.id}`;
    const fullUrl = baseUrl + articlePath;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8" dir="rtl">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={article.excerpt || article.title} />
        {article.tags && (
          <meta name="keywords" content={article.tags.join(', ')} />
        )}
      </Helmet>

      {/* Go Back Button */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <button
            onClick={() => navigate('/#articles')}
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
            <span className="font-medium">חזרה למאמרים</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          {/* Article Content */}
          <div className="p-8 md:p-12">
            {/* Reading Time */}
            <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              זמן קריאה משוער: {calculateReadingTime(article.content)} דקות
            </div>
            
            {/* Article Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            {/* Article Excerpt */}
            {article.excerpt && (
              <div className="text-lg text-gray-600 mb-8 leading-relaxed border-r-4 border-blue-500 pr-4">
                {article.excerpt}
              </div>
            )}
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <div className="whitespace-pre-line">
                {article.content}
              </div>
            </div>

            {/* Hashtags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* PDF Download Link */}
            {article.pdfUrl && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a 
                  href={article.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>הורד את המאמר המלא בפורמט PDF</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}

            {/* Share Link Icon */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  {/* Copy Link */}
                  <div className="relative flex items-center">
                    <svg
                      className="w-6 h-6 text-black cursor-pointer hover:opacity-70 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      onClick={handleCopyLink}
                      title="העתק קישור"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                    </svg>
                    {copied && (
                      <span className="absolute -top-8 right-0 bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-lg whitespace-nowrap z-10">
                        קישור הועתק!
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Articles Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">מאמרים אחרונים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles
              .filter(a => a.id !== article.id)
              .slice(0, 3)
              .map((latestArticle) => (
                <Link
                  key={latestArticle.id}
                  to={`/article/${latestArticle.id}`}
                  className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {/* Article Image */}
                  {latestArticle.image && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={latestArticle.image} 
                        alt={latestArticle.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {latestArticle.title}
                    </h3>
                    <hr className="border-gray-200 mb-3" />
                    <div className="flex items-center justify-between text-xs text-gray-500"></div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;