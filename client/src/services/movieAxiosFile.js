import axios from 'axios';
const baseUrl = `http://${process.env.REACT_APP_URL}`;

const getAll = () => {
    return axios.get(`${baseUrl}/api/get`);
}

const createReview = (obj) => {
    return axios.post(`${baseUrl}/api/insert`, obj)
}

const updateReview = (obj) => {
    return axios.put(`${baseUrl}/api/update`, obj)
}

const deleteMovie = (ele) => {
    return axios.delete(`${baseUrl}/api/delete/${ele}`)
}

export default {
    getAll,
    createReview,
    updateReview,
    deleteMovie
};