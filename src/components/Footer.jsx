const Footer = () => {



  return (
    <footer id="contact" className="bg-slate-800 text-white py-10 px-5 mt-20" style={{backgroundColor: '#334155'}} dir="rtl">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
  <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto] gap-0 text-left items-start md:flex md:justify-between md:grid-cols-none">
      <div className="flex flex-col justify-start items-start py-2 text-left md:pl-8">
            <div className="text-2xl font-bold text-white mb-2">שיר שדמי לוי</div>
            {/* Navbar links under name */}
            <ul className="flex flex-col gap-1 mb-2 items-start text-left">
              <li><a href="#home" className="text-teal-400 hover:underline">בית</a></li>
              <li><a href="#about" className="text-teal-400 hover:underline">אודות</a></li>
              <li><a href="#appointment" className="text-teal-400 hover:underline">זימון תור</a></li>
              <li><a href="#specializations" className="text-teal-400 hover:underline">תחומי התמחות</a></li>
              <li><a href="#articles" className="text-teal-400 hover:underline">מאמרים</a></li>
              <li><a href="#testimonials" className="text-teal-400 hover:underline">מכתבי תודה</a></li>
            </ul>
          </div>
          {/* Column 2: Address (center) */}
          <div className="flex flex-col justify-start items-start py-2 text-left md:pl-8">
            <div className="text-lg font-bold text-teal-400 mb-2">כתובות המרפאות</div>
            <div className="text-teal-300 flex items-center gap-2">
              <a href="https://waze.com/ul?ll=32.0858,34.7743&navigate=yes" target="_blank" rel="noopener noreferrer">
                <img src="/waze.png" alt="Waze" className="w-6 h-6 hover:scale-110 transition-transform duration-200" style={{display: 'inline'}} />
              </a>
              מרפאת תל אביב:
            </div>
            <div className="text-gray-300">רחוב קינג ג'ורג' 33, תל אביב</div>
            <div className="text-teal-300 mt-2 flex items-center gap-2">
              <a href="https://waze.com/ul?ll=32.0897,34.8219&navigate=yes" target="_blank" rel="noopener noreferrer">
                <img src="/waze.png" alt="Waze" className="w-6 h-6 hover:scale-110 transition-transform duration-200" style={{display: 'inline'}} />
              </a>
              מרפאת רמת גן:
            </div>
            <div className="text-gray-300">רחוב רות 13, רמת גן</div>
          </div>
          {/* Column 3: Links (leftmost) */}
          <div className="flex flex-col justify-start items-start py-2 text-left">
            <div className="text-lg font-bold text-teal-400 mb-2">יצירת קשר</div>
            <div className="flex flex-col gap-2 text-lg w-full items-start text-left">
              <a href="mailto:shirschadmy@gmail.com" className="flex flex-row items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors duration-300 justify-start text-left items-start">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                shirschadmy@gmail.com
              </a>
              <a href="tel:0542372032" className="flex flex-row items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors duration-300 justify-start text-left items-start">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                054-237-2032
              </a>
              <a href="https://wa.me/972542372032" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors duration-300 justify-start text-left items-start" aria-label="צור קשר בוואטסאפ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="currentColor">
                  <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L2.2 28.001l5.77-2.02c1.85 1.01 3.94 1.54 6.03 1.54h.001c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.2c-1.82 0-3.62-.47-5.19-1.36l-.37-.21-3.43 1.2 1.18-3.54-.24-.37c-1.09-1.66-1.67-3.59-1.67-5.57 0-5.79 4.71-10.5 10.5-10.5s10.5 4.71 10.5 10.5-4.71 10.5-10.5 10.5zm5.74-7.97c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.36.23-.67.08-.31-.16-1.29-.48-2.46-1.53-.91-.81-1.53-1.81-1.71-2.12-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.53-.54-.71-.55-.18-.01-.39-.01-.6-.01-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.54 1.13 3.03 1.29 3.24.16.21 2.23 3.41 5.41 4.65.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.13-.29-.21-.6-.37z"/>
                </svg>
                שלח הודעה בוואטסאפ
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal line and copyright/developer text at the bottom */}
        <div className="border-t border-slate-600 pt-4 text-sm mt-4 flex flex-col md:flex-row justify-between items-center gap-2" style={{borderColor: '#64748b'}}>
          <div className="text-gray-300">© 2025 שיר שדמי לוי - כל הזכויות שמורות.</div>
          <div className="text-gray-400">פותח על ידי Elena Zhytomirski • 2025</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
