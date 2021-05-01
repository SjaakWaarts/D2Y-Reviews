import axios from 'axios';

export default
axios.create({
  baseURL: 'http://$(process.env.VUE_APP_HOST):$(process.env.VUE_APP_PORT)',
  // timeout: 1000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
