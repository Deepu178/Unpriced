import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { URL } from '../../utils/config';
import useHttp from '../../hooks/use-https';
import NotFound from '../NotFound';
import Error from '../../components/Error';
import Spinner from '../../components/Spinner';
import './index.scss';
import Button from '../../components/Button';

/* const ProductProperty = ({ heading, value }) => {
  return (
    <li className="product-info__item">
      <h3 className="product-info__heading">{heading}:</h3>
      <span className="product-info__value">{value}</span>
    </li>
  );
}; */

const Product = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const productURL = searchParams.get('productURL');
  const [productData, setProductData] = useState(null);

  const { isLoading, error, sendRequest: load } = useHttp();

  useEffect(() => {
    load(`${URL}${productURL}`, (data) => {
      setProductData(data);
    });
  }, [load, setProductData, productURL]);

  console.log(productData);

  return (
    <div className="product__container">
      {error &&
        (error.code === 500 ? (
          <Error type="timeout" message={error.message} className="error__img error__img--default" />
        ) : error.message.slice(-3) === '400' ? (
          <NotFound name="Product" />
        ) : (
          <Error type="404" message={error.message} className="error__img error__img--default" />
        ))}

      {isLoading && !error && <Spinner />}

      {productData && !isLoading && !error && (
        <>
          <main className="product">
            <h1 className="product__name h-l">{productData.product.title}</h1>

            <div className="product__main">
              <img src={productData.product.main_image.link} alt={productData.product.title} className="product__img" />

              <ul className="product-info">
                <li className="product-info__item">
                  <h3 className="product-info__heading">M.R.P:</h3>
                  <span className="product-info__value">{productData.product.buybox_winner.rrp.raw}</span>
                </li>
                <li className="product-info__item">
                  <h3 className="product-info__heading">Current Price:</h3>
                  <span className="product-info__value">{productData.product.buybox_winner.price.raw}</span>
                </li>
                <li className="product-info__item">
                  <h3 className="product-info__heading">Category:</h3>
                  <span className="product-info__value">{productData.product.search_alias.title}</span>
                </li>
                <li className="product-info__item">
                  <h3 className="product-info__heading">Rating:</h3>
                  <span className="product-info__value">{productData.product.rating} ⭐️</span>
                </li>
                <div className="btn-grp">
                  <Button size="large">Buy on Amazon</Button>
                  <Button size="large" variant="secondary">
                    Set Price Alert
                  </Button>
                </div>
              </ul>
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default Product;
