import axios from 'axios';

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '20810720-72356cc2d71a79f29ee419399';

export async function PixabayAPI(queue, page = 1) {
  const params = {
    url: BASE_URL,
    params: {
      key: API_KEY,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: false,
      q: queue,
      per_page: 12,
    },
  };

  return await axios(params);
}
