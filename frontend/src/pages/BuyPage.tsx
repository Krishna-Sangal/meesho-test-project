import { useLocation } from "react-router-dom"
import { useState } from "react"
import Navbar from "../components/Navbar"


const BuyPage = () => {

const [name ,setName] =useState('')
const [email,setEmail] =useState('')
const [address,setAddress] =useState('')
const [phone,setPhone] =useState('')
const [city,setCity] =useState('')
const [state,setState] =useState('')
const [pincode,setPincode] =useState('')


const handleSubmit = (e:any) =>{
    e.preventDefault();


      console.log(name);
    console.log(email);

    alert("Form Submitted");
}

    const location = useLocation()

const props = location.state
console.log(props)
  return (
    <>
    <Navbar/>
    <div className="min-h-screen w-full bg-white text-light">
   <div className="w-full text-white-50 bg-green-950 flex flex-col items-start px-4 py-4">
    
     <h1 className="w-full px-3 py-2 text-amber-300 text-2xl sm:text-3xl">Place your Order Here</h1>
     <h2 className="w-full px-3 py-1 text-shadow-mist-100 text-xl sm:text-2xl">Enter your Details here</h2>
     <p className="w-full px-3 py-1 text-white text-sm flex items-start"> Pick the products you want and fill in your information so that we can process your request and connect with you faster </p>
   </div>
 





     <div className="w-full text-amber-300 grid grid-cols-1 lg:grid-cols-2 items-start justify-center">
       
       
    
       
        <div className="w-full flex flex-col justify-center items-center bg-gray-800 border-4 border-white p-3">
            
          
          
          <form onSubmit={handleSubmit} className="w-full bg-white-400 border-4 border-white flex flex-col justify-start items-center gap-2 p-2" >
            
            {/* code for first entry */}
            <div className="w-full flex flex-col sm:flex-row justify-start items-stretch sm:items-center bg-white gap-2">
 
                <div className="h-10 w-22 justify-start items-center  bg-black rounded-sm" >  
            <label className="10 w-12 justify-center mt-2 flex items-center  ml-4 rounded-sm">
                Name
              </label>
            </div>
                    
            
            <div className="h-10 w-full justify-start items-center bg-red-900 rounded-sm ">
                  <input type="text" placeholder="enter your name" value={name} onChange={(e)=>setName(e.target.value)} className="h-10 w-full items-center "/>
              </div>
      </div>
      {/* code for first entry finish here  */}


        <div className="w-full flex flex-col sm:flex-row justify-start items-stretch sm:items-center bg-white gap-2">
                
                <div className="h-10 w-22 justify-start items-center  bg-black rounded-sm" >  
            <label className="10 w-12 justify-center mt-2 flex items-center ml-4 ">
                Email
              </label>
              
                </div>
                    
            
            
            <div className="h-10 w-full justify-start items-center bg-red-900 rounded-sm ">
                  <input type="text" placeholder="enter your mail" value={email} onChange={(e)=>setEmail(e.target.value)} className="h-10 w-full items-center "/>
              </div>
            </div>



          <div className="w-full flex flex-col sm:flex-row justify-start items-stretch sm:items-center bg-white gap-2">
                
                <div className="h-10 w-22 justify-start items-center  bg-black rounded-sm" >  
            <label className="10 w-12 justify-center mt-2 flex items-center ml-4 ">
                Address
              </label>
              
                </div>
                    
            <div className="h-10 w-full justify-start items-center bg-red-900 rounded-sm">
                  <input type="text" placeholder="enter your address here" value={address} onChange={(e)=>setAddress(e.target.value)} className="h-10 w-full items-center "/>
              </div>
            </div>


<div className="w-full flex flex-col sm:flex-row justify-start items-stretch sm:items-center bg-white gap-2">
                
                <div className="h-10 w-22 justify-start items-center  bg-black rounded-sm" >  
            <label className="10 w-12 justify-center mt-2 flex items-center ml-4 ">
                Phone
              </label>
              
                </div>
                    
            <div className="h-10 w-full justify-start items-center bg-red-900 rounded-sm">
                  <input type="text" placeholder="enter your phone number  here" value={phone} onChange={(e)=>setPhone(e.target.value)} className="h-10 w-full items-center "/>
              </div>
            </div>

<div className="w-full flex flex-col sm:flex-row justify-start items-stretch sm:items-center bg-white gap-2">
                
                <div className="h-10 w-22 justify-start items-center  bg-black rounded-sm" >  
            <label className="10 w-12 justify-center mt-2 flex items-center ml-4 ">
                City
              </label>
              
                </div>
                    
            <div className="h-10 w-full justify-start items-center bg-red-900 rounded-sm ">
                  <input type="text" placeholder="enter your city name here " value={city} onChange={(e)=>setCity(e.target.value)} className="h-10 w-full items-center "/>
              </div>
            </div>

<div className="w-full flex flex-col sm:flex-row justify-start items-stretch sm:items-center bg-white gap-2">
                
                <div className="h-10 w-22 justify-start items-center  bg-black rounded-sm" >  
            <label className="10 w-12 justify-center mt-2 flex items-center ml-4 ">
                State
              </label>
              
                </div>
                    
            <div className="h-10 w-full justify-start items-center bg-red-900 rounded-sm">
                  <input type="text" placeholder="enter your state name here " value={state} onChange={(e)=>setState(e.target.value)} className="h-10 w-full items-center "/>
              </div>
            </div>

    
    <div className="w-full flex flex-col sm:flex-row justify-start items-stretch sm:items-center bg-white gap-2">
                
                <div className="h-10 w-22 justify-start items-center  bg-black rounded-sm" >  
            <label className="10 w-12 justify-center mt-2 flex items-center ml-4 ">
                Pincode
              </label>
              
                </div>
                    
            <div className="h-10 w-full justify-start items-center bg-red-900 rounded-sm">
                  <input type="text" placeholder="enter your state name here " value={pincode} onChange={(e)=>setPincode(e.target.value)} className="h-10 w-full items-center "/>
              </div>
            </div>
        
 


               <button type="submit" className="h-10 w-25 bg-black text-white border-4 border-amber-100 rounded-lg mt-2">Submit</button>
          </form>
            </div>  
       
       





       
       {/*column 2*/} 
           <div className="w-full flex flex-col p-2 bg-amber-200 border-4 border-white rounded-lg items-center">
            <div className="h-12 w-full bg-amber-500 rounded-lg">
                <h2 className=" h-12 w-30 flex justify start text-2xl bg-red-900 text-amber-100 rounded-xl border-4 border-amber-400 items-center">BestSeller</h2>
            </div>
          
          <div className="h-40 w-full bg-amber-400  mt-4 flex flex-row justify-center  items-center border-4 border-white">
            <img className="h-30 w-30 justify-center flex items-center object-contain" src={props?.thumbnail}/>
          </div>
            
              <h3 className="min-h-11 w-full max-w-sm bg-blue-950 text-white justify-center flex items-center mt-2 border-4 border-white text-center"> Category - {props?.category}</h3>
              <div className="min-h-15 w-full border-4 border-amber-950 rounded-2xl flex flex-row justify-center items-center mt-2 p-2">
                <h3 className="text-emerald-950 w-full justify-around flex items-center text-light text-center">About - {props?.description?.slice(0,80)}</h3>
               </div>
              <h3 className="text-cyan-500 text-xl sm:text-2xl bg-amber-700 mt-2 border-4 border-white"> Price ={props?.price}</h3> 
              <h3 className="text-cyan-550 text-xl sm:text-2xl bg-green-800 mt-2 border-4 border-white"> Token Id={props?.id}</h3>
              <button className="h-10 w-30 bg-blue-800 text-2xl mt-2 text-white border-4 rounded-xl border-white    ">Payment</button>
                  </div>

     </div>

   </div>
    </>
  )
}

export default BuyPage
