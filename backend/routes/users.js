var express = require('express');
var router = express.Router();
var mongoConnection = require('../config/MongoConnection')

/* GET users listing. */
router.post('/', async function(req, res, next) {
  
  // console.log("vfbvfv ",collections)
  const insertedId = await mongoConnection.insertOne('users', { name: 'Alice', age: 30 })
  res.status(201).send({ id: insertedId });
});

module.exports = router;
