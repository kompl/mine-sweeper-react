import {createPortal} from 'react-dom';
import {useState} from "react";


const modalRoot = document.getElementById('modal-root');


export function Modal({ children }) {
    const [isOpen, setIsOpen] = useState(true)
    return createPortal(
        isOpen ? <div className="modal"> {children} </div> : "",
        modalRoot);
}
