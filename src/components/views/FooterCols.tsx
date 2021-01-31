import React from "react"

const FooterCols: React.FC = () => {
  return (
    <div>
      <h1 className="text-gray-600 font-bold text-sm">
        Themed destinations
      </h1>
      <ul>
        <li>
          <a href="#" className="text-gray-200">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-200">
            Careers
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-200">
            Blog
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FooterCols
