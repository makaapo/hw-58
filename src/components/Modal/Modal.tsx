import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
}

const modalVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      damping: 25,
      ease: 'easeOut',
    },
  },
};

const Modal: React.FC<Props> = ({ show, title, children, onClose }) => {
  return (
    <>
      {show && <div className="modal-backdrop show" onClick={onClose} />}
      <AnimatePresence>
        {show && (
          <motion.div
            className="modal show"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.5, type: 'spring' }}
            onClick={onClose}
            style={{ display: 'block' }}
          >
            <div
              className="modal-dialog"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">{title}</h1>
                  <button className="btn-close" onClick={onClose}></button>
                </div>
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
