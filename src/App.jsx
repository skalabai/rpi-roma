import { useEffect, useState } from 'react'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Partners from './components/Partners/Partners.jsx'
import Lecturers from './components/Lecturers/Lecturers.jsx'
import LecturerDetail from './components/LecturerDetail/LecturerDetail.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import { lecturers } from './data/lecturers.js'
import './App.css'

function App() {
  const [page, setPage] = useState('home')
  const [navActive, setNavActive] = useState('home')
  const [lecturerId, setLecturerId] = useState(null)

  const selected = lecturers.find((l) => l.id === lecturerId) || null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page, lecturerId])

  function handleNavigate(section) {
    setNavActive(section)

    if (section === 'lecturers') {
      setLecturerId(null)
      setPage('lecturers')
      return
    }

    if (section === 'home') {
      setLecturerId(null)
      setPage('home')
      return
    }

    // about / partners — блоки на главной
    setLecturerId(null)
    setPage('home')
    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById(section)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    })
  }

  function openLecturer(id) {
    setLecturerId(id)
    setPage('detail')
    setNavActive('lecturers')
  }

  return (
    <div className="app">
      <Header active={navActive} onNavigate={handleNavigate} />

      <main className="app__main">
        {page === 'home' && (
          <>
            <Hero onFindLecturer={() => handleNavigate('lecturers')} />
            <About />
            <Partners />
            <section className="app__preview">
              <div className="app__preview-card">
                <h2>Лекторы</h2>
                <p>
                  В каталоге {lecturers.length} экспертов: IT, биология, экономика,
                  архитектура, физика, филология, дизайн, психология, математика и
                  международные отношения.
                </p>
                <button type="button" onClick={() => handleNavigate('lecturers')}>
                  Смотреть всех лекторов
                </button>
              </div>
            </section>
            <Contact />
          </>
        )}

        {page === 'lecturers' && (
          <Lecturers lecturers={lecturers} onOpen={openLecturer} />
        )}

        {page === 'detail' && (
          <LecturerDetail
            lecturer={selected}
            onBack={() => {
              setLecturerId(null)
              setPage('lecturers')
              setNavActive('lecturers')
            }}
          />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
