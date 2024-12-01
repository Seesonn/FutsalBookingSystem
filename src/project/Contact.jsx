// export default function Contact() {
//   return (
//     <div id="contact"className=" bg-[#04153F] flex items-center justify-center p-4 sm:p-6 md:p-8">
//       <div className="bg-[#04153F] rounded-[1rem] w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-12 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
//         <div className="max-w-3xl mx-auto">
//           <h1 className="text-3xl sm:text-4xl font-bold text-[#D2D81D]  text-center mb-8 sm:mb-12 relative">
//             Contact Us
//             <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[100px] sm:w-[140px] h-[3px] bg-[#D2D81D]"></div>
//           </h1>
          
//           <form className="space-y-6 sm:space-y-4">
//             <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
//               <div className="space-y-2">
//                 <label htmlFor="name" className="block text-lg sm:text-xl text-white font-semibold">
//                   Name
//                 </label>
//                 <input 
//                   id="name"
//                   type="text"
//                   className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-[#E5E7EB] focus:outline-none focus:border-[#0A1744] shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
//                 />
//               </div>
              
//               <div className="space-y-2">
//                 <label htmlFor="email" className="block text-lg sm:text-xl text-white font-semibold">
//                   Email
//                 </label>
//                 <input 
//                   id="email"
//                   type="email"
//                   className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-[#E5E7EB] focus:outline-none focus:border-[#0A1744] shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
//                 />
//               </div>
//             </div>
            
//             <div className="space-y-2">
//               <label htmlFor="message" className="block text-lg sm:text-xl text-white font-semibold">
//                 Message
//               </label>
//               <textarea 
//                 id="message"
//                 className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-[30px] border-2 border-[#E5E7EB] focus:outline-none focus:border-[#04153F] shadow-[0_2px_4px_rgba(0,0,0,0.05)] min-h-[200px] resize-none"
//                 placeholder="Enter your message here..."
//               ></textarea>
//             </div>
            
//             <div className="flex justify-center pt-4">
//               <button 
//                 type="submit"
//                 className="bg-[#D2D81D] text-[#04153F] font-semibold text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:bg-[#c1cc19] transition-colors duration-200"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function Contact() {
    return (
      <div id="contact" className="bg-[#04153F] flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="bg-[#04153F] rounded-[1rem] w-full max-w-3xl mx-auto p-6 sm:p-8 md:p-10 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#D2D81D] text-center mb-8 sm:mb-10 relative">
            Contact Us
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[100px] sm:w-[140px] h-[3px] bg-[#D2D81D]"></div>
          </h1>
          
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm text-[#D2D81D] font-semibold">
                  Name
                </label>
                <input 
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 rounded-full border-2 border-[#E5E7EB] focus:outline-none focus:border-[#D2D81D] bg-[#0A1744] text-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm text-[#D2D81D] font-semibold">
                  Email
                </label>
                <input 
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 rounded-full border-2 border-[#E5E7EB] focus:outline-none focus:border-[#D2D81D] bg-[#0A1744] text-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm text-[#D2D81D] font-semibold">
                Message
              </label>
              <textarea 
                id="message"
                className="w-full px-4 py-3 rounded-2xl border-2 border-[#E5E7EB] focus:outline-none focus:border-[#D2D81D] bg-[#0A1744] text-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] min-h-[120px] resize-none"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
            
            <div className="flex justify-center pt-4">
              <button 
                type="submit"
                className="bg-[#D2D81D] text-[#04153F] font-semibold text-lg px-8 py-3 rounded-full hover:bg-[#c1cc19] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  
  