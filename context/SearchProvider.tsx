"use client"
import {  createContext,useState } from "react";

type SearchContextType = {
 search:string;
 setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType|null > (null);

const SearchProvider = ( {children,}:{children:React.ReactNode;})=>{
   const [search,setSearch] = useState('')  
return(
   <>
     <SearchContext.Provider value={{search,setSearch}}>
        {children}
     </SearchContext.Provider>
   </>
)
    

}


export default SearchProvider;
