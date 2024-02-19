import Button from './Button';

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div>
      <h3>Delete {resourceName}</h3>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button onClick={onConfirm}>Delete</Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
