import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import Button from "@mui/material/Button";

interface Modal2Props {
    open: boolean;
    onClose: () => void;
    onContinueButtonClick: () => void;
}
  

const Modal2: React.FC<Modal2Props> = () => {

    const [openQRModal, setOpenQRModal] = useState(false);
    const [openFinishModal, setOpenFinishModal] = useState(false);

    const handleQRFinishButtonClick = () => {
        setOpenQRModal(false);
        setOpenFinishModal(true);
    };
    const handleFinishConfirmation = () => {
        // Handle finishing the process (e.g., API call)
        setOpenFinishModal(false);
    };

    return (
        <>
            <Modal open={openQRModal} onClose={() => setOpenQRModal(false)} className="modal">
                <Box>
                    <div className="modal-description">
                        Display QR code
                        <Button onClick={handleQRFinishButtonClick}>Finish</Button>
                        {/* <Button onClick={() => setOpenChild(true)}>Cancel</Button> */}
                    </div>
                </Box>
            </Modal>

            <Modal open={openFinishModal} onClose={() => setOpenFinishModal(false)} className="modal">
                <Box>
                    <div className="modal-description">
                        Display finish confirmation
                        <Button onClick={handleFinishConfirmation}>Continue</Button>
                        <Button onClick={() => setOpenQRModal(true)}>Cancel</Button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default Modal2