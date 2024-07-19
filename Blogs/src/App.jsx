import { useContext, useEffect, useState } from 'react'
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { Appcontext } from './context/Appcontext';


function App() {
const {fetschblog}=useContext(Appcontext);
useEffect(()=>{
  fetschblog();
},[]);
  return (
    <div>
    
     <Header/>
     <Blogs/>
     <Pagination/>


    </div>
  )
}

export default App
