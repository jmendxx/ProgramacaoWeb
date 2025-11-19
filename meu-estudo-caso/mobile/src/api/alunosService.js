import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || "https://proweb.leoproti.com.br";

const api = axios.create({
  baseURL: BASE_URL
});

export const getAlunos = async () => {
  const res = await api.get("/alunos");
  return res.data;
};

export const getAlunoById = async (id) => {
  const res = await api.get(`/alunos/${id}`);
  return res.data;
};

export default api;
