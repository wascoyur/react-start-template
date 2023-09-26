import { useStore } from 'src/store/state';
import Loader from 'src/stories/components/share/Loader';
import { ProductCard } from 'src/stories/components/cards-product/ProductCard';

export const ProductCardList = () => {
  const products = useStore((state) => state.products);
  const ShortList = (): React.ReactNode => (
    <div>
      {products ? (
        products.map((p) => (
          <div key={p.id} className="default-style">
            <ProductCard />
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
  return (
    <div>
      <h3>Список товаров</h3>
      <div>
        <ShortList />
      </div>
    </div>
  );
};
