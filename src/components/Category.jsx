import { useShoppingList } from '../context/ShoppingListContexts';
import Item from './Item';

function Category({ category, sortedItems }) {
  const { categories } = useShoppingList();

  let categoriesBoolArr = [];

  categoriesBoolArr = categories.map((cat) => {
    if (cat == category) return true;
    return false;
  });

  return (
    <div className="mb-[2rem]">
      <h2 className="mb-3 text-center font-bold uppercase tracking-wider">
        {category.split(/(?=[A-Z])/).join(' ')}
      </h2>
      <ul className="flex flex-col gap-4">
        {categoriesBoolArr.map((item, i) => {
          if (item == true)
            return <Item key={i} sortedItems={sortedItems} index={i} />;
        })}
      </ul>
    </div>
  );
}

export default Category;
