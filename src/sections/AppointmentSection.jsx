function AppointmentSection() {
  return (
    <section id="appointment" className="py-20 px-5 bg-gradient-to-br from-blue-600 to-blue-800 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold mb-4">
            זימון תור 24/7
          </h2>
          <p className="text-xl md:text-lg text-blue-100">
            קביעת תורים בקלות ובמהירות
          </p>
        </div>
        
        {/* Three Cards in One Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact & Booking Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 text-center flex flex-col justify-center">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-white mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            
            <h3 className="text-lg font-bold mb-3 text-white">זימון תור טלפוני</h3>
            <a 
              href="tel:0542372032" 
              className="text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-300 block mb-4"
            >
              054-237-2032
            </a>
            
            <div className="mb-4">
              <h4 className="text-lg font-bold mb-2 text-white">שעות פעילות</h4>
              <p className="text-base text-blue-100">
                א'-ה': 09:00-17:00
              </p>
            </div>
            
            <div className="space-y-2">
              <a 
                href="tel:0542372032" 
                className="bg-white text-blue-700 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors duration-300 inline-flex items-center justify-center w-full"
              >
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                התקשר עכשיו
              </a>
              <a 
                href="https://wa.me/972542372032" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-green-600 transition-colors duration-300 inline-flex items-center justify-center w-full"
              >
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Tel Aviv Clinic Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            {/* Map Section */}
            <div className="p-4">
              <div className="w-full h-48 rounded-lg overflow-hidden border border-white/20 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0289982!2d34.7743!3d32.0858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b8d1c8e3e3d%3A0x8d8d8d8d8d8d8d8d!2sKing%20George%20St%2033%2C%20Tel%20Aviv-Yafo%2C%20Israel!5e0!3m2!1sen!2sus!4v1623456789000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="מרפאת תל אביב - קינג ג'ורג' 33"
                ></iframe>
              </div>
              
              {/* Info Section */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3 text-white">מרפאת תל אביב</h3>
                <div className="space-y-2 text-xl">
                  <p className="font-semibold text-white">בית מרפא</p>
                  <p className="text-blue-100">רחוב קינג ג'ורג' 33</p>
                  <p className="text-blue-100">תל אביב</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ramat Gan Clinic Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            {/* Map Section */}
            <div className="p-4">
              <div className="w-full h-48 rounded-lg overflow-hidden border border-white/20 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.8!2d34.8219!3d32.0897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca4!2sRuth%20St%2013%2C%20Ramat%20Gan%2C%20Israel!5e0!3m2!1sen!2sus!4v1623456789000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="מרפאת רמת גן - רות 13"
                ></iframe>
              </div>
              
              {/* Info Section */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3 text-white">מרפאת רמת גן</h3>
                <div className="space-y-2 text-xl">
                  <p className="text-blue-100">רחוב רות 13</p>
                  <p className="text-blue-100">רמת גן</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppointmentSection
