import axios from 'axios';

const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key: 'AIzaSyDVJlTaCKZaecaG2Oo0Z-eiW-L_bDAF0-I'
    }
})

export default request