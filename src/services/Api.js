import axios from "axios";

const ApiKey = "21326977-6af875ec7b89022765e5858f3";

export const getImages = (query = "", page = 1) => {
  const path = `https://pixabay.com/api/?q=${query}&page=${page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(path);
};

export const someFetch = () => {};
