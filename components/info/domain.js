import React from "react";
import Info from "./info";
import { useTranslation } from 'react-i18next';

export default function DomainInfo({domain}) {
    const { t } = useTranslation();

    return (
        <div>
            <div className="info-cont">
                <Info lable="Created" value={domain.crDate} />
                <Info lable="Modified" value={domain.upDate} />
                <Info lable="Expires" value={domain.exDate} />
            </div>
            <div className="info-cont">
                <Info lable="Registrar Name" value={domain.crDate} />
                <Info lable="Registration URL" value={domain.upDate} />
            </div>
            <div className="info-cont">
                <Info lable="Name severs" value={domain.ns} list/>
            </div>
        </div>
    )
}