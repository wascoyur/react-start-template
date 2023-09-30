import React from 'react';
import { BucketItem } from 'src/components/BucketItem';
import { useStore } from 'src/store/state';

export const PageBucket = () => {
  const [bucket, removeItemBucketById, getProductById] = useStore((state) => [
    state.bucket,
    state.removeItemBucketById,
    state.getProductById,
  ]);
  const totalCount = () =>
    bucket.reduce((acc, i) => {
      return acc + i.count;
    }, 0);
  const totalFee = () =>
    bucket.reduce((acc, item) => {
      const { price } = getProductById(item.productId);
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
    <>
      <div>
        В корзине находится {bucket ? totalCount() : 0} товаров на общую сумму {bucket ? totalFee() : 0} руб.
      </div>
      <div className="bucket-list">{bucket?.length > 0 ? <ProductsInBucket /> : <div>Корзина пуста</div>}</div>
    </>
  );
};
