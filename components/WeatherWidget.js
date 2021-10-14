import React from 'react'
import Image from "next/image";


export default function WeatherWidget({weather}) {

     const { location, current } = weather;

     const { condition } = current;

    //  console.log("====================================");
    //  console.log(current);
    //  console.log("====================================");
    return (
      <div className="flex flex-col sm:flex-row xl:flex-col justify-center items-center w-full ">
        <h3 className="sm:text-md xl:text-lg font-semibold">Santa Tecla</h3>
        <div className="flex justify-center items-center xl:border-t xl:border-b xl:w-full">
          <Image
            src={"https:" + condition.icon}
            width="64"
            height="64"
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
    );
}
