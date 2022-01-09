import mongo from "mongodb"
import connect from "./db"
import bcrypt from "bcrypt"


(async () => {

    let db = await connect()

    await db.collection("users").createIndex({ username: 1 }, { unique: true })

})()


export default {
    async registerUser(userData) {

        let db = await connect()
        
        let doc = {
            username: userData.username,
            password: await bcrypt.hash(userData.password, 8)
        }

        try {
            let result = await db.collection("users").insertOne(doc)
            if( result && result.insertedId ){
                return result.insertedId
            }
        }
        catch(e) {
            if( e.name == "MongoServerError" && e.code == 11000 ){
                console.log("\nERROR\n ", e.name)
                throw new Error("Korisnik već postoji")
            }
            console.error(e)
        }

    }
}