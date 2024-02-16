import Category from './Category';

function ItemsList() {
  return (
    <div className="grid grid-cols-1 gap-2 px-[20px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <Category category="Beverages" />
      <Category category="Food" />
      <Category category="Cleaners" />
      <Category category="Personal Care" />
      <Category category="Other" />
    </div>
  );
}

export default ItemsList;
