import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-e9fbe-default-rtdb.firebaseio.com'
});

export default instance;