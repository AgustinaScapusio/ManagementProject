import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button.jsx';

const Modal = forwardRef(function Modal({ children,buttonCaption }, ref) {
  const modalRef = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      modalRef.current.showModal();
      return;
    }
  }));

  return createPortal(
    <dialog ref={modalRef} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'>
      {children}
      <form method="dialog" className='mt-4 text-right'>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
