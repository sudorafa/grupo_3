import axios from "axios";

const headers = {
  apikey: 'DDuHO8yqVyyUx4J1nQpNUHAFK7pUJRw3'
}

const api = axios.create({
  baseURL: "https://test.godigibee.io/pipeline/gama/v1",
  headers: headers
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