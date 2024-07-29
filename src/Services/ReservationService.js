// src/services/ReservationService.js
import axios from 'axios';

const API_URL = 'http://localhost:8081/api/reservations';

export const getReservations = async () => {
    return await axios.get(API_URL);
};

export const reserveSeat = async (reservation) => {
    return await axios.post(API_URL, reservation);
};