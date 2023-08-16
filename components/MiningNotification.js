'use client'

import React, { useEffect } from 'react'
import { truncateAddr } from "../utils/common"
import { useNotificationContext } from "./context/NotificationContext"

const Modal = ({ }) => {
  const { setShowToast, dismissToast } = useNotificationContext()

  useEffect(() => {
    // listen to smart contract events
    // setInterval(() => {
    //   setShowToastWithTimeout({
    //     message: 'mantap',
    //     type: 'success'
    //   }, 5000)
    // }, 8000)
  }, [])

  const newMining = () => {
    setShowToast({
      message: 'Planet #1 has been minted',
      type: 'success',
      element: (
        <div className="flex items-center justify-between bg-gray-800 border border-gray-800 w-full p-4">
          <div>
            <p>Planet #1 has been minted</p>
            <p>by <b>{truncateAddr('0xc1e53FfBD467c56f8151034D9B87198697c6A8cB')}</b></p>
            <div className="w-full flex -mx-1 pt-2">
              <div className="px-1">
                <button className="bg-black bg-opacity-80 py-1 px-2 border border-gray-600 cursor-pointer">View Planet</button>
              </div>
            </div>
          </div>
          <div>
            <button onClick={() => dismissToast()} className="bg-black bg-opacity-80 border border-gray-600 cursor-pointer">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7624 15.0001L22.1374 9.63761C22.3728 9.40223 22.505 9.08299 22.505 8.75011C22.505 8.41723 22.3728 8.09799 22.1374 7.86261C21.902 7.62723 21.5828 7.495 21.2499 7.495C20.917 7.495 20.5978 7.62723 20.3624 7.86261L14.9999 13.2376L9.63742 7.86261C9.40204 7.62723 9.0828 7.495 8.74992 7.495C8.41705 7.495 8.0978 7.62723 7.86242 7.86261C7.62704 8.09799 7.49481 8.41723 7.49481 8.75011C7.49481 9.08299 7.62704 9.40223 7.86242 9.63761L13.2374 15.0001L7.86242 20.3626C7.74526 20.4788 7.65227 20.6171 7.58881 20.7694C7.52535 20.9217 7.49268 21.0851 7.49268 21.2501C7.49268 21.4151 7.52535 21.5785 7.58881 21.7308C7.65227 21.8832 7.74526 22.0214 7.86242 22.1376C7.97863 22.2548 8.11688 22.3478 8.2692 22.4112C8.42153 22.4747 8.58491 22.5074 8.74992 22.5074C8.91494 22.5074 9.07832 22.4747 9.23064 22.4112C9.38297 22.3478 9.52122 22.2548 9.63742 22.1376L14.9999 16.7626L20.3624 22.1376C20.4786 22.2548 20.6169 22.3478 20.7692 22.4112C20.9215 22.4747 21.0849 22.5074 21.2499 22.5074C21.4149 22.5074 21.5783 22.4747 21.7306 22.4112C21.883 22.3478 22.0212 22.2548 22.1374 22.1376C22.2546 22.0214 22.3476 21.8832 22.411 21.7308C22.4745 21.5785 22.5072 21.4151 22.5072 21.2501C22.5072 21.0851 22.4745 20.9217 22.411 20.7694C22.3476 20.6171 22.2546 20.4788 22.1374 20.3626L16.7624 15.0001Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      )
    })
  }

  return (
    <div></div>
  )
}

export default Modal