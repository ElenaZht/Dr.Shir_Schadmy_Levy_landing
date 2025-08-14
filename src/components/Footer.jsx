import { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form submission logic here (email service, API call, etc.)
    alert('הטופס נשלח בהצלחה!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <footer id="contact" className="bg-slate-800 text-white py-12 px-5 mt-20" style={{backgroundColor: '#334155'}} dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information - Right Side */}
          <div className="space-y-6 lg:order-2">
            <h3 className="text-2xl font-bold text-teal-300 mb-6">צור קשר</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  שם מלא
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white"
                  style={{backgroundColor: '#475569', borderColor: '#64748b'}}
                  placeholder="הכנס את שמך המלא"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  כתובת אימייל
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white"
                  style={{backgroundColor: '#475569', borderColor: '#64748b'}}
                  placeholder="הכנס את כתובת האימייל שלך"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  הודעה
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white resize-none"
                  style={{backgroundColor: '#475569', borderColor: '#64748b'}}
                  placeholder="כתוב את הודעתך כאן..."
                />
              </div>
              
              <button
                type="submit"
                className="w-auto bg-white hover:bg-teal-400 hover:border-teal-400 hover:text-white text-slate-800 font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 border-2 border-white"
                style={{ backgroundColor: '#ffffff', color: '#334155' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#2dd4bf';
                  e.target.style.borderColor = '#2dd4bf';
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.borderColor = '#ffffff';
                  e.target.style.color = '#334155';
                }}
              >
                שלח הודעה
              </button>
            </form>
          </div>

          {/* Contact Information - Right Side */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">שיר שדמי לוי</h2>
            <h3 className="text-2xl font-bold text-teal-300 mb-6">פרטי קשר</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-300">אימייל:</p>
                  <a 
                    href="mailto:shirschadmy@gmail.com" 
                    className="text-teal-300 hover:text-teal-200 transition-colors duration-300"
                  >
                    shirschadmy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-300">טלפון:</p>
                  <a 
                    href="tel:0542372032" 
                    className="text-teal-300 hover:text-teal-200 transition-colors duration-300"
                  >
                    054-237-2032
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-300">כתובות המרפאות:</p>
                  <div className="space-y-1">
                    <p className="text-teal-300">מרפאת תל אביב:</p>
                    <p className="text-gray-300">רחוב קינג ג'ורג' 33, תל אביב</p>
                    <p className="text-teal-300 mt-2">מרפאת רמת גן:</p>
                    <p className="text-gray-300">רחוב רות 13, רמת גן</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-slate-600 mt-8 pt-6 text-center" style={{borderColor: '#64748b'}}>
          <p className="text-gray-300 text-sm">
            © 2025  שיר שדמי לוי - כל הזכויות שמורות.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            פותח על ידי Elena Zhytomirski • 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
