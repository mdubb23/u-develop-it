const mysql = require('mysql2')
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express()

//Express middleware
app.use(express.urlencoded({ extend: false }));
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    })
});

// connect to database

const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username,
        user: 'root',
        //your MySQL password
        password: 'Bennythebull23',
        database: 'election'
    },
    console.log('Connected to the election database.')
)

app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});