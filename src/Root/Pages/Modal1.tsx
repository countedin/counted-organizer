import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import { useState } from "react";
import Modal2 from "./Modal2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";


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

    const [pin, setPin] = useState('');
    const [isValid, setIsValid] = useState(true);


    const handlePinChange = (event: { target: { value: string; }; }) => {
        const input = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
        setPin(input.substring(0, 4)); // Limit input to 4 characters
        setIsValid(true); // Reset validity on change
    };

    const handleContinue = () => {
        if (pin.length !== 4) {
            setIsValid(false);
        } else {
            if (pin === '1234') {
                setModal2(true);
            } else {
                alert('Enter correct pin');
            }
        }

    }


    const handleCancel = () => {
        setPin('');
        setIsValid(true);
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
                        <h1 className="h1txt">Details Preview</h1>
                        <div className="outlet">
                            <div className="description">
                                <h2 className="titletxt">Event Name</h2>
                                <Typography>Innovations in Semiconductor Chip Design, Fabrication, Assembly, Packaging and Testing</Typography>
                            </div>


                            <div className="description">
                                <h2 className="titletxt">Venue</h2>
                                <Typography>A. P. J. Abdul Kalam Seminar Hall</Typography>
                            </div>


                            <div className="description">
                                <h2 className="titletxt">Scheduled Date</h2>
                                <Typography>Jan 12, 2024</Typography>
                            </div>


                            <div className="description">
                                <h2 className="titletxt">Scheduled Time</h2>
                                <Typography>10:00 am to 12:00 pm</Typography>
                            </div>
                            <div className="Buttons">
                                <Button
                                    onClick={handleEdit}
                                    sx={{
                                        color: 'rgba(0, 200, 166, 1)',
                                        '&:hover': {
                                            color: 'rgba(0, 200, 166, 1)',
                                        },
                                        '&:focus': {
                                            color: 'rgba(0, 200, 166, 1)',
                                        },
                                    }}>
                                    Edit
                                </Button>
                                <Button
                                    onClick={handleProceed}
                                    sx={{
                                        color: 'rgba(0, 200, 166, 1)',
                                        '&:hover': {
                                            color: 'rgba(0, 200, 166, 1)',
                                        },
                                        '&:focus': {
                                            color: 'rgba(0, 200, 166, 1)',
                                        },
                                    }}
                                >
                                    Proceed
                                </Button>
                            </div>
                        </div>
                        <Modal
                            open={openChild}
                            className="modal"
                        >
                            <div className="modal-description">
                                <h1 className="h1txt">Enter PIN to continue</h1>
                                <Box>
                                    <div className="pin-input-container">
                                        <div className="pin-dashes">
                                            {[...Array(4)].map((_, index) => (
                                                <div key={index} className="dash">
                                                    {index < pin.length ? pin[index] : ''}
                                                </div>
                                            ))}
                                        </div>
                                        <input
                                            type="text"
                                            className="pin-input"
                                            value={pin}
                                            onChange={handlePinChange}
                                            maxLength={4}
                                        />
                                        {!isValid && (
                                            <div className="error-message">Please enter a 4-digit pin</div>
                                        )}
                                    </div>
                                    <Stack spacing={10} direction="row">
                                        <Button
                                            variant="outlined"
                                            onClick={handleCancel}
                                            sx={{
                                                color: 'rgba(0, 200, 166, 1)',
                                                borderColor: 'rgba(0,0,0,0.1)',    
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            variant="contained"
                                            onClick={handleContinue}
                                            sx={{
                                                color: 'rgba(255, 255, 255, 1)',
                                                backgroundColor: 'rgba(0, 200, 166, 1)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(0, 200, 166, 1)',
                                                },
                                                '&:focus': {
                                                    backgroundColor: 'rgba(0, 200, 166, 1)',
                                                },
                                            }}
                                        >
                                            Continue
                                        </Button>
                                    </Stack>

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