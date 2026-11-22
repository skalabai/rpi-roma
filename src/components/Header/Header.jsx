import './Header.css'

const links = [
  { id: 'home', label: 'Главная' },
  { id: 'partners', label: 'Партнеры' },
  { id: 'about', label: 'О нас' },
  { id: 'lecturers', label: 'Лекторы' },
]

function Header({ active, onNavigate }) {
  return (
    <header className="header">
      <nav className="header__nav" aria-label="Основная навигация">
        {links.map((link) => (
          <button
            key={link.id}
            type="button"
            className={
              active === link.id
                ? 'header__link header__link--active'
                : 'header__link'
            }
            onClick={() => onNavigate(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
