import axios from 'axios';

const dev = process.env.NODE_ENV === 'development';
const timeout = dev ? 30000 : 12000;

const RequestHandler = axios.create({
  baseURL: `${process.env.env.API_BASE_URL}/api/v1`,
  timeout,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default RequestHandler;
