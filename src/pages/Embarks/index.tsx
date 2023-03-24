import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from '../../components/DatePicker/DatePicker';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { EmbarksContext } from '../../contexts/Embarks/EmbarksContext';
import { EmbarksType } from '../../types/Embarks';
import DataTable from '../../components/DataTable/DataTable';
import { EmbarksTable, HeaderBar, SelectedDates } from './styles';
import { Button } from '@mui/material';
import { Loading } from '../../components/Loading/Loading';

type selectedDatesType = {
    startDate: Date | null;
    endDate: Date | null;
}

export const Embarks = () => {
    const [selectedDates, setSelectedDates] = useState<selectedDatesType>({} as selectedDatesType);
    const [chosenEmbarks, setChosenEmbarks] = useState<Array<EmbarksType>>([] as Array<EmbarksType>);
    const [removeLoading, setRemoveLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const embark = useContext(EmbarksContext);

    useEffect(() => {
        if (selectedDates.startDate && selectedDates.endDate) {
            setRemoveLoading(false);
        }
        const isValidDates = embark.validateData(selectedDates.startDate!, selectedDates.endDate!);
        if (isValidDates) {
            const embarksResult = embark.possibleShipments(selectedDates.startDate!, selectedDates.endDate!);
            setChosenEmbarks(embarksResult);
        }
        setTimeout(() => {
            setRemoveLoading(true);
        }, 3000);
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
        <HeaderBar>
            <h2>Tela Embarks</h2>
            <Button onClick={handleLogout} variant="contained" type='submit'>Logout</Button>
        </HeaderBar>

        <SelectedDates>
            <DatePicker onSelectedDate={handleStartDateTimeSelected} />
            <DatePicker onSelectedDate={handleEndDateTimeSelected} />
        </SelectedDates>
        <EmbarksTable>
            {removeLoading ?
                <DataTable chosenEmbarks={chosenEmbarks} /> :
                <Loading />
            }
        </EmbarksTable>
    </>
    );
};