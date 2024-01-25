const express = require('express')
const router = express.Router();
const pool = require('../dbConnection');

router.get('/singlePatient', (req,res) => {
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
    });
})

module.exports = router;