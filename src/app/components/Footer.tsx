// // "use client";
// import {
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaFacebook,
//   FaTwitter,
//   FaLinkedin,
// } from "react-icons/fa";
// import { FiArrowRight } from "react-icons/fi";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-800 pt-16 border-t border-gray-200">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Top 4 Columns */}
//         <div className="grid md:grid-cols-4 gap-12">
//           {/* Column 1 */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">
//               Grow Your Online Business and Improve Customer Retention
//             </h3>
//             <p className="flex items-center gap-2 mb-2">
//               <FaPhoneAlt className="text-orange-500" /> +880 9666 789 978
//             </p>
//             <p className="flex items-start gap-2 mb-2">
//               <FaMapMarkerAlt className="text-orange-500 mt-1" />
//               House 6/14, Block A, Lalmatia, Dhaka
//             </p>
//             <p className="flex items-center gap-2 mb-2">
//               <FaEnvelope className="text-orange-500" /> mark@nascenia.com
//             </p>
//             <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md inline-flex items-center gap-2 transition">
//               Get Estimate <FiArrowRight />
//             </button>
//           </div>

//           {/* Column 2 */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Services</h4>
//             <ul className="space-y-2 text-gray-600">
//               <li>Web Development</li>
//               <li>Mobile Development</li>
//               <li>Cutting Edge</li>
//               <li>Quality Assurance (QA)</li>
//               <li>Cyber Security</li>
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Products</h4>
//             <ul className="space-y-2 text-gray-600">
//               <li>Uddogi: NBR approved VAT software</li>
//               <li>Biyeta: A matrimonial SaaS</li>
//             </ul>
//           </div>

//           {/* Column 4 */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Company</h4>
//             <ul className="space-y-2 text-gray-600">
//               <li>Services</li>
//               <li>Contact Us</li>
//               <li>About</li>
//               <li>Blog</li>
//               <li>Careers</li>
//             </ul>
//           </div>
//         </div>

//         {/* Resources Row */}
//         <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
//           <p>© 2025 Nascenia Ltd.</p>
//           <p className="mt-2">Sitemap | Privacy Policy</p>
//           <p className="mt-2">
//             Download Brochure: <span className="text-orange-500">English</span>{" "}
//             | <span className="text-orange-500">Japanese</span>
//           </p>
//           <p className="mt-2">Optimized by NitroPack.io</p>
//           <p className="mt-1">
//             Automated page speed optimizations for fast site performance
//           </p>

//           {/* Social Icons */}
//           <div className="flex justify-center gap-6 mt-6 text-xl">
//             <FaFacebook className="hover:text-orange-500 cursor-pointer" />
//             <FaTwitter className="hover:text-orange-500 cursor-pointer" />
//             <FaLinkedin className="hover:text-orange-500 cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top 4 Columns */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Grow Your Online Business and Improve Customer Retention
            </h3>
            <p className="flex items-center gap-2 mb-2">
              <FaPhoneAlt className="text-orange-500" /> +880 9666 789 978
            </p>
            <p className="flex items-start gap-2 mb-2">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              House 6/14, Block A, Lalmatia, Dhaka
            </p>
            <p className="flex items-center gap-2 mb-2">
              <FaEnvelope className="text-orange-500" /> mark@nascenia.com
            </p>
            <button className="mt-4 text-orange-500 px-6 py-2 rounded-md inline-flex items-center gap-2 transition">
              Get Estimate <FiArrowRight />
            </button>

            <div className="flex justify-center gap-6 mt-4 text-xl">
              <FaFacebook className="hover:text-orange-500 cursor-pointer" />
              <FaTwitter className="hover:text-orange-500 cursor-pointer" />
              <FaLinkedin className="hover:text-orange-500 cursor-pointer" />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Cutting Edge</li>
              <li>Quality Assurance (QA)</li>
              <li>Cyber Security</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Uddogi: NBR approved VAT software</li>
              <li>Biyeta: A matrimonial SaaS</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Services</li>
              <li>Contact Us</li>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        {/* Bottom Flat Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-12 pt-6 text-center text-gray-600 space-y-2">
          <p>© 2025 Nascenia Ltd.</p>
          <p className="text-orange-500">Sitemap | Privacy Policy</p>
          <p>
            Download Brochure: <span className="text-orange-500">English</span>{" "}
            | <span className="text-orange-500">Japanese</span>
          </p>
          <p>mark@nascenia.com</p>

          {/* Social Icons */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
