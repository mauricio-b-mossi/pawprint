import React from "react";
// import NewsGallery from '../components/NewsGallery'
import TopicGallery from "../components/TopicGallery";
import { useState, useEffect } from "react";
import Image from 'next/image'

export default function TopicNewsGrid({ posts, weather }) {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [numdate, setNumdate] = useState('')
  const [year, setYear] = useState('')

  const { location, current } = weather;

  const { condition } = current;

  console.log("====================================");
  console.log(current);
  console.log("====================================");

  

  useEffect(() => {

    const date = new Date().toString();

    const dates = date.split(" ").slice(0, 4);

    const [Day, Month, Numdate, Year] = dates;

    setNumdate(Numdate)
    setYear(Year)

    if (Day == "Mon") {
      setDay("Monday");
    } else if (Day == "Tue") {
      setDay("Tuesday");
    } else if (Day == "Wed") {
      setDay("Wednesday");
    } else if (Day == "Thu") {
      setDay("Thursday");
    } else if (Day == "Fri") {
      setDay("Friday");
    } else if (Day == "Sat") {
      setDay("Saturday");
    } else if (Day == "Sun") {
      setDay("Sunday");
    }

    if (Month == "Jan") {
      setMonth("January");
    } else if (Month == "Feb") {
      setMonth("February");
    } else if (Month == "Mar") {
      setMonth("March")
    } else if (Month == "Apr") {
      setMonth("April");
    } else if (Month == "May") {
      setMonth("May");
    } else if (Month == "Jun") {
      setMonth("June");
    } else if (Month == "Jul") {
      setMonth("July");
    } else if (Month == "Aug") {
      setMonth("August");
    } else if (Month == "Sep") {
      setMonth("September");
    } else if (Month == "Oct") {
      setMonth("October");
    } else if (Month == "Nov") {
      setMonth("November");
    } else if (Month == "Dec") {
      setMonth("December");
    }
  }, [])

    
  return (
    <div className="lg:pt-4 2xl:pt-20 ">
      <div className="grid xl:grid-cols-5 border-t">
        <div className="col-span-4 xl:col-span-1 border-l flex xl:flex-col items-center justify-around xl:justify-start px-4 xl:px-0 xl:w-full ">
          <div className="font-black font-serif xl:pb-20 pb-2 w-full">
            <h1 className="text-2xl">Headlines</h1>
            <div className="pt-2 tracking-tighter">
              <p className="text-lg leading-none text-black">{day}</p>
              <p className="text-lg leading-none text-red-700">
                {numdate} {month} {year}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row xl:flex-col justify-center items-center w-full ">
            <h3 className="sm:text-md xl:text-lg font-semibold">Santa Tecla</h3>
            {/* Here goes text */}
            <div className="flex justify-center items-center xl:border-t xl:border-b xl:w-full">
              <Image
                src={"https:" + condition.icon}
                width="64"
                height="64"
                // layout='fill'
                objectFit
              />
              <div className="text-gray-500">
                <p className="uppercase text-xs font-bold leading-none">Now</p>
                <p className="font-semibold lining-nums text-lg leading-none text-black">
                  {current.temp_c}°C
                </p>
              </div>
            </div>
          </div>
        </div>
        <TopicGallery post={posts} />
      </div>
    </div>
  );
}
