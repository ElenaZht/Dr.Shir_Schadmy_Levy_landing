import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="box-border m-0 p-0 font-sans leading-relaxed text-gray-800 text-right" dir="rtl">
      <Navbar />
      <main className="w-full">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}


export default App
