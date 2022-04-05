/* eslint-disable camelcase */
const express = require('express');
const classesRoutes = express.Router();

const dbo = require('../db/conn.js');

const ObjectId = require('mongodb').ObjectId;

classesRoutes.route('/').get(function (req, res) {
  let db_connect = dbo.getDb('classesDB');
  db_connect
    .collection('Bows')
    .find({})
    .toArray(function (err, result) {
      err ? console.log(`Error using GET request: ${err}`) : res.json(result);
    });
});

classesRoutes.route('/classes/mages/:id').get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = {_id: ObjectId(req.params.id)};
  db_connect
    .collection('Mages')
    .findOne(myquery, function (err, result) {
      err ? console.log(`Error in using GET request for mages: ${err}`) : res.json(result);
    });
});

module.exports = classesRoutes;