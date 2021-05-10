import axios from 'axios';
import qs from 'qs';

export default
axios.create({
  baseURL: `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}`,
  paramsSerializer: (params) => {
    const s = qs.stringify(params, { arrayFormat: 'repeat' });
    return s;
  },
  // timeout: 1000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
