// app/search/page.tsx
"use client"
import { useContext } from 'react';
import {SearchContext} from "@/context/SearchProvider"

export default function SearchPage() {
  // const [query, setQuery] = useState('');
  // const [results, setResults] = useState([]);

  // const handleSearch = async () => {
  //   const res = await fetch(`/api/search?q=${query}`);
  //   const json = await res.json();
  //   // Remember your JSON structure: respData[1] was "Songs"
  //   setResults(json.respData[1]?.data || []);
  // };

  // return (
  //   <div className="min-h-screen bg-zinc-950 text-white p-8">
  //     <div className="max-w-2xl mx-auto">
  //       <h1 className="text-4xl font-bold mb-8">Search Music</h1>
        
  //       <div className="flex gap-2 mb-12">
  //         <input 
  //           type="text" 
  //           value={query}
  //           onChange={(e) => setQuery(e.target.value)}
  //           className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded-lg focus:outline-none focus:border-indigo-500"
  //           placeholder="Search artists or songs..."
  //         />
  //         <button 
  //           onClick={handleSearch}
  //           className="bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
  //         >
  //           Search
  //         </button>
  //       </div>

  //       <div className="grid grid-cols-1 gap-4">
  //         {results.map((song: any) => (
  //           <div key={song.contentId} className="flex items-center gap-4 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800/50 hover:bg-zinc-800 transition cursor-pointer">
  //             <img src={song.thumbnailList?.square} alt="" className="w-16 h-16 rounded-lg object-cover" />
  //             <div>
  //               <h3 className="font-semibold">{song.contentTitle}</h3>
  //               <p className="text-sm text-zinc-400">{song.artistTitle}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
    // </div>
  // );
 const data = useContext(SearchContext);
 if(!data) return null;
 const {search} = data;

 return(
  <>
  <h2>return results for {search}</h2>
  </>
 )
}