import React from 'react';
import { api } from '../../services/api';
import { EmbarksContext } from './EmbarksContext';

export const EmbarksProvider = ({ children }: { children: JSX.Element }) => {
    const validateData = (startDate: Date, endDate: Date) => {
        let output = false;
        if (startDate < new Date()) {
            output = true;
        }
        if (startDate < endDate) {
            output = true;
        }
        return output;
    };

    const possibleShipments = (startDate: Date, endDate: Date) => {
        const chosenEmbarks = api.embarks(startDate, endDate);
        return chosenEmbarks;
    };

    return <EmbarksContext.Provider value={{ validateData, possibleShipments }}>{children}</EmbarksContext.Provider>;
};