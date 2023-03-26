import React from 'react'
import {useState} from 'react'
import Pagination from './Pagination'
import '../Styles/UserDetail.css'

export default function UserDetailPage2(){
  const[ search ,setSearch]=useState("")
  const[ email ,setEmail]=useState("")
  const[ country ,setCountry]=useState("")
 let list = JSON.parse(localStorage.getItem("Data"))
//  console.log(list)
 const newARR = list.filter((x,i)=> i>=20 && i <30)
 console.log(newARR)
 
 function captureSearch(e){
  setSearch(e.target.value)
 }
 function captureEmail(e){
  setEmail(e.target.value)
 }
 function captureCountry(e){
  setCountry(e.target.value)
 }
    
    


  return(
    <>
    <nav className='Navigation_bar'>
        <h2>USCreations</h2>
        
        </nav>
        <div  className='inputs'>
        <input type='text' placeholder="Filter By Name" value={search} onChange={captureSearch}/>

<input type='text' placeholder="Filter By Email" value={email} onChange={captureEmail}/>
<input type='text' placeholder="Filter By Country" value={country} onChange={captureCountry}/>
</div>

    <table border="2px" className='Table'>
    <tr>
        
        <th>IMAGE</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>GENDER</th>
        <th>AGE</th>
        <th>USERNAME</th>
        <th>PHONE</th>
        <th>COUNTRY</th>
        <th>REGISTRATION DATE</th>
        
      </tr>
    
     
      {newARR.filter(y=>y.name.first.toLowerCase().includes(search.toLowerCase())).filter(y=>y.email.toLowerCase().includes(email)).
    filter(y=>y.location.country.toLowerCase().includes(country.toLowerCase())).map((x , i)=><>
      
      
        <tr key={i}>
       
          <td><img src={x.picture.thumbnail} alt="" /></td>
          <td>{x.name.first} {x.name.last}</td>
          <td>{x.email}</td> 
          <td>{x.gender}</td>
          <td>{x.dob.age}</td>
          <td>{x.login.username}</td>
          <td>{x.phone}</td>
          <td>{x.location.country}</td>
          <td>{x.registered.date}</td>
        </tr>
          <br/>
    
    </>)}
    </table>
    <Pagination/>
    </>
  )
}