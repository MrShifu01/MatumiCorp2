

export default function Modal() {
  let [isOpen, setIsOpen] = useState(true);
  let [activeModalIndex, setActiveModalIndex] = useState(0);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handlePrevModal() {
    setActiveModalIndex((prevIndex) => (prevIndex === 0 ? modalsData.length - 1 : prevIndex - 1));
  }

  function handleNextModal() {
    setActiveModalIndex((prevIndex) => (prevIndex === modalsData.length - 1 ? 0 : prevIndex + 1));
  }

  const activeModal = modalsData[activeModalIndex];

  return (
    <>
      {/* ... */}
      {/* Your "Open dialog" button code remains unchanged */}
      {/* ... */}

      <Transition appear show={isOpen} as={Fragment}>
        {/* ... */}
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="w-full h-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <div className="row mb-3">
              <div className="col w-25 d-flex justify-content-end">
                <button onClick={closeModal} className="modal-button">
                  <img width="25px" src="close.png" alt="close" />
                </button>
              </div>
            </div>
            <div className="row">
              <div className="modal-main col-md-8">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  <img
                    className="p-1"
                    width="20%"
                    src={activeModal.imageSrc}
                    alt={activeModal.title}
                  />
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {activeModal.description}
                  </p>
                </div>
              </div>
              <div className="modal-sidebar border-start col-md-4 ps-5">
                {/* Display additional modal-specific data here */}
                <dl className="mt-5">
                  <dt>Platforms</dt>
                  <dd>{activeModal.platforms}</dd>
                  {/* Add other modal-specific data... */}
                </dl>
              </div>
            </div>
            <div className="d-flex gap-5 justify-content-center mt-6">
              <button type="button" className="modal-button" onClick={handlePrevModal}>
                <img src="left-arrow.png" width="30px" alt="left arrow" />
              </button>
              <button type="button" className="modal-button" onClick={handleNextModal}>
                <img src="arrow-right.png" width="30px" alt="right arrow" />
              </button>
            </div>
          </Dialog.Panel>
        </div>
        {/* ... */}
      </Transition>
    </>
  );
}
