import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface Modal1Props {
    open: boolean;
    onClose: () => void;
    onEditButtonClick: () => void;
    onProceedButtonClick: () => void;
}

const Modal1: React.FC<Modal1Props> = () => {

    const [openParent, setOpenParent] = useState(false);
    const [openChild, setOpenChild] = useState(false);
    

    const handleEditButtonClick = () => {
           setOpenParent(false);
         };

         const handleProceedButtonClick = () => {
           setOpenParent(false);
           setOpenChild(true);
         };

         const handleContinueButtonClick = () => {
           setOpenChild(false);
         };
      

    return (
        <>

            <Modal open={openParent} onClose={() => setOpenParent(false)} className="modal">
                <Box>
                    <div className="modal-description">
                        <Typography variant="h6">Entered Details</Typography>
                        <Typography>Event Name: </Typography>
                        <Typography>Venue: </Typography>
                        <Typography>Event Date: </Typography>
                        <Typography>Start Time: </Typography>
                        <Typography>End Time:</Typography>
                        <Button onClick={handleEditButtonClick}>Edit</Button>
                        <Button onClick={handleProceedButtonClick}>Proceed</Button>
                    </div>
                </Box>
            </Modal>

            <Modal open={openChild} onClose={() => setOpenChild(false)} className="modal">
                <Box>
                    <div className="modal-description">

                        <Button onClick={handleContinueButtonClick}>Continue</Button>
                        <Button onClick={() => setOpenParent(true)} >Cancel</Button>
                    </div>
                </Box>
            </Modal>


        </>

    )
}

export default Modal1