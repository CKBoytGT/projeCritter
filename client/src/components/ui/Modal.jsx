import { HiX } from "react-icons/hi";

const Modal = ({ title = "Dialog", open, onClose, children }) => {
  return (
    // shadow over page
    <div
      onClick={onClose}
      className={`flex justify-center items-center fixed inset-0 z-20 transition-colors motion-reduce:transition-none text-black bg-black/30 ${
        open ? "visible" : "invisible"
      }`}
      role="dialog"
      aria-labelledby={`dialog_label_${title}`}
      aria-modal="true"
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()} // prevents clicking within modal from closing it
        className={`w-full max-w-xs border-4 border-black rounded-xl transition-all motion-reduce:transition-none shadow bg-white ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div
          className={`flex ${
            title === "Dialog" ? "justify-end" : "justify-between"
          } items-center w-full rounded-t-md border-b-4 border-black bg-indigo-650 text-white text-right`}
        >
          <h2
            id={`dialog_label_${title}`}
            className={`pl-2 text-xl font-bold text-center ${
              title === "Dialog" ? "sr-only" : ""
            }`}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="flex justify-center items-center rounded"
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
