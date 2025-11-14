import { Link } from 'react-router-dom'
import profileImg from '../assets/photos/image1.jpeg'

function AboutSection() {
  return (
    <section id="about" className="py-20 px-5 bg-gray-50">
      <div className="max-w-[90rem] mx-auto"> {/* Increased max-width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <img
            src={profileImg}
            alt="שיר שדמי לוי"
            className="w-full h-[500px] object-cover lg:order-1 order-2"
            style={{ display: 'block' }}
          />

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-3xl sm:text-2xl text-blue-700 font-bold mb-8">
                פיזיותרפיסטית מוסמכת
              </h2>
              
              <div className="text-lg leading-relaxed text-gray-700 space-y-4">
                <p>
                  שיר הינה בעלת תואר שני מחקרי בפיזיותרפיה (<b className="font-bold">M.Sc.PT</b>) מאוניברסיטת <b className="font-bold">בן גוריון</b>, מטעם הפקולטה למדעי הבריאות בשנים <b className="font-bold">2019-2021</b>, ובעלת תואר ראשון בפיזיותרפיה מאוניברסיטת <b className="font-bold">תל אביב</b> מטעם הפקולטה לרפואה בשנים <b className="font-bold">2001-2005</b>.
                </p>
                <p>
                  כמו כן, בעלת הסמכה בשיטת <b className="font-bold text-teal-900">Fascial Manipulation</b> (בוגרת ארבע הרמות) מטעם ה-<b className="font-bold text-teal-900">Fascial Manipulation Institute by Stecco, Padua - Italy</b>.
                </p>
                <p>
                  <b className="font-bold">מרצה ומדריכה</b> בתחומי רפואת שריר-שלד וכאב במסגרת התכנית ללימודי המשך של הטכניון.<br />
                  מדריכה ומרצה בכירה מטעם החברה לרפואת שריר שלד לדיקור מערבי וכאב מיופציאלי.<br />
                  משמשת כ<b className="font-bold">משקיפה</b> מטעם הפיזיותרפיה בועד של החברה לרפואת שריר שלד בישראל.
                </p>
                <p>
                  במסגרת עבודתה, מקיימת קשר הדוק עם רופאי כאב, משפחה, אורטופדיה, אא"ג ופה ולסת על מנת להעניק מעטפת מקצועית רחבה לmodifiable.
                </p>
                <p>
                  במסגרת לימודי התואר השני השלימה מחקר בנושא ה-<b className="font-bold text-teal-900">Fascial</b> ופרסמה מאמר ב-<b className="font-bold">JBMT</b> שהוצג בכנסים בארץ ובחו"ל.
                </p>
                <p>
                  בימים אלה מתחילה את לימודי <b className="font-bold">פסיכותרפיה</b> באוריינטציה של טיפול בכאב כרוני בתכנית התלת-שנתית של הטכניון, מתוך רצון להרחיב את מגוון הכלים הטיפוליים ולהעמיק בהבנת הקשר גוף-נפש.
                </p>
              </div>
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
    </section>
  )
}

export default AboutSection
