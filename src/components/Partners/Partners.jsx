import { partners } from '../../data/lecturers.js'
import './Partners.css'

function Partners() {
  return (
    <section className="partners" id="partners" aria-label="Партнеры">
      <h2 className="partners__heading">Партнеры</h2>
      <div className="partners__grid">
        {partners.map((partner) => (
          <article key={partner.id} className="partner-card">
            <a
              className="partner-card__brand"
              href={partner.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="partner-card__name">{partner.name}</span>
              <span className="partner-card__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <p className="partner-card__text">{partner.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Partners
