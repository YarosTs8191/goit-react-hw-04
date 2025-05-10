import axios from "axios";

const ACCESS_KEY = "yOBFTviXBs1GJ87QAzLR7akAG72e0fFUzOVTOGLLEiU";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: ACCESS_KEY,
    orientation: "landscape",
    per_page: 12,
  },
});

export const fetchImages = async (query, page = 1) => {
  const response = await instance.get("search/photos", {
    params: {
      query,
      page,
    },
  });

  return response.data;
};
