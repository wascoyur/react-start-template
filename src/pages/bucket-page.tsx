import React from 'react';
import { BucketItem } from 'src/components/BucketItem';

export const PageBucket = () => {
  const deleteItem = (id: string) => {
    console.log(`delete ${id}`);
  };
  return (
    <div className="bucket-list">
      <BucketItem itemName="name" onChange={(id) => deleteItem(id)} />
    </div>
  );
};
