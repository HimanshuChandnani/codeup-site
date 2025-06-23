import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ArrowLink, CodeupButton } from "../StyledComponents/style";
import pdf1 from "../../images/pdf/Training and placement for 2024 & 2025 batch students_page-0001.webp";
import pdf2 from "../../images/pdf/Training and placement for 2024 & 2025 batch students_page-0002.webp";
import pdf3 from "../../images/pdf/Training and placement for 2024 & 2025 batch students_page-0003.webp";
import pdf4 from "../../images/pdf/Training and placement for 2024 & 2025 batch students_page-0004.webp";
import pdf5 from "../../images/pdf/Training and placement for 2024 & 2025 batch students_page-0005.webp";
import pdf6 from "../../images/pdf/Training and placement for 2024 & 2025 batch students_page-0006.webp";

const PdfModal = () => {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <CodeupButton className="button" onClick={() => setLgShow(true)}>
                Know more
            </CodeupButton>
            <Modal size="xl" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header>
                    <Modal.Title id="example-modal-sizes-title-lg">More information</Modal.Title>
                    <button className="btn btn-danger close btn-close" aria-label="Close" onClick={() => setLgShow(false)} style={{ margin: "1px", paddingLeft: "4px", paddingTop: "0", paddingRight: "4px", paddingBottom: "0" }}>
                        x
                    </button>
                </Modal.Header>
                <Modal.Body style={{ overflowY: "scroll" }}>
                    <img src={pdf1} alt="" width="100%" />
                    <img src={pdf2} alt="" width="100%" />
                    <img src={pdf3} alt="" width="100%" />
                    <img src={pdf4} alt="" width="100%" />
                    <img src={pdf5} alt="" width="100%" />
                    <img src={pdf6} alt="" width="100%" />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PdfModal;
