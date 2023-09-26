import { ApiResponseProduct, TypeProduct } from 'src/types/typeProduct';

export const createProductHelper = (response: ApiResponseProduct[]) => {
  const res = response.map((cur, index) => {
    const {
      thumbnail,
      id: ids,
      brand,
      // discountPercentage,
      // images,
      price,
      category,
      // rating,
      title,
      description,
    } = cur;
    return {
      id: ids.toString(),
      price,
      desc: description,
      name: title,
      img_url: thumbnail,
      createdAt: Date.now().toString(),
      category: {
        id: index,
        name: category,
        photo: '',
      },
      brand,
    };
  });
  return res as unknown as Array<TypeProduct>;
};
