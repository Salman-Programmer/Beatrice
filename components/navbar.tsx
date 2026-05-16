"use client"
import { Search } from "lucide-react";
import { useState,useContext } from "react";
import {SearchContext} from "@/context/SearchProvider"
import Image from "next/image";
import { assets } from "@/lib/assets";
const Navbar = ()=>{
        
    const [query,setQuery] = useState('');
   const data = useContext(SearchContext);
       if (!data) return null;
      const { setSearch } = data;
     
     return(
         <div className="flex justify-between w-360 pt-8 px-20">
              <div>
   <Image src={assets.logo} alt="logo" />
              </div>


              <div className="flex relative">

<Search className="h-4 w-4 absolute top-3 left-3 text-[#94A3B8] "
            onClick={
               ()=>{
                    setSearch(query);
               }
            }
           />

           <input className="w-87 h-11 rounded-[20px] bg-navBlack pl-9 pr-3 text-[14px] text-[#94A3B8] " 
            type="text"
            value={query}
            onChange={(e)=>{setQuery(e.target.value)}}
            placeholder="Search songs, Qawwalis, or Coke Studio..."
           />
         
              </div>


           <div>
  <button className="px-6 py-3 rounded-lg font-semibold text-4 bg-primary">Sign in</button>
           </div>

         </div>
     )

}

export default Navbar;