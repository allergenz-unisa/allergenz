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

const getRestarantByName = async (localName) => {
    try {
        const response = await restaurants.get(`/restaurants/${localName}`);
        return response.data;
    } catch(e) {
        throw new Error (e.message);
    }
}

const getRestarantByCity = async (citta) => {
    try {
        const response = await restaurants.get(`/restaurants/${citta}`);
        return response.data;
    } catch(e) {
        throw new Error (e.message);
    }
}

const addNewRestaurant = async (newOne) => {
    try {
        await restaurants.post(`/restaurants`, newOne);
    } catch (e) {
        throw new Error(e.message);
    }
}

const updateRestaurant = async (restaurant) => {
    try {
        await restaurants.put(`/restaurants/${restaurant.id}`, {
        ...restaurant
        });
    } catch (e) {
        throw new Error (e.message);
    }
}

const getDishById = async (id) => {
    try {
        const response = await restaurants.get(`/restaurants/Menu/${id}`);
        return response.data;
    } catch(e) {
        throw new Error (e.message);
    }
}

const getDishByName = async (name) => {
    try {
        const response = await restaurants.get(`/restaurants/Menu/${name}`);
        return response.data;
    } catch(e) {
        throw new Error (e.message);
    }
}

export {
    getAllRestaurants,
    getRestarantById,
    getRestarantByName,
    getRestarantByCity,
    addNewRestaurant,
    updateRestaurant,
    getDishById,
    getDishByName
}