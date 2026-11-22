import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact" aria-label="Связаться с нами">
      <div className="contact__card">
        <h2 className="contact__title">Оставить заявку</h2>
        <p className="contact__lead">
          Расширение макета: форма обратной связи для подбора лектора.
        </p>
        {sent ? (
          <p className="contact__ok" role="status">
            Спасибо, {form.name || 'заявка'} принята! Мы свяжемся с вами.
          </p>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit}>
            <label>
              Имя
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Сообщение
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Отправить</button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact
