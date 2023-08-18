'use client'

import Link from "next/link"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import ky from "ky"

export default function HomePlanet() {
  const [planetList, setPlanetList] = useState([])

  const getData = useCallback(async () => {
    try {
      const resp = await ky.get(`${process.env.NEXT_PUBLIC_API_URL}/planets`, {
        searchParams: {
          sort: `nft_id::-1`,
          skip: 0,
          limit: 4
        }
      })
      const data = await resp.json()
      setPlanetList(data)
    } catch (err) {
      console.log(err)
    }
  }, [setPlanetList])

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold">Newest Planet</p>
        </div>
        <div>
          <Link href="/explore" className="opacity-60 hover:opacity-100 text-xl font-semibold">
            MORE
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 mt-4">
        {planetList.map((planet) => {
          return (
            <div className="w-1/2 md:w-1/2 lg:w-1/4 p-4" key={planet.nft_id}>
              <div className="border-2 border-gray-800 hover:border-gray-300 cursor-pointer transition-all duration-300">
                <Image className="transition-opacity duration-300 hover:opacity-80 w-full" alt={`planet #${planet.nft_id}`} src={`${process.env.NEXT_PUBLIC_API_URL}/render/${planet.nft_id}`} width="333" height="500" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
