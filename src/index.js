import dotenv from "dotenv"
dotenv.config( )

import express from "express";
import cors from "cors";
import connect from "./db.js";
import auth from './auth.js'

const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati

app.use(cors()); // bit ce koristen na svim rutama
app.use(express.json());

app.get("/", (req, res) => res.send("!"));



app.post('/users', async (req, res) => {
    let user = req.body
    let id
    console.log(user)
    if( user.password != user.repeatPassword ){
        res.status().json("error")
    }
    try{
        id = await auth.registerUser(user)
    }
    catch( e ){
        res.status(500).json({ error: e.message })
    }
    res.json({ id: id })
})

app.post("/auth", async (req, res) => {
    let user = req.body
    
    try{
        let result = await auth.authenticateUser(user.username, user.password)
        res.json( result )
    } catch( e ){
        res.status(403).json({ error: e.message })
    }
})

/* app.get("/tajna", [auth.verify], (req, res) => {

    res.json({ message: "ovo je tajna" + req.jwt.username })

}) */


// aktivnosti
app.get("/activities", [auth.verify], async (req, res) => {
    let db = await connect();
    let cursor = await db.collection("activities").find();
    let results = await cursor.toArray();
    res.json(results);
});
app.post("/activities", async (req, res) => {

    let activity = await req.body;

    delete activity._id;
    activity.addedAt = new Date().getTime();

    let db = await connect();
    let cursor = await db.collection("activities").find();
    let flag = null

    await cursor.forEach((el) => {
        if (el.name == activity.name) {
            flag = true
            res.json({
                status: "that activity already exists",
            });
        }
    });

    if( !flag ){
        let result = await db.collection("activities").insertOne(activity);
        if (result /* && result.insertedCount == 1 */) {
            res.json(result);
        } else {
            res.json({
                status: "fail",
            });
        }
    }
    
});
// sessions
app.get("/sessions", async (req, res) => {
    let db = await connect();
    let cursor = await db.collection("sessions").find();
    let results = await cursor.toArray();
    res.json(results);
});
app.post("/sessions", async (req, res) => {

    let session = await req.body;
    
    session.date = new Date()
    session.startedAt = new Date().getTime()

    let db = await connect()

    let result = await db.collection('sessions').insertOne(session)

    if( result ){
        res.json(result)
    } else {
        res.json({status: 'failed'})
    }

});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
