import { Link } from 'react-router-dom';
import Modal from '../components/transactions/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeCurrentModal } from '../redux/transactionsSlice';
import React from 'react';
import Navigation from '../components/Navigation';
import { useGetTransactionsQuery } from '../redux/transactionsAPISlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const TransactionsPage = () => {
  const dispatch = useDispatch();
  const {isModalOpen} = useSelector((state) => state.transactions);
  const {activeModalId} = useSelector((state) => state.transactions);

  const {data: modalsData, isLoading, error } = useGetTransactionsQuery()
  console.log(modalsData)

  // const isLoading = false;
  // const error = false;
    
// const modalsData = [
//   {
//     id: 1,
//     imageSrc: 'https://cms.tpg.com/wp-content/uploads/2023/03/4th-Industrial.png',
//     title: 'Allen Gray',
//     description: 'Allen Gray is a South African investment management firm founded in 1973 by its namesake, Allan W.B. Gray. The company is headquartered in Cape Town, South Africa, and has grown to become one of the largest and most respected asset management companies in the country.',
//     mandate: "Sell-Side",
//     geography: 'Asia',
//     industry: 'Finance'
//   },
//   {
//     id: 2,
//     imageSrc: 'https://cms.tpg.com/wp-content/uploads/2023/03/8990-Holdings.png',
//     title: 'Modal 2 Title',
//     description: 'Description for Modal 2',
//     mandate: "Sell-Side",
//     geography: 'Asia',
//     industry: 'Finance'
//   },
//   {
//     id: 3,
//     imageSrc: 'https://cms.tpg.com/wp-content/uploads/2023/03/A_O-Hostels.png',
//     title: 'Modal 3 Title',
//     description: 'Description for Modal 3',
//     mandate: "Sell-Side",
//     geography: 'Asia',
//     industry: 'Finance'
//   },
//   {
//     id: 4,
//     imageSrc: 'https://cms.tpg.com/wp-content/uploads/2023/03/API-Group.png',
//     title: 'Modal 4 Title',
//     description: 'Description for Modal 4',
//     mandate: "Sell-Side",
//     geography: 'Asia',
//     industry: 'Finance'
//   },
// ];

  
  const handleOpenModal = (id) => {
    dispatch(openModal(id));
  };
  
  const handleCloseModal = () => {
    dispatch(closeCurrentModal());
  };

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : error ? (
        <Message variant="danger">{error?.modalsData?.message || error.error}</Message>
      ) : (<>
      {!isModalOpen && <Navigation bg={'bg-light'}/>}
      {!isModalOpen && 
        <section className='transactions bg-light h-100'>
          <div className="container-xxl">
            <div className='row pt-8'>
              <div className='col'>
                <Link to='/' className='btn text-secondary mt-5'>Go Back</Link>
                  <h2 className='text-center'>Transactions</h2>
                  <div className='row mt-8'>
                      {modalsData?.map((modal, index) => (
                        <div className="col-md-3 text-center modal-buttons">
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleOpenModal(modal._id)}
                            className='modal-button square-button p-7 shadow bg-white rounded-1 mb-6'
                          >
                            <img className="square-image" src={modal.imageSrc} alt="logo" />
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
      )}
    </>
  );
};

export default TransactionsPage;
