import axios from "axios";
import React from "react";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyBbzrkEPHKxkzrvFDdfT1Ds0WBGDbwqqWA",
        maxResult:5
    }
})