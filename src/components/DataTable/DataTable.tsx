import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { EmbarksType } from '../../types/Embarks';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


const columns: GridColDef[] = [
    { field: 'route', headerName: 'ROUTE', width: 200 },
    { field: 'car', headerName: 'Car', width: 90 },
    { field: 'driver', headerName: 'Driver', width: 90 },
    {
        field: 'departureTime',
        headerName: 'Departure Time',
        width: 490,
    },
    {
        field: 'travelEstimate',
        headerName: 'Travel Estimate',
        width: 130,
        type: 'number',
    },
];


export default function DataTable({ chosenEmbarks }: { chosenEmbarks: Array<EmbarksType> }) {
    const rows = chosenEmbarks;
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
            />
            <button><CloudDownloadIcon /></button>

        </div>
    );
}