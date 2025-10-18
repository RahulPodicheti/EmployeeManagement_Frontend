import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getEmployees = () => axios.get(API_URL);
export const addEmployee = (employee) => axios.post(API_URL, employee);
export const updateEmployee = (id, employee) => axios.put(`${API_URL}/${id}`, employee);
export const patchEmployee = (id, data) => axios.patch(`${API_URL}/${id}`, data);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/${id}`);
