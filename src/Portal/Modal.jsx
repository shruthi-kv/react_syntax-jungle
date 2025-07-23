import React from 'react';
import ReactDom from 'react-dom';


const Modal = ({ children }) => {
  return ReactDom.createPortal(
    <div>
      {children}
    </div>
    , document.getElementById('root')
  )
}


export default Modal;





