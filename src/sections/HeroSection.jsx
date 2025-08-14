function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-[70vh] flex items-center py-10 px-5 bg-contain bg-center bg-no-repeat"
      style={{
        backgroundColor: "#1e3a8a",
        backgroundImage: "linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%)",
        transform: "scaleX(-1)"
      }}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-end" style={{ transform: "scaleX(-1)" }}>
        <div className="text-right max-w-2xl z-10">
          <h1 className="text-6xl md:text-5xl sm:text-4xl text-white mb-6 font-bold">שיר שדמי לוי</h1>
          <p className="text-xl md:text-lg sm:text-base text-white mb-10 leading-relaxed">
            התמחות קלינית בתחום רפואת שריר שלד וכאב כרוני מיועדת למתן מענה טיפולי ושיקומי לכאבים מיופציאלים (שריר-רקמת חיבור), מצבי כאב כרוני הנגרמים מתסמונות שונות, כולל תסמונות ספציפיות של מפרק הלסת, הפה והמערכת הקשורה לקומפלקס ראש-צוואר.
          </p>
          <div className="flex justify-start">
            <a 
              href="#specializations" 
              className="bg-transparent text-white py-4 px-9 no-underline border-2 border-white rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl hover:bg-teal-400 hover:border-teal-400 md:w-full md:max-w-xs md:text-center"
              style={{
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#06b6d4';
                e.target.style.borderColor = '#06b6d4';
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = '#ffffff';
                e.target.style.color = '#ffffff';
              }}
            >
              לפרטים נוספים
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
