import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './cuentaslistcontainer.css'
import { useDispatch, useSelector } from 'react-redux';
import { setCuentas } from '../../redux/actions';

const CuentasListContainer = () => {

    const API_URL = 'https://api.npoint.io/97d89162575a9d816661'
    // const [cuentas, SetCuentas] = useState([])
    const dispatch = useDispatch();
    const cuentas = useSelector((state) => state);

    useEffect(()=>{
        fetch(API_URL)
        .then(res => res.json())
        .then((data) => {
            const { cuentas } = data;
            const cuentasP = cuentas.filter((cuenta => cuenta.moneda === '$' || cuenta.moneda === 'u$s') || (cuenta => cuenta.tipo_letras === 'CA' || cuenta.tipo_letras === 'CC'))	
            dispatch(setCuentas(cuentasP));
        }
            )
    }, [dispatch])


  return (
    <>  
        <p>Consulta de Saldo</p>
        <h1>Selecciona la Cuenta a Consultar</h1>
        <div className='botonesCuentas'>
            {cuentas.map((cuentas) => {
                return(
                    <div key={cuentas.id} >
                        <Link to='cuenta'><button>{cuentas.tipo_letras}<br />{cuentas.n}</button></Link>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default CuentasListContainer