"use client"
// components/CustomDropdown.js
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const categories = [
  {
    name: 'Category 1',
    sublinks: [
      { name: 'Sublink 11', url: '/sublink11' },
      { name: 'Sublink 12', url: '/sublink12' },
    ],
  },
  {
    name: 'Category 2',
    sublinks: [
      { name: 'Sublink 21', url: '/sublink21' },
      { name: 'Sublink 22', url: '/sublink22' },
    ],
  },
  {
    name: 'Category 3',
    sublinks: [],
  },
  {
      name: 'Category 3',
      sublinks: [],
    },
    {
      name: 'Category 3',
      sublinks: [],
    },
    {
      name: 'Category 3',
      sublinks: [],
    },
    {
      name: 'Category 3',
      sublinks: [],
    },
    {
      name: 'Category 3',
      sublinks: [],
    },
    {
      name: 'Category 3',
      sublinks: [],
    },
];

const CustomDropdown = ({ triggerId, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (category.sublinks && category.sublinks.length > 0) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full hover:text-mart-50  text-md  leading-5 font-semibold text-gray-500  focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id={triggerId}
            
          >
            {category.name}
            {category.sublinks && category.sublinks.length > 0 && (
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                />
              </svg>
            )}
          </button>
        </span>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="origin-top-right absolute z-50 left-[50%] -translate-x-[50%] mt-2 w-56 rounded-md shadow-lg"
      >
        <div className="rounded-md bg-white shadow-xs z-50">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby={triggerId}>
            {category.sublinks &&
              category.sublinks.map((sublink, index) => (
                <a
                  key={index}
                  href={sublink.url}
                  className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                  role="menuitem"
                >
                  {sublink.name}
                </a>
              ))}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default CustomDropdown;
