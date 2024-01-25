const express = require('express');
const app = express();
const port = 3000;
const pool = require('./dbConnection');

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/', function (req, res) {

    pool.getConnection(function(err,connection){

        if(err){
            connection.release();
            throw err;
        }

        connection.query('SELECT * from Patients', (err, rows, fields) => {
            if (err) throw err
          
            console.log(rows)

            connection.release();
          })
    })
});

app.listen(port, () => {
    console.log('app is running on port ' + port);
})