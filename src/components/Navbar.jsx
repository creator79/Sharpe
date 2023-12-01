import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="shadow bg-white">
        <div className="h-16 mx-auto px-5 flex items-center justify-between">
          <Link to="/" className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">
            Logo
          </Link>
          <ul className="flex items-center gap-5">
            <Link to="/">
              <li className="hover:text-cyan-500 transition-colors cursor-pointer">
                Home
              </li>
            </Link>
            <li>
              <Link to="/data" className="hover:text-cyan-500 transition-colors cursor-pointer">
                Data
              </Link>
            </li>
            <li>
              <Link to="/transaction" className="hover:text-cyan-500 transition-colors cursor-pointer">
                Transaction
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
