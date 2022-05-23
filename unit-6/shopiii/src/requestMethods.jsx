import axios from "axios"


const BASE_URL="https://hypee-1.herokuapp.com/api/"
//const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2Q3ZDdhMzk4Mzk3NTg0OTAzMWFiNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTI3MjY3NjEsImV4cCI6MTY1MzE1ODc2MX0.3rLu9Nea_Ns6WXjLrMR9CvautSUkIqXkbFoCNLWbGHY"

export const publicRequest=axios.create({
    baseURL:BASE_URL,
});

// export const userRequest=axios.create({
//     baseURL:BASE_URL,
//     header:{token:`Bearer ${TOKEN}`}
// })