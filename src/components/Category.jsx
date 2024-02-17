import { useShoppingList } from '../context/ShoppingListContexts';
import Item from './Item';

function Category({ category }) {
  const { items, categories, quantity, bought } = useShoppingList();

  const categoryValue =
    category.toLowerCase().split(' ')[0] + category.split(' ').slice(1);

  // const categoriesBoolArr = categories.map((category) => {
  //   if (category == categoryValue) return true;
  //   return false;
  // });

  return (
    <div className="mb-[2rem]">
      <h2 className="mb-3 text-center font-bold uppercase tracking-wider">
        {category}
      </h2>
      <ul className="flex flex-col gap-4">
        {/* {categoriesBoolArr.map((item, i) => {
          if (item == true)
            return (
              <Item
                key={i}
                description={items[i]}
                quantity={quantity[i]}
                index={i}
              />
            );
        })} */}
        {/* {sortedItems.map((item) => (
        <Item
          item={item}
          onDeleteItem={onDeleteItem}
          onToggleItems={onToggleItems}
          key={item.id}
        />
      ))} */}
      </ul>
    </div>
  );
}

export default Category;
