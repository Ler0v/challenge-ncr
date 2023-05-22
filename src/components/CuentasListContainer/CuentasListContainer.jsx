import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './cuentaslistcontainer.css'
import { useDispatch, useSelector } from 'react-redux';
import { setCuentas } from '../../redux/actions';

const CuentasListContainer = () => {

    const API_URL = 'https://api.npoint.io/97d89162575a9d816661'
    const dispatch = useDispatch();
    const cuentas = useSelector((state) => state);

    const accountsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);



    useEffect(()=>{
        fetch(API_URL)
        .then(res => res.json())
        .then((data) => {
            const { cuentas } = data;
            const cuentasP = cuentas.filter((cuenta => cuenta.moneda === '$' || cuenta.moneda === 'u$s') || (cuenta => cuenta.tipo_letras === 'CA' || cuenta.tipo_letras === 'CC' || cuenta.tipo_letras === 'Cc'))	
            dispatch(setCuentas(cuentasP));
        }
            )
            
    }, [dispatch])

    const indexOfLastAccount = currentPage * accountsPerPage;
    const indexOfFirstAccount = indexOfLastAccount - accountsPerPage;
    const currentAccounts = cuentas.slice(indexOfFirstAccount, indexOfLastAccount);


    

    const obtenerNombreTipoCuenta = tipo => {
        if (tipo === 'CC') {
          return 'Cuenta Corriente';
        } else if (tipo === 'CA') {
          return 'Caja de Ahorros';
        }
        else if (tipo === 'Cc') {
            return 'Cuenta Corriente';
          }
        return '';
      };

      const nextPage = () => {
        setCurrentPage(currentPage + 1);
      };

      const prevPage = () => {
        setCurrentPage(currentPage - 1);
      };


  return (
    <>  
        <p>Consulta de Saldo</p>
        <h1>Selecciona la Cuenta a Consultar</h1>
        <div className='botonesCuentas'>
            {currentAccounts.map((cuentas, index) => {
                return(
                    <div key={index}>
                        <Link to={'cuenta/' + cuentas.n}><button>{obtenerNombreTipoCuenta(cuentas.tipo_letras)}<br />{cuentas.n}</button></Link>
                    </div>
                )
            })}
        </div>
        {cuentas.length > indexOfLastAccount && (
        <button className='botonNext' onClick={nextPage}>{"Mas Opciones >>"}</button>
      )}
      {currentPage > 1 && (
          <button className='botonPrev' onClick={prevPage}>{"<< Opciones Anteriores"}</button>
        )}
    </>
  )
}

export default CuentasListContainer