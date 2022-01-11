require('dotenv').config()
const axios = require('axios')
axios.defaults.headers.common = {
    'Authorization' : `Bearer ${process.env.REACT_APP_BLOG_API_TOKEN}`
}
module.exports = axios