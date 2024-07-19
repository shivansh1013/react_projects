import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
export const Appcontext=createContext();
export default function AppcontextProvider({children})
{
    const [loading,setoading]=useState(false);
    const[posts,setpost]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const[totalpages,settotalpage]=useState(0);

   
    async function fetschblog(page=1)
    {
        setoading(true);
        const url = `${baseUrl}?page=${page}`;
        try{
        const res=await fetch(url)
        const data=await res.json();
        setCurrentPage(data.page);
        setpost(data.posts)
        settotalpage(data.totalPages);
        const bas=data.totalpages;
       console.log(bas);
        console.log(settotalpage);
        console.log(page);
        
        }
        catch(err)
        {
            console.log('error in fetching data');
            setCurrentPage(1);
            setpost([]);
            settotalpage(1);
        }
        setoading(false);
    }
    function handlePageChange(currentPage)
    {
        setCurrentPage(currentPage);
        fetschblog(currentPage);
    }
    const value={
        posts,
        setpost,
        currentPage,
        setCurrentPage,
        totalpages,
        settotalpage,
        loading,
        setoading,
        handlePageChange,
        fetschblog

    };
    return <Appcontext.Provider value={value}>
    {children}
    </Appcontext.Provider>
  
}
