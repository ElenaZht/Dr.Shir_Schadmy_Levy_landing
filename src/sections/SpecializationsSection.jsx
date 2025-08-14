function SpecializationsSection() {
  const specializations = [
    {
      id: 1,
      title: "פאשיאל מניפוליישן",
      subtitle: "כטיפול במערכת שריר שלד ובעיות ויסצרליות",
      description: "פאשיאל מניפוליישן (Fascial Manipulation®) היא גישת טיפול מתקדמת המתמקדת בזיהוי וטיפול בהפרעות ברקמת הפאשיה – רשת רקמות חיבור העוטפת את השרירים, העצמות והאיברים הפנימיים. גישה זו יעילה במיוחד לטיפול בכאבי שריר-שלד, מגבלות תנועה והפרעות תפקודיות. בנוסף, יכולתה להשפיע על הקשר בין הפאשיה לאיברים הפנימיים מאפשרת התערבות גם בבעיות ויסצרליות (של איברים פנימיים), כמו הפרעות עיכול או בעיות נשימה, המשפרת את התפקוד הכללי של הגוף ואת איכות החיים.",
      image: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Fascial+Manipulation"
    },
    {
      id: 2,
      title: "כאב מיופציאלי ודיקור מערבי",
      subtitle: "טיפול בנקודות הדק ושחרור כאבי שרירים",
      description: "כאב מיופציאלי מתבטא ככאב עמוק בשרירים וברקמת החיבור (פאשיה), ולרוב מקורו בנקודות הדק (Trigger Points) – אזורים רגישים וכואבים בתוך השריר. מצב זה יכול לגרום לכאב מקומי וכן לכאב מוקרן לאזורים מרוחקים. דיקור מערבי (Dry Needling) הוא כלי טיפולי יעיל ביותר להתמודדות עם כאב מיופציאלי. בטכניקה זו, מחטים עדינות מוחדרות ישירות לנקודות ההדק, במטרה לשחרר את התכווצות השריר, להפחית כאב ולשפר את התפקוד התנועתי.",
      image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Dry+Needling"
    },
    {
      id: 3,
      title: "טיפול ב-TMD וכאבי ראש",
      subtitle: "כאבי פנים וצוואר - טיפול במפרק הלסת",
      description: "הפרעות במפרק הלסת (Temporomandibular Disorders – TMD) כוללות מגוון רחב של תסמינים, ביניהם כאבים בלסת, קליקים, הגבלה בפתיחת הפה וכאבים המוקרנים לאזורי הפנים והראש. בנוסף, קיימת זיקה הדוקה בין תסמונות אלו לכאבי ראש מסוגים שונים, כאבי פנים וכן לכאבי צוואר כרוניים. הטיפול הפיזיותרפי בתחום זה מציע גישה מקיפה הכוללת טכניקות מנואליות, תרגילים לשיקום המפרק והשרירים הסובבים, וכן חינוך למודעות יציבתית והרגלי לעיסה נכונים, במטרה להקל על הכאב ולשפר את התפקוד.",
      image: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=TMD+Treatment"
    }
  ];

  return (
    <section id="specializations" className="py-20 px-5 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold mb-4 text-gray-800">
            תחומי התמחות
          </h2>
          <p className="text-xl md:text-lg text-gray-600 max-w-3xl mx-auto">
            טיפולים מתקדמים ומותאמים אישית לכל מטופל
          </p>
        </div>

        {/* Specializations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specializations.map((spec) => (
            <div 
              key={spec.id} 
              className="bg-gray-50 rounded-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img 
                  src={spec.image} 
                  alt={spec.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {spec.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">
                    {spec.subtitle}
                  </h4>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {spec.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecializationsSection
