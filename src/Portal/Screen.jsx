import React,{useState} from 'react';
import Modal from './Modal';

const Screen = () => {
    const[showModal, setShowModal] = useState(false);

    const handleModal = () =>{
        setShowModal(!showModal)
    }
    const closeModal = () =>{
        setShowModal(!showModal)
    }

    return (
        <div id="screen">
        <button onClick={handleModal}>Open Modal</button>
        {showModal && 
        <Modal>
            <h1>I'm Modal</h1>
            <button onClick={closeModal}>Close Modal</button>
        </Modal>
        }
        </div>
    )
}

export default Screen;