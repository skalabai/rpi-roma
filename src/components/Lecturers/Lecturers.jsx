import './Lecturers.css'

function Lecturers({ lecturers, onOpen }) {
  return (
    <section className="lecturers" id="lecturers" aria-label="Лекторы">
      <h2 className="lecturers__heading">Лекторы</h2>
      <div className="lecturers__list">
        {lecturers.map((person) => (
          <article key={person.id} className="lecturer-card">
            <div className="lecturer-card__photo-wrap">
              <img
                className="lecturer-card__photo"
                src={person.photo}
                alt={person.name}
              />
              <div className="lecturer-card__accent" aria-hidden="true" />
            </div>
            <div className="lecturer-card__body">
              <h3 className="lecturer-card__name">{person.name}</h3>
              <p className="lecturer-card__meta">
                {person.degree !== 'нет' ? person.degree : 'Практикующий специалист'}
                {' · '}
                стаж {person.experience}
              </p>
              <p className="lecturer-card__short">{person.short}</p>
              <ul className="lecturer-card__tags">
                {person.disciplines.map((d) => (
                  <li key={d.title}>{d.title}</li>
                ))}
              </ul>
              <button
                type="button"
                className="lecturer-card__more"
                onClick={() => onOpen(person.id)}
              >
                Подробнее
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Lecturers
