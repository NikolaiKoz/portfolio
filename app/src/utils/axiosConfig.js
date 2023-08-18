import axios from 'axios';
import { getBaseURL } from '@/router/api.routes';

// Configura el baseURL predeterminado
axios.defaults.baseURL = getBaseURL();

// Configura el header para solicitudes POST
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;
