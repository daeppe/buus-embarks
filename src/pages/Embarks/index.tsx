import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from '../../components/DatePicker/DatePicker';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { EmbarksContext } from '../../contexts/Embarks/EmbarksContext';
import { EmbarksType } from '../../types/Embarks';
import DataTable from '../../components/DataTable/DataTable';

type selectedDatesType = {
    startDate: Date | null;
    endDate: Date | null;
}

export const Embarks = () => {
    const [selectedDates, setSelectedDates] = useState<selectedDatesType>({} as selectedDatesType);
    const [chosenEmbarks, setChosenEmbarks] = useState<Array<EmbarksType>>([] as Array<EmbarksType>);
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const embark = useContext(EmbarksContext);

    useEffect(() => {
        const isValidDates = embark.validateData(selectedDates.startDate!, selectedDates.endDate!);
        if (isValidDates) {
            const embarksResult = embark.possibleShipments(selectedDates.startDate!, selectedDates.endDate!);
            setChosenEmbarks(embarksResult);
        }
    }, [selectedDates]);

    const handleStartDateTimeSelected = (selectedDate: Date | null) => {
        setSelectedDates({ ...selectedDates, startDate: selectedDate });
    };

    const handleEndDateTimeSelected = (selectedDate: Date | null) => {
        setSelectedDates({ ...selectedDates, endDate: selectedDate });
    };


    const handleLogout = () => {
        auth.logout();
        navigate('/');
        location.reload();
    };
    return (<>
        <h2>Tela Embarks</h2>
        <button onClick={handleLogout}>Logout</button>
        <div>
            <DatePicker onSelectedDate={handleStartDateTimeSelected} />
            <DatePicker onSelectedDate={handleEndDateTimeSelected} />
        </div>
        <div>
            <DataTable chosenEmbarks={chosenEmbarks} />
        </div>
    </>
    );
};