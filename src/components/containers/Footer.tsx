import React from "react"
import FooterPackages from "Views/FooterPackages"
import FooterCols from "Views/FooterCols"

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-black pt-12 pl-24">
        <FooterPackages />
        <FooterPackages />
        <FooterPackages />
      </div>
      <div className="bg-black py-12 pl-24 grid lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10 md:grid-cols-2 md:gap-x-4 md:gap-y-6 grid-cols-1 gap-x-2 gap-y-4">
        <FooterCols />
        <FooterCols />
        <FooterCols />
        <FooterCols />
      </div>
    </>
  )
}

export default Footer
