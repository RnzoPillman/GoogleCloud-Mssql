var response = require('../config/response');

function dbconnect() {
    console.log('DINERO')
    //export this function and imported by server.js
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sqlserver',
        password: 'verde',
        database: 'wsdatabase',
        server: '35.232.67.58',
        //host: 'localhost',
        //port: 3306,
        options: {
            enableArithAbort: true,
        }
    };

    function exequery(req, res, query){
        console.log('TUMBS')
        // connect to your database
        sql.connect(config, function (err) {
            if (err){
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else{
                // create Request object
                var request = new sql.Request();

                // query to the database and get the records
                request.query(query, function (err, recordset) {
                    console.log('EXECTUE')
                    if (err){
                        console.log("Error while querying database :- " + err);
                        res.send(err);                    
                    }
                    else{
                        // send records as a response
                        res.send(recordset);
                        //return res.json(response(recordset, err));
                    }
                });
            }
        });
    }
    return {
        exeq:exequery
    }
}

module.exports = dbconnect;
