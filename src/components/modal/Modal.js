import {createPortal} from "react-dom";
import React, {useState, useImperativeHandle, useCallback, useEffect, forwardRef} from "react";
import "./Modal.css"
import {EventBus} from "../../utils/eventBus";


const modalRoot = document.getElementById("modal-root");


export function Modal(props, ref) {
    const [isOpen, setIsOpen] = useState(true)

    const close = useCallback(() => {
        setIsOpen(false);
        EventBus.publish("needRebuildGame", true)
    }, [setIsOpen])

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close
    }), [close])

    const handleEscape = useCallback(event => {
        if (event.keyCode === 27) close();
    }, [close])

    const escapeOnClick = useCallback(event => {
        close()

    }, [close])

    useEffect(() => {
        if (isOpen) {
            modalRoot.addEventListener("keydown", handleEscape, false);
        }
        return () => {
            modalRoot.removeEventListener("keydown", handleEscape, false);
        }
    }, [handleEscape, isOpen])


    return createPortal(
        isOpen ? <div className="modal" onClick={escapeOnClick}> {props.children} </div> : "",
        modalRoot);
}

export const ModalRef = forwardRef(Modal)
