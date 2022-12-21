import React from "react";
import Image from "next/image";
import home_header from "../public/images/home_design.png";
import Link from "next/link";

function Home() {
  return (
    <div className="flex justify-between h-screen">
      <div className="w-2/3 flex justify-center">
        <div className="w-1/2 place-self-center">
          <h1 className="text-4xl text-gray-900 dark:text-white py-6">
            Me playing around with the new Next.js 13 and Tailwind
          </h1>
          <p className="text-lg text-gray-900 dark:text-white">
            October has come and gone, and with it, Next.js has released a new
            major version packed (pun intended) with tons of new features — some
            of which can be seamlessly adopted from your Next.js 12 app, while
            others not so much. If you’re just jumping on the bandwagon, it may
            be confusing to distinguish the hype, the misinformation, and what’s
            stable for your production apps, but fear not! I’m here finding out
            as well.
          </p>
          <div className="mt-12">
            <Link
              className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              href="/todos"
            >
              Get started
            </Link>
            <a
              className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
              href=""
            >Github Star</a>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <Image src={home_header} alt="Next logo" />
      </div>
    </div>
  );
}

export default Home;
