import express from "express";
import cors from "cors";
import connect from "./db.js";

const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati

app.use(cors()); // bit ce koristen na svim rutama
app.use(express.json());

app.get("/", (req, res) => res.send("uh"));

// aktivnosti
app.get("/activities", async (req, res) => {
    /* res.json(storage.activities) */
    let db = await connect();

    let cursor = await db.collection("activities").find();
    let results = await cursor.toArray();
    res.json(results);
});
app.post("/activities", async (req, res) => {

    let activity = await req.body;

    delete activity._id;
    activity.addedAt = new Date().getTime();

    /* console.log("activity: ", activity); */

    let db = await connect();
    let cursor = await db.collection("activities").find();
    let flag = null

    await cursor.forEach((el) => {
        /* console.log(el.name == activity.name); */
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
    
    /* res.json(result) */
});
// sessions
app.get("/sessions", async (req, res) => {
    /* res.json(storage.sessions) */
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

    /* console.log(session) */


    /* res.json("ok"); */
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
