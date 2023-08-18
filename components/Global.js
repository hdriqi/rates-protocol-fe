'use client'

import { Suspense } from "react"
import { Tooltip } from "react-tooltip"

export const Global = () => {
  return (
    <Suspense>
      <Tooltip id="g-tooltip" />
    </Suspense>
  )
}