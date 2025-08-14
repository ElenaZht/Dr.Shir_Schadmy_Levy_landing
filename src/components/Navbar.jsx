import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Search from './Search';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'בית', href: '#home' },
    { name: 'אודות', href: '#about' },
    { name: 'זימון תור', href: '#appointment' },
    { name: 'תחומי התמחות', href: '#specializations' },
    { name: 'מאמרים', href: '#articles' },
    { name: 'מכתבי תודה', href: '#testimonials' },
    { name: 'צור קשר', href: '#contact' }
  ];

  // Function to determine which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      // Only run scroll detection on homepage
      if (location.pathname !== '/') {
        setActiveSection('');
        return;
      }

      const sections = menuItems.map(item => item.href.substring(1)); // Remove # from href
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Find the section that's currently in view
      let currentSection = '#home'; // Default to home
      
      // Check if we're near the bottom of the page (contact section)
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        currentSection = '#contact';
      } else {
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              currentSection = `#${sectionId}`;
            }
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Handle hash changes from URL
    const handleHashChange = () => {
      if (location.pathname === '/') {
        const hash = window.location.hash || '#home';
        setActiveSection(hash);
      }
    };

    // Set initial active section
    if (location.pathname === '/') {
      const hash = window.location.hash || '#home';
      setActiveSection(hash);
    } else {
      setActiveSection('');
    }

    // Add scroll listener only on homepage
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('hashchange', handleHashChange);
      handleScroll(); // Initial check
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location.pathname, menuItems]);

  const handleNavClick = (href) => {
    // If we're not on the homepage, navigate to homepage with hash
    if (location.pathname !== '/') {
      // Use window.location to navigate and let the browser handle the hash scrolling
      window.location.href = `/${href}`;
      return;
    }
    // If we're on homepage, let the default hash navigation work
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 font-sans" dir="rtl">
      <div className="max-w-full mx-auto px-5 flex justify-between items-center h-20">
        {/* Logo - Right side */}
        <div className="flex items-center flex-shrink-0">
          <img 
            src="/src/assets/logo.png" 
            alt=" שיר שדמי לוי" 
            className="h-12 w-auto ml-2"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="hidden" style={{ display: 'none' }}>
            <h2 className="m-0 text-2xl text-blue-700 font-semibold">שיר שדמי לוי</h2>
          </div>
        </div>

        {/* Desktop Menu - Center */}
        <ul className="hidden lg:flex list-none m-0 p-0 gap-7 justify-center flex-grow">
          {menuItems.map((item, index) => (
            <li key={index} className="m-0">
              <a 
                href={item.href} 
                onClick={(e) => {
                  if (location.pathname !== '/') {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className={`
                  no-underline font-medium text-base px-4 py-2 rounded-md transition-all duration-300 relative
                  ${activeSection === item.href
                    ? 'text-teal-400 bg-transparent after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:transform after:-translate-x-1/2 after:w-7 after:h-0.5 after:bg-teal-400 after:rounded-sm' 
                    : 'text-gray-800 hover:text-teal-400 hover:bg-transparent'
                  }
                `}
                style={activeSection === item.href ? {color: '#2dd4bf'} : {}}
                onMouseEnter={(e) => {
                  if (activeSection !== item.href) {
                    e.target.style.color = '#2dd4bf';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.href) {
                    e.target.style.color = '#1f2937';
                  }
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Search Input - Left side */}
        <Search className="hidden lg:flex" />

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex flex-col cursor-pointer p-2 gap-1" onClick={toggleMenu}>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-x-2 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 translate-x-2 -translate-y-2' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        {/* Mobile Search */}
        <div className="p-4 border-b border-gray-200">
          <Search className="w-full" />
        </div>
        
        <ul className="list-none m-0 py-5">
          {menuItems.map((item, index) => (
            <li key={index} className="m-0">
              <a 
                href={item.href} 
                onClick={(e) => {
                  if (location.pathname !== '/') {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                  setIsMenuOpen(false);
                }}
                className={`
                  block py-4 px-8 no-underline font-medium text-lg transition-all duration-300 border-r-4 border-transparent
                  ${activeSection === item.href
                    ? 'bg-transparent text-teal-400 border-r-teal-400' 
                    : 'text-gray-800 hover:bg-transparent hover:text-teal-400 hover:border-r-teal-400'
                  }
                `}
                style={activeSection === item.href ? {color: '#2dd4bf', borderRightColor: '#2dd4bf'} : {}}
                onMouseEnter={(e) => {
                  if (activeSection !== item.href) {
                    e.target.style.color = '#2dd4bf';
                    e.target.style.borderRightColor = '#2dd4bf';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.href) {
                    e.target.style.color = '#1f2937';
                    e.target.style.borderRightColor = 'transparent';
                  }
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
