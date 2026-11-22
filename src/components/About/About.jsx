import { aboutText } from '../../data/lecturers.js'
import './About.css'

function About() {
  return (
    <section className="about" id="about" aria-label="О нас">
      <div className="about__card">
        <h2 className="about__title">О нас</h2>
        <p className="about__text">{aboutText}</p>
      </div>
    </section>
  )
}

export default About
