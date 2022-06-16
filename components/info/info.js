import React from "react";
import { useTranslation } from 'react-i18next';

export default function Info({lable,value,list=false}) {
    const { t } = useTranslation();

    return(
        <div className="info">
            <div className="lable">
                {lable}
            </div>
            {
                list ?(
                    <div>
                        {
                            value.map((item,index)=>{
                                return(
                                    <div key={index} className="value">
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </div>  
                ):(
                    <div className="value">
                        {value}
                    </div>
                )
            }
            
        </div>
    )
}