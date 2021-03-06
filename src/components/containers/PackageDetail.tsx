import React, { useState } from "react"
import {RouteComponentProps} from 'react-router-dom'
import Carosel from "Views/Carousel";
import OfferCard from "Views/OfferCard";
import {packageData} from "../../DataBase/packages";
import {Slide, ButtonBack, ButtonNext, Slider} from 'pure-react-carousel'
import around from "../../assets/around.png";
import DatePicker from "react-datePicker"
import 'react-datepicker/dist/react-datepicker.css'

interface IProps extends RouteComponentProps<{id: string}> {}
  
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

const PackageDetail: React.FC<IProps> = ( props ):JSX.Element => {
  const [data, setData] = useState(
    packageData.filter((element:any) => {
      //console.log(element)
      return element.uuid == props.match.params.id ? element : null
    }));
  
    const [imgdata, setImgData] = useState([
      "https://images.unsplash.com/photo-1611589442438-ab9c80d4cea2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1611589442438-ab9c80d4cea2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1611589442438-ab9c80d4cea2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1611589442438-ab9c80d4cea2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ]);
    const [selectedDate, setselectedDate] = useState(new Date())
  return (
    
    <div className="m-1 sm:m-4 md:m-8 grid grid-cols-8 gap-x-1 gap-y-1 lg:gap-x-6 lg:gap-y-10">

        <div className="ml-1 md:ml-8 col-span-8 lg:col-span-5">      
        <Carosel step={1} slidenos={imgdata.length}>
            <Slider className="flex">
              {imgdata.map((p: string) => {
                return (
                  <img  className="w-full h-64 rounded-lg" src={p}/>
                )
              })}
            </Slider>
        </Carosel>


        
        <span className=" shadow-lg w-full justify-center flex flex-col md:flex-row bg-gray-100 border border-gray-300 rounded-lg">
          <span className="p-3 font-bold">Overview</span>
          <span className="p-3 font-bold">Inclusion</span>
          <span className="p-3 font-bold">Resort</span>
          <span className="p-3 font-bold">FAQs</span>
          <span className="p-3 font-bold">Terms and Condition</span>
        </span>
        <h2 className="text-xs font-bold text-yellow-700 mt-3">{data[0].stayhotel}</h2>
        <h2 className="font-bold mb-2">The Perfect Island Getaway to Coco Bodu Hithi With All Meals & Speedboat Transfers ( 4 N Water Villa - All Inclusive)</h2>

        <p>4.5 Hotel <span className="font-bold px-5">{data[0].destination}</span></p>

        <p className="text-sm rounded-lg p-5 bg-yellow-300">
        <span className="font-bold">Note : </span>
Due to the Covid-19 guidelines given by MHA, access to Swimming pools, Spa and common areas may be restricted. Kindly check with the staff upon check-in regarding the inclusions and access to other facilities like restaurants.We take your safety seriously and the property ensures common areas are sanitized and the premises are cleaned frequently.</p>

        <p className="py-5">This deal features a 4-night stay in Water Villas with Private Pool at Coco Bodu Hithi, Maldives. 
          Guests get to enjoy All Inclusive meals, special honeymoon benefits included in the stay as well as 
          speedboat transfers. This ultra-luxury property featuring a world-class spa and offering a wide range 
          of outdoor experiences is sure to leave you and your partner with the most splendid memories. 
          Book this deal at the best price now!
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-1">
          <div className="col-span-2 md:col-span-1 p-3 max-w-sm bg-gray-200 flex flex-1 rounded-lg items-center">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-400"></div>
            <div className="pl-2">
              <div className="font-bold text-black">Date Change Flexibility</div>
              <p className="text-gray-600 text-sm">Travel date cannot be changed once booked</p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 p-3 max-w-sm bg-gray-200 flex flex-1 rounded-lg items-center">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-400">
            </div>
            <div  className="pl-2">
              <div className=" font-bold text-black">Date Change Flexibility</div>
              <p className="text-gray-600 text-sm">Travel date cannot be changed once booked</p>
            </div>
          </div>
        </div>
        
        <h2 className="font-bold text-2xl py-5">What’s included?</h2>

        <div className="border rounded-lg border-green-200 bg-green-100 p-5">
          <h2 className="font-bold border-b border-green-200 pb-3">Water Villa with private pool (All Inclusive)</h2>
          
          <ul className="list-disc p-5 border-b border-green-200 text-sm py-5">
            <li>All Meals ( Daily Breakfast, Lunch And Dinner ) In A Sumptuous At The Air Restaurant</li>
            <li>Speedboat Transfers</li>
            <li>Guests Celebrating Their Wedding Or Birthday Anniversary During Their Stay Will Receive A Cake On The Occasion</li>
            <li>1 Free Floating Breakfast During The Stay</li>
            <li>Unlimited Access To A Selection Of Wines Around The World Including France, Chile, Italy, Argentina, South Africa, Spirits, Beer, Liquor, Cocktails, Mocktails, Various Juices, Soft Drinks, Mineral Water, Selection Of Tea & Coffee Available From The All-inclusive Sprits & Beer Menu At Latitude Bar From 10:00-00:00 Hrs.
              Complimentary Snorkeling Equipment (Mask, Fins, Snorkel) Per Person With Unlimited Use Until Departure Day.</li>
            <li>All-day Access To The Over-water Fitness Gym.</li>
            <li>Use Of Non-motorized Water Sports Equipment With Life Jackets (Ie; Kayak, Catamaran, Windsurfing, Stand Up Paddle And Canoe). Lessons Excluded.</li>
            <li>Welcome Drink On Arrival.</li>
          </ul>
        
          <ul className="flex py-5 border-b border-green-200">
            <li className="rounded-lg bg-yellow-700 w-12 h-12 align-middle text-center px-5 mx-1">A</li>
            <li className="rounded-lg bg-yellow-700 w-12 h-12 align-middle text-center px-5 mx-1">A</li>
            <li className="rounded-lg bg-yellow-700 w-12 h-12 align-middle text-center px-5 mx-1">A</li>
          </ul>
          <p className="text-sm font-bold my-4">Preferences</p>
          <div className="p-4 bg-white rounded-lg w-64 border border-gray-200">
            <h1 className="text-xs text-gray-400">Number of nights</h1>
            <h1 className="text-sm">4 nights</h1>
          </div>
          
        </div>

        <div className=" py-5 text-center">
        <a href="#" className="text-md upperase font-bold text-green-500">View 1 More room upgrades</a>
        </div>

        



        <h2 className="font-bold text-2xl py-5">Room Upgrades</h2>

        <div className="border rounded-lg border-green-200 bg-green-100 p-5">
          <h2 className="font-bold border-b border-green-200 pb-3">Water Villa with private pool (All Inclusive)</h2>
          
          <ul className="list-disc p-5 border-b border-green-200 text-sm py-5">
            <li>All Meals ( Daily Breakfast, Lunch And Dinner ) In A Sumptuous At The Air Restaurant</li>
            <li>Speedboat Transfers</li>
            <li>Guests Celebrating Their Wedding Or Birthday Anniversary During Their Stay Will Receive A Cake On The Occasion</li>
            <li>1 Free Floating Breakfast During The Stay</li>
            <li>Unlimited Access To A Selection Of Wines Around The World Including France, Chile, Italy, Argentina, South Africa, Spirits, Beer, Liquor, Cocktails, Mocktails, Various Juices, Soft Drinks, Mineral Water, Selection Of Tea & Coffee Available From The All-inclusive Sprits & Beer Menu At Latitude Bar From 10:00-00:00 Hrs.
              Complimentary Snorkeling Equipment (Mask, Fins, Snorkel) Per Person With Unlimited Use Until Departure Day.</li>
            <li>All-day Access To The Over-water Fitness Gym.</li>
            <li>Use Of Non-motorized Water Sports Equipment With Life Jackets (Ie; Kayak, Catamaran, Windsurfing, Stand Up Paddle And Canoe). Lessons Excluded.</li>
            <li>Welcome Drink On Arrival.</li>
          </ul>
        
          <ul className="flex py-5 border-b border-green-200">
            <li className="rounded-lg bg-yellow-700 w-12 h-12 align-middle text-center px-5 mx-1">A</li>
            <li className="rounded-lg bg-yellow-700 w-12 h-12 align-middle text-center px-5 mx-1">A</li>
            <li className="rounded-lg bg-yellow-700 w-12 h-12 align-middle text-center px-5 mx-1">A</li>
          </ul>
          <p className="text-sm font-bold my-4">Preferences</p>
          <div className="p-4 bg-white rounded-lg w-64 border border-gray-200">
            <h1 className="text-xs text-gray-400">Number of nights</h1>
            <h1 className="text-sm">4 nights</h1>
          </div>
        </div>

        <h2 className="font-bold text-2xl py-2 my-5">Resort details</h2>

        <a href="#" className="capitalize pb-2 my-2 border-b-2 font-bold text-sm border-black">coco bodhi resort</a>
        

        <ul className="grid grid-cols-6 gap-4 mt-5"> 
        {imgdata.map( (p:string)=>{
            return (
              <div className="col-span-6 md:col-span-3 lg:col-span-1 mx-3 md:mx-1 flex">
                <li>
                  <img src={p} className="h-full w-full rounded-lg"/>
                </li>
              </div>
            )
          })}
          
        </ul>

        <h2 className="font-bold text-2xl py-5">Amenities</h2>

        <div className="grid grid-cols-2 flex">
        <div className="col-span-2 sm:col-span-1">
          <span className="flex"><img className="h-5 w-5 mx-1" src={around}/><p>Concierge Service</p></span>
          <span className="flex"><img className="h-5 w-5 mx-1" src={around}/><p>Concierge Service</p></span>
          <span className="flex"><img className="h-5 w-5 mx-1" src={around}/><p>Concierge Service</p></span>
          <span className="flex"><img className="h-5 w-5 mx-1" src={around}/><p>Concierge Service</p></span>
          <span className="flex"><img className="h-5 w-5 mx-1" src={around}/><p>Concierge Service</p></span>
        </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="flex"><img className="h-5 w-5 mx-1" src={around}/><p>Concierge Service</p></span>
            <span className="flex"><img className="h-5 w-5 mx-1" src={around}/><p>Concierge Service</p></span>
            <span className="flex"><img className="h-5 w-5 mx-1" src={around}/><p>Concierge Service</p></span>
            <span className="flex"><img className="h-5 w-5 mx-1" src={around}/><p>Concierge Service</p></span>
            <span className="flex"><img className="h-5 w-5 mx-1" src={around}/><p>Concierge Service</p></span>
          </div>
          
        </div>

        <h2 className="font-bold text-2xl py-5">Property overview</h2>
        <p>Pamper yourself with a visit to the spa, which offers massages, 
          body treatments, and facials. After dipping into one of the 15 
          indoor swimming pools, you can spend some time at the private beach. 
          This resort also features complimentary wireless Internet access, 
          concierge services, and babysitting/childcare (surcharge). 
          Make yourself at home in one of the 100 air-conditioned rooms 
          featuring private pools. Rooms have private balconies or patios. 
          Satellite programming and DVD players are provided for your entertainment, 
          while complimentary wireless Internet access keeps you connected. 
          Private bathrooms with shower/tub combinations feature deep soaking 
          bathtubs and complimentary toiletries.,Enjoy international cuisine at 
          AIR- all-day dining, one of the resort's 4 restaurants, or stay in and 
          take advantage of the 24-hour room service. Relax with a refreshing drink 
          from the poolside bar or one of the 2 bars/lounges. A complimentary buffet
          breakfast is included.,Featured amenities include complimentary wired Internet
          access, a business center, and complimentary newspapers in the lobby. 
          A roundtrip airport shuttle is provided for a surcharge (available 24 hours).
          When you stay at Coco Bodu Hithi in Bodu Hithi, you'll be by the ocean and within
          the vicinity of Madivaru Beyru Dive Site. This 4.5-star resort is within the region of 
          Vabbininfaru Beach and Angsana Beach.,Distances are calculated in a straight line 
          from the property's location to the point of interest or attraction, and may 
          not reflect actual travel distance.
          
        </p>
        <h2 className="font-bold text-2xl py-5">Terms & conditions</h2>
        <p className="text-sm">Please refer to our terms & conditions.</p>

        <h2 className="font-bold text-xl pt-5 pb-3 text-gray-500">Cancellation & Refunds</h2>
        <p className="text-sm">We understand that your travel plans may change. With that in mind, 
        Pyt Deals has a very simple cancellation policy as depicted below.</p>


        <table className="table-auto border my-8">
          <thead>
            <tr className=" bg-gray-400 border">
              <th className=" px-4 py-2">Time of cancellation</th>
              <th>Total Refund*</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className=" px-4 py-2">>8 Days</td>
              <td className=" px-4 py-2">Less than 8 Days</td>
            </tr>
            <tr className="border">
              <td className=" px-4 py-2">₹ 2,41,939</td>
              <td className=" px-4 py-2">₹ 0</td>
            </tr>
          </tbody>
        </table>

        <p className="text-sm">*Subject to cancellation policy</p>
      </div>
      
      <div className="col-span-8 lg:col-span-3">
        <div className="border border-grey-700 rounded-lg">
          <h1 className="bg-yellow-500 text-center py-2 rounded-t-lg">Offer ends in 2 days</h1>
          <h1 className="bg-yellow-400 text-center py-2">Travel anytime till April 27, 2021.</h1>
          <a href="#" className="text-center text-sm text-sm p-32"><span className=" text-gray-500">Conditions Apply</span></a>
          <div className="mx-5">
            <DatePicker className="px-4 py-3 text-sm bg-gray-200 rounded-lg my-4" showYearDropdown showMonthYearDropdown minDate={new Date()} selected={selectedDate} onChange={date => setselectedDate(date)}/>
            <div className="flex">
              <div>
                <label>Number of Passangers</label>
                <input type="number" min="1" placeholder="2" className="px-4 py-3 text-sm bg-gray-200 rounded-lg mb-4"/>
              </div>
              <div>
                <label>Number of Rooms</label>
                <input type="number" min="1" placeholder="1" className="px-4 py-3 text-sm bg-gray-200 rounded-lg mb-4"/>
              </div>
            </div>

            <p className="text-sm text-gray-500">Total Price</p>
            <p className="font-bold text-xl mb-3">₹ 2,41,940*</p>
            <p className="text-sm text-gray-500">Initial amount (15%)</p>
            <p className="font-bold text-xl mb-3">₹ 36,291</p>
            <button className="py-5 bg-green-400 font-bold px-5 text-lg text-center w-full rounded-lg text-white">Submit</button>
          </div>
          <p className="text-red-700 text-xs text-center mb-3 font-bold">* Remaining amount must be paid 30 days before check-in</p>
        </div>
      </div>
      
      <div className="col-span-8">
      <h2 className="font-bold text-2xl py-5 px-8">Similar Ideas</h2>
        <Carosel step={0.2} slidenos={2}>
          <ButtonBack className="bg-gray-200 border border-grey-400 shadow-lg p-1 rounded-full h-12 my-auto">Back</ButtonBack>
            <Slider className="flex">
              {packageData.map((p: OfferProps) => {
                return (
                  <Slide index={p.uuid} key={p.uuid+p.stayduration} className="h-24">
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
                  </Slide>
                  
                )
              })}
            </Slider>
          <ButtonNext className="bg-gray-200 border border-grey-400 shadow-lg p-1 rounded-full h-12 my-auto">Next</ButtonNext>
        </Carosel>

        </div>
    </div>
  )
}

export default PackageDetail
