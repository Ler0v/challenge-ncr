import './App.css'
import './components/Cuentas/cuenta.css'
import './components/CuentasListContainer/cuentalistcontainer.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CuentasListContainer from './components/CuentasListContainer/CuentasListContainer';
import Cuenta from './components/Cuentas/Cuenta';

function App() {

 
  return (
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<CuentasListContainer />} />
          <Route path='cuenta' element={<Cuenta cuentas/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App




