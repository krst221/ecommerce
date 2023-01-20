import React, { useState, useEffect } from 'react';
import { BsBagCheckFill } from 'react-icons/bs';
import Link from 'next/link';
import { realisticLook } from '../lib/utils';
import { useStateContext } from '../context/StateContext';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    realisticLook();
  }, []);
  

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Gracias por tu compra!</h2>
        <p className='email-msg'>Comprueba tu correo para ver la factura de compra.</p>
        <p className='description'>Si tienes alguna pregunta, mándanos un mail a 
          <a className='email' href='mailto:krst221@gmail.com'>krst221@gmail.com</a>
        </p>
        <Link href='/'>
          <button
            type='button'
            width='300px'
            className='btn'
          >Continúa comprando
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success