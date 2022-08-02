import React , {useEffect}  from 'react'
import { PayUnit } from "payunitjs";
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


export default function PayUnitModal({show, onClose}){
    const { t } = useTranslation();

    useEffect(() => {
        PayUnit(
            {
              apiUsername: "payunit_sand_izKuWmfjL",
              apiPassword: "cb742602-c9ce-48a6-bcfe-37d45c461f05",
              x_api_key: "ed0697f3e334b6cf7974ab70ae7d4a366ee8e0ee",
              mode: "test",
            },
            {
              return_url: "https://www.google.com/",
              notify_url: "",
              description: "",
              purchaseRef: "",
              total_amount: "100",
              name: "Otang Glen Orock",
              currency: "XAF",
              transaction_id: Date.now(),
            }
        );
    })
    return(
        <Modal
            show={show}
            onHide={onClose}
            size="sm"
            centered
            animation={true}
            className="modal box"
        >
            <Modal.Header closeButton>
                <Modal.Title className="title">
                    {('Payment')}
                </Modal.Title>
            <hr/>
            </Modal.Header>
            <Modal.Body>
                Proceed to payment
            </Modal.Body>
            <Modal.Footer>
                <hr/>
                <div className='action'>
                    <button id="payunit-pay" className='btn'>
                        {("Submit")}
                    </button>
                    <button className='btn btn-danger' onClick={onClose}>
                        {("Cancel")}
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}