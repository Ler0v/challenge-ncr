import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CuentasListContainer = () => {

    const API_URL = 'https://api.npoint.io/97d89162575a9d816661'
    const [cuentas, SetCuentas] = useState([])

    useEffect(()=>{
        fetch(API_URL)
        .then(res => res.json())
        .then(data => 
            {
            const {cuentas} = data
            const cuentasP = cuentas.filter((cuentas => cuentas.moneda === '$' || cuentas.moneda === 'u$s') || (cuentas => cuentas.tipo_letras === 'CC' || cuentas.tipo_letras === 'CA'))
            SetCuentas(cuentasP)
            }
            )
    }, [])

  return (
    <>  
        <p>Consulta de Saldo</p>
        <h1>Selecciona la Cuenta a Consultar</h1>
        <div className='botonesCuentas'>
            {cuentas.map((cuentas) => {
                return(
                    <div key={cuentas.id}>
                        <button><Link to='cuenta'>{cuentas.tipo_letras}<br />{cuentas.n}</Link></button>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default CuentasListContainer