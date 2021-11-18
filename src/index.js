import express from 'express';

const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati

app.get('/', (req, res) => res.send('Hellp!'))
app.listen(port, () => console.log(`Slušam na portu ${port}!`))