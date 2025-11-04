import React from "react";

const Footer = () => {
   return (
     <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 mt-10 mb-5">
       <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
         <div className="md:max-w-96">
           <p className="mt-6 text-sm">
             Create a professional, AI-enhanced resume that sets you apart from
             the competition. Let AI showcase your skills, experience, and
             achievements in the best possible way. 
           </p>
         </div>
         <div className="flex-1 flex items-start md:justify-end gap-20">
           <div>
             <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
             <ul className="text-sm space-y-2">
               <li>
                 <a href="#">Home</a>
               </li>
               <li>
                 <a href="#">About us</a>
               </li>
               <li>
                 <a href="#">Contact us</a>
               </li>
               <li>
                 <a href="#">Privacy policy</a>
               </li>
             </ul>
           </div>
           <div>
             <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
             <div className="text-sm space-y-2">
               <p>+251-922-019-117</p>
               <p>helloabnet@gmail.com</p>
             </div>
           </div>
         </div>
       </div>
       <p className="pt-4 text-center text-xs md:text-sm pb-5">
         Copyright 2025 © <a href="https://abnet-resume.vercel.app/">Mokinaw</a>
         . All Right Reserved.
       </p>
     </footer>
   );
};

export default Footer;
