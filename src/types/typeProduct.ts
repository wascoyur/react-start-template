import React from 'react';

export type TypeProduct = {
  id?: number;
  title?: React.ReactNode | string;
  category?: string;
  description?: React.ReactNode | string;
  img_url?: string;
  price?: number;
};
