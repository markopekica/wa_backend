let mongo = require("mongodb");

let connectionString =
  "mongodb+srv://user:user@cluster0.utkpv.mongodb.net/baza?retryWrites=true&w=majority";

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
