import axios from "axios";


export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyBbzrkEPHKxkzrvFDdfT1Ds0WBGDbwqqWA",
        maxResult:5
    }
})