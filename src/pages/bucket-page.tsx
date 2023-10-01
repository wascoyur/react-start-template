/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BucketItem } from 'src/components/BucketItem';
import { useStore } from 'src/store/state';
import { useNavigate } from 'react-router-dom';

export const PageBucket = () => {
  const [bucket, removeItemBucketById, getProductById, isUserAuth] = useStore((state) => [
    state.bucket,
    state.removeItemBucketById,
    state.getProductById,
    state.isUserAuth,
  ]);
  const navigate = useNavigate();
  useEffect(() => {
    !isUserAuth() && navigate('/auth');
  }, []);
  const totalCount = () =>
    bucket.reduce((acc, i) => {
      return acc + i.count;
    }, 0);
  const totalFee = () =>
    bucket.reduce((acc, item) => {
      const { price } = getProductById(item?.productId);
      return acc + item.count * price;
    }, 0);
  const ProductsInBucket = () => {
    const pInBucket = bucket;

    const list = () =>
      pInBucket.map((p) => {
        return <BucketItem itemId={p.productId} count={p.count} key={p.productId} onDelete={removeItemBucketById} />;
      });

    return <div>{list()}</div>;
  };
  return (
    <div className="bucket-list">
      {bucket?.length > 0 ? (
        <div>
          <div>
            В корзине находится {bucket ? totalCount() : 0} товаров на общую сумму {bucket ? totalFee() : 0} руб.
          </div>
          <ProductsInBucket />{' '}
        </div>
      ) : (
        <div>Корзина пуста</div>
      )}
    </div>
  );
};
