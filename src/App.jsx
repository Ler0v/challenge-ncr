import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CuentasListContainer from './components/Cuentas/CuentasListContainer';
import Cuenta from './components/Cuentas/Cuenta';
import { Provider } from 'react-redux'
import createStore from 'redux'

function App() {

    //redux

    //### actions

    const cambiarEstado = 'Cambiar Estado';
    const cambiarEstadoAction = (cuentas) => {
        return {
            type: cambiarEstado,
            payload: cuentas
        }
    }

    //### reducers
  
    const defaultState  ={
        cuentas: []
      }
    
      const cuentasReducer = (state = defaultState, action) => {
        switch(action.type) {
            case cambiarEstado:{
                return{
                    cuentas: state.estado = action.payload 
                }
            }
          default: return state;
        }
      }

      //### store
    
      const store = createStore(cuentasReducer);
      console.log('estado inicial', store.getState());
      store.susbcribe(()=>{
        console.log('cambio de estado', store.getState())
      });
      store.dispatch(cambiarEstadoAction([1,2,3]));

    //fin redux

  return (
    <Provider store={createStore}>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<CuentasListContainer />} />
          <Route path='cuenta' element={<Cuenta cuentas/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
    
  )
}

export default App




