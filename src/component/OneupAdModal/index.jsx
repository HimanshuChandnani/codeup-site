import { Modal, Button } from "react-bootstrap";
import { CodeupButton } from "../StyledComponents/style";

const OneupAdModal = ({ showModal, setShowModal }) => {
    return (
        <Modal show={showModal} size="lg" onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Boost Your Skills with Oneup</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center py-4 px-3 px-md-5">
                    {/* <h2 className="mb-5">Challenge Limits, Take Mentorship & Oneup Your Potential</h2> */}
                    <h2 className="mb-3">Apply for top-notch courses on Oneup and advance your learning journey.</h2>
                    {/* <p className="mb-0">
                        Visit:{" "}
                        <a href="https://oneup.codeup.in" target="_blank" rel="noopener noreferrer">
                            https://oneup.codeup.in
                        </a>
                    </p> */}
                </div>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <CodeupButton as="a" href="https://oneup.codeup.in" className="btn" target="_blank" rel="noopener noreferrer">
                    Explore Courses
                </CodeupButton>
            </Modal.Footer>
        </Modal>
    );
};

export default OneupAdModal;
