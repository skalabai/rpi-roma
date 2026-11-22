import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

function Modal({ title, onClose, children }) {
  const onCloseRef = useRef(onClose)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onCloseRef.current()
    }
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onCloseRef.current()
      }
    }

    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    document.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo({ top: scrollY })
    }
  }, [])

  return createPortal(
    <div className="modal" onClick={handleBackdropClick}>
      <div
        className="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Закрыть окно"
        >
          ×
        </button>
        <div className="modal__content">{children}</div>
      </div>
    </div>,
    document.body,
  )
}

export default Modal
