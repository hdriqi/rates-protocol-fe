'use client'

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import ky from "ky"

const LIMIT = 8

export default function ExplorePlanet() {
  const [planetList, setPlanetList] = useState([])
  const [planetListMeta, setPlanetListMeta] = useState({
    hasMore: true,
    page: 0,
    sort: `nft_id::-1`
  })

  const getData = useCallback(async (sort, page) => {
    try {
      const resp = await ky.get(`${process.env.NEXT_PUBLIC_API_URL}/planets`, {
        searchParams: {
          sort: sort,
          skip: page * LIMIT,
          limit: LIMIT
        }
      })
      const data = await resp.json()
      const newMeta = {
        hasMore: data.length < LIMIT ? false : true,
        page: page + 1,
        sort: sort
      }
      setPlanetListMeta(newMeta)
      setPlanetList(page === 0 ? data : planetList.concat(data))
    } catch (err) {
      console.log(err)
    }
  }, [planetList, planetListMeta])

  useEffect(() => {
    if (planetList.length === 0) {
      getData(planetListMeta.sort, 0)
    }
  }, [])

  const updateFilter = (e) => {
    getData(e.target.value, 0)
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold">Explore Planet</p>
        </div>
        <div>
          <div className="mt-2">
            <select onChange={e => updateFilter(e)} className="text-black p-2">
              <option value="nft_id::-1">Minted Descending</option>
              <option value="nft_id::1">Minted Ascending</option>
              <option value="rts::-1">Rates Descending</option>
              <option value="rts::1">Rates Ascending</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-4 -mx-4">
        {planetList.map((planet) => {
          return (
            <div className="w-1/2 md:w-1/2 lg:w-1/4 p-4" key={planet.nft_id}>
              <div className="border-2 border-gray-800 hover:border-gray-300 cursor-pointer transition-all duration-300">
                <Image className="transition-opacity duration-300 hover:opacity-80 w-full" alt={`planet #${planet.nft_id}`} src={planet.image} width="333" height="500" />
              </div>
            </div>
          )
        })}
      </div>
      {planetListMeta.hasMore && (
        <div className="mt-8">
          <button className="w-full bg-white text-black font-bold text-xl px-4 py-1"
            onClick={() => getData(planetListMeta.sort, planetListMeta.page)}>Load More</button>
        </div>
      )}
    </div>
  )
}
