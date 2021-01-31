import React, { useState } from "react"
import { Link } from "react-router-dom"
import Menu from "Assets/logo/menu.svg"
import Brand from "Assets/logo/brand.svg"
import Phone from "Assets/phone-call.png"

import "./header.css"

const Header: React.FC = () => {
  const [burgerClicked, setBurgerClicked] = useState(false)

  const toggleBurgerClick = (): void => {
    setBurgerClicked(!burgerClicked)
  }
  return (
    <>
      <div id="logo" className="flex-1 flex items-center text-2xl">
        {" "}
        <Link to="/" className="flex flex-1 items-center">
          <Brand style={{ height: 42, width: 30 }} />
          <p className="px-2 font-sans">Brand</p>
        </Link>
      </div>

      <label
        htmlFor="menu-toggle"
        className="cursor-pointer lg:hidden block"
        onClick={() => {
          toggleBurgerClick()
        }}
      >
        <Menu style={{}} />
      </label>
      <input
        type="checkbox"
        className="hidden"
        id="menu-toggle"
        checked={burgerClicked}
        onChange={() => {}}
      />

      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li className="p-1 px-3 block my-5 mx-2 flex">
              <Link to="/" onClick={toggleBurgerClick}>
                <span
                  style={{
                    animation: `navLinkAnimation 0.5s ease forwards ${
                      1 / 5 + 0.5
                    }s`,
                  }}
                  className="flex"
                >
                  <img
                    src={Phone}
                    width={"18px"}
                    height={"18px"}
                    className="mx-2"
                    alt="Logo"
                  />
                  {"+91 9378613876"}
                </span>
              </Link>
            </li>
            <li className="p-1 px-3 block border border-gray-700 rounded-lg my-5 mx-2">
              <Link to="/" onClick={toggleBurgerClick}>
                <span
                  style={{
                    animation: `navLinkAnimation 0.5s ease forwards ${
                      1 / 5 + 0.5
                    }s`,
                  }}
                >
                  Login
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
