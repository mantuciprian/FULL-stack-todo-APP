const express  = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {Client} = require('pg');
const cors = require('cors')
const app = express();

const client = new Client({
    user:'postgres',
    host:'localhost',
    database: 'todo',
    password: 'ciprian',
    port: '5432'
})

client.connect();

// MW

const logger = (req, res, next) => {
    // client.connect();
    const str = 'SELECT * FROM public."todoList"';
    client.query(str, (err, res) => {
        console.log(err, res.rows)
        //  client.end()
      })
    next();
}
// Headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*'); // '*' for all websites or specified eg:'http://localhost:4200'
     
    res.setHeader('Access-Control-Request-Headers', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(cors());

app.use(logger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')))

// end MW
app.get('/todos', (req, res)=> {
//    res.send('hello')
   let sendData = res;
   const str = 'SELECT * FROM public."todoList"';
   client.query(str, (err, res) => {
       sendData.send(res.rows)
        // client.end()
     })
     
});

app.post('/todos', (req, res)=> {
    let body = req.body;
    if(body.action === undefined) {
        res.send('no data received')
    } else {
        var x;
        body.isDone ?  x = 'true' : x = 'false';
       
        const text = 'INSERT INTO public."todoList"(action, done) VALUES($1, $2) RETURNING *';
        const values = [body.action, x];
        // callback
        client.query(text, values, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0]);
    }
  });
    }
    
    console.log(body.action + ' received ' + body.isDone);
         
    });


    app.put('/todos/status', (req, res)=> {
        let body = req.body;
        if(body.action === undefined) {
            res.send('no data received')
        } else {
            var status;
            body.done ?  status = 'true' : status = 'false';
            const id = body.ID;
            const text = 'UPDATE public."todoList" SET done = ($1) WHERE "ID" = ($2)';
            
            const values = [status,id];
            // callback
            client.query(text, values, (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          console.log(res.rows[0])
        }
      });
        }
        
        console.log(body.ID + ' ' +  body.action + ' ' + body.done + ' status')
   
        });


        app.delete('/todos/delete', (req, res)=> {
            let body = req.body;
            if(body.action === undefined) {
                res.send('no data received')
            } else {
                var status;
                body.done ?  status = 'true' : status = 'false';
                const id = body.ID;
                const text = 'DELETE FROM public."todoList" WHERE "ID" = ($1)';
                
                const values = [id];
                // callback
                client.query(text, values, (err, res) => {
            if (err) {
              console.log(err.stack)
            } else {
              console.log('Data successful deleted')
            }
          });
            };
            
            console.log(body.ID + ' ' +  body.action + ' ' + body.done + ' deleted action')
       
            });

        app.put('/todos/updateAction', (req, res)=> {
        let body = req.body;
        if(body.action === undefined) {
            res.send('no data received')
        } else {
            const id = body.ID;
            const action = body.action;
            const text = 'UPDATE public."todoList" SET action = ($1) WHERE "ID" = ($2)';
            
            const values = [action,id];
            // callback
            client.query(text, values, (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          console.log(res.rows[0]);
          console.log(body.ID + ' ' +  body.action + ' ' + body.done + '  action was succesfull updated')
        }
      });
        }
        
        console.log(body.ID + ' ' +  body.action + ' ' + body.done + '  action was succesfull updated')
   
        });

app.listen(3000, (()=> {
    console.log('server started on port 3000...');
}))