import Item from './Item';

function ItemsList() {
  return (
    <ul className="px-[20px]">
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
  );
}

export default ItemsList;
