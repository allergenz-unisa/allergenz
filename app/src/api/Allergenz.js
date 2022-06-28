import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const getAllRestaurants = async () => {
  try {
    const response = await api.get(`/restaurants`);
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

const searchRestarant = async (param) => {
  try {
    const response = await api.get(`/restaurants?q=${param}`);
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getRestarantById = async (id) => {
  try {
    const response = await api.get(`/restaurants/${id}`);
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getRestarantByName = async (localName) => {
  try {
    const response = await api.get(`/restaurants?localName=${localName}`);
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getRestarantByCategory = async (category) => {
  try {
    const response = await api.get(`/restaurants?Cucina=${category}`);
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getRestarantByCity = async (citta) => {
  try {
    const response = await api.get(`/restaurants/${citta}`);
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

const addNewRestaurant = async (newOne) => {
  try {
    await api.post(`/restaurants`, newOne);
  } catch (e) {
    throw new Error(e.message);
  }
};

const updateRestaurant = async (restaurant) => {
  try {
    await api.put(`/restaurants/${restaurant.id}`, {
      ...restaurant,
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

const getDishById = async (id) => {
  try {
    const response = await api.get(`/restaurants/Menu/${id}`);
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getDishByName = async (name) => {
  try {
    const response = await api.get(`/restaurants/Menu/${name}`);
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

const addNewUser = async (user) => {
  try {
    Object.assign(user, {
      token: Date.now(),
    });
    await api.post(`/users`, user);
    localStorage.setItem("token", user.token);
  } catch (e) {
    throw new Error(e.message);
  }
};

const getUserByLogin = async (login) => {
  try {
    const response = await api.get(
      `/users/?email=${login.email}&password=${login.password}`
    );
    if (response.data.length === 1) {
      console.log(response.data);
      localStorage.setItem("token", response.data[0].token);
      return;
    }
    throw new Error("utente non registrato");
  } catch (e) {
    throw new Error(e.message);
  }
};

const getUserByToken = async () => {
  try {
    const response = await api.get(
      `/users/?token=${localStorage.getItem("token")}`
    );
    return response.data[0];
  } catch (e) {
    throw new Error(e.message);
  }
};

export {
  searchRestarant,
  getAllRestaurants,
  getRestarantById,
  getRestarantByName,
  getRestarantByCategory,
  getRestarantByCity,
  addNewRestaurant,
  updateRestaurant,
  getDishById,
  getDishByName,
  addNewUser,
  getUserByLogin,
  getUserByToken,
};
