import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import React from "react";
import { ArrowLeftIcon } from "@mui/x-date-pickers";

interface Modal1Props {
  open: boolean;
  onClose: () => void;
}
interface scopeModalProps {
  scope: string;
}
const Modal1: React.FC<Modal1Props> = ({ open, onClose }) => {
  const localAppID = localStorage.getItem("appUserId");

  const pinRef = React.useRef<HTMLInputElement>(null);

  const [currentModalScope, setCurrentModalScope] = useState<scopeModalProps>({
    scope: "modal1",
  });

  const handleEdit = () => {
    // onClose();
  };

  const handleProceed = () => {
    setCurrentModalScope({
      scope: "proceed",
    });
  };

  const [pin, setPin] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (currentModalScope?.scope === "proceed") {
      // Focus on the PIN input field when the child modal opens
      const pinInput = document.getElementById("pin-input") as HTMLInputElement;
      if (pinInput) {
        pinInput.focus();
      }
    }
  }, [currentModalScope]);

  const handlePinChange = (event: { target: { value: string } }) => {
    const input = event.target.value.replace(/\D/g, ""); // Remove non-digit characters
    setPin(input.substring(0, 4)); // Limit input to 4 characters
    setIsValid(true); // Reset validity on change
  };

  const handleContinue = () => {
    if (pin.length !== 4) {
      setIsValid(false);
    } else {
      if (pin === "1234") {
        setCurrentModalScope({
          scope: "dynamicQR",
        });
      } else {
        alert("Enter correct pin");
      }
    }
  };

  const handleCancel = () => {
    setPin("");
    setIsValid(true);
    setCurrentModalScope({
      scope: "modal1",
    });
  };

  return (
    <>
      <Modal open={open} onClose={onClose} className="modal">
        <div className="bg-white p-8 rounded-md">
          <Box>
            {currentModalScope?.scope === "modal1" && (
              <>
                <h1 className="h1txt">Details Preview</h1>
                <div className="outlet">
                  <div className="description">
                    <h2 className="titletxt">Event Name</h2>
                    <Typography>
                      Innovations in Semiconductor Chip Design, Fabrication,
                      Assembly, Packaging and Testing
                    </Typography>
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
                        color: "rgba(0, 200, 166, 1)",
                        "&:hover": {
                          color: "rgba(0, 200, 166, 1)",
                        },
                        "&:focus": {
                          color: "rgba(0, 200, 166, 1)",
                        },
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={handleProceed}
                      sx={{
                        color: "rgba(0, 200, 166, 1)",
                        "&:hover": {
                          color: "rgba(0, 200, 166, 1)",
                        },
                        "&:focus": {
                          color: "rgba(0, 200, 166, 1)",
                        },
                      }}
                    >
                      Proceed
                    </Button>
                  </div>
                </div>
              </>
            )}

            {/* <Modal open={openChild} className="modal"> */}
            {currentModalScope?.scope === "proceed" && (
              <>
                <div className="flex flex-col gap-4">
                  <div className="">
                    <ArrowLeftIcon className="cursor-pointer" onClick={handleCancel} />
                  </div>
                  <h1 className="text-lg font-semibold text-rgba(51, 51, 102, 1)">
                    Enter PIN to continue
                  </h1>
                  <div className="pin-dashes">
                    {[...Array(4)].map((_, index) => (
                      <div
                        key={index}
                        className="dash"
                        onFocus={() =>
                          pinRef.current?.style.setProperty(
                            "border",
                            "1px solid #00C8A6"
                          )
                        }
                      >
                        {index < pin.length ? pin[index] : ""}
                      </div>
                    ))}
                  </div>
                  <input
                    type="text"
                    id="pin-input"
                    ref={pinRef}
                    className="pin-input"
                    value={pin}
                    onChange={handlePinChange}
                    maxLength={4}
                  />
                  {!isValid && (
                    <div className="error-message">
                      Please enter a 4-digit pin
                    </div>
                  )}
                  <div className="flex justify-end gap-4">
                    {/* <Button
                        variant="outlined"
                        onClick={handleCancel}
                        sx={{
                          color: "rgba(0, 200, 166, 1)",
                          borderColor: "rgba(0,0,0,0.1)",
                        }}
                      >
                        Cancel
                      </Button> */}
                    <Button
                      variant="contained"
                      onClick={handleContinue}
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        backgroundColor: "rgba(0, 200, 166, 1)",
                        "&:hover": {
                          backgroundColor: "rgba(0, 200, 166, 1)",
                        },
                        "&:focus": {
                          backgroundColor: "rgba(0, 200, 166, 1)",
                        },
                      }}
                    >
                      Continue
                    </Button>
                  </div>{" "}
                </div>

                {/* </Modal> */}
              </>
            )}

            {currentModalScope?.scope === "dynamicQR" && <>Dynamic QR</>}
          </Box>
        </div>
      </Modal>
    </>
  );
};

export default Modal1;
