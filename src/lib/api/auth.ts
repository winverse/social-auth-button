import axios from './apiClient';

export const ping = () => axios.get('/api/v1/auth');

export const social = (provider: 'google' | 'facebook') =>
  axios.get(`/api/v1/auth/social/redirect/${provider}`);
