import React from 'react'
import { useState, useEffect } from 'react'
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
            const cuentasFiltradas = cuentas.filter(
            (cuentas) =>
                (cuentas.monedas === '$' || cuentas.moneda === 'u$s') ||
                (cuentas.tipo_letras === 'CC' || cuentas.tipo_letras === 'CA')
            );
            dispatch(setCuentas(cuentasFiltradas));
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
                        <button>
                            <Link to='cuenta'>{cuentas.tipo_letras}<br />{cuentas.n}</Link>
                        </button>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default CuentasListContainer