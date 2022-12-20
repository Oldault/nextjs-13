import Link from "next/link";
import React from "react";


function Header() {
  return (
    <header className="p-5 bg-blue-500 flex space-x-8">
        <Link href="/" className="px-2 py-2 bg-white text-blue-500 rounded-lg ">
          Home
        </Link>
        <Link href="/todos" className="px-2 py-2 bg-white text-blue-500 rounded-lg">
          Todo's
        </Link>
    </header>
  );
}

export default Header;
