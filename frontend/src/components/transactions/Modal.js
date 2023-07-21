import React from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Modal = ({ closeModal, activeModalId, modalsData }) => {
  const activeModal = modalsData.find((modal) => modal.id === activeModalId);

  if (!activeModal) return null;

  return (
    <Transition appear show onClose={closeModal} as={React.Fragment}>
      <Dialog as="div" className="border vh-100 vw-100">
        {/* Modal content */}
        <div className="fixed inset-0 flex items-center justify-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="container border inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="row border mb-3">
                <div className="col w-25 d-flex justify-content-end">
                  <button onClick={closeModal} className="modal-button">
                    <img width="25px" src="close.png" alt="close" />
                  </button>
                </div>
              </div>
              <div className='row'>
                <div className="border modal-main col-md-8">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className='d-flex flex-column gap-5'>
                      {<img width={'100px'} src={activeModal.imageSrc} alt="logo"/>}
                      
                      <p className='modal-description'>{activeModal.description}</p>
                    </div>
                  </Dialog.Title>
                  {/* Add other modal content here */}
                </div>
                <div className='col-md-4 border-start'>
                  <h6 className='text-muted mt-5'>Mandate</h6>
                  {activeModal.mandate}
                  <br/>
                  <h6 className='text-muted mt-5'>Geography</h6>
                  {activeModal.geography}
                  <br/>
                  <h6 className='text-muted mt-5'>Industry</h6>
                  {activeModal.industry}
                  <br/>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
