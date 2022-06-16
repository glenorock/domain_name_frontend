import React from "react";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { useTranslation } from 'react-i18next';
export default function RenewDomainModal({domain, onClose}) {
    const [period,setPeriod] = React.useState(1);
    const [price,setPrice] = React.useState(7000);

    const submit = (e) => {
        e.preventDefault();
        alert(`renewal ${period} year for ${price}`);
        onClose(e);
    }
    const { t } = useTranslation();
    
    return(
        <div className='modal box'>
            <div className='modal-body'>
                <Stack spacing={3} direction="column">
                <TextField
                        id="period"
                        value={period}
                        onChange={(event) => {
                            setPeriod(event.target.value);
                            setPrice(event.target.value * 7000);
                        }}
                        fullWidth
                        defaultValue={period}
                        type="number"
                        required
                        label="Period"
                    />
                    <TextField
                        id="price"
                        value={price}
                        fullWidth
                        defaultValue={period}
                        required
                        disabled
                        label="Price"
                    />
                </Stack>
            </div>
            <hr/>
            <div className='action'>
                <div className='btn' onClick={submit}>
                    {t("Renew")}
                </div>
                <div className='btn btn-danger' onClick={onClose}>
                    {t("Cancel")}
                </div>
            </div>
        </div>
    )
}