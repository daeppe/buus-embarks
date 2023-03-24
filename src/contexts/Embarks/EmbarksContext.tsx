import { createContext } from 'react';
import { EmbarksType } from '../../types/Embarks';

export type EmbarksContextType = {
    validateData: (startDate: Date, endDate: Date) => boolean
    possibleShipments: (startDate: Date, endDate: Date) => Array<EmbarksType> | []
}

export const EmbarksContext = createContext<EmbarksContextType>(null!);