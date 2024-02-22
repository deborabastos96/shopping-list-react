import Button from './Button';

function ConfirmDelete({ resourceName, onConfirm, onCloseModal }) {
  return (
    <div className="flex w-[40rem] flex-col gap-[1.2rem]">
      <h3 className="text-lg font-bold uppercase tracking-wider text-gray-500">
        Delete {resourceName}
      </h3>
      <p className="mb-[1.2rem] text-gray-500">
        Are you sure you want to delete {resourceName} permanently? This action
        cannot be undone.
      </p>

      <div className="flex justify-end gap-[1.2rem]">
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button type="confirm" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
