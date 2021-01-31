import React from "react"
import sortUp from "../../assets/sortUp.png"
import sortDown from "../../assets/sortDown.png"

interface OfferData {
  sortByInitialPrice: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void
  sortByPrice: (event: React.MouseEvent<HTMLButtonElement>) => void
  logoDirection: number
}

const Filter: React.FC<OfferData> = (props): JSX.Element => (
  <div className="flex py-5 justify-between">
    <div className="flex">
      <p className="py-2 px-2 text-gray-700 text-lg">Filter By:</p>
      <button className="px-3 py-2 border text-bold text-gray-800 rounded border-gray-400">
        Destinations
      </button>
    </div>
    <div className="flex">
      <p className="py-2 px-2 text-gray-700 text-lg">
        Sort Deals By:
      </p>
      <button
        onClick={props.sortByInitialPrice}
        className="px-1 py-2 text-center text-bold text-gray-800 flex text-lg items-center"
      >
        <span>
          <img
            src={props.logoDirection === 0 ? sortUp : sortDown}
            width={"28px"}
            className="p-1"
          />
        </span>
        Initial Payment
      </button>
      <button
        onClick={props.sortByPrice}
        className="px-1 py-2 text-center text-bold text-gray-800 flex text-lg items-center"
      >
        <span>
          <img
            src={props.logoDirection === 0 ? sortUp : sortDown}
            width={"28px"}
            className="p-1"
          />
        </span>
        Price
      </button>
    </div>
  </div>
)

export default Filter
