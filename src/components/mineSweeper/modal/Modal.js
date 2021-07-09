import {createPortal} from 'react-dom';
import {useState, useImperativeHandle, useCallback, useEffect, forwardRef} from "react";
import "./Modal.css"


const modalRoot = document.getElementById('modal-root');


export function Modal({ children }, ref) {
    const [isOpen, setIsOpen] = useState(true)

    const close = useCallback(() => setIsOpen(false), [])

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close
    }), [close])

    const handleEscape = useCallback(event => {
        if (event.keyCode === 27) close()
    }, [close])

    useEffect(() => {
        if (isOpen) document.addEventListener('keydown', handleEscape, false)
        return () => {
            document.removeEventListener('keydown', handleEscape, false)
        }
    }, [handleEscape, isOpen])

    return createPortal(
        isOpen ? <div className="modal"> {children} </div> : "",
        modalRoot);
}

export const ModalRef = forwardRef(Modal)
