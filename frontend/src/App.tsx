import CartPage from './pages/CartPage'
import { BrowserRouter ,Route , Routes  } from 'react-router-dom'
import BuyPage from './pages/BuyPage'
import WishListPage from './pages/WishListPage'
import OfferPage from './pages/OfferPage'
import ServicePage from './pages/ServicePage'
import SellPage from './pages/SellPage'
import AboutPage from './pages/AboutPage'
import EnquiryPage from './pages/EnquiryPage'
import BestSellersPage from './pages/BestSellersPage'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import ContinuePage from './pages/ContinuePage'

const App = () => {
  
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      
      <Route path='/cart/buy' element={<BuyPage />} />
      <Route path='/wishlist' element={<WishListPage/>} />
      <Route path='/offers' element={<OfferPage />} />
      <Route path='/services' element={<ServicePage/>} />
      <Route path='/sell' element={<SellPage/>} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/enquiry' element={<EnquiryPage />} />
       <Route path='/bestsellers' element={<BestSellersPage/>} />
        <Route path='/signup' element={<SignUpPage/>}/>
         <Route path='/continue' element={<ContinuePage/>} />
         <Route path='/change' element={<SignUpPage/>} />


       <Route path="/services" element={<ServicePage />} />
       <Route path="/services" element={< ServicePage/>} />
       <Route path="/services" element={< ServicePage/>} />

    </Routes>
    </BrowserRouter>
            
    </>
  )
}

export default App

