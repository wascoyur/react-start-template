import React from 'react';
import { DeleteIcon } from 'src/icons/DeleteIcon';
import '../stories/components/scss/bucket-item.scss';

type bucketItem = {
  itemName: string;
  onChange?: (itemId: string) => void;
};
export const BucketItem = (props: bucketItem) => {
  return (
    <div className="bucket-item">
      <div>{props.itemName}</div>
      <div className="icon" onClick={() => props.onChange(props.itemName)}>
        <DeleteIcon />
      </div>
    </div>
  );
};
