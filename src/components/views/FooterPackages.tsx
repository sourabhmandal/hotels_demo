import React from "react"

const FooterPackages: React.FC = () => {
  return (
    <div className="bg-black col-span-6 sm:col-span-3 md:col-span-2">
      <h1 className="text-gray-600 font-bold text-sm">
        Themed destinations
      </h1>
      <ul className="text-gray-200 pb-10 ">
        <li>Honeymoon Packages</li>
        <li>Family Packages</li>
        <li>Beach Packages</li>
        <li>Adventure Packages</li>
        <li>Summer Holiday Packages</li>
        <li>
          Visa on arrival
          <span className="text-xl font-bold mx-1"></span>
        </li>
      </ul>
    </div>
  )
}

export default FooterPackages
