import express from 'express';
import cors from 'cors'
import storage from './storage.js'

console.log(storage)



const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati

app.use( cors( ) )    // bit ce koristen na svim rutama
app.use( express.json( ) )

app.get('/', (req, res) => res.send('uh'))

// aktivnosti
app.get('/activities', (req, res) => {
    res.json(storage.activities)
})
app.post('/activities', (req, res) => {
    let activity = req.body
    storage.activities.push(activity)
    res.json("ok")
})

app.get('/sessions', (req, res) => {
    res.json(storage.sessions)
})
app.post('/sessions', (req, res) => {
    let session = req.body
    storage.sessions.push( session )
    res.json('ok')
})

app.listen(port, () => console.log(`Slušam na portu ${port}!`))