import React from 'react'
import Modal from './utils/Modal'
import Image from 'next/image'


const ImagePopupModal = ({show,closeModal}) => {
  return (
    <Modal isOpen={show} closeModal={closeModal} fullWidth={false}>
     
<div className='sm:h-[30rem] sm:w-[30rem] h-80 w-64 relative'>

    <Image src="/child.jpg" fill alt="child" />
</div>
    </Modal>
  )
}

export default ImagePopupModal