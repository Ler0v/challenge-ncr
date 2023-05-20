import React from 'react'
import { Link } from 'react-router-dom'

  
const Cuenta = (cuentas) => {
  console.log(cuentas)
  return (
    <>
      <div className='CuentaDetalle'>
        <h1>Detalles de la cuenta</h1>
        <p>Saldo disponible:{cuentas.moneda} {cuentas.saldo}</p>
        <p>Tipo de cuenta:{cuentas.tipo_letras}</p>
        <p>Numero de cuenta:{cuentas.n}</p>
      </div>
      <button><Link to='/'>Volver atras</Link></button>
    </> 
  )
}

export default Cuenta