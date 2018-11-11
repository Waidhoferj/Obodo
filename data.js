let axios = require('axios')

function getData () {
    axios.defaults.baseURL = "https://localmotiv-62d00.firebaseio.com"
    axios.get('/products.json').then((res) => {
        console.log(res.data)

        })
}

module.exports = {getData}