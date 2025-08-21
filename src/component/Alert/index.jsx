import { Modal, Spinner } from "react-bootstrap";
import { Fragment, useState } from "react";
import { createRoot } from "react-dom/client";
import { CodeupButton } from "../StyledComponents/style";

let root = null;
let updateState = null;

const Alert = ({ show, message, onClose, buttons }) => {
    const isLoading = !message;

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Body className="text-center p-4 d-flex flex-column justify-content-center align-items-center" style={{ minHeight: 200 }}>
                {isLoading ? (
                    <Spinner animation="border" variant="secondary" />
                ) : (
                    <>
                        <div
                            className="h4 mb-4 w-100 justify-content-center"
                            style={{
                                minHeight: 100,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {typeof message === "string"
                                ? message.split("\n").map((line, index) => (
                                      <Fragment key={index}>
                                          {line}
                                          <br />
                                      </Fragment>
                                  ))
                                : message}
                        </div>
                        {buttons ? buttons : <CodeupButton onClick={onClose}>Okay</CodeupButton>}
                    </>
                )}
            </Modal.Body>
        </Modal>
    );
};

const AlertManager = () => {
    const [state, setState] = useState({ show: false, message: null, onClose: null, buttons: null });
    updateState = setState;

    const handleClose = () => {
        setState({ show: false, message: null, onClose: null, buttons: null });
        if (typeof state.onClose === "function") {
            state.onClose();
        }
    };

    return <Alert show={state.show} message={state.message} onClose={handleClose} buttons={state.buttons} />;
};

// Mount once when app starts
export const mountAlertManager = () => {
    if (!root) {
        const container = document.createElement("div");
        document.body.appendChild(container);
        root = createRoot(container);
        root.render(<AlertManager />);
    }
};

// Call this to show or update the alert
export const codeupAlert = (message, onClose, buttons = null) => {
    if (!root || !updateState) {
        console.warn("Alert manager is not mounted. Call mountAlertManager() first.");
        return;
    }

    updateState({ show: true, message, onClose, buttons });
};

codeupAlert.close = () => {
    if (!updateState) return;
    updateState({ show: false, message: null, onClose: null, buttons: null });
};
