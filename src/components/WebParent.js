import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Item from './Item';
import Cart from './Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaOpencart } from 'react-icons/fa';



export const UserContext = React.createContext();

const WebParent = () => {
   const [products, setProducts] = useState([]);
   const [cartdata, setCartData] = useState([]);
   const [searchInput, setSearchInput] = useState("");

   const cartQunatity = cartdata.length;

   const initialValue = 0;
   const total = cartdata.reduce((accumulator, current) => accumulator + current.price * current.quantity, initialValue)

   const getusers = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const item = await response.json();
      setProducts(item);
   }

   // const getusers = async () => {
   //    try {
   //       // wait until the promise resolves 
   //       const response = await fetch("https://fakestoreapi.com/products")
   //       const item = await response.json();
   //       console.log(item)
   //       setProducts(item);
   //    }
   //    catch (error) {
   //       console.log(error);
   //    }
   // }


   useEffect(() => {
      getusers();
   }, []);

   const addCart = (id) => {
      const exist = cartdata.find(object => object.id === id);
      // console.log(exist)
      if (exist) {
         return toast.warn("Already in Cart");
      }
      else {
         const item = products.find(object => object.id === id);
         const newitem = { id: item.id, image: item.image, title: item.title, price: item.price, quantity: 1 }
         setCartData([...cartdata, newitem]);
         toast.success("Successfully Add to Cart");
      }
   }

   const UpdateQuantity = (id, value, price) => {
      const amount = price * value;
      const data = cartdata.map((data) => { return data.id === id ? { ...data, amount, quantity: value } : data });
      setCartData(data);
      // console.log("data:", data);
   }

   const removeData = (id) => {
      const filterData = cartdata.filter((data) => data.id !== id)
      // console.log(filterData);
      setCartData(filterData);
      toast.success("Successfully Remove from Cart");
      // console.log('removedata')
   }

   const searchData = (e) => {
      setSearchInput(e.target.value);
      // console.log('handlechange')
   }

   const filterCartdata = cartdata.filter((elem) => searchInput ? elem.title.toLowerCase().includes(searchInput) : elem);
   const filterProduct = products.filter((elem) => searchInput ? elem.title.toLowerCase().includes(searchInput) : elem);


   return (
      <>
         <UserContext.Provider value={{ addCart, removeData, cartQunatity, total, searchData, filterCartdata, FaOpencart, UpdateQuantity, filterProduct }}>
            <BrowserRouter>
               <Navbar />
               <Routes>
                  <Route path='/' element={<Item />} />
                  <Route path='/cart' element={<Cart />} />
               </Routes>
            </BrowserRouter>
            <ToastContainer />
         </UserContext.Provider>
      </>
   )
}

export default WebParent