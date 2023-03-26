import React, {  useState } from 'react'
import '../Styles/HomePage.css'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
   const[fetchedData , setFetchedData]= useState([])
   const[dataFetching,setDataFetching] = useState(false)


   async function FetchData(){
    
    if(dataFetching){
        alert("Data Fetching is in process , please wait")
    }
    setDataFetching(true)
     
    for(let i = 0 ; i < 50 ; i++){
        const res = await fetch("https://randomuser.me/api/")
        const data = await res.json()
        fetchedData.push(data.results[0])
        setFetchedData(fetchedData)
        
      }
      
      localStorage.setItem("Data" , JSON.stringify(fetchedData))
      alert("Data fetched Successfully !!")
 }
       
        let navigate = useNavigate(); 
        
        const routeChange = () =>{ 
          if(fetchedData.length==0) alert ("No Data Present")
           else {let path = `/UserDetailPage`; 
          navigate(path);}
        }

        function handleDelete(){
            alert("Are You Sure!!, the data will be permanently deleted")
            localStorage.removeItem('Data')
            setFetchedData([])

        }

    return (
    <div className='wrapper'>
     <nav className='Navigation_bar'>
        <h2>UserVault</h2>
        
        </nav>
        <div className='Container'>
            <button className='btn1' onClick={FetchData}>Fetch Users</button>
            <button className='btn2' onClick={handleDelete}>Delete Users</button>
            <button className='btn3' onClick={routeChange}>User Details </button>
            
        </div>
      
    </div>
  )
}

export default HomePage
