const db = require('./db');
const helper = require('../helper');

const config = require('../config');

async function getSauce(){
  const rows = await db.query(
    `SELECT * from sauce`
  );
  const data = helper.emptyOrRows(rows);

  return {
      data
    }
}

async function getSauceId(sauce, id){
  const rows = await db.query(
    `SELECT name from sauce WHERE sauceId = ${id}`
  );
  const data = helper.emptyOrRows(rows);

  return {
      data
    }
}

async function addSauce(sauce){
  const result = await db.query(
    `INSERT INTO sauce 
    (creatorId, name, manufacturer, description, mainPepper, imageUrl, heat, likes, dislikes) 
    VALUES 
    ('${sauce.creatorId}', '${sauce.name}', '${sauce.manufacturer}', '${sauce.description}', '${sauce.mainPepper}, '${sauce.imageUrl}', '${sauce.heat}', '${sauce.likes}', '${sauce.dislikes}')`
  );

  let message = 'Error in creating sauce';

  if (result.affectedRows) {
    message = 'Sauce created successfully';
  }

  return {message};
}

module.exports = {
    getSauce,
    getSauceId,
    addSauce
}