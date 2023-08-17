'use client'

import { usePathname } from 'next/navigation'
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { CSSTransition } from "react-transition-group"
import { Tooltip } from 'react-tooltip'

const NotificationContext = createContext({
  showToast: { message: null, type: null },
  setShowToast: () => null,
  setShowToastWithTimeout: () => null,
  dismissToast: () => null,
})

export const NotificationProvider = ({ children }) => {
  const pathname = usePathname()
  const nodeRef = useRef(null)
  const timeoutRef = useRef()

  const [showToast, setShowToast] = useState({
    message: null,
    type: null,
    element: null
  })

  const dismissToast = () => {
    setShowToast((_toast) => ({ ..._toast, type: null }))
  }

  const setShowToastWithTimeout = (toast, timeout) => {
    clearTimeout(timeoutRef.current)
    setShowToast(toast)
    timeoutRef.current = setTimeout(() => {
      dismissToast()
    }, timeout)
  }

  return (
    <>
      <NotificationContext.Provider
        value={{
          showToast,
          setShowToast,
          setShowToastWithTimeout,
          dismissToast
        }}
      >
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute right-0 w-96">
            <div className={`fixed top-12 p-4 w-96 ${showToast.type !== null ? 'z-50' : '-z-10'}`}>
              <CSSTransition
                in={showToast.type !== null}
                timeout={{
                  appear: 500,
                  enter: 500,
                  exit: 500,
                }}
                classNames={{
                  enterActive: 'animate__animated animate__fadeInUp animate__faster',
                  exitActive: 'animate__animated animate__fadeOutDown animate__faster',
                }}
                unmountOnExit
                nodeRef={nodeRef}
              >
                <div ref={nodeRef}>
                  <div>
                    {showToast.element}
                  </div>
                </div>
              </CSSTransition>
            </div>
          </div>
        </div>
        {children}
      </NotificationContext.Provider >
    </>
  )
}

export const useNotificationContext = () => {
  const context = useContext(NotificationContext)
  return context
}