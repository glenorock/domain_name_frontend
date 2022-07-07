import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function DomainDetailsInfoDisplay(props) {
    let title = props.subject
    let body  = []
    if (Array.isArray(props.body)){
        props.body.forEach(ele => {
            body.push(
                <Typography>
                    {ele}
                </Typography>
            )
        })
    } else if (typeof props.body === 'object'){

    }else {
        
        body.push(props.body)
    }
    return (
        <div>
            <Typography variant="h6">
                {title}
            </Typography>
            {body}
        </div>
    );
}