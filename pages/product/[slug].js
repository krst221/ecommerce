import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';
import { client, urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, rating, votes } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, resetQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }

  useEffect(() => {
    setIndex(0);
    resetQty();
  }, [product])
  
  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img
              src={urlFor(image && image[index])}
              className='product-detail-image'
            />
          </div>
          <div className='small-images-container'>
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className='product-detail-desc'>
          <h1>{name}</h1>
          <div className='reviews'>
            <div>
              {rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}
              {rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}
              {rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}
              {rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}
              {rating >= 4.5 ? <AiFillStar /> : <AiOutlineStar />}
            </div>
            <p>
              ({votes})
            </p>
          </div>
          <h4>Detalles: </h4>
          <p>{details}</p>
          <p className='price'>{price}€</p>
          <div className='quantity'>
            <h3>Cantidad:</h3>
            <p className='quantity-desc'>
              <span 
                className='minus' 
                onClick={decQty}
              ><AiOutlineMinus />
              </span>
              <span
                className='num' 
              >{qty}
              </span>
              <span 
                className='plus' 
                onClick={incQty}
              ><AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className='buttons'>  
            <button 
              type='button'
              className='add-to-cart'
              onClick={() => onAdd(product, qty)}
            >Añade al carrito
            </button>
            <button 
              type='button'
              className='buy-now'
              onClick={handleBuyNow}
            >Compra ahora
            </button>
          </div>
        </div> 
      </div>
      <div className='maylike-products-wrapper'>
        <h2>Productos que pueden gustarte:</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type in ["product", "banner"]] {
    slug { current }
  }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type in ["product", "banner"] && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products }
  }
}

export default ProductDetails