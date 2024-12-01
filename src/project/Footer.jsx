import { Mail, User, Scale } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full">
      <hr className="border-t border-gray-300 w-full" />
      <div className="bg-[#04153F] text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between sm:space-x-12">
            <div className="w-full sm:w-1/3"></div> {/* Left gap */}
            
            {/* Any query */}
            <div className="w-full sm:w-1/4 space-y-4 mb-8 sm:mb-0">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
                <h2 className="text-xl md:text-2xl font-semibold">
                  <span className="text-white">Any</span>{' '}
                  <span className="text-[#D2D81D]">queries?</span>
                </h2>
              </div>
              <div className="space-y-2">
                <p className="text-sm md:text-base">Send us email</p>
                <a 
                  href="mailto:futsalbooking@gmail.com" 
                  className="text-[#D2D81D] hover:underline text-sm md:text-base break-all"
                >
                  futsalbooking@gmail.com
                </a>
              </div>
            </div>

            {/* About */}
            <div className="w-full sm:w-1/4 space-y-4 mb-8 sm:mb-0">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 md:w-6 md:h-6" />
                <h2 className="text-[#D2D81D] text-xl md:text-2xl font-semibold">About</h2>
              </div>
              <nav className="space-y-2 text-sm md:text-base">
                <a href="#" className="block hover:text-[#D2D81D] transition-colors duration-200">
                  About us
                </a>
                <a href="#" className="block text-[#D2D81D] hover:underline transition-colors duration-200">
                  Book Now
                </a>
                <a href="#" className="block hover:text-[#D2D81D] transition-colors duration-200">
                  Contacts
                </a>
                <a href="#" className="block text-[#D2D81D] hover:underline transition-colors duration-200">
                  Futsals
                </a>
              </nav>
            </div>

            {/* Legal */}
            <div className="w-full sm:w-1/4 space-y-4">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 md:w-6 md:h-6" />
                <h2 className="text-[#D2D81D] text-xl md:text-2xl font-semibold">Legal</h2>
              </div>
              <nav className="space-y-2 text-sm md:text-base">
                <a href="#" className="block hover:text-[#D2D81D] transition-colors duration-200">
                  Terms and conditions
                </a>
                <a href="#" className="block text-[#D2D81D] hover:underline transition-colors duration-200">
                  Privacy Policy
                </a>
              </nav>
            </div>

            <div className="w-full sm:w-1/4"></div> {/* Right gap */}
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm">
          <p>© 2024 All Rights Reserved, futsalbooking@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}
// }
// import { Mail, User, Scale, Twitter, Facebook, Instagram } from 'lucide-react';
// import logo from '../assets/logo.png'; // Replace with the correct path to your logo image

// export default function Footer() {
//   return (
//     <footer className="w-full">
//       <hr className="border-t border-gray-300 w-full" />
//       <div className="bg-[#04153F] text-white py-8 md:py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-between gap-8">
//             {/* Left side with logo and slogan */}
//             <div className="flex-1 min-w-[200px] flex flex-col items-start space-y-4 mb-8 sm:mb-0">
//               <img src={logo} alt="Futsal Booking Logo" className="h-10 md:h-12" />
//               <p className="text-[#D2D81D] text-base md:text-xl">Your reliable futsal booking system</p>
//             </div>

//             {/* Any query */}
//             <div className="flex-1 min-w-[200px] flex flex-col space-y-4 mb-8 sm:mb-0">
//               <div className="flex items-center gap-2">
//                 <Mail className="w-5 h-5 md:w-6 md:h-6" />
//                 <h2 className="text-xl md:text-2xl font-semibold">
//                   <span className="text-white">Any</span>{' '}
//                   <span className="text-[#D2D81D]">queries?</span>
//                 </h2>
//               </div>
//               <div className="space-y-2">
//                 <p className="text-sm md:text-base">Send us email</p>
//                 <a 
//                   href="mailto:futsalbooking@gmail.com" 
//                   className="text-[#D2D81D] hover:underline text-sm md:text-base break-all"
//                 >
//                   futsalbooking@gmail.com
//                 </a>
//               </div>
//             </div>

//             {/* About */}
//             <div className="flex-1 min-w-[200px] flex flex-col space-y-4 mb-8 sm:mb-0">
//               <div className="flex items-center gap-2">
//                 <User className="w-5 h-5 md:w-6 md:h-6" />
//                 <h2 className="text-[#D2D81D] text-xl md:text-2xl font-semibold">About</h2>
//               </div>
//               <nav className="space-y-2 text-sm md:text-base">
//                 <a href="#" className="block hover:text-[#D2D81D] transition-colors duration-200">
//                   About us
//                 </a>
//                 <a href="#" className="block text-[#D2D81D] hover:underline transition-colors duration-200">
//                   Book Now
//                 </a>
//                 <a href="#" className="block hover:text-[#D2D81D] transition-colors duration-200">
//                   Contacts
//                 </a>
//                 <a href="#" className="block text-[#D2D81D] hover:underline transition-colors duration-200">
//                   Futsals
//                 </a>
//               </nav>
//             </div>

//             {/* Legal */}
//             <div className="flex-1 min-w-[200px] flex flex-col space-y-4">
//               <div className="flex items-center gap-2">
//                 <Scale className="w-5 h-5 md:w-6 md:h-6" />
//                 <h2 className="text-[#D2D81D] text-xl md:text-2xl font-semibold">Legal</h2>
//               </div>
//               <nav className="space-y-2 text-sm md:text-base">
//                 <a href="#" className="block hover:text-[#D2D81D] transition-colors duration-200">
//                   Terms and conditions
//                 </a>
//                 <a href="#" className="block text-[#D2D81D] hover:underline transition-colors duration-200">
//                   Privacy Policy
//                 </a>
//               </nav>
//             </div>

//             {/* Follow us */}
//             <div className="flex-1 min-w-[200px] flex flex-col space-y-4">
//               <div className="flex items-center gap-2">
//                 <h2 className="text-[#D2D81D] text-xl md:text-2xl font-semibold">Follow us</h2>
//               </div>
//               <div className="flex gap-4">
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#D2D81D] hover:text-[#B0A31E] transition-colors duration-200">
//                   <Twitter className="w-6 h-6" />
//                 </a>
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#D2D81D] hover:text-[#B0A31E] transition-colors duration-200">
//                   <Facebook className="w-6 h-6" />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#D2D81D] hover:text-[#B0A31E] transition-colors duration-200">
//                   <Instagram className="w-6 h-6" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Copyright */}
//       <div className="bg-white py-4">
//         <div className="container mx-auto px-4 text-center text-xs sm:text-sm">
//           <p>© 2024 All Rights Reserved, futsalbooking@gmail.com</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
