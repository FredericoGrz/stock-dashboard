import React from "react"
import Card from "./Card"

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card>
      <span className="absolute left-2 top-2 xl:left-4 xl:top-4 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl">
        {symbol}
      </span>

      <div className="w-full h-full flex items-center justify-around mt-3">
        <span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center">
          ${price}
          <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
            {currency}
          </span>
        </span>
        <span className={`text-lg xl:text-xl 2xl:text-2xl flex gap-1 items-center ${change > 0 ? "text-lime-500" : "text-red-500"}`}>
          {change}
          <span className="text-base xl:text-lg 2xl:text-xl">({changePercent}%)</span>
        </span>
      </div>
    </Card>
  )
}

export default Overview
