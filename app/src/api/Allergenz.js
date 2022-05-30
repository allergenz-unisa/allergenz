import axios from 'axios';

const restaurants = axios.create({
    baseURL: 'http://localhost:3001'
});

const getAllRestaurants = async () => {
    try {
        const response = await restaurants.get(`/restaurants`);
        return response.data;
    } catch(e) {
        throw new Error (e.message);
    }
}

const getRestarantById = async (id) => {
    try {
        const response = await restaurants.get(`/restaurants/${id}`);
        return response.data;
    } catch(e) {
        throw new Error (e.message);
    }
}

export {
    getAllRestaurants,
    getRestarantById
}