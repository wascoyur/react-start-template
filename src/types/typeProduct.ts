import React from 'react';
import { Category } from 'src/homeworks/ts1/3_write';

export type TypeProduct = {
  id: number;
  name?: React.ReactNode | string;
  brand: string;
  category?: Category;
  desc?: React.ReactNode | string;
  img_url: string;
  price?: number;
};
