import React,{useState} from 'react';
import MyModal from './MyModal';


const Modal1 = () =>{
    const[modal,isModal] = useState(false);
   
    const handleModalOpen = () =>{
        isModal(true)
    }
    const CloseModal = () =>{
        isModal(false)
    }

    return(
        <div id="modal-1">
                <button onClick={handleModalOpen}>Open Modal</button>
                {
                    modal &&
                    <MyModal>
                        <h1>Hello Example 1</h1>
                        <button onClick={CloseModal}>Close</button>
                    </MyModal>
                }
            
        </div>
    
    )
}

export default Modal1;
