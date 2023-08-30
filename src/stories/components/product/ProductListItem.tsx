import { ReactNode } from 'react';

export const ProductListItem = (children: ReactNode) => {
  return (
    <div className="product-list-item">
      <div className="content"></div>
      {children}
    </div>
  );
};
