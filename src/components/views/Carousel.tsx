import React from "react"
import { CarouselProvider, Slider,  ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
interface IProps {
  step : number
  slidenos : number
  children:React.ReactNode
}
const Carosel: React.FC<IProps> = (prop:IProps) => {
  return (
    <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={125}
    totalSlides={prop.slidenos}
    className="flex"
    isIntrinsicHeight={true}
    step={prop.step}
  >
  {prop.children}
  
  </CarouselProvider>
  )
}

export default Carosel;
