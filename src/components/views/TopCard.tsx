import React from "react"
import Around from "Assets/around.png"

const TopCard: React.FC = () => (
  <div className="bg-blue-700 text-white p-10 rounded-lg w-full">
    <div className="flex flex-wrap -mx-3 items-center">
      <div className="w-1/4 px-1 text-center hidden md:block">
        <div className="p-5 xl:px-8 md:py-5">
          <img src={Around} width={"150px"} />
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-2/4 px-3 text-left">
        <div className="p-5 md:py-3">
          <h2 className="text-3xl">Exclusive deals for Maldives</h2>
          <h4 className="text-xl mb-3">
            Curated staycation in Maldives from the month of January
          </h4>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
        <div className="p-5 xl:px-8 md:py-5">
          <a
            className="block w-full py-2 px-4 rounded text-indigo-600 bg-gray-200 hover:bg-white hover:text-gray-900 focus:outline-none transition duration-150 ease-in-out mb-3"
            href=""
          >
            Find out more?
          </a>
          <button className="w-full py-2 px-4 rounded text-white bg-indigo-900 hover:bg-gray-900 focus:outline-none transition duration-150 ease-in-out">
            Explore more offers
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default TopCard
