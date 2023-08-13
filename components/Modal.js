import React, { useEffect, useRef } from 'react'

const Modal = ({
  isShow = true,
  onClose = () => null,
  closeOnBgClick = true,
  closeOnEscape = true,
  children,
  backgroundColor = `rgba(0,0,0,0.5)`,
  style = {},
  className,
}) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const onKeydown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (closeOnEscape && isShow) {
      document.addEventListener('keydown', onKeydown)
    }

    return () => {
      document.removeEventListener('keydown', onKeydown)
    }
  }, [onClose, closeOnEscape, isShow])

  const bgClick = (e) => {
    if (e.target === modalRef.current && closeOnBgClick) {
      onClose()
    }
  }

  if (!isShow) return null

  return (
    <div
      ref={modalRef}
      onClick={(e) => bgClick(e)}
      className={`fixed inset-0 z-[100] flex items-center p-4 ${className}`}
      style={{
        backgroundColor: backgroundColor,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Modal