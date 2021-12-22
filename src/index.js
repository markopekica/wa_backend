import express from 'express';
import cors from 'cors'
import storage from './storage.js'

console.log(storage)



const app = express() // instanciranje aplikacije
app.use(cors( ))    // bit ce koristen na svim rutama
const port = 3000 // port na kojem će web server slušati

app.get('/', (req, res) => res.send('uh'))

app.get('/activities', (req, res) => {
    res.json(storage.activities)
})

app.get('/sessions', (req, res) => {
    res.json(storage.sessions)
})

app.listen(port, () => console.log(`Slušam na portu ${port}!`))