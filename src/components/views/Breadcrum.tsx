import React from "react"

const Breadcrum: React.FC = (): JSX.Element => (
  <nav className="bg-grey-light rounded font-sans w-full py-4">
    <ol className="list-reset flex text-grey-dark">
      <li>
        <a href="#">
          <p className="text-gray-600">Home</p>
        </a>
      </li>
      <li>
        <span className="mx-2 text-gray-600">{">"}</span>
      </li>
      <li>
        <a href="#">
          <p className="text-gray-900">Maldives</p>
        </a>
      </li>
    </ol>
  </nav>
)

export default Breadcrum
