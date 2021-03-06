const process = require('process');
import {Environment} from './model/environment';
  export const environment: Environment = {
    production: true,
    apiUrl: '$BACKEND_API_URL'
  }