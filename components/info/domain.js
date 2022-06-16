import React from "react";
import Info from "./info";
export default function DomainInfo({domain}) {
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