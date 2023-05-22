import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './cuenta.css'


const Cuenta = () => {
  
  const { numeroCuenta } = useParams();
  const cuentas = useSelector((state) => state);
  const cuenta = cuentas.find((cuenta) => cuenta.n === numeroCuenta);
  
  if (!cuenta) {
    return <p>Cuenta no encontrada</p>;
  }



  return (
    <>
      <div className='CuentaDetalle'>
        <h1>Detalles de la cuenta</h1>
        <p>Saldo disponible:  {cuenta.moneda} {cuenta.saldo}</p>
        <p>Tipo de cuenta: {cuenta.tipo_letras}</p>
        <p>Numero de cuenta: {cuenta.n}</p>
      </div>
      <Link to='/'><button className='botonCuenta'>Volver atras</button></Link>
    </> 
  )
}

export default Cuenta