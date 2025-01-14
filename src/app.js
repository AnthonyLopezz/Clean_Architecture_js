const express  = require ("express");
const dotenv = require ("dotenv");
const cors = require ("cors");

const routerApi = require('./routes');

dotenv.config()
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Backend with Node.js - Express + Crud api rest + mysql')
})

routerApi(app);

app.listen(port, ()=>{
    console.log('listening on port', port)
})
