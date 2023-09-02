import React from 'react';
import Delete from 'src/stories/assets/products/cart-arrow-down_9798256.svg';

type bucketItem = {
  itemName: string;
  onChange?: (itemId: number) => NonNullable<unknown>;
};
export const BucketItem = (props: bucketItem) => {
  return (
    <div className="product-bucket-item">
      <div className="delete-icon">
        <Delete onClick={props.onChange} />
      </div>
      <div>item</div>
    </div>
  );
};
