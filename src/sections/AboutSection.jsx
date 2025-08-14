import { Link } from 'react-router-dom'

function AboutSection() {
  return (
    <section id="about" className="py-20 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="bg-gray-300 rounded-lg shadow-lg aspect-[3/4] flex items-center justify-center">
                <div className="text-gray-600 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg font-medium">שיר שדמי לוי</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-3xl sm:text-2xl text-blue-700 font-bold mb-8">
                פיזיותרפיסטית מוסמכת
              </h2>
              
              <div className="text-lg leading-relaxed text-gray-700 space-y-4">
                <p>
                  פיזיותרפיסטית מוסמכת (M.Sc.PT) בעלת למעלה מ-20 שנות ניסיון עשיר בתחומי השיקום והטיפול. מתמחה באופן מיוחד בטיפול בכאב כרוני ובשנים האחרונות משמשת פיזיותרפיסטית במכון לרפואת כאב בקריה הרפואית רמב"ם, שם הצטרפה לצוות בשנת 2020/2021 ומטפלת בשיטות טיפול חדשות למקרים מורכבים.
                </p>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">תחומי התמחותה העיקריים כוללים:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 ml-2 mt-1">•</span>
                      טיפול בכאב כרוני (כולל כאבים על רקע כוויות)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 ml-2 mt-1">•</span>
                      שיקום נוירולוגי ואורתופדי
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 ml-2 mt-1">•</span>
                      פיזיותרפיה אורתופדית ורפואת שלד-שריר
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 ml-2 mt-1">•</span>
                      טיפול במקרים מורכבים (כגון PTSD, קטיעות ונכויות מגוונות)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 ml-2 mt-1">•</span>
                      הדרכה וטיפול באמצעות פילאטיס (מכשירים ומזרן)
                    </li>
                  </ul>
                </div>

                <p>
                  שיר השלימה תואר שני מחקרי בפיזיותרפיה (M.Sc.PT) מאוניברסיטת בן גוריון בשנים 2019-2021, ותואר ראשון בפיזיותרפיה מאוניברסיטת תל אביב בשנים 2001-2005. כמו כן, היא בעלת הסמכה בשיטת Fascial Manipulation (בוגרת ארבע רמות) ומרצה ומדריכה בתחומי רפואת השלד-שריר וכאב במסגרת התכנית ללימודי המשך של הטכניון.
                </p>

                <p>
                  מדריכה ומרצה בכירה מטעם החברה לרפואת שריר שלד בדיקור מערבי וכאב מיופציאלי. במסגרת עבודתה, מקיימת קשר הדוק עם רופאי כאב, משפחה, אורטופדיה, אא"ג ופה ולסת על מנת להעניק מעטפת מקצועית רחבה למטופליה.
                </p>

                <p>
                  במסגרת לימודי התואר השני השלימה מחקר בנושא ה-fascia ופרסמה מאמר ב-JBMT שהוצג בכנסים בארץ ובחו"ל. בימים אלה, שיר בלימודי פסיכותרפיה מתקדמים בתכנית התלת-שנתית של הטכניון, מתוך רצון להרחיב את מגוון הכלים הטיפוליים ולהעמיק בהבנת הקשר גוף-נפש.
                </p>

                <div className="pt-4">
                  <Link 
                    to="/diplomas" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold transition-colors duration-300"
                  >
                    תעודות והסמכות ניתן לראות כאן
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
