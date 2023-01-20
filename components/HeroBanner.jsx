import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  const {smallText, midText, largeText1, image, slug, buttonText, details} = heroBanner;
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img 
          src={urlFor(image[0])} 
          alt='auriculares' 
          className='hero-banner-image' 
        /> 

        <div>
          <Link href={`/product/${slug.current}`}>
            <button type='button'>{buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>DESCRIPCIÓN</h5>
            <p>{details}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner