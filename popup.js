const {getData} = require('./data.js')
const {Product} = require('./model.js')
const algoliasearch = require('algoliasearch')
const client = algoliasearch('T3URAZ0NDB', '426c213d71fafe032db3ed25bf49fd3b');
const index = client.initIndex('products');



