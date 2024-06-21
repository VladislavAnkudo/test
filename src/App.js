import './css/normalize.css'
import './css/style.css'
import {Route, Routes} from "react-router-dom"


import {Authorization} from './pages/authorization';
import {Redaction} from './pages/redaction';
import {ShopCatElement} from './pages/shopCatElement';
import {Personal} from './pages/personal';
import {Shops} from './pages/shops';

function App() {
  return (
    <>
    <Routes>
      <Route index path='/' element={<Authorization/>}/>
      <Route path='redaction' element={<Redaction/>}/>
      <Route path='shopcatelement' element={<ShopCatElement/>}/>
      <Route path='personal' element={<Personal/>}/>
      <Route path='shops' element={<Shops/>}/>
    </Routes>
  </>
  )
}

export default App;
