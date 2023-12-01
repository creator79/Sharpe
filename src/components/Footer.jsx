import React from 'react';

function Footer() {
  return (
    <>
      <div className="flex-grow"></div>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-white">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-800">
          © 2022 Vivek Upadhyay. All Rights Reserved.
        </span>
      </footer>
      <p className="mt-5 text-center ">
        This footer component is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official{' '}
        <a className="text-blue-600 hover:underline" href="#" target="_blank">
          Documentation
        </a>
        .
      </p>
    </>
  );
}

export default Footer;
