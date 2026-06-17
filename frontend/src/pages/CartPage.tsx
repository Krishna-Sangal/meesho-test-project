import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'





const Cart = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setData((data.products))
        console.log(data);
      })

  }, [])



  const passBuy=(item: any)=>{
    // alert(`your booking is in progress`);
    navigate("buy", {
      state: item
    })
  }




  return (
    <>
    <Navbar/>
    
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 bg-amber-500 justify-between p-4">
        {
          data.map((item: any) => { 
            return <div key={item.id} className="flex flex-col justify-center items-center p-3 bg-amber-200 border-4 border-amber-50 rounded-lg">
              
              <img className="h-48 w-full justify-center object-contain" src={item.thumbnail}/>
              <h3 className="text-blue-950">{item.category}</h3>
              <h3 className="text-emerald-950">{item.description.slice(0,80)}</h3> 
              <h3 className="text-cyan-50">{item.price}</h3>
              <h3 className="text-cyan-50">{item.id}</h3>
              <div className="flex flex-wrap gap-3 items-center justify-center">
              <button className="border-3 border-amber-50 px-6 py-2 rounded-lg bg-gray-700 text-white mt-3" onClick={()=>{passBuy(item)}}>Buy</button>
              <Link to="/wishlist"><button className="border-3 border-amber-50 px-6 py-2 rounded-lg bg-gray-700 text-white mt-3"> Add to WishList</button></Link>
              </div>
            </div>
            
          })
        }
      </div>
      
    </>
  )
}

export default Cart
