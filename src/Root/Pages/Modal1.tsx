import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import { useState } from "react";
import Modal2 from "./Modal2";
import Typography from "@mui/material/Typography";


interface Modal1Props {
    open: boolean;
    onClose: () => void;
}

const Modal1: React.FC<Modal1Props> = ({ open, onClose }) => {

    const [modal2, setModal2] = useState(false);
    const [openChild, setOpenChild] = useState(false);

    const handleEdit = () => {
        onClose();
    }

    const handleProceed = () => {
        setOpenChild(true);
    };

    const handleContinue = () => {
        setModal2(true);
    }

    const handleCancel = () => {
        setOpenChild(false);
    }

    return (

        <>
            <Modal
                open={open}
                onClose={onClose}
                className="modal">
                <div className="modal-description">
                    <Box>
                        <h2>Details Preview</h2>
                        <Typography>Event Name: </Typography>
                        <Button onClick={handleProceed}>Proceed</Button>
                        <Button onClick={handleEdit}>Edit</Button>
                        <Modal
                            open={openChild}
                            className="modal"
                        >
                            <div className="modal-description">
                                <Box>
                                    <h2>Enter 4 digit pin</h2>
                                    <Button onClick={handleContinue}>Continue</Button>
                                    <Button onClick={handleCancel}>Cancel</Button>
                                </Box>
                            </div>
                        </Modal>
                    </Box>
                </div>
            </Modal>

            {
                modal2 && (
                    <Modal2
                        open={modal2}
                        onClose={onClose} />
                )
            }
        </>

    )
}

export default Modal1