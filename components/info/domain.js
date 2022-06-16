import React from "react";
import Info from "./info";
import { useTranslation } from 'react-i18next';

export default function DomainInfo({domain}) {
    const { t } = useTranslation();

    return (
        <div>
            <div className="info-cont">
                <Info lable={t("Created")} value={domain.crDate} />
                <Info lable={t("Modified")} value={domain.upDate} />
                <Info lable={t("Expires")} value={domain.exDate} />
            </div>
            <div className="info-cont">
                <Info lable={t("Registrar Name")} value={domain.crDate} />
                <Info lable={t("Registration URL")} value={domain.upDate} />
            </div>
            <div className="info-cont">
                <Info lable={t("Name severs")} value={domain.ns} list/>
            </div>
        </div>
    )
}