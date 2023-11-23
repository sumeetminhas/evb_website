const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    return res.json("from server")
})

app.listen(8081, () => {
    console.log("listening on port 8081")
})