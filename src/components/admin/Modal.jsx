import reactDom from "react-dom";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";

export default function Modal({ isOpen, onClose, data, children, type }) {
  if (!isOpen) return null;
  return reactDom.createPortal(
    <>
      <div className="overlay-style" onClick={onClose} />

      <div className="modal-style">
        <div className="modal-header">
          <h5>{children}</h5>
          <button className="btn-close" onClick={onClose}>
          </button>
        </div>
        {type === "create" && <CreateForm onClose={onClose} />}
        {type === "edit" && <EditForm onClose={onClose} data={data} />}
      </div>
    </>,
    document.getElementById("modal")
  );
}
