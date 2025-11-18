import axios from 'axios';

const  BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://proweb.leoproti.com.br";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getAlunos = async () => {
  const response = await api.get('/alunos');
  return response.data;
};

export const getAlunoById = async (id) => {
  const response = await api.get(`/alunos/${id}`);
  return response.data;
}; 

export default api;