import React from 'react'

const Contact = () => {
 return (
   <form className="flex flex-col items-center text-sm mt-10">
     {/* <p className="text-lg text-indigo-600 font-medium pb-2">Contact Me</p> */}
     <h1 className="text-4xl font-semibold text-slate-700 pb-4">
       Get in touch with me
     </h1>
    

     <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
       <div className="w-full">
         <label className="text-black/70" htmlFor="name">
           Your Name
         </label>
         <input
           className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
           type="text"
           required
         />
       </div>
       <div className="w-full">
         <label className="text-black/70" htmlFor="name">
           Your Email
         </label>
         <input
           className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
           type="email"
           required
         />
       </div>
     </div>

     <div className="mt-6 w-[350px] md:w-[700px]">
       <label className="text-black/70" htmlFor="name">
         Message
       </label>
       <textarea
         className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
         required
       ></textarea>
     </div>

     <button
       type="submit"
       className="mt-5 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition"
     >
       Send Message
     </button>
   </form>
 );
}

export default Contact
