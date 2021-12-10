import axios from 'axios';
const baseUrl = `http://${process.env.REACT_APP_URL}`;

const getAll = () => {
    return axios.get(`${baseUrl}/movies`);
}

const createReview = (obj) => {
    return axios.post(`${baseUrl}/movies/movie-create`, obj)
}

const updateReview = (obj) => {
    return axios.put(`${baseUrl}/movies/update-review`, obj)
}

const deleteMovie = (ele) => {
    return axios.delete(`${baseUrl}/movies/movie-delete/${ele}`)
}

const axiosLog = {
    getAll,
    createReview,
    updateReview,
    deleteMovie
}

export default axiosLog;