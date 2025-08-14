import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Search from '../components/Search';
import { searchSiteContent, createHighlightedSnippet } from '../utils/searchUtils';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchTerm(query);
      setLoading(true);
      
      // Simulate a small delay for better UX
      setTimeout(() => {
        const searchResults = searchSiteContent(query);
        setResults(searchResults);
        setLoading(false);
      }, 300);
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [searchParams]);

  const handleNewSearch = (newSearchTerm) => {
    if (newSearchTerm && newSearchTerm.trim().length >= 2) {
      const searchResults = searchSiteContent(newSearchTerm.trim());
      setResults(searchResults);
      setSearchTerm(newSearchTerm.trim());
    }
  };

  const getResultIcon = (type) => {
    if (type === 'article') {
      return (
        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      );
    } else {
      return (
        <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
        </svg>
      );
    }
  };

  const getResultTypeLabel = (type) => {
    return type === 'article' ? 'מאמר' : 'דף באתר';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12" dir="rtl">
      <div className="max-w-4xl mx-auto px-5">
        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">תוצאות חיפוש</h1>
          
          {/* Search Input */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex-1">
              <Search 
                initialValue={searchTerm} 
                onSearch={handleNewSearch}
                className="w-full"
              />
            </div>
          </div>
          
          {/* Search term display */}
          {searchTerm && (
            <div className="mt-4 text-gray-600">
              <span>חיפוש עבור: </span>
              <span className="font-semibold text-gray-800">"{searchTerm}"</span>
            </div>
          )}
        </div>

        {/* Results */}
        {loading ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400 mx-auto mb-4"></div>
            <p className="text-gray-600">מחפש...</p>
          </div>
        ) : (
          <>
            {/* Results count */}
            {searchTerm && (
              <div className="mb-6">
                <p className="text-gray-600">
                  נמצאו {results.length} תוצאות
                </p>
              </div>
            )}

            {/* Results list */}
            {results.length > 0 ? (
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={`${result.type}-${result.id}-${index}`} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <Link 
                      to={result.url}
                      className="block p-6 no-underline"
                    >
                      <div className="flex items-start gap-3">
                        {/* Icon */}
                        <div className="flex-shrink-0 mt-1">
                          {getResultIcon(result.type)}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          {/* Type label */}
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              result.type === 'article' 
                                ? 'bg-blue-100 text-blue-700' 
                                : 'bg-teal-100 text-teal-700'
                            }`}>
                              {getResultTypeLabel(result.type)}
                            </span>
                            {result.readTime && (
                              <span className="text-xs text-gray-500">
                                {result.readTime}
                              </span>
                            )}
                            {result.publishDate && (
                              <span className="text-xs text-gray-500">
                                {new Date(result.publishDate).toLocaleDateString('he-IL')}
                              </span>
                            )}
                          </div>

                          {/* Title */}
                          <h3 
                            className="text-lg font-semibold text-gray-800 hover:text-teal-600 transition-colors duration-200 mb-2"
                            dangerouslySetInnerHTML={{
                              __html: createHighlightedSnippet(result.title, searchTerm, 100)
                            }}
                          />

                          {/* Excerpt */}
                          <p 
                            className="text-gray-600 text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html: createHighlightedSnippet(result.excerpt, searchTerm, 200)
                            }}
                          />

                          {/* Matches preview */}
                          {result.matches && result.matches.length > 0 && (
                            <div className="mt-3">
                              {result.matches.slice(0, 2).map((match, matchIndex) => (
                                <div key={matchIndex} className="text-xs text-gray-500 bg-gray-50 p-2 rounded mb-1">
                                  <span className="font-medium">{match.field === 'title' ? 'כותרת' : match.field === 'content' ? 'תוכן' : match.field}:</span>
                                  <span 
                                    className="mr-2"
                                    dangerouslySetInnerHTML={{
                                      __html: match.snippet.replace(
                                        new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'),
                                        '<mark class="bg-yellow-200 px-1">$1</mark>'
                                      )
                                    }}
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Arrow icon */}
                        <div className="flex-shrink-0 mt-1">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : searchTerm ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">לא נמצאו תוצאות</h3>
                <p className="text-gray-600 mb-4">
                  לא נמצאו תוצאות עבור "{searchTerm}"
                </p>
                <div className="text-sm text-gray-500">
                  <p className="mb-2">הצעות:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>בדוק את האיות</li>
                    <li>נסה מילים כלליות יותר</li>
                    <li>נסה מילות מפתח שונות</li>
                    <li>השתמש במילים קצרות יותר</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">חיפוש באתר</h3>
                <p className="text-gray-600">
                  הכנס מונח חיפוש כדי לחפש במאמרים ובתוכן האתר
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
