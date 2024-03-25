import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import { useState } from "react";


interface Modal2Props {
    open: boolean;
    onClose: () => void; 
}

const Modal2: React.FC<Modal2Props> = ( {open, onClose} ) => {

    const [openChild, setOpenChild] = useState(false);

    const handleFinish = () => {
        setOpenChild(true);
    };

    const handleContinue = () =>{
        onClose();
    }

    const handleCancel = () => {
        setOpenChild(false);
    }

    return (

        <Modal 
            open={open} 
            onClose={onClose}
            className="modal">
            <div className="modal-description">
                <Box>
                    <h2>QR scanner</h2>
                    <Button onClick={handleFinish}>Finish</Button>
                    <Modal
                        open={openChild}
                        className="modal"
                    >
                        <div className="modal-description">
                            <Box>
                                <h2>Its all set </h2>
                                <Button onClick={handleContinue}>Continue</Button>
                                <Button onClick={handleCancel}>Cancel</Button>
                            </Box>
                        </div>
                    </Modal>
                </Box>
            </div>

        </Modal>

    )
}

export default Modal2