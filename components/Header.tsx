import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropDown from "./ui/GenreDropDown";

function Header() {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center p-5 z-20 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image src="https://links.papareact.com/a943ae" alt="Disney+ Logo" width={120} height={100} className="cursor-pointer invert-0 dark:invert"/>
      </Link>
      <div className="flex space-x-2">
        <GenreDropDown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
