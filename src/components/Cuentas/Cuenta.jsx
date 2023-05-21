import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './cuenta.css'


const Cuenta = () => {
  const cuenta = useSelector((state) => state[0]);
  return (
    <>
      <div className='CuentaDetalle'>
        <h1>Detalles de la cuenta</h1>
        <p>Saldo disponible:{cuenta.moneda} {cuenta.saldo}</p>
        <p>Tipo de cuenta:{cuenta.tipo_letras}</p>
        <p>Numero de cuenta:{cuenta.n}</p>
      </div>
      <button><Link to='/'>Volver atras</Link></button>
    </> 
  )
}

export default Cuenta