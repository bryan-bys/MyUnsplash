import axios from "axios";

const accessKey = import.meta.env.VITE_API_KEY;

export const getPhotos = async (query, page = 1) => {
  try {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: query, page: page, per_page: 12 },
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });

    return res.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
