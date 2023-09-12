import React from "react";
import Close from "../assests/icons/Close";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import RightArrow from "../assests/icons/RightArrow";

const linkCat = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/about " },
  { id: 3, name: "Team", link: "/team" },
  { id: 4, name: "Causes", link: "/causes" },
  { id: 5, name: "Contact Us", link: "/contact " },
];

const SideNavbar = ({ open, onclose }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full p-7 z-50 bg-[#FFFFFF] text-white transform transition-transform duration-500 ease-in-out ${
        !open ? "translate-x-[100%]" : "-translate-x-[0%]"
      }`}
    >
      <div className=" flex-col items-center justify-end">
        <div className="flex items-center justify-between">
          <div className="h-16 w-20 relative">
            <Image src="/sikarialogo.png" fill alt="sikaria foundation" />
          </div>
          <div
            onClick={onclose}
            className="p-2 rounded-full bg-gray-100 cursor-pointer"
          >
            <Close height={20} width={20} />
          </div>
        </div>

        <div className="flex flex-col space-y-8 mt-7  w-full items-center  ">
          {linkCat.map(({ link, name }) => {
            return (
              <div
              key={link}
                onClick={onclose}
                className="w-full hover:bg-[#138999] text-center group"
              >
                <Link href={`${link}`}>
                  <p
                    className={
                      pathname.startsWith("/" + name.toLowerCase())
                        ? " text-slate-700 font-semibold  p-3"
                        : " text-slate-700 group-hover:text-white  w-full p-3 font-semibold"
                    }
                  >
                    {name}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="w-full items-center mt-12">
          <Link href="/donate">
            <button className="uppercase justify-center  w-full rounded-md relative  bg-primary overflow-hidden group p-3 px-4 font-bold flex items-center gap-4 text-white tracking-wide">
              <p className="z-50">donate now</p>
              <div className="h-6 w-full bg-[#12636e] absolute rounded-t-md z-20  -translate-x-[100%] group-hover:-translate-x-0 transition-all duration-300 ease-in inset-0"></div>
              <div className="h-6 w-full bg-[#12636e] absolute rounded-b-md z-20 translate-x-[100%] group-hover:translate-x-0 transition-all duration-300 ease-in left-0 bottom-0"></div>
              <div className="z-50">
                <RightArrow height={17} width={17} color="#FFFFFF" />
              </div>
            </button>
          </Link>

          <div className="flex items-center justify-center mt-4 w-full">
          <Link
          onClick={onclose}
                href="/registration"
                className="text-md font-semibold text-[#144047] hover:text-[#138999] hover:underline"
              >
                Become A Member
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
