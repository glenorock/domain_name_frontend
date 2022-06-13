import React from "react";
import Info from "./info";
export default function ContactInfo({data}){
    if(!data){
        data = {}
    }
    return(
        <div className="info-cont">
            {
                Object.keys(data).map((key) =>{
                    console.log(key)
                    return(
                        <Info lable={key} value={data[key]} />
                    )
                })
            }
        </div>
    )
}