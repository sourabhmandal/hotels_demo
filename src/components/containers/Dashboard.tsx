import React, { useState } from "react";
import TopCard from "../views/TopCard"
import OfferCard from "../views/OfferCard"
import Breadcrum from "../views/Breadcrum"
import Filter from "../views/Filter"
import DealsIntro from "../views/DealsIntro"
import { packageData } from "../../DataBase/packages"

type OfferProps = {
  img: string
  destination: string
  stayduration: number
  stayhotel: string
  traveldate: string
  totalpayment: number
  initialpayment: number
  uuid: number
}

const Dashboard: React.FC<OfferProps> = (): JSX.Element => {
  const [logoDirection, setLogoDirection] = useState(0)
  const sortByInitialPrice = (): number => {
    if (logoDirection === 0) {
      packageData.sort((a: OfferProps, b: OfferProps) => {
        if (a.initialpayment < b.initialpayment) {
          return -1
        }
        if (a.initialpayment > b.initialpayment) {
          return 1
        }
        return 0
      })
    } else {
      packageData.sort((a: OfferProps, b: OfferProps) => {
        if (a.initialpayment < b.initialpayment) {
          return 1
        }
        if (a.initialpayment > b.initialpayment) {
          return -1
        }
        return 0
      })
    }

    packageData.map((e) => {
      console.log(e.initialpayment)
    })
    setLogoDirection((prev: number):number => {
      if (prev === 0) {
        setLogoDirection(1);
        return 0
      } else {
        setLogoDirection(0)
        return 0
      }
    })
    return 0
  }

  const sortByPrice = (): number => {
    if (logoDirection === 0) {
      packageData.sort((a: OfferProps, b: OfferProps) => {
        if (a.totalpayment < b.totalpayment) {
          return -1
        }
        if (a.totalpayment > b.totalpayment) {
          return 1
        }
        return 0
      })
    } else {
      packageData.sort((a: OfferProps, b: OfferProps) => {
        if (a.totalpayment < b.totalpayment) {
          return 1
        }
        if (a.totalpayment > b.totalpayment) {
          return -1
        }
        return 0
      })
    }

    setLogoDirection((prev: number) => {
      if (prev === 0) {
        setLogoDirection(1)
      } else {
        setLogoDirection(0)
      }
    })
    return 0
  }

  return (
    <div className="md:mx-16 m-4">
      <TopCard />
      <Breadcrum />
      <Filter
        sortByPrice={sortByPrice}
        sortByInitialPrice={sortByInitialPrice}
        logoDirection={logoDirection}
      />
      <div className="mb-10 grid lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10 md:grid-cols-2 md:gap-x-4 md:gap-y-6 grid-cols-1 gap-x-2 gap-y-4">
        {packageData.map((p: OfferProps) => {
          return (
            <OfferCard
              img={p.img}
              uuid={p.uuid}
              destination={p.destination}
              stayduration={p.stayduration}
              stayhotel={p.stayhotel}
              traveldate={p.traveldate}
              initialpayment={p.initialpayment}
              totalpayment={p.totalpayment}
              key={p.uuid}
            />
          )
        })}
      </div>
      <DealsIntro />
    </div>
  )
}

export default Dashboard
