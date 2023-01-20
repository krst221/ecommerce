import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText2, saleTime, smallText, midText, slug, details, buttonText, image } }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{details}</p>
          <Link href={`/product/${slug.current}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>

        <img
          src={urlFor(image[0])}
          className='footer-banner-image'
        />
      </div>
    </div>
  )
}

export default FooterBanner