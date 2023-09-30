import { DeleteIcon } from 'src/icons/DeleteIcon';
import '../stories/components/scss/bucket-item.scss';
import { useStore } from 'src/store/state';
import Loader from 'src/stories/components/share/Loader';

type bucketItem = {
  itemId: number;
  count: number;
  onDelete?: (itemId: number) => void;
};
export const BucketItem = (props: bucketItem) => {
  const item = useStore((state) => state.getProductById(props.itemId));

  return (
    <div className="bucket-item">
      {item ? (
        <>
          <div>
            <div>Наименование товара: {item.name}</div>
            <div>Цена: {item.price}</div>
            <div>Кол: {props.count} шт.</div>
            <div>Итого: {item.price * props.count} руб.</div>
          </div>
          <div className="icon" onClick={() => props.onDelete(props.itemId)}>
            <DeleteIcon />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
