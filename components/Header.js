import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt=""
          objectFit="contain"
          objectPosition="left"
          layout="fill"
        />
      </div>
      {/* middle */}

      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 ">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow"
        />
        <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 md:mx-2  text-white rounded-full p-2 cursor-pointer " />
      </div>
      {/* right */}

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6  cursor-pointer " />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full ">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
