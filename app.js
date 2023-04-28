const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendStatus(200);
    res.send('This is a Homepage');
})

app.get('/error', (req, res) => {
    res.sendStatus(403).send({
        message
        : 'This page is Forbidden'
    })

})
app.listen(port, () => console.log(`Listening on port ${port}`));
