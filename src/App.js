import './css/normalize.css'
import './css/style.css'
import {Route, Routes} from "react-router-dom"


import {Authorization} from './pages/authorization';
import {Redaction} from './pages/redaction';

function App() {
  return (
    <>
    <Routes>
      <Route index path='/' element={<Authorization/>}/>
      <Route path='redaction' element={<Redaction/>}/>
    </Routes>
  </>
  )
}

export default App;
