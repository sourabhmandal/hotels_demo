import React from "react"

const FooterPackages: React.FC = () => {
  return (
    <div className="bg-black">
      <h1 className="text-gray-600 font-bold text-sm">
        Themed destinations
      </h1>
      <ul className="text-gray-200 flex  pb-10 ">
        <li>
          Honeymoon Packages
          <span className="text-xl font-bold mx-1">&#183;</span>
        </li>
        <li>
          Family Packages
          <span className="text-xl font-bold mx-1">&#183;</span>
        </li>
        <li>
          Beach Packages
          <span className="text-xl font-bold mx-1">&#183;</span>
        </li>
        <li>
          Adventure Packages
          <span className="text-xl font-bold mx-1">&#183;</span>
        </li>
        <li>
          Summer Holiday Packages
          <span className="text-xl font-bold mx-1">&#183;</span>
        </li>
        <li>
          Visa on arrival
          <span className="text-xl font-bold mx-1"></span>
        </li>
      </ul>
    </div>
  )
}

export default FooterPackages
