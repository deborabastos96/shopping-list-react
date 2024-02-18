import { useShoppingList } from '../context/ShoppingListContexts';
import Item from './Item';

function Category({ category }) {
  const { items, categories, quantities } = useShoppingList();

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
            return (
              <Item
                key={i}
                description={
                  items[i].charAt(0).toUpperCase() +
                  items[i].slice(1).toLowerCase()
                }
                quantities={quantities[i]}
                index={i}
              />
            );
        })}
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
