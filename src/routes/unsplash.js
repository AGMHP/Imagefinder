import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:'Client-ID 5fc2f3e73a409f93145eb3ec16dfb04cd0b3c21f7415ca12d909d774ae61b27c'
    }
});