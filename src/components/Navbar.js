import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './WebParent';


const Navbar = () => {

   const { cartQunatity, searchData, searchInput, FaOpencart } = useContext(UserContext);

   return (
      <>
         <div className='row' style={{ backgroundColor: '#9d8f2b', padding: '5px' }}>
            <div className='col-md-6' >
               <Link className="navLink" to="/"> Items</Link>
               <Link className="navLink" to="/cart">{<FaOpencart />} Cart</Link>
            </div>
            <div className='col-md-6 d-flex' style={{ justifyContent: 'center', gap: '10px' }}>
               <div>
                  <input className="form-control me-5" onChange={searchData} value={searchInput} type="search" placeholder='Search your product by title' aria-label="Search" />
               </div>
               <div className="text-center mx-3 mt-2">
                  <span className='cartCount' >Cart items  {cartQunatity ? cartQunatity : ''}</span>
               </div>
            </div>
         </div>
      </>
   )
}

export default Navbar