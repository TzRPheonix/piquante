const db = require('./db');
const helper = require('../helper');

const config = require('../config');

async function getUser(){
  const rows = await db.query(
    `SELECT * from users`
  );
  const data = helper.emptyOrRows(rows);

  return {
      data
    }
}

async function signup(user){
    const result = await db.query(
      `INSERT INTO users 
      (Email, Password) 
      VALUES 
      ('${user.email}', '${user.password}')`
    );
  
    let message = 'Error in creating user';
  
    if (result.affectedRows) {
      message = 'User created successfully';
    }
  
    return {message};
}

async function login(user){
  const result = await db.query(
    `SELECT IdUser FROM users WHERE Email = '${user.email}' AND Password = '${user.password}'`
  );
  let id = JSON.stringify(result[0])
  let message = 'Erreur de connexion';

  if (result.length != 0) {
    message = 'Connexion id ->'  + id;;
  }

  return {message};
}

module.exports = {
    getUser,
    signup,
    login
}