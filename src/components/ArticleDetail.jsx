import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { articles } from '../data/articles';

function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  return (
    <div className="min-h-screen bg-gray-50 py-8" dir="rtl">
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
        {/* Paper-like Article Card */}
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

            {/* Social Media Share Icons */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  {/* Facebook */}
                  <svg className="w-6 h-6 text-black cursor-pointer hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>

                  {/* X (formerly Twitter) */}
                  <svg className="w-6 h-6 text-black cursor-pointer hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.36 6.64l-12.72 12.72M5.64 6.64l12.72 12.72"/>
                  </svg>

                  {/* LinkedIn */}
                  <svg className="w-6 h-6 text-black cursor-pointer hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Copy Link */}
                  <svg className="w-6 h-6 text-black cursor-pointer hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Article Stats */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                {/* Like Button */}
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500 cursor-pointer hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                  </svg>
                  <span className="text-sm text-gray-600">12 לייקים</span>
                </div>

                {/* Views and Comments */}
                <div className="flex items-center gap-4">
                  {/* Views */}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span className="text-sm text-gray-500">324 צפיות</span>
                  </div>

                  {/* Comments */}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 9.25-9 9.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-9.25 9-9.25s9 4.694 9 9.25z"/>
                    </svg>
                    <span className="text-sm text-gray-500">7 תגובות</span>
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
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      {/* Likes */}
                      <div className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                        </svg>
                        <span>8</span>
                      </div>
                      
                      {/* Views and Comments */}
                      <div className="flex items-center gap-3">
                        {/* Views */}
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                          <span>156</span>
                        </div>
                        
                        {/* Comments */}
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 9.25-9 9.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-9.25 9-9.25s9 4.694 9 9.25z"/>
                          </svg>
                          <span>3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Comment Form */}
        <div className="mt-8 bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">השאירו תגובה</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                placeholder="הכניסו את שמכם"
              />
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                תגובה
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-vertical"
                placeholder="כתבו את תגובתכם כאן..."
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                style={{ backgroundColor: '#1e3a8a' }}
                className="hover:bg-blue-950 text-white font-medium py-2 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
              >
                שלח תגובה
              </button>
            </div>
          </form>
        </div>

        {/* Comments Display */}
        <div className="mt-8 bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">תגובות (7)</h3>
          <div className="space-y-6">
            {/* Comment 1 */}
            <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-medium text-sm">ד.מ</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-900">דנה מזרחי</span>
                    <span className="text-sm text-gray-500">לפני 2 ימים</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    מאמר מעולה ומאוד מועיל! הטיפים שנתתם באמת עזרו לי להבין את הנושא טוב יותר. תודה רבה על השיתוף.
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                      </svg>
                      <span>3</span>
                    </button>
                    <button className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                      השב
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-medium text-sm">י.ש</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-900">יוסי שמעון</span>
                    <span className="text-sm text-gray-500">לפני 3 ימים</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    תודה על המאמר המקצועי. יש לי שאלה לגבי הנושא - האם יש מחקרים נוספים שאפשר לקרוא עליהם?
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                      </svg>
                      <span>1</span>
                    </button>
                    <button className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                      השב
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-medium text-sm">ר.כ</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-900">רחל כהן</span>
                    <span className="text-sm text-gray-500">לפני שבוע</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    מאמר מצוין! שיתפתי אותו עם החברים שלי. ממש נהניתי לקרוא ולמדתי הרבה דברים חדשים.
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                      </svg>
                      <span>5</span>
                    </button>
                    <button className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                      השב
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;