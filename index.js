const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
app.use(cors());

app.use(express.json());

app.use(helmet());

app.use(compression())

const aranda =  (req, res) =>{
    
    const urlConItem = req.body;

    console.log(urlConItem);  

    res.status(200).json({
        status: 'recibido',
        data: {urlConItem}
    })
}

app.get('/', aranda)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Webservice arriba", PORT);
  });