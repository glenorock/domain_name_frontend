import * as React from 'react';
import { randomCreatedDate, randomUpdatedDate } from '@mui/x-data-grid-generator';

export default function HostList() {
    const initialRows = [
        {
          id: 1,
          name: 'Damien',
          age: 25,
          dateCreated: randomCreatedDate(),
          lastLogin: randomUpdatedDate(),
          isAdmin: true,
          country: 'Spain',
          discount: '',
        },
        {
          id: 2,
          name: 'Nicolas',
          age: 36,
          dateCreated: randomCreatedDate(),
          lastLogin: randomUpdatedDate(),
          isAdmin: false,
          country: 'France',
          discount: '',
        },
        {
          id: 3,
          name: 'Kate',
          age: 19,
          dateCreated: randomCreatedDate(),
          lastLogin: randomUpdatedDate(),
          isAdmin: false,
          country: 'Brazil',
          discount: 'junior',
        },
      ];
      const [tableData,setTableData] = React.useState(initialRows)
      return (
        <div>
        {tableData.map((row) =>{
          return(<div>{JSON.stringify(row)}</div>)
        })}
      </div>
      )
}