import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID d2045435330c67949803af5eaa2f13a2d73a4b66398ed0b29eaaa6a58fd90189'  
      }
});