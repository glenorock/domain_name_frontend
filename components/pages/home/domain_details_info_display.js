import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function DomainDetailsInfoDisplay(props) {
    let title = props.subject
    let body  = []
    props.body.forEach(ele => {
        body.push(
            <Typography>
                {ele}
            </Typography>
        )
    })
    return (
        <div>
            <Typography variant="h6">
                {title}
            </Typography>
            {body}
        </div>
    );
}