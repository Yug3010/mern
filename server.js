const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

const connectdb = require('./conn/db');

const router = require('./router/route');
const errorMiddleware = require('./middleware/error-mmiddleware');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const contactrouter=require('./router/contactrouter');

app.use('/api/auth', router);
app.use('/api/form',contactrouter);


app.use(errorMiddleware);

connectdb()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at ${port}`);
        });
    })
    .catch((err) => {
        console.error('Error starting server:', err);
    });


