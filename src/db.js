/* let mongo = require("mongodb"); */

import mongo from "mongodb"

let connectionString = process.env.CONNECTION_STRING

// https://stackoverflow.com/questions/41638499/mongodb-returns-undefined

let client = new mongo.MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = null;

export default () => {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(db);
    } else {
      client.connect((err) => {
        if (err) {
          reject("Doslo je do greske: ", err);
        } else {
          console.log("Uspjesno spajanje");
          db = client.db("baza");
          resolve(db);
        }
      });
    }
  });
};
