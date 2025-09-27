// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import logo from "../Rectangle 1.png";

// const menuItems = [
//   { title: "Home", link: "#" },
//   {
//     title: "Services",
//     submenu: [
//       { title: "Web Development", link: "#" },
//       { title: "UI/UX Design", link: "#" },
//       { title: "Mobile Development", link: "#" },
//     ],
//   },
//   {
//     title: "About",
//     submenu: [
//       { title: "Company", link: "#" },
//       { title: "Team", link: "#" },
//       { title: "Careers", link: "#" },
//     ],
//   },
//   {
//     title: "Blog",
//     submenu: [
//       { title: "Latest Posts", link: "#" },
//       { title: "Tutorials", link: "#" },
//       { title: "News", link: "#" },
//     ],
//   },
// ];

// const Navbar = () => {
//   return (
//     <div className="bg-white sticky top-0 z-50 w-full">
//       <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Image src={logo} width={100} height={100} alt="Logo" />

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-base sm:text-lg">
//           {menuItems.map((item, idx) => (
//             <li key={idx} className="relative group">
//               {!item.submenu ? (
//                 <a href={item.link} className="hover:text-orange-500">
//                   {item.title}
//                 </a>
//               ) : (
//                 <>
//                   <span className="cursor-pointer hover:text-orange-500">
//                     {item.title}
//                   </span>
//                   <AnimatePresence>
//                     <motion.ul
//                       initial={{ opacity: 0, y: -20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                       transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }} // TS-safe cubic-bezier
//                       className="absolute left-0 top-full hidden group-hover:flex flex-col gap-1 mt-2 w-40 bg-white shadow-md rounded-md z-10"
//                     >
//                       {item.submenu.map((sub, subIdx) => (
//                         <li
//                           key={subIdx}
//                           className="px-4 py-2 hover:text-orange-500 whitespace-nowrap"
//                         >
//                           <a href={sub.link}>{sub.title}</a>
//                         </li>
//                       ))}
//                     </motion.ul>
//                   </AnimatePresence>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu */}
//         <div className="lg:hidden dropdown">
//           <div tabIndex={0} className="btn btn-ghost p-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 sm:h-5 sm:w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-compact dropdown-content mt-3 p-2 w-56 sm:w-52 bg-white rounded-md shadow-lg"
//           >
//             {menuItems.map((item, idx) => (
//               <li key={idx} className="text-base sm:text-sm">
//                 {!item.submenu ? (
//                   <a href={item.link}>{item.title}</a>
//                 ) : (
//                   <details>
//                     <summary>{item.title}</summary>
//                     <ul className="p-2 flex flex-col gap-1">
//                       {item.submenu.map((sub, subIdx) => (
//                         <li key={subIdx} className="text-sm sm:text-xs">
//                           <a href={sub.link}>{sub.title}</a>
//                         </li>
//                       ))}
//                     </ul>
//                   </details>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";
import React from "react";
import Image from "next/image";
import logo from "../Rectangle 1.png";

const menuItems = [
  { title: "Home", link: "#" },
  {
    title: "Services",
    submenu: [
      { title: "Web Development", link: "#" },
      { title: "UI/UX Design", link: "#" },
      { title: "Mobile Development", link: "#" },
    ],
  },
  {
    title: "About",
    submenu: [
      { title: "Company", link: "#" },
      { title: "Team", link: "#" },
      { title: "Careers", link: "#" },
    ],
  },
  {
    title: "Blog",
    submenu: [
      { title: "Latest Posts", link: "#" },
      { title: "Tutorials", link: "#" },
      { title: "News", link: "#" },
    ],
  },
];

const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 z-50 w-full shadow">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Image src={logo} width={100} height={100} alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-base sm:text-lg">
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group">
              {!item.submenu ? (
                <a href={item.link} className="hover:text-orange-500">
                  {item.title}
                </a>
              ) : (
                <>
                  <span className="cursor-pointer hover:text-orange-500">
                    {item.title}
                  </span>
                  {/* Submenu */}
                  <ul className="absolute left-0 top-full hidden group-hover:flex flex-col gap-1 mt-2 w-40 bg-white shadow-md rounded-md z-10">
                    {item.submenu.map((sub, subIdx) => (
                      <li
                        key={subIdx}
                        className="px-4 py-2 hover:text-orange-500 whitespace-nowrap"
                      >
                        <a href={sub.link}>{sub.title}</a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="lg:hidden dropdown">
          <div tabIndex={0} className="btn btn-ghost p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 w-56 sm:w-52 bg-white rounded-md shadow-lg"
          >
            {menuItems.map((item, idx) => (
              <li key={idx} className="text-base sm:text-sm">
                {!item.submenu ? (
                  <a href={item.link}>{item.title}</a>
                ) : (
                  <details>
                    <summary>{item.title}</summary>
                    <ul className="p-2 flex flex-col gap-1">
                      {item.submenu.map((sub, subIdx) => (
                        <li key={subIdx} className="text-sm sm:text-xs">
                          <a href={sub.link}>{sub.title}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
