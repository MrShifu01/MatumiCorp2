import React from 'react'

const ModalCard = ({key, imageSrc}) => {
  return (
    <div key={key} class="card" style={{width: '18rem', height: "18rem"}}>
        <button className='modal-button'><img class="card-img-top" src={imageSrc} alt="logo"/></button>
    </div>
  )
}

export default ModalCard