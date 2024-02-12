import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./_modal.scss";

const Modal = ({ children, open, onClose, className = "" }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog className={`modal ${className}`} ref={dialog} onClose={onClose}>
      {children}
      <div onClick={onClose} className="modal-close">
        &times;
      </div>
    </dialog>,
    document.getElementById("modal"),
  );
};

export default Modal;
