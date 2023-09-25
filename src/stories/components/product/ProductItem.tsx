import classNames from 'classnames';
import React from 'react';
import './product-list.scss';
import { useStore } from 'src/store/state';
import { Link } from 'react-router-dom';
import { TypeProduct } from 'src/types/typeProduct';

type typeProductItem = { item: TypeProduct; itemClssNames?: string };
export const ProductItem = (props: typeProductItem) => {
  const {
    item: { name, price, category, id },
  } = props;
  const itemClssNames = props.itemClssNames ?? 'product-item';
  const tokenAdmin = useStore((state) => state.tokenAdmin);

  const IconEdit = () => (
    <Link to={'edit-products'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path d="m19.5,0H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,19.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v15ZM14.732,5.732L6.025,14.439c-.661.66-1.025,1.539-1.025,2.475v1.586c0,.276.224.5.5.5h1.586c.921,0,1.823-.374,2.475-1.025l8.707-8.707c.975-.975.975-2.561,0-3.535-.943-.945-2.592-.945-3.535,0Zm-5.879,11.535c-.465.466-1.11.732-1.768.732h-1.086v-1.086c0-.668.26-1.296.732-1.768l6.604-6.604,2.121,2.121-6.604,6.604Zm8.707-8.707l-1.396,1.396-2.121-2.121,1.396-1.396c.566-.566,1.555-.566,2.121,0,.585.585.585,1.536,0,2.121Z" />
      </svg>
    </Link>
  );
  const IconView = () => (
    <Link to={`product-card/${String(id)}`} state={props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 509.348 509.348"
        xmlSpace="preserve"
        width="20"
        height="20"
      >
        <g>
          <path d="M488.935,188.541C437.397,109.024,349.407,60.662,254.652,59.773C159.898,60.662,71.908,109.024,20.37,188.541   c-27.16,39.859-27.16,92.279,0,132.139c51.509,79.566,139.504,127.978,234.283,128.896   c94.754-0.889,182.744-49.251,234.283-128.768C516.153,280.919,516.153,228.429,488.935,188.541z M436.199,284.541   c-39.348,62.411-107.769,100.488-181.547,101.035c-73.777-0.546-142.198-38.624-181.547-101.035   c-12.267-18.022-12.267-41.712,0-59.733c39.348-62.411,107.769-100.488,181.547-101.035   c73.777,0.546,142.198,38.624,181.547,101.035C448.466,242.829,448.466,266.519,436.199,284.541z" />
          <circle cx="254.652" cy="254.674" r="85.333" />
        </g>
      </svg>
    </Link>
  );
  const IconAction = () => {
    const icon = tokenAdmin ? <IconEdit /> : <IconView />;
    return <div>{icon}</div>;
  };

  return (
    <div className={classNames(itemClssNames)}>
      <Link to={'product-card'} state={props} style={{ textDecoration: 'none' }}>
        <div className="item-content">
          <h4>{name}</h4>
          <div>{`категория: ${category.name}`}</div>
          <p>Price: {price}</p>
        </div>
      </Link>

      <div className="icon-action">
        <IconAction />
      </div>
    </div>
  );
};
