import { useStore } from 'src/store/state';
import Loader from 'src/stories/components/share/Loader';
import { ProductCard } from 'src/stories/components/cards-product/ProductCard';

export const ProductCardList = () => {
  const products = useStore((state) => state.products);
  const idsList = products && products.map((p) => p.id);
  const ShortList = (): React.ReactNode => (
    <div className="card-list">
      {idsList ? (
        idsList.map((p) => (
          <div key={p}>
            <ProductCard id={p} />
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
  return (
    <div className="product-card-list">
      <h3>Список товаров</h3>
      <ShortList />
    </div>
  );
};
