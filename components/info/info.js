import React from "react";

export default function Info({lable,value}){
    return(
        <div className="info">
            <div className="lable">
                {lable}
            </div>
            <div className="value">
                {value}
            </div>
        </div>
    )
}