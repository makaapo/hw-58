import Modal from './components/Modal/Modal';
import { useState } from 'react';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="w-25 btn btn-primary"
        onClick={() => setShowModal(true)}
      >
        Order
      </button>
      <Modal show={showModal} title="Order" onClose={() => setShowModal(false)}>
        <div className="modal-body">content</div>
        <div className="modal-footer">
          <button
            className="btn btn-danger"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default App;
