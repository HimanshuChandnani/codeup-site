import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ArrowLink } from "../StyledComponents/style";

const FormModal = () => {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <ArrowLink as="button" onClick={() => setLgShow(true)}>
                Register Now!!
            </ArrowLink>
            <Modal size="xl" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header>
                    <Modal.Title id="example-modal-sizes-title-lg">CodeHack Registeration</Modal.Title>
                    <button className="btn btn-danger close btn-close" aria-label="Close" onClick={() => setLgShow(false)} style={{ margin: "1px", paddingLeft: "4px", paddingTop: "0", paddingRight: "4px", paddingBottom: "0" }}>
                        x
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <iframe style={{ width: "100%" }} src="https://docs.google.com/forms/d/e/1FAIpQLScYdkEsTYbx5XFcv2mhwLqTNL9IokyMRv-Q2ln4bbdUdtFv0Q/viewform?vc=0&c=0&w=1&flr=0" frameBorder="0" title="Form for codehack registeration"></iframe>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default FormModal;
