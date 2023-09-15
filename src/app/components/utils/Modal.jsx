import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";


const Modal = ({ children, isOpen, closeModal, fullWidth = false }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0  backdrop:blur-xl  bg-black/75  bg-opacity-0"
            style={{ opacity: 0.4 }}
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto scrollbar-hide ">
          <div className={`flex min-h-full items-center justify-center  ${fullWidth ? "" : "p-2"} text-center ${fullWidth ? "bg-transparent" : ""}`}>
            <Transition.Child
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              className={`${fullWidth ? "w-full h-full": ""}`}
            >
              <Dialog.Panel className={`w-full h-full  transform  overflow-hidden rounded-2xl bg-transparent ${fullWidth ? "" : "p-6"} text-left align-middle shadow-xl transition-all`}>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};


export default Modal;