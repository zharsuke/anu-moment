const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const mysql = require('mysql')

app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'anu'
})

connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected to the database')
    }
})

app.get('/api', (req, res) => {
    res.send('Api works!')
})

app.get('/api/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            res.send(rows)
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})