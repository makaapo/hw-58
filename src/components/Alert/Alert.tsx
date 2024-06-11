import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props extends React.PropsWithChildren {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({ type, onDismiss, children }) => {
  return (
    <AnimatePresence>
      <motion.div
        className={`alert alert-${type} d-flex justify-content-between`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        {children}
        {onDismiss && (
          <button className="btn-close" onClick={onDismiss}></button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
