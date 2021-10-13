import React from 'react'

export default function MembersSectionHeader({information}) {

  const {title, description} = information
    return (
      <div className="w-full flex flex-col justify-start items-center flex-grow">
        <h1 className="text-2xl sm:text-4xl uppercase text-center leading-loose font-bold py-4">
          {title}
        </h1>
        <p className="max-w-sm sm:max-w-md lg:max-w-lg sm:text-base text-center w-full text-sm ">
          {description}
        </p>
      </div>
    );
}
