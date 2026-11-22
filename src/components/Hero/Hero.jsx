import { heroText } from '../../data/lecturers.js'
import './Hero.css'

function Hero({ onFindLecturer }) {
  return (
    <section className="hero" id="home" aria-label="Главная">
      <div className="hero__card">
        <div className="hero__media">
          <img
            src="/hero.jpg"
            alt="Лектор проводит занятие"
            className="hero__image"
          />
        </div>
        <div className="hero__content">
          <p className="hero__text">{heroText}</p>
          <button
            type="button"
            className="hero__cta"
            onClick={onFindLecturer}
          >
            НАЙТИ ЛЕКТОРА
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
