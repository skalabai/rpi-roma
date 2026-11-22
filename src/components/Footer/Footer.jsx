import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__marks" aria-hidden="true">
          <span />
          <span />
        </div>
        <p className="footer__text">
          Учебная платформа · онлайн и оффлайн лекции
        </p>
        <p className="footer__copy">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
