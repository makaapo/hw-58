import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="container-fluid">
      <button
        className="btn btn-primary my-3 px-5 py-2"
        onClick={() => setShowModal(true)}
      >
        Order
      </button>
      {showAlert && (
        <Alert
          clickDismissable
          type="warning"
          onDismiss={() => setShowAlert(false)}
        >
          This is a warning type alert
        </Alert>
      )}

      <Alert type="success">This is a success type alert</Alert>

      <Alert type="danger">This is a danger type alert</Alert>

      <Alert type="primary">This is a primary type alert</Alert>

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
    </div>
  );
};

export default App;
