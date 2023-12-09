import {BrowserRouter,Routes, Route, Link} from 'react-router-dom'

import Navbar from "./components/Navbar"
import useAuthContext from './hooks/useAuthContext';
import AddProductScreen from './screens/AddProductScreen';
import EditProductScreen from './screens/EditProductScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import OrdersScreen from './screens/OrdersScreen';
import CategoryScreen from './screens/CategoryScreen';
import OrderDetailScreen from './screens/OrderDetailScreen';



const App =()=>{
  const {authDone}= useAuthContext();

  return (
    <div>
      <BrowserRouter>
      {authDone ?
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="login" index element={<LoginScreen/>}/>
          <Route path="AddNewProduct" element={<AddProductScreen/>}/>
          <Route path="Orders" element={<OrdersScreen/>}/>
          <Route path="order-details/:orderId" element={<OrderDetailScreen/>}/>
          <Route path="category" element={<CategoryScreen/>}/>
          
          <Route path="EditProduct" element={<EditProductScreen/>}>
            <Route path=":productId" element={<EditProductScreen/>}/>
          </Route>
        </Routes>
        </>
        :  
        <Routes>
          <Route path="" index element={<LoginScreen/>}/>
        </Routes>
      }
      </BrowserRouter>
    </div>
  )
}

export default App;