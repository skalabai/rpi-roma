import { useState } from 'react'
import './LecturerDetail.css'

function LecturerDetail({ lecturer, onBack }) {
  const [openTariffs, setOpenTariffs] = useState(false)
  const [activeDisc, setActiveDisc] = useState(0)

  if (!lecturer) return null

  const disc = lecturer.disciplines[activeDisc]

  return (
    <section className="detail" aria-label={lecturer.name}>
      <button type="button" className="detail__back" onClick={onBack}>
        ← К списку лекторов
      </button>

      <div className="detail__card">
        <div className="detail__top">
          <div className="detail__photo-wrap">
            <img
              className="detail__photo"
              src={lecturer.photo}
              alt={lecturer.name}
            />
            <div className="detail__accent" aria-hidden="true" />
          </div>
          <div className="detail__intro">
            <h1 className="detail__name">{lecturer.name}</h1>
            <p className="detail__line">
              <strong>Образование:</strong> {lecturer.education}
            </p>
            <p className="detail__line">
              <strong>Стаж:</strong> {lecturer.experience}
            </p>
            <p className="detail__line">
              <strong>Учёная степень:</strong> {lecturer.degree}
            </p>
            <p className="detail__short">{lecturer.short}</p>
          </div>
        </div>

        <div className="detail__block">
          <h2>Преподаваемые дисциплины</h2>
          <div className="detail__tabs">
            {lecturer.disciplines.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={
                  index === activeDisc
                    ? 'detail__tab detail__tab--active'
                    : 'detail__tab'
                }
                onClick={() => setActiveDisc(index)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <ul className="detail__topics">
            {disc.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>

        <div className="detail__block">
          <button
            type="button"
            className="detail__toggle"
            onClick={() => setOpenTariffs((v) => !v)}
            aria-expanded={openTariffs}
          >
            {openTariffs ? 'Скрыть тарифы' : 'Показать тарифы'}
          </button>
          {openTariffs && (
            <ul className="detail__tariffs">
              {lecturer.tariffs.map((t) => (
                <li key={t.name}>
                  <span>{t.name}</span>
                  <strong>{t.price}</strong>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default LecturerDetail
