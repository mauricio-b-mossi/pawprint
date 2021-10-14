import React, { useState, useEffect } from "react";

export default function DateWidget() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [numdate, setNumdate] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const date = new Date().toString();

    const dates = date.split(" ").slice(0, 4);

    const [Day, Month, Numdate, Year] = dates;

    setNumdate(Numdate);
    setYear(Year);

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
      setMonth("March");
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
  }, []);
  return (
    <div className="pt-2 tracking-tighter">
      <p className="text-lg leading-none text-black">{day}</p>
      <p className="text-lg leading-none text-red-700">
        {numdate} {month} {year}
      </p>
    </div>
  );
}
