import AddItem from '../components/AddItem';
import ItemsList from '../components/ItemsList';
import Info from '../components/Info';

function List() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] gap-3 rounded-md bg-purple-50 text-black shadow-xl">
      <AddItem />
      <ItemsList />
      <Info />
    </div>
  );
}

export default List;
