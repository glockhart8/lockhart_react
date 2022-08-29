import React from "react";
import './css/photography_modal.css';
import { motion } from 'framer-motion';


const Modal = ({ selectedImg, setSelectedImg }) => {


    const exitPreview = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <motion.div className="backdrop" onClick={exitPreview} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <img src={selectedImg} alt="enlarged pic"/>
        </motion.div>
    );
}

export default Modal;