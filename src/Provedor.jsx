import axios from "axios";

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/611f6734eb1d47f49662899dbf814e11/',
    timeout: 10000,
    
  });