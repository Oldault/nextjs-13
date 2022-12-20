import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="navbar navbar-expand-lg shadow-md py-6 px-64 bg-white relative flex items-center w-full justify-between">
      <div>
        <Link href="/" className="px-4 py-2  text-blue-500 rounded-lg ">
          Home
        </Link>
      </div>
      <div>
        <Link
          href="/todos"
          className="px-4 py-2  text-blue-500 rounded-lg"
        >
          Todo's
        </Link>
        <a
          href="https://github.com/Oldault"
          className="px-4 py-2 text-blue-500 rounded-lg "
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Header;
