import { Grid } from '@mui/material';
import React from 'react';

const Booking = ({ booking }) => {
    const { name, time, space } = booking;
    return (
        <Grid item xs={12} sm={6} md={3}>
            <h3>Dept:{name}</h3>
            <h3>Appointment Time:{time}</h3>
            <h3>Total Slot:{space}</h3>
        </Grid>
    );
};

export default Booking;