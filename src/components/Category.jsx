import Item from './Item';

function Category({ category }) {
  return (
    <div className="mb-[2rem]">
      <h2 className="mb-3 text-center font-bold uppercase tracking-wider">
        {category}
      </h2>
      <ul className="flex flex-col gap-4">
        <Item />
        <Item />
        <Item />
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
