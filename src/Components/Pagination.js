import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Pagination.css'

export default function Pagination(){
  return(
    <>
   <div className='pagination'>
    <Link to='/UserDetailPage1'>1</Link>
    <Link to='/UserDetailPage2'>2</Link>
    <Link to='/UserDetailPage3'>3</Link>
    <Link to='/UserDetailPage4'>4</Link>
    <Link to='/UserDetailPage5'>5</Link>
    </div>
    </>
  )

    function newFunction() {
        return '/userdetails2'
    }
}