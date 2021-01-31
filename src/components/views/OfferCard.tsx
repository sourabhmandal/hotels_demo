import React from "react"

interface OfferProps {
  img: string
  destination: string
  stayduration: number
  stayhotel: string
  traveldate: string
  totalpayment: number
  initialpayment: number
  key: number
}

const OfferCard: React.FC<OfferProps> = (props): JSX.Element => (
  <div className="w-full " key={props.key}>
    <div
      className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-400"
      style={{ borderTop: "1px solid dashed" }}
    >
      <div
        className="bg-cover bg-center h-56 w-68 "
        style={{
          backgroundImage: props.img,
        }}
      ></div>
      <div className="p-4">
        <p className="uppercase text-xs font-bold text-yellow-700">
          {props.destination}
        </p>
        <p className="text-sm text-gray-900">
          {props.stayduration} Nights stay at {props.stayhotel} - All
          Inclusive
        </p>
        <p className="text-xs text-red-700">
          {props.stayduration} nights &#183; Travel by{" "}
          {props.traveldate}
        </p>
      </div>
    </div>
    <div
      className=" w-full p-4 bg-white rounded-md border border-gray-400 text-gray-700"
      style={{ borderTop: "1px solid dashed" }}
    >
      <div className="flex justify-between mb-2">
        <button className="text-xs  bg-green-500 font-bold rounded text-white px-2">
          Pay only 20%
        </button>
        <button className="text-xs  bg-yellow-300 font-bold border border-yellow-700 border-dashed rounded text-yellow-700 px-6">
          5 days left!
        </button>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-xs text-gray-500 px-2">Total Payment</p>
          <p className="text-lg font-bold text-gray-900 px-2">
            ₹ {props.totalpayment}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500 px-2">
            Initial Payment
          </p>
          <p className="text-lg font-bold text-gray-900 px-2">
            ₹ {props.initialpayment}
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default OfferCard
