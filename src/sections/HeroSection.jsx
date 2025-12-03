import image7 from '../assets/photos/image7.jpg';

function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative min-h-[70vh] flex items-center py-10 px-5
        bg-no-repeat bg-center bg-cover bg-fixed
        overflow-hidden z-[1]
      "
      style={{
        backgroundImage: `url(${image7})`,
      }}
    >
      {/* Teal overlay: solid on mobile, gradient on sm+ */}
      <div
        className="absolute inset-0 z-0 block sm:hidden bg-teal-600 opacity-100 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-0 hidden sm:block pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(13,148,136,1) 0%, rgba(13,148,136,0.85) 50%, rgba(13,148,136,0.15) 100%)',
        }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto w-full flex justify-end relative z-10" style={{ direction: 'rtl' }}>
        <div className="text-right max-w-2xl">
          <h1 className="text-6xl md:text-5xl sm:text-4xl text-white mb-6 font-bold">שיר שדמי לוי</h1>
          <p className="text-xl md:text-lg sm:text-base text-white mb-10 leading-relaxed">
            <b>התמחות קלינית ברפואת שריר־שלד וכאב כרוני</b> המתמקדת באבחון, טיפול ושיקום של <b>כאבים מיופציאליים ותסמונות כאב כרוני</b>, כולל קומפלקס ראש, פנים צוואר ולסת. <br />
            מטפלת מוסמכת בשיטת Fascial Manipulation Method by Stecco ודיקור מערבי.
          </p>
          <div className="flex justify-start">
            <a
              href="#specializations"
              className="
                bg-transparent text-white py-4 px-9 no-underline border-2 border-white rounded-full
                font-semibold text-lg transition-all duration-300 shadow-lg
                hover:-translate-y-1 hover:shadow-xl hover:bg-teal-400 hover:border-teal-400
                md:w-full md:max-w-xs md:text-center
              "
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
