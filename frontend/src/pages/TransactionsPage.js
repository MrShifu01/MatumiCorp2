<<<<<<< HEAD
import { Link } from 'react-router-dom';
import ModalCard from '../components/transactions/ModalCard';
import Modal from '../components/transactions/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../redux/transactionsSlice';
=======
import React from 'react'
import Modal from '../components/transactions/modal'
>>>>>>> e45281b6fdd2c28a29946e84988ee4e99e2ecb9f

const TransactionsPage = () => {
  const dispatch = useDispatch();
  const {isModalOpen} = useSelector((state) => state.transactions);
  const {activeModalId} = useSelector((state) => state.transactions);
    
  // Sample data for multiple modals
const modalsData = [
  {
    id: 1,
    imageSrc: 'https://cms.tpg.com/wp-content/uploads/2023/03/4th-Industrial.png',
    title: 'Modal 1 Title',
    description: 'Description for Modal 1',
    mandate: "Sell-Side",
    geography: 'Asia',
    industry: 'Finance'
  },
  {
    id: 2,
    imageSrc: 'https://cms.tpg.com/wp-content/uploads/2023/03/8990-Holdings.png',
    title: 'Modal 2 Title',
    description: 'Description for Modal 2',
    mandate: "Sell-Side",
    geography: 'Asia',
    industry: 'Finance'
  },
  {
    id: 3,
    imageSrc: 'https://cms.tpg.com/wp-content/uploads/2023/03/A_O-Hostels.png',
    title: 'Modal 3 Title',
    description: 'Description for Modal 3',
    mandate: "Sell-Side",
    geography: 'Asia',
    industry: 'Finance'
  },
  {
    id: 4,
    imageSrc: 'https://cms.tpg.com/wp-content/uploads/2023/03/API-Group.png',
    title: 'Modal 4 Title',
    description: 'Description for Modal 4',
    mandate: "Sell-Side",
    geography: 'Asia',
    industry: 'Finance'
  },
  // Add more modals as needed...
];

<<<<<<< HEAD
  
  const handleOpenModal = (index) => {
    dispatch(openModal(index));
  };
  
  const handleCloseModal = () => {
    dispatch(closeModal());
  };


  return (

    <>
    {!isModalOpen && 
      <section className='transactions'>
        <div className="container-xxl">
          <div className='row mt-8'>
            <div className='col'>
              <Link to='/' className='btn text-secondary'>Go Back</Link>
                <h2 className='text-center'>Transactions</h2>
                <div className='row mt-8'>
                    {modalsData.map((modal) => (
                      <div className="col-md-3 modal-buttons">
                        <button
                          key={modal.id}
                          type="button"
                          onClick={() => handleOpenModal(modal.id)}
                        >
                          <ModalCard key={modal.id} imageSrc={modal.imageSrc}/>
                        </button>
                      </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>}
      {isModalOpen && (
        <Modal
          closeModal={handleCloseModal}
          activeModalId={activeModalId}
          modalsData={modalsData} // Pass the modalsData to the Modal component
        />
      )}
    </>
  );
};

export default TransactionsPage;
