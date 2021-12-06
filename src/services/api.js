import axios from "axios";

const api = axios.create({
  baseURL: "DIGIBEE"
});

export const get = async url => {
  const res = await api.get(url);
  return await res.data;
}

export const post = async (url, body) => {
  const res = await api.post(url, body);
  return await res.data;
}

export const deleteOne = async (url) => {
  const res = await api.delete(url);
  return await res.data;
}

export const update = async (url, body) => {
  const res = await api.put(url, body);
  return await res.data;
}