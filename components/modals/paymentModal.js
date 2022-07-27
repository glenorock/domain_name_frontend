import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Loader from '../Loader';
import cogoToast from 'cogo-toast';
const feeManager = require('../../lib/fee');

export default function PaymentModal({show, onClose, motif, setPaid}){
    const { t } = useTranslation();
    const [data,setData] = useState({
        period:1,
        unitPrice:7,
        phone:"",
    })
    const [status,setStatus] = useState({
        loading: false,
        completed: false,
    })
    const pay = async (event) => {
        event.preventDefault();
        let body =  {
            "amount": data.unitPrice * data.period,
            "from": data.phone,
            "description": motif,
            "external_reference": ""
        }
        setStatus({
            ...status,
            loading: true
        })
        const res = await feeManager.pay(body)
        setStatus({
            ...res,
            loading: false,
            completed: true
        })
        if (res?.status === "FAILED"){
            setPaid(false)
            cogoToast.error("Payment Failed", { position: 'bottom-center' })
        }else {
            setPaid(true)
            cogoToast.success("Payment successful", { position: 'bottom-center' })
        }
    }
    return(
        <Modal
            show={show}
            onHide={onClose}
            size="sm"
            centered
            animation={false}
            className="modal box"
        >
            <form>
                <Modal.Header closeButton>
                    <Modal.Title className="title">
                        {t('Payment')}
                    </Modal.Title>
                <hr/>
                </Modal.Header>
                <Modal.Body>
                    {status.loading?(
                        <>
                            <Loader height={300}/>
                        </>
                    ):(
                        <div>
                            <div className="body">
                                {/* <label htmlFor="period">
                                    {t('Number of Years')}
                                </label>
                                <input
                                    id="period"
                                    required
                                    type='number'
                                    value={data.period}
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            period:e.target.value
                                        })
                                    }}
                                /> */}
                                <label htmlFor="unit">
                                    {t('Fees per year')}
                                </label>
                                <input
                                    id="unit"
                                    required
                                    disabled
                                    value={data.unitPrice}
                                />
                                <label htmlFor="total">
                                    {t('Total Fees')}
                                </label>
                                <input
                                    id="total"
                                    required
                                    value={data.period*data.unitPrice}
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            total:e.target.value
                                        })
                                    }}
                                />
                                <label htmlFor="number">
                                    {t("Payer's phone number")}
                                </label>
                                <input
                                    id="number"
                                    required
                                    value={data.phone}
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            phone:e.target.value
                                        })
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <hr/>
                    <div className='action'>
                        <div className='btn' onClick={pay}>
                            {t("Submit")}
                        </div>
                        <div className='btn btn-danger' onClick={onClose}>
                            {t("Cancel")}
                        </div>
                    </div>
                </Modal.Footer>
            </form>
        </Modal>
    )
}