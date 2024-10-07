import React from 'react';
import { TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'



export const Close = ({closeThis}) => {

  //

  return (
    <TransitionChild>
      <div className="absolute right-0 md:right-[-70px] top-0 duration-500 ease-in-out data-[closed]:opacity-0">
        <button type="button" onClick={() => closeThis()} className="relative h-[70px] w-[70px] flex justify-center items-center rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
          <span className="absolute -inset-2.5" />
          <span className="sr-only">Close panel</span>
          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
    </TransitionChild>
  )
}

// right-[-55px]

// absolute right-0 top-0 flex h-[70px] w-[70px] duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4