const express = require('express');
const app = express();
const port = 3000;
const userRoute = require('./routes/user');
app.use('/user', userRoute);

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.listen(port, () => {
    console.log('app is running on port ' + port);
})