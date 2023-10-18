'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "../../../../public/img/Logo.svg";
import greenLogo from "../../../../public/img/greenLogo.svg";
import { BsFillTelephoneFill, BsSearch } from "react-icons/bs";
import { MdEmail, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(1);
  const [fixednav, setFixedNav] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20; // Set a suitable scroll threshold
      if (isScrolled) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    }
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      id: 1,
      link: "Proč s námi",
    },
    {
      id: 2,
      link: "Interiérové dveře",
    },
    {
      id: 3,
      link: "Zárubně",
    },
    {
      id: 4,
      link: "Dveřní doplňky",
    },
    {
      id: 5,
      link: "Fotogalerie",
    },
    {
      id: 6,
      link: "Průvodce výběrem dveří",
    },
  ];


  const handleNavToggle = () => {
    setNav(!nav);
  };

  return (
    <div className={`z-10 ${fixednav ? "bg-white fixed top-0 w-full z-50" : "bg-white fixed top-0 w-full z-50"}`}>
    <div className={`flex justify-between items-center ${fixednav || nav ? "bg-white  w-full px-20 text-black-500 " : " text-white w-full px-20"}  h-24 fixed nav`}>
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <Link
            className="link-underline link-underline-black"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={!fixednav ? Logo : greenLogo}
              width={40}
              height={40}
            />
          </Link>
        </h1>
      </div>

      <div>
        <div className="flex items-center justify-end	">
          <ul className="hidden md:flex justify-between items-center mt-2">
            <li className={`${fixednav ? "text-black" : " text-white"} text-xs flex justify-between items-center mx-2 border-r`}>
              <BsFillTelephoneFill
                className="text-sea-green text-lg font-bold" />
              <span className="mx-2"> 800 262 929</span>
            </li>
            <li className={`${fixednav ? "text-black" : " text-white"} text-xs flex justify-between items-center mx-2 border-r`}>
              <MdEmail
                className="text-sea-green text-lg font-bold" />
              <span className="mx-2"> info@dverecag.cz</span>
            </li>
            <li className={`${fixednav ? "text-black" : " text-white"} text-xs flex justify-between items-center mx-2 border-r`}>
              <BsSearch
                className="text-sea-green text-lg font-bold" />
              <span className="mx-2"> Vyhledat</span>
            </li>
            <li className={`${fixednav ? "text-black" : " text-white"} text-xs flex justify-between items-center mx-2 border-r`}>
              <span className="mx-2"> Zákaznická sekce</span>
            </li>
            <li className={`${fixednav ? "text-black" : " text-white"} text-xs flex justify-between items-center mx-2 border-r`}>
              <span className="mx-2"> Vzorkovny a prodejny</span>
            </li>
            <li className={`${fixednav ? "text-black" : " text-white"} text-xs flex justify-between items-center mx-2 border-r`}>
              <span className="mx-2"> Kontakt</span>
            </li>
          </ul>
        </div>
        <div className=' md:border border-grey my-2 lg:border lg:border-grey my-2 '></div>

        <ul className="hidden md:flex ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`mx-auto nav-links px-4 py-2 cursor-pointer capitalize font-medium hover:scale-105 hover:duration-200 link-underline text-sm ${activeLink === id
                ? `bg-white rounded-3xl ${fixednav ? "text-[#008271] font-bold " : "text-black"}`
                : `bg-transparent`
                }`}
            >
              <Link href="#" onClick={() => setActiveLink(id)}>
                {link}
              </Link>
            </li>

          ))}
          <button className="bg-sea-green text-white rounded-3xl px-4 font-medium text-md">Konfigurátor dveří</button>
        </ul>


        <div className="cursor-pointer md:hidden" onClick={handleNavToggle}>
          {nav ? <MdClose className="text-black font-bold text-lg" /> : <MdMenu className="text-black font-bold text-lg" />}
        </div>
      </div>

      {nav && (
        <div className="md:hidden bg-white fixed top-20 left-0 w-full h-screen text-black z-50">
          <ul className="flex flex-col items-center  text-black pt-10">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className={`cursor-pointer py-2 text-lg text-black ${
                  activeLink === id ? "font-bold text-sea-green" : ""
                }`}
                onClick={() => {
                  setActiveLink(id);
                  setNav(false);
                }}
              >
                <Link href="#">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default Navbar;
