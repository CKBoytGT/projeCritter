import { HiX } from "react-icons/hi";

const Modal = ({ title = "Dialog", open, onClose, children }) => {
  return (
    // shadow over page
    <div
      onClick={onClose}
      className={`fixed inset-0 z-20 flex items-center justify-center bg-black/30 text-black transition-colors motion-reduce:transition-none ${
        open ? "visible" : "invisible"
      }`}
      role="dialog"
      aria-labelledby={`dialog_label_${title}`}
      aria-modal="true"
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()} // prevents clicking within modal from closing it
        className={`w-full max-w-xs rounded-xl border-4 border-black bg-white shadow transition-all motion-reduce:transition-none ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div
          className={`flex ${
            title === "Dialog" ? "justify-end" : "justify-between"
          } bg-indigo-650 w-full items-center rounded-t-md border-b-4 border-black text-right text-white`}
        >
          <h2
            id={`dialog_label_${title}`}
            className={`pl-2 text-center text-xl font-bold ${
              title === "Dialog" ? "sr-only" : ""
            }`}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center rounded"
            type="button"
            aria-label="close"
          >
            <span className="sr-only">Close</span>
            <HiX className="h-[28pt] w-[28pt]" />
          </button>
        </div>
        <div className="p-4 lg:p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
