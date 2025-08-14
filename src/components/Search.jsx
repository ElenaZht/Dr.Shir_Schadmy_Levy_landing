import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ className = '', initialValue = '', onSearch = null }) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // If this is the in-page search (onSearch provided), do live highlighting
    if (onSearch) {
      handleLiveSearch(term);
    }
  };

  const handleLiveSearch = (term) => {
    const trimmedTerm = term.trim();
    
    // Remove previous highlights
    document.querySelectorAll('.search-highlight').forEach(el => {
      const parent = el.parentNode;
      parent.replaceChild(document.createTextNode(el.textContent), el);
      parent.normalize();
    });
    
    if (trimmedTerm.length >= 2) {
      // Escape special regex characters
      const escapedTerm = trimmedTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Find all text nodes
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: function(node) {
            // Skip script, style, input elements and navbar
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            
            const tagName = parent.tagName.toLowerCase();
            if (['script', 'style', 'input', 'textarea'].includes(tagName)) {
              return NodeFilter.FILTER_REJECT;
            }
            
            // Skip if parent is navbar to avoid searching in navbar itself
            if (parent.closest('nav')) {
              return NodeFilter.FILTER_REJECT;
            }
            
            return NodeFilter.FILTER_ACCEPT;
          }
        },
        false
      );
      
      const textNodes = [];
      let node;
      while (node = walker.nextNode()) {
        if (node.textContent.trim().length > 0) {
          textNodes.push(node);
        }
      }
      
      let foundMatches = false;
      textNodes.forEach(textNode => {
        const text = textNode.textContent;
        const regex = new RegExp(`(${escapedTerm})`, 'gi');
        
        if (regex.test(text)) {
          foundMatches = true;
          const highlightedText = text.replace(regex, '<span class="search-highlight bg-yellow-300 px-1 rounded">$1</span>');
          
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = highlightedText;
          
          const fragment = document.createDocumentFragment();
          while (tempDiv.firstChild) {
            fragment.appendChild(tempDiv.firstChild);
          }
          
          textNode.parentNode.replaceChild(fragment, textNode);
        }
      });
      
      // Scroll to first match after a brief delay
      if (foundMatches) {
        setTimeout(() => {
          const firstMatch = document.querySelector('.search-highlight');
          if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    }
  };

  const handleSearch = (searchType = 'global') => {
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm.length >= 2) {
      if (searchType === 'global') {
        // Navigate to search results page
        navigate(`/search?q=${encodeURIComponent(trimmedTerm)}`);
      } else if (onSearch) {
        // Call the provided search function for local search
        onSearch(trimmedTerm);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (onSearch) {
        // For live search (on homepage), do live highlighting
        handleLiveSearch(searchTerm);
        const matches = document.querySelectorAll('.search-highlight');
        if (matches.length > 0) {
          matches[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        // For navbar search, navigate to search results
        handleSearch('global');
      }
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <input 
          type="text" 
          placeholder="חיפוש..." 
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="border border-gray-300 rounded-full px-4 py-2 pr-12 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 w-48 transition-all duration-200"
        />
        <svg 
          onClick={() => handleSearch('global')}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
};

export default Search;
